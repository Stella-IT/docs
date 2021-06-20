---
title: Minecraft 서버 성능 최적화하기
description: Minecraft 서버의 성능을 더욱 최적화 하는 방법을 소개합니다.

category: Tutorials/minecraft
---

## Paper 사용
플러그인과의 호환성이 있다면, Paper로 변경 시, 성능 변화를 쉽게 체감하실 수 있습니다.  
Spigot과 1:1 치환이 거의 가능하므로, 변경이 가능하다면, Paper로 변경하는 것을 적극 추천합니다.

## `timings` 를 통한 tick별 함수 호출 내역 조회
(Spigot 계열 (ex. Paper 등))  
`/timings` 명령어를 통해 tick 마다 돌아가는 함수와 해당 기록을 조회해 볼 수 있으며, 렉을 유발하거나, 매 tick 마다 리소스를 낭비하는 플러그인을 찾아내 최적화를 진행 할 수도 있습니다.

## Java 런타임 변경
Java의 경우 버전이 변경되면서 최적화가 개선이 되거나, 로직이 개선이 되는 경우가 있습니다.  
플러그인이나 버킷의 호환성 문제가 없는 경우 나에게 맞는 최적의 런타임으로 변경하는 것을 권장합니다.  

Java 설치 및 런타임 변경 방법은 [여기](/tutorials/minecraft/install-guide/java) 에서 확인이 가능합니다.

## JVM Flag 설정

