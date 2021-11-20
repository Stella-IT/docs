---
title: 처음 사용자 매뉴얼 
description: 처음 가상 머신 구매 후, 자주 질문하는 내용들을 모아봤어요!

category: FAQ/Console
---

## 처음 사용자 매뉴얼

이 문서에서는 처음 사용하면서, 자주 질문하는 내용들을 모아봤어요!

먼저, 호스팅부터 설명을 해드리고, 문서를 시작하도록 하겠습니다.

### 1. 호스팅? 그게 뭔가요?

호스팅은 서버 컴퓨터의 일정 공간을 가상화 기술을 이용하여 원격으로 각각의 사용자가 나뉘어진 가상화 컴퓨터를 이용할 수 있도록 임대하는 서비스입니다.

### 2. 임대를 하면 어떻게 이용해야되나요?

보통 임대한 환경에 설치된 운영체제에 따라 다르지만,

윈도우 서버인 경우 윈도우 기본 프로그램인 **원격 데스크톱 연결 프로그램** 통해서 연결할 수 있습니다.

리눅스 서버인 경우 **SSH** 프로토콜을 사용할 수 있는 **프로그램**을 통해서 연결할 수 있습니다.

### 3. 그렇다면, 원격 접속 방법에 대해 설명된 글이 없을까요?

네, 구매하신 가상머신 원격 접속 방법에 대해 설명해둔 문서가 존재합니다. 

