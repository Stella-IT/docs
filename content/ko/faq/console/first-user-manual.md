---
title: 처음 사용자 매뉴얼 
description: 처음 가상 머신 구매 후, 자주 질문하는 내용들을 모아봤어요!

category: FAQ/Console
---

## 처음 사용자 매뉴얼

이 문서에서는 처음 사용하면서, 자주 질문하는 내용들을 모아봤어요!

먼저, 호스팅부터 설명을 해드리고, 문서를 시작하도록 하겠습니다.

### 1. 호스팅? 그게 뭔가요?

호스팅은 서버 컴퓨터의 일정 공간을 이용할 수 있도록 임대하는 서비스입니다.

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

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e44a4eb7-7b1c-478b-bef2-33eafa08eb08/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210815T091416Z&X-Amz-Expires=86400&X-Amz-Signature=0f33d9f5db3e20e572b8e7f8508656fdbd0c4725ad9ca8e0e5b88aa54fcda14e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 윈도우 서버일 경우, 아래와 같이 나옵니다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a43b4b46-4a2f-4a4a-a44d-3d0861ad91e2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210815T091428Z&X-Amz-Expires=86400&X-Amz-Signature=acbf1b2fbf3c6963d1da4b875133b49078e30db2aaf3b4d5689a5660db6f1a53&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

설치한 운영체제: 윈도우일 경우, 사진입니다.

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 리눅스 서버일 경우, 아래와 같이 나옵니다. 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/29240a6b-d778-4d61-a2ca-82cb5bd79bc9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210815T091436Z&X-Amz-Expires=86400&X-Amz-Signature=d9f81f8871d51232542aef2fec40d38bc7f77d8517d59c90386ffc359acb357b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

설치한 운영체제: 리눅스일 경우, 사진입니다.

### 5. 원격 접속해서 Internet Explorer로 인터넷을 하려고 했는데, "보안 강화 구성" 때문에 인터넷이 안돼요!

보안상의 이유로, 인터넷 익스플로러(**Internet Explorer)**는 **보안 강화 구성**이 켜져 있습니다.

그렇기 때문에 바탕화면에 보실 경우, **"Essentials Utility"** 이름을 갖고 있는 폴더가 존재합니다.

"Internet Browser" 폴더 클릭 → 브라우저 ex) Firefox, Chromium 중 선택 후 설치 진행해 주시면 됩니다.

*** 보안 강화 구성:** 보안의 위험성이 있는 웹 사이트에 사용자 서버가 노출되는 것을 줄이기 위해 존재합니다.

### 6. 자바 설치는 어떻게 해야되나요?

1. 바탕화면에 있는 **"Essentials Utility"**  폴더 클릭
2. "Java" 폴더 클릭
3. 열고자 하는 서버 버전에 맞게 자바 버전을 선택 후 폴더를 클릭합니다. ex) 1.12.2일 경우, Java 8 (OpenJDK 8 Hotspot) 선택합니다. 
4. 폴더 안에 있는 설치 파일을 통해 자바를 설치합니다.

### 7. 호스팅 사용 기간  연장

#### 7.1. 호스팅 사용 기간 연장 하려고 하는데. 어떻게 해야하나요?

1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 호스팅 연장하고자 하는 **가상머신**을 클릭합니다.
4. 우측 상단의 **[사용기간 연장]** 버튼을 누릅니다.
    1. 만약 휴대폰일 경우, **톱니바퀴 모양 버튼**을 누른 다음 [**사용기간 연장]** 버튼을 누릅니다.
5. 결제까지 완료한다면, 성공적으로 **호스팅 연장**이 되었어요!

#### 7.2. 더 이상 호스팅을 이용하지 않고자 합니다. 어떻게 해야하나요?

더 이상 호스팅을 이용하지 않을 계획이신가보군요! 그렇다면, 호스팅 자동 결제가 켜져있는지 확인해주세요. 

1. Stella IT Console을 접속합니다.
2. [가상머신](https://console.stella-it.com/vm) 탭을 클릭합니다.
3. 자동 결제 비활성화하고자 하는 가상머신을 클릭합니다.
4. 우측 상단의 **[자동 결제 해제]** 버튼을 누릅니다.
5. **"자동 결제가 해제되었습니다"**라는 메시지가 나왔다면, 성공적으로 완료가 되었습니다.

그 다음, 만료일까지 자유롭게 사용 후 호스팅 연장을 하지 않으시면 됩니다. 

#### 7.3. 호스팅 연장을 자동 연장(결제) 하고자 합니다. 어떻게 해야하나요?

Stella IT에서 생성한 가상 머신이 5일 전, **미리 등록해둔 카드** 또는 **간편 결제 수단**으로 자동으로 연장할 수 있는 기능이 있어요!

우선, 결제 수단을 미리 등록을 해야 해요! 결제 수단에 대해 자세한 설명이 적혀 있는 아래에 있는 링크로 텔레포트 해보세요!

> [https://docs.stella-it.com/faq/payments/how-to-set-billing-card](https://docs.stella-it.com/faq/payments/how-to-set-billing-card)

**결제 수단을 잘 등록을 하셨나요?** 그렇다면, 계속 이어서 자동 결제 활성화를 해보도록 할게요! 자세한 설명이 적혀 있는 링크로 텔레포트 해주세요!

> [https://docs.stella-it.com/faq/console/how-to-set-billing](https://docs.stella-it.com/faq/console/how-to-set-billing)

이제 끝났어요!