우리 모두가 손쉽게 접할 수 있는 JVM 종류는 [**Hotspot** (Oracle Hotspot)](https://openjdk.java.net/groups/hotspot/): Oracle Java를 사용하고 있습니다.
이러한 경우에는 Aikar's Flag를 사용할 수 있겠지만, JVM 종류가 만약 [**Eclipse OpenJ9** (IBM J9)](https://www.eclipse.org/openj9/)를 사용하고 있다면, 또 다른 방법으로 접근을 해야됩니다.

### 왜 JVM Flag를 설정해줘야 되나요?

하단에 있는 용어는 해당 문서에서 다뤄질 용어입니다.
GC(Garbage Collection) : 쓰레기 수집기

* 메모리를 효율적으로 관리가 되지 않아서 GC(Garbage Collection)을 임의로 서버에 맞게 JVM Flag를 지정해야 하는 경우
* 기본값 설정으로 인해 과도하게 GC(Garbage Collection)[=쓰레기 수집] 이 이루어지는 경우
등...

잘못된 JVM Flag 설정이나 기본 값으로 인해 서버 TPS에 영향을 끼칠 수 있으며 이는 서버 렉이 발생된다는 것을 의미합니다.

### 왜 HotSpot(JVM)을 사용하나요?

대표적으로 높은 호환성을 이야기할 수 있습니다.
성능과 달리, 호환성이 중요하다면, HotSpot(JVM)을 사용하시는 것이 좋습니다.

#### 그렇다면 HotSpot(JVM)을 사용하는 경우 어떻게 접근하는게 좋을까요?

보통 Paper Spigot를 사용하는 환경에서 Timings 보고서를 봤을 때, Aikar's Flag를 적용하라는 메시지를 보신 적이 있으실 껍니다.

만약 Java 8 이상, 버전 1.8 이상 일 경우, Aikar's Flag를 사용할 수 있습니다.

아래에 있는 JVM Flag는 Aikar's Flag입니다.

Aikar's Flag는 [여기](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/)를 참고하여, 설정하실 수 있습니다.

### 왜 OpenJ9(JVM)을 사용하나요?

HotSpot(JVM)에 비해, 속도가 빠르며 메모리를 적게 사용하며, 그외 다른 장점도 존재합니다.

만약 HotSpot(JVM) 환경이고, 많은 청크 로드가 필요로 한 서버를 운영을 한다면,
OpenJ9(JVM) 환경으로 변경함으로써, 컴퓨터 자원(CPU 사용량과 메모리 사용량) 소모를 줄이는데 도움이 될 것입니다.

다시 정리를 한다면, 아래와 같은 이유를 뽑아볼 수 있습니다.

* 사용 중이지 않는 쓰레기 정리(Idle garbage collection): 서버가 만약 유후 상태(Idle)일 떄, OpenJ9는 성능에 부정적인 영향을 주지 않고 전체 쓰레기 정리를 할 수 있습니다.
* 공유 클래스와 사전 컴파일(Shared classes and ahead-of-time compilation)은 
* HotSpot(JVM)에 비해 낮은 메모리 사용량.
* 대부분의 경우 OpenJ9를 사용하면 사용 중인 플러그인이 "작동" 합니다.

#### 그렇다면 OpenJ9(JVM)을 사용하는 경우 어떻게 접근하는게 좋을까요?

HotSpot이 아닌 OpenJ9을 사용해야 하는 몇 가지 이유가 있으며, OpenJ9와 맞는 Minecraft GC(Garbage Collection) 설정으로 전환할 수 있습니다.

이 설정으로 인해 짧은 (일반적으로 1~5ms) GGC(Garbage Collection) 일시 중지가 발생하며, 이는 매우 좋은 것을 의미합니다.

메모리 설정은 메모리 사용량에 따라 조정해야 하지만 전체 프로세스를 처리하는 셀 스크립트를 제공하고 있습니다.

```
#!/bin/bash

#
# Properly tunes a Minecraft server to run efficiently under the
# OpenJ9 (https://www.eclipse.org/openj9) JVM.
#
# Licensed under the MIT license.
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

##### 메모리 크기 조정 (힙 크기)

``-Xms``와 ``-Xmx``는 HotSpot(JVM)을 사용하든 OpenJ9를 사용하든 이는 동일한 값으로 설정해야합니다.

OpenJ9는 운영체제에서 더 많은 메모리를 요청하는 데 상당히 그대로 메모리 유지하려는 경향이 있기 때문에 이러한 설정들은 매우 중요합니다.

메모리(힙)이 할당을 충족하기에 충분하지 않을 때 OpenJ9는 먼저 공격적인 GC(Garbage Colletion)을 선호하며, 상당한 양의 메모리를 확보할 수 없는 경우에만 운영체제에서 더 많은 것을 요청합니다. 빈번한 GC(Garbage Collection)[=쓰레기 수집] 일시 중지로 인해 서버 성능이 저하되기 때문에 좋지 않습니다.

그렇다면, 우리가 사용해야될 메모리 크기(힙 크기)를 결정해야합니다.
제일 이상적인 방법은 많이 할당하는 것이지만, 운영 체제와 JVM의 공존을 위해서 충분한 공간을 남겨두는 것이 좋습니다.
그렇지 않으면 운영 체제가 서버를 종료하여 메모리를 확보할 수 있습니다.
예를 들어, 4GB 상품을 사용한다면, 운영체제와 JVM이 같이 공존할 수 있도록 2-3GB 범위를 유지해야합니다.

##### OpenJ9에서 제공하는 GC(Garbage Collection) 정책 선택하기
OpenJ9는 5가지의 GC(Garbage Collection) 정책을 제공하고 있습니다.

* gencon: OpenJ9의 기본 GC 정책입니다. 이 정책은 Java Heap을 nursery 및 tenured 공간으로 나누며, 모든 객체는 처음에 nursery에 할당됩니다.
개체가 nursery에 있는 동안 일정 수의 GC에 의한 청소에서 살아남는다면, 개체가 가득 차있을 때만 청소되는 ``tenured 공간``으로 이동됩니다. 
* balanced: 해당 정책은 HotSpot G1 GC(Garbage Collection)와 가장 가까운 정책입니다. Heap(힙)을 지역으로 분할하며, 각 Regions(지역)은 개별적으로 관리되고 쓰레기 수집이 이루어집니다.
* optthruput: 해당 정책은 ``optavgpause`` 정책과 유사하지만, 동시에 표시하지 않으므로 더 긴 일시 중지가 발생하기 때문에 Minecraft 서버에는 적합하지 않습니다.
* optavgpause: 해당 정책은 일시 중지 시간을 최소화하는 것을 목표로 하는 완전 동시 표시 및 GC(Garbage Collection) 입니다. 그러나 대부분 매우 큰 메모리 할당할 경우에만 적합합니다.
* metronome: 해당 정책은 AIX 및 x64 linux에서만 사용 가능한 정책입니다. 정확한 응답 시간을 보장하기 위해 GC 일시 중지 시간을 최소화하는 데 초점이 맞추는 것이 흥미를 가져다주지만, Minecraft 서버에는 해당 정책은 필요하지 않습니다.

Minecraft 1.12.2 버전 이하의 경우 정답은 기본 gencon 정책이였지만, 1.13 이상에서부터 gencon가 GC(Garbage Collection) 하위 시스템에 대한 부담이 심하게 증가하여, 서버에 적합하지 않은 것으로 확인되었고, balanced 정책은 다음 최고입니다!

만약 GC(Garbage Collection) 정책을 변경하고 싶다면, JVM Flags 중 아래를 변경하면 됩니다. ``-Xgcpolicy:balanced``

##### Nursery 크기 조정

이제 원하는 GC 정책을 선택하고 메모리 크기를 조정했으므로, GC(Garbage Collection)의 동작을 조정해야합니다.

Nursery 크기는 Minecraft 성능을 향상시키는데 핵심입니다.
기본적으로 -Xmns는 -Xms의 25%이고 -Xmnx는 -Xmx의 25%이며, Xms와 Xmx를 같은 값으로 설정합니다.

이는 기본적으로 Nursery이 성장하지 않음을 이야기합니다.
Minecraft는 수명이 매우 짧은 개체를 많이 할당하는 경향이 있으므로 매우 빈번한 GC(Garbage Collection)이 발생하고 쓰레기 수를 더 자주 유지하여 서버 성능을 저하시킵니다.

대신 -Xmns를 -Xmx의 25%로, -Xmnx를 -Xmx의 40%로 설정해야 합니다. 이를 통해 OpenJ9은 필요할 때 Nursery을 확장할 수 있으며 마인크래프트 서버에서보다 현실적인 Nursery 크기입니다.

##### 명시적 GC 비활성화

``-Xdisableexplicitgc`` 이 Flag는 GC(Garbage Collection)가 필요하지 않을 때 수집하도록 요청하여 스마트하다고 생각하는 플러그인으로부터 우리를 보호하고 나중에 실제로 전체 GC 주기를 더 가깝게 함으로써 서버 성능을 해칠 수 있습니다.

* 자세한 사항에 대해서는 [여기](https://steinborn.me/posts/tuning-minecraft-openj9/)에서 확인할 수 있습니다.

##### 변경할 기타 설정
스텔라 IT의 가상서버 또는 이외 일종의 클라우드 환경을 사용하는 경우, ``-Xtune:virtualized`` 플래그를 추가해야합니다.
CPU 및 메모리 사용량을 줄이기 위해서 OpenJ9을 조정합니다.

## Windows VM을 사용 중인 경우, Linux으로 운영체제 교체
서버용 `Linux`의 경우 기본적으로 CLI 환경만 제공을 하고 있기에, 기본적으로 운영체제를 구동하기 위한 오버헤드가 Windows 보다 낮습니다.  

더욱 빠른 성능을 원한다면, Linux로 변경하여, 운영체제에서 사용 하고 있는 자원을 최소화 하는 방법이 있습니다.

