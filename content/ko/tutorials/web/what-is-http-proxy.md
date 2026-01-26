---
title: HTTP Proxy는 무엇이고 어떻게 쓰는 건가요?
description: Stella IT HTTP Proxy를 알아봅니다.

category: Stella IT HTTP Proxy
---

<alert type="danger">
이 문서는 더 이상 사용되지 않습니다. 2026년 1월 1일부터 Stella IT HTTP Proxy는 더 이상 지원되지 않습니다.
</alert>

<alert type="warning">
이 내용은 Stella IT Highend, 그리고 Save 요금제에 한합니다.<br>
공인 IP가 제공되는 Dedicated, HFQ 요금제의 경우, 포트를 개방하는 경우 자동으로 할당된 공인 IP로 개방되게 됩니다.
</alert>

## HTTP Proxy란?
Stella IT HTTP Proxy는 Stella IT 에서 웹 서버 (HTTP/HTTPS) 서버를 열 수 있도록 Stella IT 클러스터 정규 포트로 들어오는 연결을 포워드 해주는 `Reverse Proxy` 서비스 입니다.  
  
Apache, NGINX, express (node.js), dynmap (Minecraft) 등 웹을 통해 서비스 해야 하는 경우, 자신이 소유하고 있는 도메인을 등록하여, 해당 도메인으로 들어오는 HTTP/HTTPS 연결을 자신의 서버로 연결되도록 설정 할 수 있습니다.  

해당 프로그램의 소스코드는 공개 되어있습니다. [Repository](https://github.com/Stella-IT/http-cluster-proxy)

## 어떻게 사용하나요?
[이 가이드](/tutorials/web/using-http-proxy)를 참고해 주세요.

## HTTPS 설정
인증서 설정이 되어있지 않은경우, 기본적으로 Stella IT HTTP Proxy는, `Stella IT Cloud Disposable Cryptography Team` 에서 발급한 자체서명 인증서를 사용하게 됩니다.  
  
신뢰할 수 있는 인증서로 변경하기 위해서는 아래 절차를 따라주세요.

### Let's Encrypt 인증서 사용
[Stella IT ACME Wizard](https://github.com/Stella-IT/acme-wizard)를 사용해 인증서를 Let's Encrypt 인증서를 발급받아 HTTP Proxy에 적용할 수 있습니다.  
  
[ACME Wizard로 Let's Encrypt 인증서 설정](/tutorials/web/setup-letsencrypt-with-acme-wizard)

### 자체 인증서 사용 (BYOC, Bring your own certificate)
Stella IT HTTP Proxy SSL 상세 설정에서 HTTPS 인증서를 수동으로 업로드 하실 수 있습니다.  

(설명 추가 예정)


