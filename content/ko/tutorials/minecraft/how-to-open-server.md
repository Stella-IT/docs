---
title: 서버는 어떻게 열어야 하나요?
description: 마인크래프트 서버를 시작해 볼까요?

category: Stella IT Console/Minecraft
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

## 서버 종류
`Minecraft: Java Edition`은 Minecraft의 초기부터 모드 커뮤니티와 함께해 왔기에, 서버 구동을 위한 프로그램을 선택하실 수 있습니다.  
더욱 자세한 설명은 [What is Spigot? CraftBukkit? Bukkit? Vanilla? Forg (영어)](https://www.spigotmc.org/wiki/what-is-spigot-craftbukkit-bukkit-vanilla-forg/) 을 확인하세요.

해당 서버 구동 프로그램을 설치하려면, 해당 종류의 [설치 방법](#) 페이지를 확인하세요.
서버 구동 프로그램의 종류를 확인하시려면 [버킷 종류](/tutorials/minecraft/what-kinds-of-bukkits) 페이지를 확인하세요.



## 서버 구동하기
본 가이드는 서버 구동 프로그램 중 하나인 Spigot 1.8.8와 Spigot 1.18.2 를 기준으로 합니다.

### Spigot 1.8.8
<alert type="warning">
Java 8을 필요로 합니다.
</alert>
1. Spigot 1.8.8 버전을 설치합니다.
2. 버킷을 설치한 폴더에 들어갑니다.

![Folder1.8.8](https://user-images.githubusercontent.com/70272129/163586850-e14dfbc1-63c6-410b-9543-8e358cb4f55d.png)
3. `Command Prompt`를 열고, `cd 폴더 경로`를 타이핑하여 폴더로 이동합니다.
4. `java -Xms10G -Xmx10G -jar spigot-1.8.8.jar`을 타이핑하여 서버를 시작합니다.
위에 표기된 플래그는 10GB 메모리를 기준으로 작성되었습니다. 만약 사용할 수 있는 메모리가 더 적다면, `-Xms10G`와 `-Xmx10`G 부분을 가용 가능한 메모리에 맞춰 수정하시는 것을 권장 드려요!

![createeula1](https://user-images.githubusercontent.com/70272129/163588825-421f0635-b9f3-4f99-bc3e-54641c26556f.png)
5. 위와 같은 메시지가 떴으면 해당 폴더에 가서 `eula.txt`의 `eula=false`를 `eula=true`로 변경해주세요.
6. 다시 `4번`과 같이 해주세요.

### Spigot 1.18.2
<alert type="warning">
Java 16 이상을 필요로 합니다.
</alert>
1. Spigot 1.18.2 버전을 설치합니다.
2. 버킷을 설치한 폴더에 들어갑니다.

![folder1.18.2](https://user-images.githubusercontent.com/70272129/163589749-78393bdb-b27e-43fb-85a3-b0b4bf6679c8.png)
3. `Command Prompt`를 열고, `cd 폴더 경로`를 타이핑하여 폴더로 이동합니다.
4. `java -Xms10G -Xmx10G -jar spigot-1.18.2.jar`을 타이핑하여 서버를 시작합니다.
위에 표기된 플래그는 10GB 메모리를 기준으로 작성되었습니다. 만약 사용할 수 있는 메모리가 더 적다면, `-Xms10G`와 `-Xmx10`G 부분을 가용 가능한 메모리에 맞춰 수정하시는 것을 권장 드려요!

![createeula](https://user-images.githubusercontent.com/70272129/163589941-13f610e1-5b85-4ea2-89ef-42c1d00e147f.png)
5. 위와 같은 메시지가 떴으면 해당 폴더에 가서 `eula.txt`의 `eula=false`를 `eula=true`로 변경해주세요.
6. 다시 `4번`과 같이 해주세요.
