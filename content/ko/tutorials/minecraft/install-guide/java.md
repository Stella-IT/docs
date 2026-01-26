---
title: Java 설치 방법
description: Java를 설치하는 방법에 대해 알아봅니다.

category: Stella IT Console/Minecraft
---

`Minecraft: Java Edition` 서버를 구동하기 위해서는, 우선 컴퓨터에 Java가 설치되어있어야 합니다.  
이 문서는 Java를 컴퓨터에 설치하는 방법에 대해 다룹니다.

## JVM 종류 선택하기
겉보기에서는 별 차이가 없지만, JVM에 따라 Java 애플리케이션의 성능이 달라지기도 합니다.

* [**Hotspot** (Oracle Hotspot)](https://openjdk.java.net/groups/hotspot/): Oracle Java에서 사용하는 것과 같은 런타임. 호환성이 제일 높음.
* [**Eclipse OpenJ9** (IBM J9)](https://www.eclipse.org/openj9/): IBM Java에서 사용하는 것과 같은 런타임. 속도가 빠르고, 메모리를 적게 사용함.

<alert type="warning">
    Java 성능 개선을 위해 JVM Flag를 사용하는 경우, 런타임 변경시 JVM 최적화를 위한 JVM Flag를 변경할 필요성이 있습니다.<br>
    자세한 내용은 <a href="/tutorials/minecraft/bring-minecraft-server-to-ludicrous-speed#jvm-flag-설정">JVM Tweaking을 통해 성능 올리기 섹션</a> 을 확인하세요. 
</alert>

### Hotspot JVM을 사용하는 경우는 어떤 경우가 있나요?

대표적으로 높은 호환성을 이야기할 수 있습니다.
성능과 달리, 호환성이 중요하다면, HotSpot(JVM)을 사용하시는 것이 좋습니다.  

특히 구 버전의 Minecraft 서버를 운영한다면, 사용하고 있는 플러그인이 OpenJ9 JVM과 호환이 되지 않는 경우가 있어요. 이런 경우 Hotspot JVM을 사용하는 것을 추천합니다.

### 왜 OpenJ9(JVM)을 사용하나요?

HotSpot에 비해, 속도가 빠르며 메모리를 적게 사용하며, 그외 다른 장점도 존재합니다.

* 서버가 쉬고 있을때 GC가 돌아갑니다. 서버에 사람들이 몰렸을 때, GC가 돌아가면서 발생하는 렉을 줄일 수 있습니다.
* 공유 클래스에 대해 사전 컴파일이 진행되어서 더욱 빠른 플러그인 성능을 기대할 수 있습니다.

## Java 버전 선택하기
Java는 버전이 업데이트될수록, 성능이 지속적으로 개량 개선됩니다.  
**이용중인 플러그인 또는 구동기 호환성의 문제가 없는 경우, LTS 버전 중 최신 버전을 사용하는 것을 적극 권장합니다.**  

<alert type="warning">
    <b>현재 Minecraft 1.17 버전의 경우, Java 11 LTS 버전을 사용할 수 없습니다.</b><br>
    이는, <b>Java 16이 Minecraft 1.17의 타겟 버전으로 설정되어있기 때문</b>이므로, Java를 설치하실때 현재 제공되는 버전 중 가장 최신 버전인 <b>Java 16을 사용</b>하셔야 합니다.
</alert>

## Java 설치

### Windows
1. [AdoptOpenJDK 공식 홈페이지](https://adoptopenjdk.net/)로 접속합니다.
2. **1. Choose a Version** 에서 원하시는 버전을 선택합니다.
    <alert type="warning">
        Minecraft 1.17 서버를 열기 위해서는 반드시 <b>Java 16</b> 또는 그 이상 버전을 선택하여야 합니다.
    </alert>
3. **2. Choose a JVM** 에서 원하는 JVM 종류를 선택합니다.
    JVM 종류에 대한 설명은 [상단의 JVM 종류 선택하기](#jvm-종류-선택하기) 를 참고하세요.
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
5. adoptopenjdk의 원하는 버전을 설치합니다.  
   (여기서는 예제로 Java 16을 설치합니다. 다른 버전을 설치하려면, 명령어에서 숫자를 변경하세요.)
   * Hotspot을 설치하는 경우:
      ```bash
      sudo apt install adoptopenjdk-16-hotspot
      ```
   * OpenJ9을 설치하는 경우:
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
3. adoptopenjdk의 원하는 버전을 설치합니다.  
   (여기서는 예제로 Java 16을 설치합니다. 다른 버전을 설치하려면, 명령어에서 숫자를 변경하세요.)
   * Hotspot을 설치하는 경우:
      ```bash
      yum install adoptopenjdk-16-hotspot
      ```
   * OpenJ9을 설치하는 경우:
      ```bash
      yum install adoptopenjdk-16-openj9
      ```

### Other Linux Distributions
DEB/RPM을 통해 설치가 가능한 배포판의 경우, [이 링크 (영어)](https://blog.adoptopenjdk.net/2019/05/adoptopenjdk-rpm-and-deb-files/) 를 참고하세요.

해당 플랫폼이 아니거나, Busybox 등을 이용한 Lite 한 Linux 배포판의 경우, [AdoptOpenJDK 설치 페이지](https://adoptopenjdk.net/installation.html) 에서 환경에 맞는 버전을 다운로드 받으세요.  

