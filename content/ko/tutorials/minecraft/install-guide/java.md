---
title: Java 설치 방법
description: 마인크래프트 서버 버전에 맞는 Java를 Windows와 Linux에 설치하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

# Java 설치 방법

먼저 [Java 버전 호환성 가이드](/tutorials/minecraft/java-version-compatibility)에서 서버에 필요한 버전을 확인하세요. 이 문서의 명령어는 현재 Paper 서버가 요구하는 **Java 25** 설치를 예로 듭니다. 이전 마인크래프트 버전을 운영한다면 명령어와 다운로드 화면에서 필요한 Java 버전을 선택해야 합니다.

호환성이 넓은 HotSpot 기반 OpenJDK 배포판을 권장합니다. Paper 서버에서는 그래픽 관련 라이브러리가 필요할 수 있으므로 `headless` 패키지는 사용하지 마세요.

## Windows

1. [Eclipse Temurin 다운로드 페이지](https://adoptium.net/temurin/releases/)에서 필요한 Java 버전, `Windows`, `x64`, `JDK`를 선택합니다.
2. `.msi` 설치 파일을 실행합니다. 설치 과정에서 `PATH`와 `JAVA_HOME` 설정 옵션을 활성화합니다.
3. 새 명령 프롬프트나 PowerShell을 열고 설치 결과를 확인합니다.

Windows 패키지 관리자를 사용한다면 Java 25를 다음 명령어로 설치할 수도 있습니다.

```powershell
winget install EclipseAdoptium.Temurin.25.JDK
```

## Ubuntu 및 Debian 계열

[Paper 공식 설치 가이드](https://docs.papermc.io/misc/java-install/)에서 안내하는 Amazon Corretto 저장소를 등록한 뒤 Java 25를 설치합니다.

```bash
sudo apt-get update
sudo apt-get install ca-certificates apt-transport-https gnupg wget
wget -O - https://apt.corretto.aws/corretto.key | sudo gpg --dearmor -o /usr/share/keyrings/corretto-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/corretto-keyring.gpg] https://apt.corretto.aws stable main" | sudo tee /etc/apt/sources.list.d/corretto.list
sudo apt-get update
sudo apt-get install -y java-25-amazon-corretto-jdk libxi6 libxtst6 libxrender1
```

## Fedora, Rocky Linux 및 RHEL 계열

```bash
sudo rpm --import https://yum.corretto.aws/corretto.key
sudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo
sudo dnf -y install java-25-amazon-corretto-devel
```

## 설치 확인

새 터미널을 열고 다음 명령어를 실행합니다.

```bash
java -version
```

출력된 주 버전이 서버가 요구하는 버전과 같은지 확인하세요. 여러 Java 버전이 설치된 Linux에서는 `update-alternatives` 또는 배포판의 대안 관리 도구로 기본 `java` 명령을 변경할 수 있습니다.
