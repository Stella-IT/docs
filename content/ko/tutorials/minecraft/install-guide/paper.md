---
title: Paper 서버 설치 방법
description: 공식 Paper 서버 파일을 내려받아 최초 실행하고 EULA를 설정하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

Paper는 플러그인을 지원하는 Minecraft Java Edition 서버 구동기입니다.

## 준비 사항

1. [Java 버전 호환성 가이드](/tutorials/minecraft/java-version-compatibility)에서 설치할 Paper 버전이 요구하는 Java를 확인합니다.
2. [Java 설치 방법](/tutorials/minecraft/install-guide/java)에 따라 Java를 설치합니다.
3. `java -version`으로 실제 사용 중인 버전을 확인합니다.

## Paper 다운로드

1. [PaperMC 공식 다운로드 페이지](https://papermc.io/downloads/paper)에서 운영할 Minecraft 버전을 선택합니다.
2. 최신 안정 빌드의 서버 `.jar` 파일을 내려받습니다.
3. 별도의 서버 폴더를 만들고 파일을 이동합니다.
4. 이후 명령어를 그대로 사용하려면 파일 이름을 `server.jar`로 변경합니다.

공식 다운로드 페이지가 아닌 파일 공유 사이트에서 서버 파일을 받지 마세요.

## 최초 실행

서버 폴더에서 다음 명령어를 실행합니다.

```bash
java -Xms1G -Xmx2G -jar server.jar --nogui
```

* `-Xms1G`: 시작할 때 확보할 힙 메모리입니다.
* `-Xmx2G`: Java가 사용할 최대 힙 메모리입니다. 인스턴스 전체 메모리보다 작게 설정해 운영체제용 공간을 남기세요.
* `--nogui`: 그래픽 서버 창을 열지 않습니다.

첫 실행에서는 파일을 생성한 뒤 EULA에 동의하지 않았다는 메시지와 함께 종료됩니다.

1. 생성된 `eula.txt`를 엽니다.
2. [Minecraft EULA](https://www.minecraft.net/eula)를 확인합니다.
3. 동의하는 경우에만 `eula=false`를 `eula=true`로 변경합니다.
4. 같은 시작 명령을 다시 실행합니다.

콘솔에 `Done` 메시지가 표시되면 서버가 시작된 것입니다.

## 다음 단계

* [`server.properties` 기본 설정](/tutorials/minecraft/server-properties)
* [플러그인 설치·관리](/tutorials/minecraft/how-to-install-plugins)
* [백업과 복구](/tutorials/minecraft/backup-and-restore)
* [서버가 시작되지 않을 때](/tutorials/minecraft/troubleshooting/server-wont-start)

더 자세한 요구 사항은 [Paper 공식 시작 문서](https://docs.papermc.io/paper/getting-started/)를 참고하세요.
