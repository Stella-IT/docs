---
title: HTTP Proxy를 통해 웹 서버 열기
description: Stella IT의 가상서버에서 웹 서버를 열어봅시다.

category: Tutorials/web
---

<alert type="warning">
이 내용은 Stella IT Highend, 그리고 Save 요금제에 한합니다.<br>
공인 IP가 제공되는 Dedicated, HFQ 요금제의 경우, 포트를 개방하는 경우 자동으로 할당된 공인 IP로 개방되게 됩니다.
</alert>

<alert type="warning">
HTTP Proxy에 Cloudflare, StackPath 등의 DDoS 공격 보호를 위한 Reverse Proxy를 적용하지 마세요.<br>
Stella IT HTTP Proxy에는 이미 DDoS가 포함되어 있으며, 별도의 Reverse Proxy를 사용할 경우 IP Forwarding 오류 등 문제가 발생할 수 있습니다.
</alert>

## HTTP Proxy를 통해 Apache, NGINX, IIS 등의 정규 포트를 사용하는 서버 열기
자신이 열려는 서버가 정규포트(80, 443 포트) 를 사용하는 경우 따로 설정하실 필요 없이,  
이용이 가능합니다! 아래를 따라 설정해 주세요.

1. 자신의 가상 머신에 Apache, NGINX, IIS 등의 웹 서버를 구성합니다.  
2. 자신이 이용하는 도메인이 `CNAME` 레코드를 지원하는 지 확인 합니다.  
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 HTTP Cluster Proxy 대응을 요청하고 건너뛰어 주세요.)
3. 연동할 가상머신의 상세 페이지로 이동해 하단의 HTTP Proxy 설정이 뜨는지 확인합니다.  
   (해당 섹션이 존재하지 않는 경우, 미지원 클러스터입니다. Stella IT에 지원 예정일을 문의해 주세요.)  
4. HTTP Proxy 설정의 [새로운 프록시 호스트이름 등록] 을 클릭해 주세요.
5. 등록하실 호스트이름을 입력해 주세요. (서브도메인을 지원, 와일드 카드 프록시 미지원)
6. 생성된 HTTP Proxy 호스트이름을 클릭하세요.
7. 자신의 도메인 네임서버 서비스에 접속해 해당 서브도메인/도메인의 CNAME 레코드를 상세 설정페이지에 나온대로 설정하세요.
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 건너 뛰어주세요.)
8. DNS 전파가 끝난 후, 해당 도메인 이름으로 웹페이지에 접속하세요. (포트는 붙이지 말아주세요!)

설정이 완료되었다면, 이제 인터넷으로 자신의 웹사이트를 맘껏 뽐내 보세요!  
(HTTPS를 설정하고 싶다면, [ACME Wizard로 Let's Encrypt 인증서 설정하기](/faq/console/setup-letsencrypt-with-acme-wizard)를 확인해 주세요!)

## HTTP Proxy를 통해 정규 포트를 사용하지 않는 서버 열기
Node.JS 로 여는 express 와 같은 서버나 Python Flask등을 이용해 여는 대부분 기본 설정 상 정규포트를 사용하지 않지만,  
HTTP Proxy를 사용하면 비정규 포트 (예, 8080) 을 정규포트를 통해 접속할 수 있어요!  
아래를 따라 설정해 보세요!  

1. 자신의 가상 머신에 HTTP 또는 HTTPS 서버를 엽니다.
2. 서버가 열린 포트를 확인 합니다. (여기서는 열린 포트가 `8080` 이라고 가정할께요.)
3. 자신이 이용하는 도메인이 `CNAME` 레코드를 지원하는 지 확인 합니다.  
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 HTTP Cluster Proxy 대응을 요청하고 건너뛰어 주세요.)
4. 연동할 가상머신의 상세 페이지로 이동해 하단의 HTTP Proxy 설정이 뜨는지 확인합니다.  
   (해당 섹션이 존재하지 않는 경우, 미지원 클러스터입니다. Stella IT에 지원 예정일을 문의해 주세요.)  
5. HTTP Proxy 설정의 [새로운 프록시 호스트이름 등록] 을 클릭해 주세요.
6. 등록하실 호스트이름을 입력해 주세요. (서브도메인을 지원, 와일드 카드 프록시 미지원)
7. 특수 설정 사용을 체크 한 후, 2번에서 기억해둔 서버를 연 포트 번호를 입력하세요. 여기서는 `8080` 이겠죠?
8. 자신이 설정한 포트가 HTTPS를 사용한다면, **HTTPS 사용을 체크해주세요.**
9. 생성된 HTTP Proxy 호스트이름을 클릭하세요.
10. 자신의 도메인 네임서버 서비스에 접속해 해당 서브도메인/도메인의 CNAME 레코드를 상세 설정페이지에 나온대로 설정하세요.
   (Stella IT에서 제공하는 `mcsv.kr` 도메인의 경우 건너 뛰어주세요.)
11. DNS 전파가 끝난 후, 해당 도메인 이름으로 웹페이지에 접속하세요. *(포트없이 접속하는 거, 잊지 마세요!)*

## 사용자의 실제 IP 확인하기
HTTP Proxy를 사용하면 사용자의 아이피가 `192.168.1.100`으로 표시됩니다. 사용자의 실제 아이피를 확인하려면 아래 정의된 특정 헤더를 사용해야 합니다.

### X-Forwarded-For
HTTP Proxy가 프록시한 모든 요청에는 `X-Forwarded-For` 헤더에 사용자의 실제 아이피를 포함하여 서버에 요청됩니다.
이 때, 서버로 수신되는 모든 요청에서 오는 `X-Forwarded-For` 요청을 신뢰해서는 안됩니다.
반드시 사용자의 요청이 `192.168.1.100`에서 요청되었는지 확인하세요. 그렇지 않다면 HTTP Proxy에서 프록시된 요청이 아니며, 사용자가 악의적인 목적으로 서버에 잘못된 요청을 보내고 있는 것입니다.
`X-Forwarded-For` 헤더의 적용 방법은 사용 중인 웹 서버 엔진에 따라 다릅니다.

#### Nginx
Nginx에서 아래 구성을 적용합니다.
```
set_real_ip_from 192.168.1.100/32;
real_ip_header X-Forwarded-For;
```

#### Express(Node.js)
Express 모듈의 최상단에 아래 코드를 붙여넣으세요.
```
app.set('trust proxy', '192.168.1.100')
```

#### Fastify(Node.js)
Fastify 모듈 정의에 아래 구성을 추가하세요.
```
const fastify = Fastify({ trustProxy: "192.168.1.100" })
```

설정이 완료되었다면, 이제 인터넷으로 자신의 웹사이트를 맘껏 뽐내 보세요!  
(HTTPS를 설정하고 싶다면, [ACME Wizard로 Let's Encrypt 인증서 설정하기](/faq/console/setup-letsencrypt-with-acme-wizard)를 확인해 주세요!)
