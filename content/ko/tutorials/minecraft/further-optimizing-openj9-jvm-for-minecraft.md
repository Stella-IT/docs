---
title: OpenJ9 JVM에서 Minecraft 서버 성능 더 최적화하기
description: OpenJ9 만으로도 빨라지지만, 더 빠르게 만들어 봅시다.

category: Stella IT Console/Minecraft
---

## 선 할당된 메모리 사이즈 조정하기
Minecraft는 메모리를 빠르게 할당하고 빠르게 버리는 게임입니다. 수명이 짧은 변수들이 많은 편이죠.  
OpenJ9 런타임에서는 이를 위해 `Nursery` 공간을 런타임에서 갓 할당된 변수들을 저장하기 위해 따로 분리해 뒀는 데요, 이 공간을 벗어날 경우, GC가 호출되며, Java에서 돌아가는 모든 쓰레드가 멈추는 현상이 발생합니다. `Nursery` 공간을 미리 GC가 호출되는 횟수를 줄이면, 서버가 멈추는 현상이 줄어서 더욱 쾌적하게 서버를 즐길 수 있게 되겠죠.  

대부분 실제 가용가능한 최소 메모리의 1/4에서 실제 가용가능한 최대 메모리의 2/5까지를 이 `Nursery` 공간에 할당하는 것을 권장합니다.  

예를 들어, 사용 가능한 Heap 메모리 공간이 `2048MB` ~ `4096MB` 라면 (`-Xms2048M -Xmx4096M`), `Nursery` 공간을 **512MB** ~ **1638MB** 로 잡는 것을 권장합니다.  
  
이 경우, flag는 다음과 같이 입력해 주세요: `-Xmns512M -Xmnx1638M`

## Garbage Collector 정책 바꾸기
### 1.12.2 이하 서버
OpenJ9에서 기본으로 제공하는 `gencon` 정책을 사용하는 것을 권장합니다. 특히 위에서 명시한 `Nursery` 선 할당 시스템도 미리 사용하면 더욱 속도를 향상할 수 있습니다.

gencon은 기본으로 사용되지만, 강제하려면, flag를 다음과 같이 입력해 주세요: `-Xgcpolicy:gencon`

### 1.13 이상
1.13 이후로 서버의 부하가 커지면서, Garbage Collector가 해야 하는 일도 많아졌습니다.  
이 경우, `balanced` 정책을 사용하는 것을 권장합니다.

적용하려면, flag를 다음과 같이 입력해 주세요: `-Xgcpolicy:balanced`

## Garbage Collector 강제 호출 비활성화 하기 (선택)
Java에서는 비권장되는 기능이지만, `System.GC` 를 호출해서 Garbage Collector를 강제 호출할 수 있습니다. 하지만, Garbage Collector를 호출하면 서버가 일시적으로 멈추기 때문에, 서버가 멈추는 현상이 발생하고 TPS가 뚝 떨어지게 되죠. 몇몇 플러그인들이 이걸 사용하는 경우가 있는 데, 이게 렉 원인입니다. 플러그인이 메모리를 왕창 써 `Out of Memory` 가 발생하는 것이 아니라면 비활성화 하는 것을 권장합니다.

적용하려면 다음 flag를 추가합니다: `-Xdisableexplicitgc`

## JVM을 가상서버에 최적화 하기
OpenJ9은 CPU가 Hypervisor에게서 할당 받는 가상서버에서 구동을 원활하게 하기 위해 Just-In-Time 컴파일러가 재 컴파일 하는 것을 최대한 막아서더록 유도하고, 메모리 I/O를 최소화 하도록 변경합니다. 단 상대적으로 플러그인 등에서 사용하기 위한 CPU 처리 속도가 다소 느려질 수 있습니다.  

(만약 이 플래그를 적용 후 렉이 더 심해졌다면, 적용을 취소하세요.)  
적용하려면 다음 flag를 추가합니다: `-Xtune:virtualized`

## 자동 설정 스크립트

### Windows
```bat
@echo off

set /a HEAP_SIZE=4096
set /a NURSERY_MIN=%HEAP_SIZE%/4
set /a NURSERY_MAX=%HEAP_SIZE%/5*2

java -Xms%HEAPSIZE%M -Xmx%HEAPSIZE%M -Xmns%NURSERY_MIN%M -Xmnx%NURSERY_MIN%M -Xgcpolicy:balanced -Xdisableexplicitgc -jar paperclip.jar
```

### Linux

```sh
#!/bin/bash

#
# Properly tunes a Minecraft server to run efficiently under the
# OpenJ9 (https://www.eclipse.org/openj9) JVM.
#
# Licensed under the MIT license.
# Original author: https://steinborn.me/posts/tuning-minecraft-openj9/
#

## BEGIN CONFIGURATION

# HEAP_SIZE: 할당할 메모리 (in MB) 입니다.
#            서버에 기본 적으로 4096MB으로 설정되어 있습니다.
HEAP_SIZE=4096

# JAR_NAME:  이것은 당신의 서버 버킷(.jar) 파일명을 지정하는 것입니다.
#            기본은 "paperclip.jar"입니다.
#
#            Side note: 만약 Paper Spigot을 사용하지 않는 경우 (http://papermc.io),
#            또는 파일 명이 다른 경우 변경해야합니다.
JAR_NAME=paperclip.jar

## END CONFIGURATION -- 이 라인 아래의 어떤 것도 건들지 마세요!

## BEGIN SCRIPT

# Compute the nursery size.
NURSERY_MINIMUM=$(($HEAP_SIZE / 4))
NURSERY_MAXIMUM=$(($HEAP_SIZE * 2 / 5))

# Launch the server.
CMD="java -Xms${HEAP_SIZE}M -Xmx${HEAP_SIZE}M -Xmns${NURSERY_MINIMUM}M -Xmnx${NURSERY_MAXIMUM}M -Xgcpolicy:balanced -Xdisableexplicitgc -jar ${JAR_NAME}"
echo "launching server with command line: ${CMD}"
${CMD}

## END SCRIPT
```
