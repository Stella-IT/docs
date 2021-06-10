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
(작성 중)

## Windows VM을 사용 중인 경우, Linux으로 운영체제 교체
서버용 `Linux`의 경우 기본적으로 CLI 환경만 제공을 하고 있기에, 기본적으로 운영체제를 구동하기 위한 오버헤드가 Windows 보다 낮습니다.  

더욱 빠른 성능을 원한다면, Linux로 변경하여, 운영체제에서 사용 하고 있는 자원을 최소화 하는 방법이 있습니다.

