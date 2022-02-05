---
title: Minecraft Java Edition 서버에 도메인을 어떻게 연결하나요?
description: 도메인을 연결 하는 방법에 대해 알아봅니다.

category: Tutorials/minecraft
---

## Stella IT가 보유하고 있는 도메인으로 등록
Stella IT에서는 기본적으로 `*.mcsv.kr` 형태의 도메인을 이용 중이신 고객님께 무료로 제공해 드리고 있습니다.  

현재 자동화 시스템 (MCSV.KR Platform)이 준비중인 관계로, [상담 센터로 연락](https://console.stella-it.com/support) 주시면 연결 도와드리겠습니다.

## [MCSV.KR](https://mcsv.kr) Platform 사용
현재 준비 중인 기능입니다.

## 자신이 소유한 도메인 등록
### CLOUDFLARE (SAVE, HIGHEND)
- 준비물: cloudflare 계정, DNS가 cloudflare로 등록된 도메인 
1. [cloudflare](https://dash.cloudflare.com/login/)에서 로그인합니다.
2. 이용하려는 도메인을 선택합니다.
3. 상단에 `DNS`를 선택합니다.
4. `레코드 추가`를 선택합니다
5. `형식`을 누른 후 `SRV`를 선택합니다
6. `이름`을 누른 후 도메인 앞에 나올 이름을 작성합니다.
7. `서비스`를 누른 후 `_minecraft`를 선택합니다.
8. `프로토콜`을 누른 후 `TCP`를 선택합니다.
9. `TTL`을 누른 후 `자동`을 선택합니다.
10. `우선순위`와 `가중치`에 `1`을 작성합니다.
11. `포트`에 임대 받은 호스팅의 `기본 가용 포트` 뒤 5자리 숫자를 작성합니다.
12. `대상`에 임대 받은 호스팅의 `기본 가용 포트` 뒤 5자리 숫자를 제외한 앞부분을 작성합니다.
13. `저장`을 클릭합니다.
