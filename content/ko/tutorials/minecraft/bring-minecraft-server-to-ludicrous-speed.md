---
title: Minecraft 서버 성능 최적화하기
description: Minecraft 서버의 성능을 더욱 최적화 하는 방법을 소개합니다.

category: Tutorials/minecraft
---
이 문서에서는 Minecraft의 성능을 최적화하기 위한 꿀팁들을 소개합니다.  
`Is Server Overloaded` 와 같은 메세지가 뜬다면 하나씩 적용해 보는 것을 추천드려요.  


## Paper 사용
플러그인이 Paper와 호환 된다면, Paper로 바꾸는 것을 추천드려요.  
Spigot을 사용하고 계신다면, 버킷 교체만으로 성능을 끌어올릴 수 있는 최고의 방법이니, 바꿀수 있다면, Paper로 변경하는 것을 적극 추천합니다.

## `timings` 를 통한 tick별 함수 호출 내역 조회
(Spigot 계열 (ex. Paper 등)) 에서 지원하는 기능입니다.  
`/timings` 명령어를 통해 tick 마다 돌아가는 함수등을 통해, 어느 플러그인이나 작업이 렉을 유발하고 있는지 찾아내 최적화를 진행 할 수도 있습니다.  

만약 어렵다면, 주변의 Java 개발자에게 분석을 요청해 보는 것도 방법이예요!  

## Java 업그레이드 및 JVM 변경
Java의 경우 버전이 변경되면서 최적화가 개선이 되거나, 로직이 개선이 되는 경우가 있습니다.  
플러그인이나 버킷의 호환성 문제가 없는 경우 나에게 맞는 최적의 런타임으로 변경하는 것을 권장합니다.  

Java 설치 및 런타임 변경 방법은 [여기](/tutorials/minecraft/install-guide/java) 에서 확인이 가능합니다.

혹시 Hotspot 기반의 JVM을 사용 중이라면, OpenJ9으로 JVM을 변경해 보는 것도 좋은 방법이예요. (플러그인 호환성 문제가 발생할 수 있으니, 바꾸기 전에 백업 하는 것을 추천드려요)

## JVM Flag 설정

우리 모두가 손쉽게 접할 수 있는 JVM 종류는 [**Hotspot** (Oracle Hotspot)](https://openjdk.java.net/groups/hotspot/): Oracle Java를 사용하고 있습니다.
이러한 경우에는 Aikar's Flag를 사용할 수 있겠지만, JVM 종류가 만약 [**Eclipse OpenJ9** (IBM J9)](https://www.eclipse.org/openj9/)를 사용하고 있다면, 또 다른 방법으로 접근을 해야됩니다.

### 왜 JVM Flag를 설정해줘야 되나요?

마인크래프트 특성상 메모리를 많이 사용하기에, Garbage Collector 에 대한 설정을 진행하면, GC가 훨씬 원활하게 작동하여, 서버가 더욱 잘 작동하게 하기 위하여 JVM Flag를 설정합니다.  

이 설정은 JVM의 종류 (예. Hotspot, OpenJ9) 별로 차이가 나므로, 아래 내용을 확인해 주세요
### JVM Flag: Hotspot JVM

Paper를 사용하는 경우 `/timings` 에서 표기되는 `Aikar's Flag` 가 가장 유명합니다.  
(필수 선행 조건: Java의 버전이 8 이상 이어야 합니다.)  

아래에 있는 JVM Flag는 Aikar's Flag입니다.  
```
java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paperclip.jar nogui
```
  
위에 표기된 플래그는 10GB 메모리를 기준으로 작성되었습니다. 만약 사용할 수 있는 메모리가 더 적다면, `-Xms10G`와 `-Xmx10G` 부분을 가용 가능한 메모리에 맞춰 수정하시는 것을 권장 드려요!  

출처: [https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/](https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/)

### JVM Flag: OpenJ9

OpenJ9을 사용하는 경우, Minecraft에 적합하도록 Garbage Collector를 수정 하는 것 외에, 환경에 따라 사용할 수 있는 JVM 설정 플래그가 추가로 제공됩니다.  

OpenJ9에서 할 수 있는 최적화의 경우, 이 [문서](/faq/tutorials/further-optimizing-openj9-jvm-for-minecraft)를 참고하세요.

## Windows VM을 사용 중인 경우, Linux으로 운영체제 교체
서버용 `Linux`의 경우 기본적으로 CLI 환경만 제공을 하고 있기에, 기본적으로 운영체제를 구동하기 위한 오버헤드가 Windows 보다 낮습니다.  

더욱 빠른 성능을 원한다면, Linux로 변경하여, 운영체제에서 사용 하고 있는 자원을 최소화 하는 방법이 있습니다.

