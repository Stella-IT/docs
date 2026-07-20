---
title: 마인크래프트 서버는 어떻게 시작하나요?
description: 서버 구동기를 선택하고 Java 설치부터 최초 실행까지 필요한 문서를 안내합니다.
category: Stella IT Console/Minecraft
---

이 문서는 Minecraft Java Edition 서버를 처음 시작할 때 필요한 순서를 안내합니다. 명령어를 여러 문서에서 반복하지 않고, 운영체제와 서버 구동기에 맞는 설치 문서로 연결합니다.

## 1. 서버 구동기 선택

처음 시작한다면 플러그인을 사용할 수 있고 관련 자료가 많은 Paper를 권장합니다. 순정 환경이 필요하다면 Vanilla를 선택할 수 있습니다.

* [서버 구동기 종류 비교](/tutorials/minecraft/what-kinds-of-bukkits)
* [Paper 서버 설치](/tutorials/minecraft/install-guide/paper)
* [Vanilla 서버 설치](/tutorials/minecraft/install-guide/vanilla)
* [Spigot 서버 설치](/tutorials/minecraft/install-guide/spigot)
* [CraftBukkit 서버 설치](/tutorials/minecraft/install-guide/craftbukkit)

<alert type="info">
Forge나 Fabric용 모드는 Paper의 플러그인과 설치 방식이 다릅니다. 사용할 모드 로더가 요구하는 Minecraft와 Java 버전을 해당 프로젝트의 공식 문서에서 확인하세요.
</alert>

## 2. Java 설치

서버 버전에 맞지 않는 Java를 사용하면 서버가 시작되지 않습니다.

1. [Java 버전 호환성 가이드](/tutorials/minecraft/java-version-compatibility)에서 필요한 버전을 확인합니다.
2. [Java 설치 방법](/tutorials/minecraft/install-guide/java)에 따라 설치합니다.
3. 새 터미널에서 `java -version`을 실행해 실제 사용 중인 버전을 확인합니다.

## 3. 운영체제별 설치

운영체제 설정, 방화벽과 백그라운드 실행까지 한 번에 진행하려면 다음 문서를 이용하세요.

* [Ubuntu에서 서버 구축하기](/tutorials/minecraft/setup-on-ubuntu)
* [RHEL 계열에서 서버 구축하기](/tutorials/minecraft/setup-on-centos)
* [Windows Server에서 서버 구축하기](/tutorials/minecraft/setup-on-windows)

서버를 처음 실행하면 `eula.txt`가 생성됩니다. 내용을 확인하고 Mojang EULA에 동의하는 경우에만 `eula=true`로 변경한 뒤 다시 실행하세요.

## 4. 실행 후 확인

콘솔에 `Done` 메시지가 표시되면 서버가 시작된 것입니다. 외부에서 접속하려면 `server.properties`의 포트와 운영체제 방화벽 규칙이 일치해야 합니다. 기본 포트는 TCP `25565`입니다.

다음 단계는 아래 문서를 참고하세요.

* [기본 설정 변경하기](/tutorials/minecraft/server-properties)
* [플러그인 설치·관리하기](/tutorials/minecraft/how-to-install-plugins)
* [백업하고 복구하기](/tutorials/minecraft/backup-and-restore)
* [도메인 연결하기](/tutorials/minecraft/how-to-connect-domain)
* [서버가 시작되지 않을 때](/tutorials/minecraft/troubleshooting/server-wont-start)
