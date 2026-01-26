---
title: Craftbukkit 서버 설치 방법
description: Craftbukkit 서버를 설치하는 방법에 대해 알아봅니다.

category: Stella IT Console/Minecraft
---

<alert type="warning">
    본 문서는 서버를 구동할 컴퓨터에 Java가 이미 설치되어있다는 전제하에 진행됩니다.<br>
    설치가 되어있지 않다면, <a href="/tutorials/minecraft/install-guide/java">Java 설치 방법</a> 페이지를 확인하여 Java를 설치해 주세요. 
</alert>

## Craftbukkit 서버 다운로드
Craftbukkit 서버 파일은 공식적으로 제공되지 않으므로, [SpigotMC](https://www.spigotmc.org/wiki/buildtools/)에서 제공하는 BuildTools.jar 파일을 이용하여 직접 빌드해야 합니다.
1. BuildTools.jar 파일을 다운로드합니다. 터미널에서 다음 명령어를 실행하세요:
    ```bash
    wget https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar
    ```
2. BuildTools.jar 파일을 실행하여 Craftbukkit 서버 파일을 빌드합니다
    ```bash
    java -jar BuildTools.jar --rev 1.20.4
    ```
    위 명령어에서 `1.20.4`는 원하는 Minecraft 버전으로 변경할 수 있습니다.  
3. 빌드가 완료되면, `craftbukkit-1.20.4.jar` 파일이 생성됩니다. 이 파일이 Craftbukkit 서버 파일입니다.

## Craftbukkit 서버 실행
1. 터미널에서 다음 명령어를 실행하여 Craftbukkit 서버를 시작합니다:
    ```bash
    java -Xmx1024M -Xms1024M -jar craftbukkit-1.20.4.jar nogui
    ```
    * `-Xmx1024M`: 서버가 사용할 최대 메모리 양을 1024MB로 설정합니다. 필요에 따라 조정할 수 있습니다.
    * `-Xms1024M`: 서버가 시작할 때 할당할 초기 메모리 양을 1024MB로 설정합니다. 필요에 따라 조정할 수 있습니다.
    * `nogui`: GUI 없이 서버를 실행합니다.
2. 서버가 처음 실행될 때 EULA(최종 사용자 사용권 계약)에 동의해야 합니다. `eula.txt` 파일이 생성되면, 파일을 열어 `eula=false`를 `eula=true`로 변경하고 저장합니다.
3. 다시 서버를 실행하면 Craftbukkit 서버가 정상적으로 시작됩니다.
```bash
java -Xmx1024M -Xms1024M -jar craftbukkit-1.20.4.jar nogui
```
이제 Craftbukkit 서버가 성공적으로 실행되었습니다!