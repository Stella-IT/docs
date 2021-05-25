---
title: HTTP Proxy는 무엇이고 어떻게 쓰는 건가요?
description: Stella IT HTTP Proxy를 알아봅니다.

category: FAQ/Console
---

## HTTP Proxy란?
Stella IT HTTP Proxy는 Stella IT 에서 웹 서버 (HTTP/HTTPS) 서버를 열 수 있도록 Stella IT 클러스터 정규 포트로 들어오는 연결을 포워드 해주는 `Reverse Proxy` 서비스 입니다.  
(Public IP가 제공되는 HFQ, Dedicated 요금제의 경우 해당 설정 없이 웹 서비스 운용이 가능합니다.)  
  
Apache, NGINX, express (node.js), dynmap (Minecraft) 등 웹을 통해 서비스 해야 하는 경우, 자신이 소유하고 있는 도메인을 등록하여, 해당 도메인으로 들어오는 HTTP/HTTPS 연결을 자신의 서버로 연결되도록 설정 할 수 있습니다.  

해당 프로그램의 소스코드는 공개 되어있습니다. [Repository](https://github.com/Stella-IT/http-cluster-proxy)

## 어떻게 사용하나요?
1. 자신의 가상 머신에 HTTP 또는 HTTPS 서버를 구성합니다.  
   (정규포트 (예. 80/443)가 아닌 경우, 포트번호를 기억해 주세요.)
2. 자신이 이용하는 도메인이 `CNAME` 레코드를 지원하는 지 확인 합니다.  
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 HTTP Cluster Proxy 대응을 요청하고 건너뛰어 주세요.)
3. 연동할 가상머신의 상세 페이지로 이동해 하단의 HTTP Proxy 설정이 뜨는지 확인합니다.  
   (해당 섹션이 존재하지 않는 경우, 미지원 클러스터입니다. Stella IT에 지원 예정일을 문의해 주세요.)  
4. HTTP Proxy 설정의 [새로운 프록시 호스트이름 등록] 을 클릭해 주세요.
5. 등록하실 호스트이름을 입력해 주세요. (서브도메인을 지원, 와일드 카드 프록시 미지원)
6. (정규포트가 아닌 경우) 특수 설정 사용을 체크 한 후, 이용할 포트 번호를 입력하세요. HTTPS 서버인 경우, HTTPS 사용 여부옆에 체크해 주세요.
7. 생성된 HTTP Proxy 호스트이름을 클릭하세요.
8. 자신의 도메인 네임서버 서비스에 접속해 해당 서브도메인/도메인의 CNAME 레코드를 상세 설정페이지에 나온대로 설정하세요.
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 건너 뛰어주세요.)
9. DNS 전파가 끝난 후, 해당 도메인 이름으로 웹페이지에 접속하세요.

## HTTPS 설정
인증서 설정이 되어있지 않은경우, 기본적으로 Stella IT HTTP Proxy는, `Stella IT Cloud Disposable Cryptography Team` 에서 발급한 자체서명 인증서를 사용하게 됩니다.  
  
신뢰할 수 있는 인증서로 변경하기 위해서는 아래 절차를 따라주세요.

### Let's Encrypt 인증서 사용
[Stella IT ACME Wizard](https://github.com/Stella-IT/acme-wizard)를 사용해 인증서를 Let's Encrypt 인증서를 발급받아 HTTP Proxy에 적용할 수 있습니다.  
  
[ACME Wizard로 Let's Encrypt 인증서 설정](/faq/console/setup-letsencrypt-with-acme-wizard)

### 자체 인증서 사용 (BYOC, Bring your own certificate)
Stella IT HTTP Proxy SSL 상세 설정에서 HTTPS 인증서를 수동으로 업로드 하실 수 있습니다.  

(설명 추가 예정)


