---
title: ACME Wizard로 Let's Encrypt 인증서 설정
description: ACME Wizard로 Stella IT HTTP Proxy에 Let's Encrypt 인증서를 발급/갱신하는 방법을 알아봅니다.

category: Stella IT HTTP Proxy
deprecated: true
---

<alert type="danger">
이 문서는 더 이상 사용되지 않습니다. 2026년 1월 1일부터 Stella IT HTTP Proxy는 더 이상 지원되지 않습니다.
</alert>

## 준비사항
* [Stella IT ACME Wizard](https://github.com/Stella-IT/acme-wizard) 최신 버전
* 연동할 Stella IT HTTP Proxy 대상
* HTTP Proxy 대상이 연계 되어있는 Stella IT 계정
* HTTP Proxy와 연동되어있는 도메인

<alert type="danger">
ACME Wizard를 이용 중일때에는 설정이 덮어씌워질 위험이 있으므로, Stella IT Console 상의 HTTP Proxy 설정을 제어해서는 절대 안됩니다.
</alert>

## 적용 방법
1. [Stella IT ACME Wizard Releases](https://github.com/Stella-IT/acme-wizard/releases/latest) 에서 최신 버전을 다운 받습니다.
   (자신의 컴퓨터가 윈도우라면 `-win.exe` 으로 끝나는 파일을 받고, macOS라면 `-macos`, Linux 라면 `-linux` 를 받습니다.)  
2. 다운로드한 파일을 더블 클릭합니다.
3. 다음과 같이 특정 URL에 접속한 후 발생하는 코드를 붙여 넣으라는 창이 뜨면, 해당 URL을 복사해 웹브라우저에 붙여넣은 후 로그인을 진행합니다.  
   ![image](https://user-images.githubusercontent.com/27724108/119505540-07ec1580-bda8-11eb-8820-9abd08f762ed.png)
4. Stella IT Accounts 에서 로그인할 계정을 선택합니다.
5. `Stella IT ACME Wizard` 에 권한을 허용하는 부분에 대해 `허용`을 누릅니다.
6. Stella IT Accounts 에서 발생하는 코드를 복사해 터미널 창에 붙여 넣습니다.
   ![image](https://user-images.githubusercontent.com/27724108/119505854-56011900-bda8-11eb-9019-8f74d6898fa4.png)  
7. 로그인이 진행됩니다. 본인 이름이 맞는지 확인하세요.
8. 인증서를 발급할 도메인을 선택하세요.  
   ![image](https://user-images.githubusercontent.com/27724108/119506124-9496d380-bda8-11eb-81c4-648307fc106d.png)
9. Let's Encrypt 계정 설정
   *  (2번째 이후의 경우) `acme.credentials.json` 에 캐시된 인증을 사용 할 수 있습니다. y를 누르면 캐시된 Let's Encrypt 인증을 사용합니다.
   * (`acme.credentials.json`이 없거나 캐시된 인증을 사용하지 않겠다고 선택 하였을 때, Let's Encrypt 인증서를 전에 발급 받은 적이 있는 경우) Stella IT Console 에 사전에 등록된 Let's Encrypt 계정을 이용해 발급을 신청 할 수 있습니다. 이용할 계정의 도메인 이름을 선택하여 기존 계정을 이용해 인증을 진행하거나 `Other` 를 선택해 새로운 계정을 생성하세요.
     ![image](https://user-images.githubusercontent.com/27724108/119506707-23a3eb80-bda9-11eb-81d1-ac12000f0028.png)

   <alert type="warning">
      인증서는 되도록 하나의 계정으로 생성하는 것을 권장합니다.
   </alert>

   * (`Other` 를 선택했거나 최초 생성의 경우) 인증키를 새로 생성할 지 선택합니다. 새로 생성을 원하는 경우 `y` 를 눌러 생성을 진행합니다.  
      ![image](https://user-images.githubusercontent.com/27724108/119507272-a88f0500-bda9-11eb-899c-d5a9bfb0662c.png)
10. Let's Encrypt의 이용약관에 동의합니다.
   ![image](https://user-images.githubusercontent.com/27724108/119507481-d6744980-bda9-11eb-85f2-17e0584681ff.png)
11. Let's Encrypt 계정 생성에 사용할 이메일을 선택합니다.  
   (엔터를 누르면 Stella IT Accounts 에서 가져온 기본값을 사용합니다.)  
   ![image](https://user-images.githubusercontent.com/27724108/119507607-f1df5480-bda9-11eb-8d55-646faaa650f8.png)
12. ACME Wizard가 Stella IT Console 과 Let's Encrypt 서버와 통신하여 자동으로 인증 절차를 진행합니다.
   ![image](https://user-images.githubusercontent.com/27724108/119508386-ada08400-bdaa-11eb-908b-e8f75fa34962.png)


   