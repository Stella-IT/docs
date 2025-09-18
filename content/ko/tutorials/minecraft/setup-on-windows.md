---
title: Windows Server에서 마인크래프트 서버 구축하기
description: Windows Server 환경에서 마인크래프트 서버를 설치하고 설정하는 방법을 알아봅니다.
---

# Windows Server에서 마인크래프트 서버 구축하기

이 가이드에서는 Windows Server 또는 일반 Windows 환경에서 마인크래프트 Java 에디션 서버를 구축하는 방법을 단계별로 안내합니다.

## 1. Java 설치하기

마인크래프트 서버는 Java로 실행됩니다. 서버 버전에 맞는 Java를 설치해야 합니다. [Java 버전 호환성 가이드](/ko/tutorials/minecraft/java-version-compatibility)를 참고하여 필요한 Java 버전을 확인하세요.

Windows 환경에서는 OpenJDK 배포판 중 하나인 **Eclipse Temurin**을 설치하는 것을 권장합니다.

1.  [Eclipse Temurin 다운로드 페이지](https://adoptium.net/temurin/releases/)로 이동합니다.
2.  자신의 마인크래프트 버전에 맞는 Java 버전을 선택합니다.
    *   **Java 17:** Minecraft 1.18 ~ 1.20.4
    *   **Java 8:** Minecraft 1.12.2 등
3.  **Operating System**은 `Windows`, **Architecture**는 `x64`를 선택합니다.
4.  `.msi` 확장자의 설치 파일을 다운로드하여 실행하고, 설치 마법사의 지시에 따라 설치를 완료합니다. 설치 과정에서 `Set JAVA_HOME variable` 옵션을 선택하는 것이 좋습니다.

### 설치 확인

명령 프롬프트(CMD) 또는 PowerShell을 열고 다음 명령어를 입력하여 Java가 올바르게 설치되었는지 확인합니다.

```cmd
java -version
```

## 2. 마인크래프트 서버 파일 다운로드

1.  **서버 폴더 생성**

    `C:\minecraft-server` 와 같이 서버 파일을 보관할 폴더를 생성합니다.

2.  **마인크래프트 서버 다운로드**

    마인크래프트 공식 홈페이지나 PaperMC, Spigot 등 원하는 서버 종류의 웹사이트에서 서버 `.jar` 파일을 다운로드합니다. PaperMC를 가장 권장합니다.

    *   **PaperMC (권장):** [PaperMC 다운로드 페이지](https://papermc.io/downloads)에서 원하는 버전의 서버 파일을 다운로드합니다.
    *   **바닐라 (공식):** [마인크래프트 Java 에디션 서버 다운로드](https://www.minecraft.net/ko-kr/download/server)

    다운로드한 `.jar` 파일을 위에서 생성한 서버 폴더로 이동시키고, `server.jar`로 파일명을 변경하면 편리합니다.

## 3. 서버 실행 및 설정

1.  **실행 스크립트 생성**

    메모장을 열고 다음 내용을 입력하여 서버 실행 스크립트를 만듭니다.

    ```bat
    @echo off
    java -Xms1G -Xmx2G -jar server.jar
    pause
    ```

    *   `-Xms1G`: 최소 램 사용량을 1GB로 설정합니다.
    *   `-Xmx2G`: 최대 램 사용량을 2GB로 설정합니다. 서버 규모에 맞게 조절하세요.
    *   `pause`: 서버가 종료되었을 때 창이 바로 닫히지 않도록 합니다.

    이 파일을 `start.bat`이라는 이름으로 **서버 폴더(`C:\minecraft-server`) 안에 저장**합니다. 저장할 때 **파일 형식**을 `모든 파일`로 변경하고, **인코딩**은 `ANSI` 또는 `UTF-8`로 설정해야 합니다.

2.  **최초 실행 및 EULA 동의**

    `start.bat` 파일을 더블클릭하여 실행합니다. 서버가 처음 실행되면 몇 가지 파일이 생성된 후 곧바로 종료됩니다.

    서버 폴더에 생성된 `eula.txt` 파일을 메모장으로 엽니다. `eula=false`를 `eula=true`로 변경하고 저장하여 EULA(최종 사용자 라이선스 계약)에 동의합니다.

3.  **서버 재실행**

    다시 `start.bat` 파일을 실행하면 월드가 생성되고 정상적으로 서버가 구동됩니다.
    