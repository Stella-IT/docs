---
title: UnsupportedClassVersion 에러가 떠요!
description: UnsupportedClassVersion 에러를 해결하기 위해 Java 16으로 업그레이드 하는 방법을 알아봅니다.

category: Tutorials/minecraft
---

## 오류 상황
다음과 같은 메세지가 발생합니다.  
```
09.06 17:14:21 [Server] INFO Exception in thread "main" java.lang.UnsupportedClassVersionError: net/minecraft/server/Main has been compiled by a more recent version of the Java Runtime (class file version 60.0), this version of the Java Runtime only recognizes class file versions up to 52.0
```

## Minecraft Java Edition 1.17과, Java 16.
Minecraft Java Edition는 1.16까지 Java 8 버전을 기반으로 제공되고 있었으나, [21w19a Snapshot](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w19a) 이후로 Minecraft Java Edition의 기반 코드가 Java 16를 대상으로 작동되도록 변경되었습니다.

### 저는 Java 8보다 높은 버전을 사용해도 작동했었는데요?
Java는 초기부터 [JVM](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%EA%B0%80%EC%83%81_%EB%A8%B8%EC%8B%A0)의 [Backwards Compatibility (하위 호환성)](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9C%84_%ED%98%B8%ED%99%98%EC%84%B1)이 고려되어 작성되어, 구버전이더라도 신버전의 Java Runtime 에서 작동할 수 있도록 설계되어, 문제가 없었던 것입니다.

### 그럼 호환성이 있는데도 왜 작동하지 못하나요.
Java Runtime은 기본적으로 [Forward Compatibility (상위 호환성)](https://ko.wikipedia.org/wiki/%EC%83%81%EC%9C%84_%ED%98%B8%ED%99%98%EC%84%B1) 가 지원되지 않습니다. 구버전인 Java 8이 Java 16을 대상으로 작동하도록 설계된 Class파일을 읽어들이지 못하므로, 마인크래프트 서버 부분의 코드를 읽어 들일 수 없는 문제가 발생하는 것입니다.

## 해결 방안

### Windows
<alert type="warning">
    현재 Stella IT의 기본 템플릿에 포함된 버전은 <b>AdoptOpenJDK Java 8</b> 그리고 <b>AdoptOpenJDK Java 11</b> 버전이며, <b>AdoptOpenJDK Java 16</b> 은 아직 기본 탑재가 되어있지 않습니다.<br><br>
    <b>빠른 시일 내에 기본 탑재 할 수 있도록 하겠습니다.</b>
</alert>

1. [AdoptOpenJDK 다운로드 페이지](https://adoptopenjdk.net/?variant=openjdk16&jvmVariant=hotspot)로 이동합니다.
2. **1. Choose a Version** 에서 `OpenJDK 16 (Latest)` 를 선택합니다.
3. (선택) **2. Choose a JVM** 에서 원하는 JVM 종류를 선택합니다.
   JVM 종류에 대한 설명은 [이 링크](/tutorials/minecraft/tweaking-jvm#JVM의-종류) 를 참고하세요
4. **Latest Release** 버튼을 눌러 다운로드를 시작합니다.


### Ubuntu
1. AdoptOpenJDK의 Release 전자서명용 GPG Key를 다운로드 합니다.
   ```bash
   wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -
   ```
2. (선택) `software-properties-common` 을 설치합니다.
   ```bash
   sudo apt install software-properties-common
   ```
3. apt repository를 추가합니다.
   ```bash
   sudo add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
   ```
4. (선택) APT 패키지 정보를 최신 버전으로 갱신합니다.
   ```bash
   sudo apt update
   ```
4. adoptopenjdk의 16 버전을 설치합니다.
   * [**Hotspot**](https://openjdk.java.net/groups/hotspot/): Oracle Java에서 사용하는 것과 같은 런타임. 호환성이 제일 높음.
      ```bash
      sudo apt install adoptopenjdk-16-hotspot
      ```
   * [**Eclipse OpenJ9**](https://www.eclipse.org/openj9/): IBM Java에서 사용하는 것과 같은 런타임. 속도가 빠르고, 메모리를 적게 사용함.
      ```bash
      sudo apt install adoptopenjdk-16-openj9
      ```

### CentOS, Fedora, Rocky Linux
1. yum repo에 adoptopenjdk 를 추가합니다.
    ```bash
    cat <<EOF > /etc/yum.repos.d/adoptopenjdk.repo
    [AdoptOpenJDK]
    name=AdoptOpenJDK
    baseurl=https://adoptopenjdk.jfrog.io/adoptopenjdk/rpm/centos/7/$(uname -m)
    enabled=1
    gpgcheck=1
    gpgkey=https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public
    EOF
    ```

2. yum의 패키지 정보를 최신으로 갱신합니다.
    ```bash
    yum update
    ```
3. adoptopenjdk의 16 버전을 설치합니다.
   * [**Hotspot**](https://openjdk.java.net/groups/hotspot/): Oracle Java에서 사용하는 것과 같은 런타임. 호환성이 제일 높음.
      ```bash
      yum install adoptopenjdk-16-hotspot
      ```
   * [**Eclipse OpenJ9**](https://www.eclipse.org/openj9/): IBM Java에서 사용하는 것과 같은 런타임. 속도가 빠르고, 메모리를 적게 사용함.
      ```bash
      yum install adoptopenjdk-16-openj9
      ```

### Other Linux Distributions
DEB/RPM을 통해 설치가 가능한 배포판의 경우, [이 링크 (영어)](https://blog.adoptopenjdk.net/2019/05/adoptopenjdk-rpm-and-deb-files/) 를 참고하세요.

해당 플랫폼이 아니거나, Busybox 등을 이용한 Lite 한 Linux 배포판의 경우, [AdoptOpenJDK 설치 페이지](https://adoptopenjdk.net/installation.html) 에서 환경에 맞는 버전을 다운로드 받으세요.  
