---
title: 원격 접속은 어떻게 하나요?
description: 원격 접속을 하는 방법에 대해 알아봅니다.
position: 5
category: FAQ/Console
---

Windows 환경과 Linux 환경인지에 따라 원격 접속 방법이 다릅니다.  
  
플랫폼을 확인 후 아래 링크를 클릭해 주세요.
* [Windows](#windows)
* [Linux (Ubuntu, CentOS, Debian, Fedora 등 포함)](#linux)  
* [긴급 복구 (VM이 인터넷에 접속되지 않는 경우)](./how-to-use-novnc)

## Windows
Stella IT 에서는 기본적으로 Windows VM에 대해 RDP를 통한 원격 접속을 제공합니다.

우측 하단의 **원격 접속 수단** 섹션에 명시된 다운로드 링크를 통하여 RDP 세션 파일을 다운로드 받아 실행 하거나, 제공된 접속 주소를 통해 RDP 로 접속하실 수 있습니다.

### 접속 주소로 RDP 접속하기 (Windows 환경)

1. 키보드의 윈도우키를 누른 상태에서 R을 눌러 실행 창을 엽니다. (Win + R)
2. `mstsc`를 입력하고 확인 버튼을 누릅니다.
3. 원격 데스크톱 화면에서 원격 컴퓨터란에 Stella IT Console 에서 발급받은 접속 주소를 입력합니다.
4. Stella IT Console 에서 발급받은 사용자 이름과 암호를 입력합니다.
10. 성공적으로 연결되었습니다. (만약 발급받은 사용자 이름과 암호가 올바르지 않는다고 한다면, 고객센터로 문의주세요.)

### 접속 주소로 RDP 접속하기 (macOS 환경)
1. App Store 에서 `Microsoft Remote Desktop` 을 검색합니다.
2. 해당 앱을 다운로드 받습니다.
3. `Microsoft Remote Desktop` 앱을 실행합니다.
4. 상단의 `+` 아이콘을 누릅니다.
5. `Add PC` 버튼을 누릅니다.
6. `PC Name`에 Stella IT Console에서 발급받은 접속 주소를 입력합니다.
7. `Add` 버튼을 누릅니다.
8. 새로 추가된 PC를 누릅니다
9. Stella IT Console 에서 발급받은 사용자 이름과 암호를 입력합니다.
10. 성공적으로 연결되었습니다. (만약 발급받은 사용자 이름과 암호가 올바르지 않는다고 한다면, 고객센터로 문의주세요.)

### 접속 주소로 RDP 접속하기 (iOS 환경)
1. App Store 에서 `Remote Desktop Mobile` 을 검색합니다.
2. 해당 앱을 다운로드 받습니다.
3. `Remote Desktop Mobile` 앱을 실행합니다.
4. 상단에 `+` 아이콘을 누릅니다.
5. `Add PC` 버튼을 누릅니다.
6. `PC Name`에 Stella IT Console에서 발급받은 접속 주소를 입력합니다.
7. `Save` 버튼을 누릅니다.
8. 새로 추가된 PC를 누릅니다.
9. Stella IT Console에서 발급받은 사용자 이름과 암호를 입력합니다.
10. 성공적으로 연결되었습니다. (만약 발급받은 사용자 이름과 암호가 올바르지 않는다고 한다면, 고객센터로 문의주세요.)

### 접속 주소로 RDP 접속하기 (Android 환경)
1. Play 스토어 에서 `Remote Desktop` 을 검색합니다.
2. 해당 앱을 다운로드 받습니다.
3. `Remote Desktop` 앱을 실행합니다.
4. 초기 실행했을 때, 라이센스 동의하는 여부를 물어봅니다. `Accept` 버튼을 눌러줍니다.
5. 상단에 `+` 아이콘을 누릅니다.
6. `Add PC` 버튼을 누릅니다.
7. `PC Name`에 Stella IT Console에서 발급받은 접속 주소를 입력합니다.
8. `Save` 버튼을 누릅니다.
9. 새로 추가된 PC를 누릅니다.
10. Stella IT Console에서 발급받은 사용자 이름과 암호를 입력합니다.
11. 성공적으로 연결되었습니다. (만약 발급받은 사용자 이름과 암호가 올바르지 않는다고 한다면, 고객센터로 문의주세요.)

### 접속 주소로 RDP 접속하기 (Linux 환경)
[Remmina](https://remmina.org/) 를 이용해 원격 접속하실 수 있습니다.

## Linux
Stella IT 에서는 기본적으로 Linux VM에 대해 SSH를 통한 원격 접속을 제공합니다.

### 접속 주소로 SSH 접속하기 (Windows 환경)
1. [putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 를 설치 후 실행합니다.
2. `SSH` 를 선택합니다.
3. 접속 주소의 `:` 앞에 있는 호스트를 `HostName` 입력합니다.
4. 접속 주소의 `:` 뒤에 있는 포트번호를 `Port` 에 입력합니다.
5. `Open` 을 클릭합니다.
6. Username을 입력하라는 창이 뜨면, Stella IT Console 에서 발급받은 사용자 이름을 입력합니다.
7. Username을 입력하라는 창이 뜨면, Stella IT Console 에서 발급받은 비밀번호을 입력합니다.

### 접속 주소로 SSH 접속하기 (*NIX 환경, 예: macOS 환경 또는 Linux 환경)
1. 터미널을 엽니다. (Linux 환경의 경우 `Ctrl`+`Alt`+`T`, macOS의 경우 `/Applications/Terminal.app` 실행)
2. 원격 접속 수단 하단에 생성된 명령어를 복사해 터미널에 붙여넣습니다.
3. 터미널에서 비밀번호를 입력하라는 메세지가 뜨면, 비밀번호를 입력합니다.