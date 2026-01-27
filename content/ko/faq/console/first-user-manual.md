---
title: 처음 사용자 매뉴얼 
description: 처음 가상 머신 구매 후, 자주 질문하는 내용들을 모아봤어요!

category: Stella IT Console
---

## 처음 사용자 매뉴얼

이 문서에서는 처음 사용하면서, 자주 질문하는 내용들을 모아봤어요!  
먼저, 호스팅부터 설명을 해드리고, 문서를 시작하도록 하겠습니다.

### 1. 호스팅? 그게 뭔가요?

호스팅은 서버 컴퓨터의 일부를 가상화 기술로 분리하여 각 사용자가 독립된 가상 컴퓨터를 원격으로 이용할 수 있도록 임대하는 서비스입니다.

### 2. 임대를 하면 어떻게 이용해야 하나요?

보통 임대한 환경에 설치된 운영체제에 따라 다르지만,  
윈도우 서버인 경우 윈도우 기본 프로그램인 **원격 데스크톱 연결 프로그램** 통해서 연결할 수 있습니다.  
리눅스 서버인 경우 **SSH** 프로토콜을 사용할 수 있는 **프로그램**을 통해서 연결할 수 있습니다.

### 3. 그렇다면, 원격 접속 방법에 대해 설명된 글이 없을까요?

네, 구매하신 인스턴스 원격 접속 방법에 대해 설명해둔 문서가 존재합니다.   
[원격 접속 가이드](/faq/console/how-to-remote-access)를 참고해 주세요. 접속 환경에 따라 방법이 다르니 해당 문서에서 확인하실 수 있습니다.

### 4. 원격 접속 방법은 알겠는데, 접속 정보는 어디서 확인하나요?

