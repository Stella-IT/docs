---
title: 어떤 버킷이 존재하나요?
description: 어떤 버킷이 있는지 알아볼까요?

category: Tutorials/minecraft
---
### Vanilla
Mojang 에서 공식적으로 배포하는 Minecraft 서버 구동용 프로그램입니다.  
마인크래프트 런처내의 버전 페이지에서 서버 구동용 JAR 파일을 내려받아 사용합니다.  

**장점**
* 타 서버 구동용 프로그램에 비해 빠르게 바닐라 환경의 마인크래프트를 시작해 구동할 수 있음.
* Mojang Studios에서 공식적으로 제공하는 Minecraft 서버 구동 프로그램

**단점**
* 바닐라 마인크래프트 그 이상으로의 확장이 불가능 함.
* 서버 환경을 직접 구축해야 함.

[설정 방법](/tutorials/minecraft/install-guide/vanilla)

### CraftBukkit
가장 많이 쓰였었던 커스터마이징 가능한 Minecraft 서버 구동용 프로그램입니다.  
[공식 홈페이지](https://bukkit.org)  

**장점**
* 구버전의 Minecraft Plugins들이 대부분 Craftbukkit을 대상으로 개발되어있음.
* 1.8 이전의 Minecraft 버전들을 지원함.
* 플러그인을 통해 게임 확장시, 서버 측에서 모든 내용을 처리하기에, 클라이언트에서 따로 별개의 프로그램을 설치할 필요 없이 Vanilla Minecraft 그대로 접속이 가능함.
* Vanilla에 비해 다수의 코드 최적화가 적용 되어있음.

**단점**
* Spigot API 등 상대적으로 최신 API를 사용하는 플러그인과 호환성이 좋지 않음.
* Mojang의 파일을 직접 재배포 할 수 없기에 [Spigot](#spigot)의 `BuildTools.jar` 를 이용하여 빌드 하여야 함. [DMCA Takedown Notice](https://web.archive.org/web/20150206000441/http://dl.bukkit.org/dmca/notification.txt)

[설정 방법](/tutorials/minecraft/install-guide/bukkit)

### Spigot
[CraftBukkit](#craftbukkit)의 Bukkit API와 뛰어난 호환성을 제공해 아직까지도 잘 활용되고 있는 Minecraft 서버 구동용 프로그램.  
[공식 홈페이지](https://spigotmc.org)  

**장점**
* [CraftBukkit](#craftbukkit) 대상으로 개발된 플러그인과 뛰어난 호환성을 자랑함.
* 플러그인을 통해 게임 확장시, 서버 측에서 모든 내용을 처리하기에, 클라이언트에서 따로 별개의 프로그램을 설치할 필요 없이 Vanilla Minecraft 그대로 접속이 가능함.

**단점**
* Mojang의 파일을 직접 재배포 할 수 없기에 [Spigot](#spigot)의 `BuildTools.jar` 를 이용하여 빌드 하여야 함. [DMCA Takedown Notice](https://web.archive.org/web/20150206000441/http://dl.bukkit.org/dmca/notification.txt)

[설정 방법](/tutorials/minecraft/install-guide/spigot)

### Paper
[Spigot](#spigot) 기반으로 개발된 속도가 매우 빠른 Minecraft 서버 구동용 프로그램.  
[공식 홈페이지](https://papermc.io)  

**장점**
* [Spigot](#spigot)와의 플러그인 호환성을 제공함
* 속도가 굉장히 빠름.
* [Spigot](#spigot)의 빌드 툴인 `BuildTools.jar`와 별개로 `paperclip.jar`에서 완전히 자동으로 패칭하기 때문에, 초기 설정이 훨씬 용이함.

**단점**
* 일부 플러그인과의 호환성 문제가 있음.

[설정 방법](/tutorials/minecraft/install-guide/paper)

### Tuinity
[Paper](#paper) 기반으로 개발된 Minecraft 서버  
[GitHub](https://github.com/Tuinity/Tuinity)

**장점**
* [Spigot](#spigot)와의 플러그인 호환성을 제공함
* 속도가 굉장히 빠름.
* [Spigot](#spigot)의 빌드 툴인 `BuildTools.jar`와 별개로 JAR 파일에서 완전히 자동으로 패칭하기 때문에, 초기 설정이 훨씬 용이함.
* [Paper](#paper)보다 더욱 개선된 조명 렌더

**단점**
* 일부 플러그인과의 호환성 문제가 있음.

### Yatopia
[Tuinity](#tuinity) 기반으로 개발되어 기타 [Paper](#paper) 포크의 패치를 몰아온 프로젝트  
[공식 홈페이지](https://yatopiamc.org/) [GitHub](https://github.com/YatopiaMC/Yatopia)  

**장점**
* [Spigot](#spigot)와의 플러그인 호환성을 제공함
* 속도가 굉장히 빠름.
* [Spigot](#spigot)의 빌드 툴인 `BuildTools.jar`와 별개로 JAR 파일에서 완전히 자동으로 패칭하기 때문에, 초기 설정이 훨씬 용이함.
* Paper보다 더욱 개선된 조명 렌더 ([Tuinity](#tuinity)), 엔티티 최적화 (Airplane), 구성 설정 추가 (PurPur), 비동기 청크 로딩 및 오버헤드 감소 (Tic-Tacs, Akarin) 등.

**단점**
* 일부 플러그인과의 호환성 문제가 있음.
* 소프트웨어가 상당히 불안정함.

### Sponge
Spigot/Bukkit에 기반하지 않은 확장 가능한 Minecraft 서버 구동용 프로그램.  
[공식 홈페이지](https://www.spongepowered.org/)

**장점**  
* 플러그인을 통한 게임 확장 가능
* [Forge](#forge) 와의 높은 연동성을 기반으로 [Forge](#forge) 기반의 모드 서버를 열 수 있음. (Sponge Forge 사용시)
  
**단점**
* [Spigot](#spigot), Bukkit API 기반의 플러그인과 호환되지 않음.
* 접속하는 유저 또한 서버와 같은 모드를 설치하여야만 접속이 가능함. (Sponge Forge를 사용하는 Forge mod에 한정, Server-Side mod 제외)
### Glowstone
바닥부터 다시 설계된 오픈소스 Minecraft 서버 구동기 입니다. [링크](https://www.glowstone.net/) [GitHub Repo (1.13 이상)](https://github.com/GlowstoneMC/Glowstone)

**장점**
* 모든 코드가 오픈소스 (Mojang Studios 에서 만든 코드가 일체 들어가지 않음)
* Bukkit, [Spigot](#spigot), [Paper](#paper) API 를 공식 지원함.

**단점**
* [빌드 방법](https://github.com/GlowstoneMC/Glowstone#building)이 다소 어려움 
* NMS (net.minecraft.server)나 기존 CraftBukkit 기반의 소스코드와는 일체 호환되지 않음.


### Forge Server
Forge 기반의 모드를 사용하는 서버를 구동하기 위한 Minecraft 서버 구동기 입니다.  
[공식 홈페이지](https://www.glowstone.net/)

**장점**
* Forge 기반의 모드 서버를 열 수 있음.

**단점**
* 기본적으로는 Bukkit, [Spigot](#spigot), [Paper](#paper) API를 사용 하는 플러그인을 사용 할 수 없음.
* 접속하는 유저 또한 서버와 같은 모드를 설치하여야만 접속이 가능함. (Server-Side mod 제외)

### Fabric Server
Fabric 기반의 모드를 사용하는 서버를 구동하기 위한 Minecraft 서버 구동기 입니다.  
[공식 홈페이지](https://www.fabricmc.net/)

**장점**
* Fabric 기반의 모드 서버를 열 수 있음.

**단점**
* 기본적으로는 Bukkit, [Spigot](#spigot), [Paper](#paper) API를 사용 하는 플러그인을 사용 할 수 없음.
* 접속하는 유저 또한 서버와 같은 모드를 설치하여야만 접속이 가능함. (Server-Side mod 제외)

### Magma
Forge 기반의 서버에 Paper를 통합한 Minecraft 서버 구동기 입니다.  
[공식 홈페이지](https://magmafoundation.org/) [GitHub (for 1.12.x)](https://github.com/magmafoundation/Magma) [GitHub (for 1.16.x)](https://github.com/magmafoundation/Magma-1.16.x)    

**장점**
* Forge 기반의 모드 서버를 열 수 있음.
* Bukkit, [Spigot](#spigot), [Paper](#paper) API를 사용하는 플러그인 또한 사용이 가능함.

**단점**
* 접속하는 유저 또한 서버와 같은 모드를 설치하여야만 접속이 가능함. (Server-Side mod 제외, Bukkit/Spigot 플러그인 제외)

### Mohist (구. Cauldron/Thermos)
Forge 기반의 서버에 Paper를 통합한 Minecraft 서버 구동기 입니다.  
[홈페이지](https://mohistmc.com) [GitHub](https://github.com/MohistMC/Mohist)

**장점**
* Forge 기반의 모드 서버를 열 수 있음.
* Bukkit, [Spigot](#spigot), [Paper](#paper) API를 사용하는 플러그인 또한 사용이 가능함.

**단점**
* 접속하는 유저 또한 서버와 같은 모드를 설치하여야만 접속이 가능함. (Server-Side mod 제외, Bukkit/Spigot 플러그인 제외)
