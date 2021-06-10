---
title: Vanilla 서버 설치 방법
description: Vanilla 서버를 설치하는 방법에 대해 알아봅니다.

category: 'Tutorials/Minecraft/Install'
---

<alert type="warning">
    본 문서는 서버를 구동할 컴퓨터에 Java가 이미 설치되어있다는 전제하에 진행됩니다.<br>
    설치가 되어있지 않다면, <a href="/tutorials/minecraft/install-guide/java">Java 설치 방법</a> 페이지를 확인하여 Java를 설치해 주세요. 
</alert>

## 실행기 다운로드
1. Minecraft Launcher를 실행 합니다.
    <img width="100%" alt="image" src="https://user-images.githubusercontent.com/27724108/121570652-0768a580-ca5d-11eb-9ec0-6656a28c11f6.png">

2. **설치 설정** 을 누릅니다.
3. 서버를 열 버전을 선택하고 **...** 버튼을 클릭 한 후 **수정**을 누릅니다.
    ![image](https://user-images.githubusercontent.com/27724108/121576496-67624a80-ca63-11eb-91d3-ee8166d0627d.png)
    <alert type="warning">
        Modding 된 버전을 선택해서는 안됩니다.
    </alert>
4. **서버** 를 클릭합니다.
    ![image](https://user-images.githubusercontent.com/27724108/121576752-ab554f80-ca63-11eb-903e-68ecfbba0fb2.png)
5. 새 브라우저가 열리고 `server.jar` 가 다운로드 됩니다. 해당 파일을 받아 저장합니다.

## 실행기 설정
1. 원하는 위치에 빈 폴더를 만듭니다.
2. 해당 빈 폴더에 `server.jar` 파일을 복사합니다.
### Windows
1. 메모장을 엽니다.
2. 메모리 할당량을 계산합니다. (예. 전체 메모리가 6GB인경우, 운영체제 메모리를 고려하여 4GB ~ 4.5GB 정도를 Heap 최대 메모리로 지정)
3. 메모장에 다음을 적습니다  
   (4GB 할당을 기준으로 작성하였습니다., 변경을 위해서는 `-Xmx4G` 의 숫자를 변경합니다.)
   ```bat
   @echo off
   java -Xmx4G -Xms512M -jar server.jar
   ```
4. `파일` -> `저장` 을 누릅니다.
5. `server.jar` 이 있는 폴더로 이동한 뒤 파일형식을 `모든 파일 (*.*)`로 변경한 뒤 파일 이름을 `start.bat` 로 저장합니다.
6. `start.bat` 을 클릭해 실행합니다.
### *NIX (macOS, Linux, etc.)
1. emacs/vim 등의 에디터를 이용해 `server.jar` 와 같은 폴더에 `start.sh`을 생성하고, 파일 내용으로 입력합니다.
   (Heap 5GB 할당을 기준으로 작성하였습니다., 변경을 위해서는 `-Xmx5G` 의 숫자를 변경합니다.)
   ```sh
   #!/bin/sh
   java -Xmx5G -Xms512M -jar server.jar
   ```
2. Executable bit 를 설정합니다.
   ```bash
   chmod +x ./start.sh
   ```
3. 프로그램을 실행합니다.

<alert type="info">
*NIX 터미널 환경에서 특정한 프로그램을 백그라운드로 계속 실행하는 쉬운 방법으로 GNU/Screen 을 사용하는 방법이 있습니다.<br>
</alert>

## 후설정
1. 최초로 서버를 시작할 경우 `EULA`에 동의가 필요합니다., `eula.txt` 를 열고 `eula=false`를 `eula=true` 로 변경합니다.
2. 서버를 재시작합니다. `./start.sh` 또는 `start.bat` 실행