원격 접속 정보 확인 방법을 알려드릴게요. 아래 단계를 따라 해주세요.  
[https://console.stella-it.cloud/](https://console.stella-it.cloud/) 사이트 접속 → **[인스턴스](https://console.stella-it.cloud/instances)** 탭 클릭 → 원격 접속하고자 하는 가상 머신 선택
![Remote](https://github.com/Stella-IT/docs/assets/70272129/25422077-443e-4f7a-b87b-6ea3312334b9)

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 윈도우 서버일 경우, 아래와 같이 나옵니다.
![Remote1](https://github.com/Stella-IT/docs/assets/70272129/d5d1468f-5195-496b-aa62-5f02f8442d3d)

> 설치한 운영체제: 윈도우일 경우, 위 사진과 같습니다.

→ **[원격 접속]** 클릭할 경우, 만약 설치한 운영체제가 리눅스 서버일 경우, 아래와 같이 나옵니다. 

![Remote2](https://user-images.githubusercontent.com/36693200/129474352-4ff17bb2-ddd0-4466-a549-a2fb7124616c.png)

> 설치한 운영체제: 리눅스일 경우, 위 사진과 같습니다.

[참고(Windows)](/faq/console/how-to-remote-access#windows)
[참고(Linux)](/faq/console/how-to-remote-access#linux)

### 5. 원격 접속해서 Internet Explorer로 인터넷을 하려고 했는데, "보안 강화 구성" 때문에 인터넷이 안돼요!

보안상의 이유로, **인터넷 익스플로러(Internet Explorer)**는 **보안 강화 구성**이 켜져 있습니다.
그렇기 때문에 더 안전한 인터넷 브라우저 사용을 권장해드리고 있으며 기본적으로 설치되어 있는 **Microsoft Edge** 브라우저를 사용하시거나,  
다른 인터넷 브라우저(Chrome, Firefox 등)를 설치하여 사용하시길 권장드립니다.

### 6. 자바 설치는 어떻게 해야 하나요?

Java를 설치하려면 OpenJDK를 설치하는 것을 권장드립니다.  
1. [Adoptium(이클립스 템우린) 다운로드 페이지](https://adoptium.net/temurin/releases/)로 이동합니다.  
2. 자신의 마인크래프트 버전에 맞는 Java 버전을 선택합니다.
    *   **Java 17:** Minecraft 1.18 ~ 1.20.4
    *   **Java 8:** Minecraft 1.12.2 등
3. **Operating System**은 `Windows`, **Architecture**는 `x64`를 선택합니다.  
4. `.msi` 확장자의 설치 파일을 다운로드하여 실행하고, 설치 마법사의 지시에 따라 설치를 완료합니다. 설치 과정에서 `Set JAVA_HOME variable` 옵션을 선택하는 것이 좋습니다.
5. 명령 프롬프트(CMD) 또는 PowerShell을 열고 다음 명령어를 입력하여 Java가 올바르게 설치되었는지 확인합니다.
```cmd
java -version
```
6. 설치된 Java 버전이 올바르게 출력되면, Java가 성공적으로 설치된 것입니다.

### 7. 서버 파일은 어떻게 이동하나요?
서버 내 파일을 이동하실 경우, RDP(원격 데스크톱 연결) 프로그램을 통한 복사 및 붙여넣기 기능을 사용하지 않는 것을 권장드립니다.  
대신 인터넷 브라우저를 통하여 Google Drive, 네이버 메일 등의 클라우드 스토리지 서비스를 이용하여 파일을 업로드 및 다운로드하는 방법을 추천드립니다.  
하지만 처음 서버 운영하기 때문에 서버를 여는 방법에 대해 모르신다면, [마인크래프트 서버 시작하기](/tutorials/minecraft/getting-started) 문서를 참고 부탁드리겠습니다.

### 8. Minecraft 서버 접속 주소가 필요해요.

기본으로 제공하는 주소를 확인하는 방법을 알려드릴게요.

1. Stella IT Console을 접속합니다.
2. [인스턴스](https://console.stella-it.cloud/instances) 탭을 클릭합니다.
3. 접속하고자 하는 인스턴스 **[상세 정보 보기]**를 클릭합니다.
4. **[IP 정보]**을 클릭합니다.
5. 나타난 공인 IP를 확인합니다.

공인 IP 주소를 통해 접속하실 수 있습니다.
*마인크래프트 서버 주소를 새로 만드시고 싶다면 [해당 문서](/tutorials/minecraft/how-to-connect-domain)를 참고해주세요.

### 9. 마인리스트 서버 등록과 추천 관련 설정에 대해 궁금합니다.

[마인리스트에 서버 등록하는 방법이 궁금해요!](/tutorials/minecraft/minelist/how-to-register-my-server)

추천 보상(Votifier) 플러그인 설정 방법이 궁금하신가요?  
설치부터 설정 방법까지 하단 링크를 통해 확인하실 수 있습니다.

1. [Votifier(NuVotifier) 설치는 어떻게 하나요?](/tutorials/minecraft/minelist/how-to-install-votifier)

2. [마인리스트 Votifier(NuVotifier) 설정은 어떻게 해야 되나요?](/tutorials/minecraft/minelist/how-to-integrate-votifier)

[참고](/tutorials/minecraft/how-to-connect-domain)


### 10. 호스팅 사용 기간 연장

#### 10.1. 호스팅 사용 기간을 연장하려면 어떻게 해야 하나요?

1. Stella IT Console을 접속합니다.
2. [인스턴스](https://console.stella-it.cloud/instances) 탭을 클릭합니다.
3. 호스팅 연장하고자 하는 **인스턴스**을 클릭합니다.
4. 우측 상단의 **[사용기간 연장]** 버튼을 누릅니다.  
만약 휴대폰일 경우, **톱니바퀴 모양 버튼**을 누른 다음 [**사용기간 연장]** 버튼을 누릅니다.
5. 결제까지 완료한다면, 성공적으로 **호스팅 연장**이 되었어요!

#### 10.2. 더 이상 호스팅을 이용하지 않으려면 어떻게 해야 하나요?

더 이상 호스팅을 이용하지 않으실 계획이시군요. 먼저 자동 결제가 켜져 있는지 확인해 주세요. 

1. Stella IT Console을 접속합니다.
2. [인스턴스](https://console.stella-it.cloud/instances) 탭을 클릭합니다.
3. 자동 결제 비활성화하고자 하는 인스턴스을 클릭합니다.
4. 우측 상단의 **[자동 결제 해제]** 버튼을 누릅니다.
5. **`자동 결제가 해제되었습니다`** 라는 메시지가 나왔다면, 성공적으로 완료가 되었습니다.

그 다음, 만료일까지 자유롭게 사용 후 호스팅 연장을 하지 않으시면 됩니다. 

#### 10.3. 호스팅을 자동 연장(결제)하려면 어떻게 해야 하나요?

Stella IT에서는 만료 5일 전에 **미리 등록해둔 카드** 또는 **간편 결제 수단**으로 자동 연장하는 기능을 제공해요.

먼저 결제 수단을 등록해야 해요. 아래 가이드를 참고해 주세요.

> [https://docs.stella-it.com/faq/payments/how-to-set-billing-card](/faq/payments/how-to-set-billing-card)

**결제 수단을 등록하셨나요?** 그렇다면 이제 자동 결제를 활성화해 볼게요. 아래 가이드를 확인해 주세요.

> [https://docs.stella-it.com/faq/console/how-to-set-billing](/faq/console/how-to-set-billing)


### 11. 원격 접속 비밀번호를 바꾸고 싶은데, 어떻게 해야 하나요?

#### 11.1. Linux
1. 호스팅에 접속합니다.
2. **``passwd``**를 입력합니다.
3. ``현재 이용 중인 계정의 비밀번호``를 입력합니다.
4. ``새로 변경하고 싶은 비밀번호``를 입력합니다.
5. ``새로 변경하고 싶은 비밀번호``를 재입력합니다.

#### 11.2. Windows
1. 호스팅에 접속합니다.
2. **``제어판``**에 들어갑니다.
3. **``사용자 계정``**에 클릭하고 **``사용자 계정``**에 클릭합니다.
4. **``다른 계정 관리``**를 클릭합니다.
5. ``Administrator``을 누른 후, **``암호 변경``**을 누릅니다.
6. 화면에 표시되는 양식에 따라 암호를 변경합니다.