---
title: 공인 아이피를 추가하기 위해서는 어떻게 해야하나요?
description: 가상 머신에 공인 아이피를 추가하는 방법에 대해 알아봅니다.

category: FAQ/Console
---

기본적으로 공인 아이피를 제공하고 있지 않습니다. 하지만 공인 아이피가 필요로 한 개발자 여러분들을 위해서 Stella IT Console에서 추가할 수 있습니다.

## 가상 머신에 공인 아이피를 추가하는 방법
1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 공인 아이피를 추가하고자 하는 가상머신을 클릭합니다.
4. 우측 상단의 [VM 업그레이드] 버튼을 누릅니다.
5. [공인 IP 서비스 구매] 버튼을 누릅니다.

자동으로 공인 IP가 고객님의 가상머신에 배정되었습니다! 

다음 문서에서 각 운영체제(OS)에서 할당받은 IP를 할당하는 방법에 대해 알아보도록 하겠습니다.

## 우분투(Ubuntu) 환경에서 Netplan 설정하는 방법
Stella IT 공인 아이피 추가 방식은 기존 인터페이스와 공인 아이피 전용 인터페이스으로 두 가지 형태로 제공됩니다.

공인 아이피 인터페이스를 추가로 설정하기 위해서 아래를 참고하여 공인 아이피 셋업을 진행해 주셔야지만 동시에 사용하실 수 있습니다.

아래 파일 내용을 참고하여, 기존 ``/etc/netplan/50-cloud-init.yaml`` 파일을 수정합니다.

```
network:
    version: 2
    ethernets:
        eth0:
            addresses:
            - 192.168.1.<IP>/24
#            gateway4: 192.168.1.1
            mtu: 1400
            nameservers:
                addresses:
                - 103.156.22.254
                - 103.156.23.254
            routes:
            - to: 0.0.0.0/0
              via: 192.168.1.1
              metric: 200
              table: 101
            routing-policy:
             - from: 192.168.1.0/24
               table: 101

        eth1:
            addresses:
            - 103.178.34.<IP>/24
#            gateway4: 103.178.34.1
            mtu: 1400
            nameservers:
                addresses:
                - 103.178.34.1
            routes:
            - to: 0.0.0.0/0
              via: 103.178.34.1
              metric: 300
```

기존 gateway4 설정은 주석 처리후 routes 설정을 통해 게이트웨이 역할을 할 수 있도록 조치를 해야합니다.

마무리 되었습니다.

정상적으로 인터넷이 작동되는지 확인을 합니다. 만약 안될 경우, 고객 센터로 연락 부탁드립니다.

## 윈도우 환경에서 아이피 설정하는 방법
새로 추가된 어댑터(인터페이스) 아이피를 할당해 보도록 하겠습니다.

1. [제어판] 실행
2. [네트워크 및 인터넷] 클릭
3. [네트워크 및 공유 센터] 클릭
4. 새로 추가된 어댑터 클릭 
5. [속성] 클릭
6. [인터넷 프로토콜 버전 4(TCP/IPv4)] 클릭 -> 속성
7. [다음 IP 주소 사용(S)] 체크
8. IP 주소란에 할당 받은 IP 주소 입력, 서브넷 마스크란에 255.255.255.0 입력, 기본 게이트웨이란에 103.178.34.1 입력
9. 기본 설정 DNS 서버란에 103.178.34.1 입력
10. [확인] 버튼 클릭 

```
경고 - 다중 기본 게이트웨이는 인트라넷이나 인터넷과 같은 단일 네트워크에 대해 중복성을 제공하기 위한 것입니다. 연결되지 않은 두 네트워크에 다중 기본 게이트웨이가 개별적으로 있으면 올바르게 작동하지 않습니다. 이구성을 저장하시겠습니까?
```

11. 예시 경고문와 같이 나올 경우, [예] 클릭

윈도우 버전에 따라 아이피 할당하는 방법이 달라질 수 있습니다.
이 경우, 외부 웹문서를 참조하여 할당 진행을 할 수 있습니다.

이후, MTU 1400으로 설정하기 위해서 아래와 같이 따라 해주세요.

1. [명령 프롬프트]를 관리자 권한으로 실행합니다.
2. ``>netsh interface ipv4 show interface`` 입력해 주세요.
3. ``  5          25        1500  connected     이더넷`` 사용 중인 인터페이스를 찾아줍니다.
4. 색인에 적혀있는 숫자를 이용하여, ``>netsh interface ipv4 set subinterface 5 mtu=1400 store=persistent``를 입력해 주세요.

마무리 되었습니다.

정상적으로 인터넷이 작동되는지 확인을 합니다. 만약 안될 경우, 고객 센터로 연락 부탁드립니다.