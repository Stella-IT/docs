---
title: 서버는 어떻게 열어야 하나요?
description: 마인크래프트 서버를 시작해 볼까요?

category: Tutorials/minecraft
---
본 가이드는 Minecraft Java Edition 서버를 여는 것을 기준으로 설명 되어있습니다.  
본인이 서버를 열고자 하는 Edition을 알 수 없는 경우, 아래 *Minecraft 에서의 Edition 이란?* 을 확인해 주세요.

## 서버 시작하기
Minecraft 서버를 여시려는 여러분을 진심으로 환영합니다.  
이 가이드는 여러분께서 서버를 쉽게 열 수 있도록 하기 위하여 작성되었습니다.

### Minecraft 에서의 Edition 이란?
지난 2014년, Microsoft는 Minecraft의 개발사 Mojang Studios를 인수하며, 기존의 `Minecraft`와 `Mincraft: Pocket Edition`의 네이밍 방식을 개편하였습니다.  
기존 Java 기반의 Minecraft의 이름은 `Minecraft: Java Edition`,  
모바일 환경 (그리고 현재, 콘솔 (게임기))에서 구동되는 C++ 기반의 Minecraft를 `Minecraft: Bedrock Edition` 으로 분기하여 관리 하고 있습니다.  

<alert type="info">
데스크탑 환경에서 돌아가지만, Bedrock Edition 기반인 Minecraft도 있습니다.<br>
<b>Minecraft: Windows 10 Edition</b>, <b>Minecraft: Education Edition</b>이 다음에 속합니다.
</alert>

본 문서에서는 Minecraft: Java Edition의 서버를 여는 것을 다룹니다.

<alert type="warning">
Stella IT Cloud의 인프라의 경우, <b>Minecraft: Bedrock Edition</b>과 현재는 호환되지 않습니다.<br>
자세한 정보는 <a href="/faq/console/no-purpose#호환되지-않는-프로그램">이 링크</a>를 참고하여 주세요.
</alert>

## 서버 종류알기
`Minecraft: Java Edition`은 Minecraft의 초기부터 모드 커뮤니티와 함께해 왔기에, 서버 구동을 위한 프로그램을 선택하실 수 있습니다.  
원하시는 서버 종류를 선택하고

## Minecraft Realms for Java
Minecraft 와 직접 연동된 멀티플레이어 서버 구축 방법입니다. [접속](https://www.minecraft.net/ko-kr/realms-for-java)  
9,440원/월에 빠른 서버 구축이 가능합니다.  
  
-> 해당 서버 구축의 경우 Microsoft에서 자동으로 구축하여 주므로, 접속 링크를 통해 결제를 진행하세요.  

**장점**
* Minecraft와 직접 연동되어, Minecraft Client와의 최고의 연동성을 자랑함.
* 결제 후 바로 생성되므로, 빠른 서버 설정이 가능함.

**단점**
* 바닐라 마인크래프트 그 이상으로의 확장이 불가능 함.
* 플레이 인원수가 10명을 넘을 수 없음.

## Vanilla
Mojang 에서 공식적으로 배포하는 Minecraft 서버 구동용 프로그램입니다.  
마인크래프트 런처내의 버전 페이지에서 서버 구동용 JAR 파일을 내려받아 사용합니다.  

**장점**
* 타 서버 구동용 프로그램에 비해 빠르게 바닐라 환경의 마인크래프트를 시작해 구동할 수 있음.
* Mojang Studios에서 공식적으로 제공하는 Minecraft 서버 구동 프로그램

**단점**
* 바닐라 마인크래프트 그 이상으로의 확장이 불가능 함.
* 서버 환경을 직접 구축해야 함.

### CraftBukkit
가장 많이 쓰였*었*던 커스터마이징 가능한 Minecraft 서버 구동용 프로그램입니다.

**장점**
* 구버전의 Minecraft Plugins들이 대부분 Craftbukkit을 대상으로 개발되어있음.
* 1.8 이전의 Minecraft 버전들을 지원함.
* 플러그인을 통해 게임 확장시, 서버 측에서 모든 내용을 처리하기에, 클라이언트에서 따로 별개의 프로그램을 설치할 필요 없이 Vanilla Minecraft 그대로 접속이 가능함.

**단점**
* Spigot API 등 상대적으로 최신 API를 사용하는 플러그인과 호환성이 좋지 않음.
* Mojang의 파일을 직접 재배포 할 수 없기에 SpigotMC의 `BuildTools.jar` 를 이용하여 빌드 하여야 함. [DMCA Takedown Notice](https://web.archive.org/web/20150206000441/http://dl.bukkit.org/dmca/notification.txt)

### SpigotMC
CraftBukkit의 Bukkit API와 뛰어난 호환성을 제공해 아직까지도 잘 활용되고 있는 Minecraft 서버 구동용 프로그램.

**장점**
* Craftbukkit 대상으로 개발된 플러그인과 뛰어난 호환성을 자랑함.
* 플러그인을 통해 게임 확장시, 서버 측에서 모든 내용을 처리하기에, 클라이언트에서 따로 별개의 프로그램을 설치할 필요 없이 Vanilla Minecraft 그대로 접속이 가능함.

**단점**
* Mojang의 파일을 직접 재배포 할 수 없기에 SpigotMC의 `BuildTools.jar` 를 이용하여 빌드 하여야 함. [DMCA Takedown Notice](https://web.archive.org/web/20150206000441/http://dl.bukkit.org/dmca/notification.txt)

### Paper
SpigotMC 기반으로 개발된 속도가 매우 빠른 Minecraft 서버 구동용 프로그램

**장점**
* SpigotMC와의 플러그인 호환성을 제공함
* 속도가 굉장히 빠름.
* SpigotMC의 빌드 툴인 `BuildTools.jar`를 버킷 구동용 jar 파일 내에서 기본적으로 제공하여, 초기 설정이 훨씬 용이함.

**단점**
* 일부 플러그인과의 호환성 문제가 있음.

