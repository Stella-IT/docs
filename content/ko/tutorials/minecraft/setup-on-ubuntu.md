---
title: Ubuntu에서 마인크래프트 서버 구축하기
description: Ubuntu 환경에서 마인크래프트 서버를 설치하고 설정하는 방법을 알아봅니다.
---

# Ubuntu에서 마인크래프트 서버 구축하기

이 가이드에서는 Ubuntu 운영체제에서 마인크래프트 Java 에디션 서버를 구축하는 방법을 단계별로 안내합니다.

## 1. Java 설치하기

마인크래프트 서버는 Java로 실행됩니다. 서버 버전에 맞는 Java를 설치해야 합니다. [Java 버전 호환성 가이드](/ko/tutorials/minecraft/java-version-compatibility)를 참고하여 필요한 Java 버전을 확인하세요.

여기서는 가장 널리 사용되는 Java 17 (Minecraft 1.18 이상)과 Java 8 (Minecraft 1.16.5 이하) 설치 방법을 안내합니다.

### Java 17 (OpenJDK) 설치 (Minecraft 1.18 ~ 1.20.4)

```bash
sudo apt update
sudo apt install openjdk-17-jre-headless
```

### Java 8 (OpenJDK) 설치 (Minecraft 1.12.2 등)

```bash
sudo apt update
sudo apt install openjdk-8-jre-headless
```

### 설치된 Java 버전 확인

```bash
java -version
```

## 2. 마인크래프트 서버 파일 다운로드

1.  **서버를 설치할 디렉터리 생성**

    ```bash
    mkdir minecraft-server
    cd minecraft-server
    ```

2.  **마인크래프트 서버 다운로드**

    마인크래프트 공식 홈페이지나 PaperMC, Spigot 등 원하는 서버 종류의 웹사이트에서 서버 파일을 다운로드합니다. PaperMC를 가장 권장합니다.

    *   **PaperMC (권장):** [PaperMC 다운로드 페이지](https://papermc.io/downloads)에서 원하는 버전의 서버 파일을 다운로드합니다.
    *   **바닐라 (공식):** [마인크래프트 Java 에디션 서버 다운로드](https://www.minecraft.net/ko-kr/download/server)

    `wget`을 사용하여 서버 파일을 직접 다운로드할 수 있습니다. 예를 들어 Paper 1.20.4 버전을 다운로드하는 명령어는 다음과 같습니다. (링크는 변경될 수 있습니다)

    ```bash
    wget https://api.papermc.io/v2/projects/paper/versions/1.20.4/builds/550/downloads/paper-1.20.4-550.jar
    ```

    다운로드한 파일의 이름을 `server.jar`로 변경하면 편리합니다.

    ```bash
    mv paper-1.20.4-550.jar server.jar
    ```

## 3. 서버 실행 및 설정

1.  **최초 실행 및 EULA 동의**

    서버를 처음 실행하면 `eula.txt` 파일이 생성됩니다.

    ```bash
    java -Xms1G -Xmx2G -jar server.jar nogui
    ```

    *   `-Xms1G`: 최소 램 사용량을 1GB로 설정합니다.
    *   `-Xmx2G`: 최대 램 사용량을 2GB로 설정합니다. 서버 규모에 맞게 조절하세요.

    실행 후 `eula.txt` 파일이 생성되면 파일을 열어 `eula=false`를 `eula=true`로 변경하여 EULA(최종 사용자 라이선스 계약)에 동의해야 합니다.

    ```bash
    nano eula.txt
    ```

    `eula=false` -> `eula=true`로 수정하고 저장합니다.

2.  **서버 재실행**

    이제 서버를 다시 실행하면 월드가 생성되고 정상적으로 서버가 구동됩니다.

    ```bash
    java -Xms1G -Xmx2G -jar server.jar nogui
    ```

## 4. (선택) 서비스로 등록하여 백그라운드에서 실행하기

서버를 터미널 세션과 독립적으로 실행하고, 시스템 부팅 시 자동으로 시작되도록 서비스로 등록할 수 있습니다.

1.  **실행 스크립트 작성**

    `start.sh` 같은 이름의 스크립트 파일을 만듭니다.

    ```bash
    nano start.sh
    ```

    파일에 다음 내용을 입력합니다. `server.jar`가 있는 디렉터리 경로와 Java 명령어는 자신의 환경에 맞게 수정해야 합니다.

    ```sh
    #!/bin/sh
    cd /home/ubuntu/minecraft-server  # 마인크래프트 서버 디렉터리 경로
    exec java -Xms1G -Xmx2G -jar server.jar nogui
    ```

    스크립트에 실행 권한을 부여합니다.

    ```bash
    chmod +x start.sh
    ```

2.  **Systemd 서비스 파일 생성**

    `/etc/systemd/system/minecraft.service` 파일을 생성합니다.

    ```bash
    sudo nano /etc/systemd/system/minecraft.service
    ```

    파일에 다음 내용을 입력합니다. `User`, `Group`, `WorkingDirectory`, `ExecStart` 경로는 자신의 환경에 맞게 수정하세요.

    ```ini
    [Unit]
    Description=Minecraft Server
    After=network.target

    [Service]
    User=ubuntu  # 서버를 실행할 사용자 계정
    Group=ubuntu # 사용자의 그룹
    WorkingDirectory=/home/ubuntu/minecraft-server # 서버 디렉터리
    ExecStart=/home/ubuntu/minecraft-server/start.sh # 위에서 만든 실행 스크립트
    Restart=on-failure
    RestartSec=10

    [Install]
    WantedBy=multi-user.target
    ```

3.  **서비스 활성화 및 시작**

    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable minecraft.service # 부팅 시 자동 시작 활성화
    sudo systemctl start minecraft.service  # 서비스 시작
    ```

    **서비스 상태 확인:**

    ```bash
    sudo systemctl status minecraft.service
    ```

이제 마인크래프트 서버가 Ubuntu 시스템에서 안정적으로 운영될 것입니다.