[https://docs.stella-it.com/faq/console/how-to-remote-access](https://docs.stella-it.com/faq/console/how-to-remote-access)로 접속하셔서, 접속하는 환경에 따라 접속 방법이 각각 다르므로, 참고하여 원격 접속 부탁드리겠습니다.

### 4. 원격 접속 방법을 알겠지만, 접속 정보를 확인을 어디서 하나요?


그렇다면, 원격 접속 정보 확인하는 방법에 대해서 알려드리도록 할게요! 아래와 같이 따라 해주세요!

[https://console.stella-it.com/](https://console.stella-it.com/) 사이트 접속 → **[가상 머신]** 탭 클릭 → 원격 접속하고자 하는 가상 머신 선택

![Remote](https://user-images.githubusercontent.com/36693200/129474342-c4463026-28c5-439f-a347-3703b2e9c740.png)

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 윈도우 서버일 경우, 아래와 같이 나옵니다.

![Remote1](https://user-images.githubusercontent.com/36693200/129474346-0036de68-c553-43b1-b8ad-ed67c71a6f9e.png)

> 설치한 운영체제: 윈도우일 경우, 위 사진과 같습니다.

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 리눅스 서버일 경우, 아래와 같이 나옵니다. 

![Remote2](https://user-images.githubusercontent.com/36693200/129474352-4ff17bb2-ddd0-4466-a549-a2fb7124616c.png)

> 설치한 운영체제: 리눅스일 경우, 위 사진과 같습니다.

[참고(Windows)](https://docs.stella-it.com/faq/console/how-to-remote-access#windows)
[참고(Windows)](https://docs.stella-it.com/faq/console/how-to-remote-access#linux)

### 5. 원격 접속해서 Internet Explorer로 인터넷을 하려고 했는데, "보안 강화 구성" 때문에 인터넷이 안돼요!

보안상의 이유로, **인터넷 익스플로러(Internet Explorer)**는 **보안 강화 구성**이 켜져 있습니다.
그렇기 때문에 더 안전한 인터넷 브라우저 사용을 권장해드리고 있으며, 서버 구성할 때 기본적으로 사용할 수 있도록 준비가 되어있습니다.

1. 바탕화면에 있는 [**"Essentials Utility"** 폴더] 클릭
2. "Internet Browser" 폴더 클릭 → 브라우저 ex) Firefox, Chromium 중 선택 후 설치 진행해 주시면 됩니다.

** 보안 강화 구성:** 보안의 위험성이 있는 웹 사이트에 사용자 서버가 노출되는 것을 줄이기 위해 존재합니다.

### 6. 자바 설치는 어떻게 해야되나요?

1. 바탕화면에 있는 **"Essentials Utility"**  폴더 클릭
2. "Java" 폴더 클릭
3. 열고자 하는 서버 버전에 맞게 자바 버전을 선택 후 폴더를 클릭합니다. ex) 1.12.2일 경우, Java 8 (OpenJDK 8 Hotspot) 선택합니다. 
4. 폴더 안에 있는 설치 파일을 통해 자바를 설치합니다.

### 7. 서버 파일은 어떻게 이동해야 되나요?
기존에 운영하셨던 서버 파일은 압축하여 **네이버 메일**로 옮기시는 것을 권장드리고 있습니다.
하지만, 처음 서버 운영하기 때문에 서버를 여는 방법에 대해 모르신다면, [마인크래프트 서버 시작하기](https://docs.stella-it.com/tutorials/minecraft/getting-started) 문서를 참고 부탁드리겠습니다.

[참고](https://docs.stella-it.com/tutorials/minecraft/install-guide/java)

### 8. Minecraft 서버 접속할 주소가 필요로 합니다.

그렇다면, 기본으로 제공하는 주소를 확인하는 방법을 알려드릴게요!

1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 호스팅 연장하고자 하는 **가상머신**을 클릭합니다.
4. **[포트 목록]** 클릭합니다.

Minecraft 서버 접속 주소 하단에 있는 주소를 통해 접속하실 수 있습니다.
만약, 짧은 도메인이 필요하다면 상담 센터를 통해 지원 코드와 ex) abc.mcsv.kr 보내주시면 연결해드리고 있습니다.

### 9. 마인리스트 서버 등록과 추천 관련 설정에 대해 궁금합니다.

[마인리스트에 서버 등록하는 방법이 궁금해요!](https://docs.stella-it.com/tutorials/minecraft/minelist/how-to-register-my-server)

아니면, 추천 보상(Votifier) 플러그인 설정을 방법에 대해서 궁금하신가요?

설치부터 설정 방법까지 하단 링크를 통해 확인하실 수 있습니다.

1. [Votifier(NuVotifier) 설치는 어떻게 하나요?](https://docs.stella-it.com/tutorials/minecraft/minelist/how-to-install-votifier)

2. [마인리스트 Votifier(NuVotifier) 설정은 어떻게 해야 되나요?](https://docs.stella-it.com/tutorials/minecraft/minelist/how-to-integrate-votifier)

[참고](https://docs.stella-it.com/tutorials/minecraft/how-to-connect-domain)


### 10. 호스팅 사용 기간 연장

#### 10.1. 호스팅 사용 기간 연장 하려고 하는데. 어떻게 해야하나요?

1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 호스팅 연장하고자 하는 **가상머신**을 클릭합니다.
4. 우측 상단의 **[사용기간 연장]** 버튼을 누릅니다.
    1. 만약 휴대폰일 경우, **톱니바퀴 모양 버튼**을 누른 다음 [**사용기간 연장]** 버튼을 누릅니다.
5. 결제까지 완료한다면, 성공적으로 **호스팅 연장**이 되었어요!

#### 10.2. 더 이상 호스팅을 이용하지 않고자 합니다. 어떻게 해야하나요?

더 이상 호스팅을 이용하지 않을 계획이신가보군요! 그렇다면, 호스팅 자동 결제가 켜져있는지 확인해주세요. 

1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 자동 결제 비활성화하고자 하는 가상머신을 클릭합니다.
4. 우측 상단의 **[자동 결제 해제]** 버튼을 누릅니다.
5. **`자동 결제가 해제되었습니다`** 라는 메시지가 나왔다면, 성공적으로 완료가 되었습니다.

그 다음, 만료일까지 자유롭게 사용 후 호스팅 연장을 하지 않으시면 됩니다. 

#### 10.3. 호스팅 연장을 자동 연장(결제) 하고자 합니다. 어떻게 해야하나요?

Stella IT에서 생성한 가상 머신이 5일 전, **미리 등록해둔 카드** 또는 **간편 결제 수단**으로 자동으로 연장할 수 있는 기능이 있어요!

우선, 결제 수단을 미리 등록을 해야 해요! 결제 수단에 대해 자세한 설명이 적혀 있는 아래에 있는 링크로 텔레포트 해보세요!

> [https://docs.stella-it.com/faq/payments/how-to-set-billing-card](https://docs.stella-it.com/faq/payments/how-to-set-billing-card)

**결제 수단을 잘 등록을 하셨나요?** 그렇다면, 계속 이어서 자동 결제 활성화를 해보도록 할게요! 자세한 설명이 적혀 있는 링크로 텔레포트 해주세요!

> [https://docs.stella-it.com/faq/console/how-to-set-billing](https://docs.stella-it.com/faq/console/how-to-set-billing)

이제 끝났어요!
