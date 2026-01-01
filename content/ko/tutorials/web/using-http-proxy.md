---
title: HTTP Proxy를 통해 웹 서버 열기
description: Stella IT 인스턴스에서 HTTP 프로토콜을 사용하는 방법을 설명합니다.

category: Tutorials/web
---

<alert type="danger">
이 문서는 더 이상 사용되지 않습니다. 2026년 1월 1일부터 Stella IT HTTP Proxy는 더 이상 지원되지 않습니다.
</alert>

<alert type="warning">
HTTP Proxy에 Cloudflare, Fastly 등과 같은 DDoS 공격 보호를 위한 타사 서비스를 적용하지 않는 것이 좋습니다.<br>
Stella IT HTTP Proxy에는 이미 DDoS 보호가 포함되어 있어 L7 공격 발생시 해당 Proxy의 IP가 공격자로 오인 차단되면 대부분의 사용자가 접속하지 못하게 됩니다.<br>
또한, IP Forwarding 처리에 문제가 발생할 수 있는 점을 참고하세요.
</alert>

## HTTP Proxy를 사용하여 Apache, NGINX, IIS 등의 HTTP 프로토콜 서버 열기
자신이 열려는 서버가 정규 포트(80, 443 포트) 를 사용하는 경우 따로 설정하실 필요 없이,  
이용이 가능합니다! 아래를 따라 설정해 주세요.

1. 자신의 인스턴스에 Apache, NGINX, IIS 등의 웹 서버를 구성합니다. 이때 사용하는 포트를 아래에서는 `내부 포트`라고 부릅니다.  
2. 자신이 이용하는 도메인이 `CNAME` 레코드를 지원하는지 확인 합니다. 이때 사용하는 도메인을 아래에서는 `연결 도메인`이라고 부릅니다.
3. Stella IT Console의 인스턴스 메뉴 HTTP Proxy 설정이 보이는지 확인합니다.  
   (보이지 않는 경우에는 해당 인스턴스에서는 HTTP Proxy를 사용할 수 없습니다. Stella IT에 문의해 주세요.)  
4. HTTP Proxy 설정의 [추가] 을 클릭해 주세요.
5. 도메인 입력란에 `연결 도메인`을 입력해 주세요.  
   포트는 인스턴스 내부에서 실행 중인 서버의 포트에 맞게 입력하세요. HTTP는 80, HTTPS는 443입니다.
6. 생성된 HTTP Proxy의 [조회]를 클릭하세요.
7. `연결 도메인`의 네임서버 서비스에 접속해 해당 도메인의 CNAME 레코드를 안내된대로 설정하세요.
8. DNS 전파가 끝난 후, 해당 도메인 이름으로 웹페이지에 접속하세요. (80, 443 포트로 접속할 수 있습니다)

(HTTPS를 설정하고 싶다면, HTTP Proxy 설정에서 인증서 발급받기를 선택하세요)

## 사용자의 실제 IP 확인하기
HTTP Proxy를 사용하면 사용자의 아이피가 `10.18.0.100`으로 표시됩니다. 사용자의 실제 아이피를 확인하려면 아래 정의된 특정 헤더를 사용해야 합니다.

### X-Forwarded-For
HTTP Proxy가 프록시한 모든 요청에는 `X-Forwarded-For` 헤더에 사용자의 실제 아이피를 포함하여 서버에 요청됩니다.
이 때, 서버로 수신되는 모든 요청에서 오는 `X-Forwarded-For` 요청을 신뢰해서는 안됩니다.
반드시 사용자의 요청이 `10.18.0.100`에서 요청되었는지 확인하세요. 그렇지 않다면 HTTP Proxy에서 프록시된 요청이 아니며, 사용자가 악의적인 목적으로 서버에 잘못된 요청을 보내고 있는 것입니다.
`X-Forwarded-For` 헤더의 적용 방법은 사용 중인 웹 서버 엔진에 따라 다릅니다.

#### Nginx
Nginx의 Server Block에서 아래 구성을 추가합니다.
```
set_real_ip_from 10.18.0.100/32;
real_ip_header X-Forwarded-For;
```

#### Express(Node.js)
Express 모듈의 최상단에 아래 코드를 붙여넣으세요.
```
app.set('trust proxy', '10.18.0.100')
```

#### Fastify(Node.js)
Fastify 모듈 정의에 trustProxy 옵션을 추가하세요.
```
const fastify = Fastify({ trustProxy: "10.18.0.100" })
```

#### Django(Python)
10.18.0.100를 허용하도록 ALLOWED_HOSTS를 설정하세요.
```
ALLOWED_HOSTS = ['10.18.0.100']
```

#### FastAPI(Python)
forwarded-allow-ips 옵션을 설정하세요.  
자세한 내용은 [여기](https://fastapi.tiangolo.com/advanced/behind-a-proxy/)를 참고하세요
