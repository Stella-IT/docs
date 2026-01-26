---
title: Minecraft Java Edition 서버에 도메인을 어떻게 연결하나요?
description: 도메인을 연결 하는 방법에 대해 알아봅니다.

category: Stella IT Console/Minecraft
---

## Stella IT가 보유하고 있는 도메인으로 등록
Stella IT에서는 기본적으로 `*.mcsv.kr` 형태의 도메인을 이용 중이신 고객님께 무료로 제공해 드리고 있습니다.  

## [MINEHUB.KR](https://minehub.kr) Platform 사용
### Minehub (COMPACT, STANDARD)

- 준비물: Stella-IT 계정, Stella-IT VPS(COMPACT/STANDARD)
1. [Minehub](https://dash.minehub.kr/)에 로그인합니다.
2. 좌측 메뉴에서 [도메인 관리](https://dash.minehub.kr/dns)를 클릭합니다.
3. `새 도메인 등록하기`를 누릅니다.
4. `이용하고자 하는 도메인 이름`의 입력칸에 자신이 원하는 `mcsv.kr` 앞에 붙을 서브도메인을 입력하고 `등록`을 누릅니다.
5. `도메인 관리`에서 자신이 등록한 도메인을 클릭합니다.
6. 우측 상단의 `마인크래프트 서버 연동`을 클릭합니다.
7. `연동할 서버 주소 선택`을 클릭하고 `Stella IT Cloud 서버를 등록하고 싶어요`를 클릭하고 `VM 정보 가져오기`를 클릭합니다.
8. `연동할 VM 선택`을 클릭하고 자신이 연결하기를 원하는 `Stella-IT Cloud`를 선택한 후, `계속`을 클릭합니다.

### Minehub (Minehub)

- 준비물: Stella-IT 계정, Stella-IT VPS(COMPACT/STANDARD)
1. [Minehub](https://dash.minehub.kr/)에 로그인합니다.
2. 좌측 메뉴에서 [도메인 관리](https://dash.minehub.kr/dns)를 클릭합니다.
3. `새 도메인 등록하기`를 누릅니다.
4. `이용하고자 하는 도메인 이름`의 입력칸에 자신이 원하는 `mcsv.kr` 앞에 붙을 서브도메인을 입력하고 `등록`을 누릅니다.
5. `도메인 관리`에서 자신이 등록한 도메인을 클릭합니다.
6. 우측 상단의 `마인크래프트 서버 연동`을 클릭합니다.
7. `연동할 서버 주소 선택`을 클릭하고 `Minehub Cloud 서버를 등록하고 싶어요`를 클릭하고 `VM 정보 가져오기`를 클릭합니다.
8. `연동할 VM 선택`을 클릭하고 자신이 연결하기를 원하는 `Minehub Cloud`를 선택한 후, `계속`을 클릭합니다.


## 자신이 소유한 도메인 등록
### CLOUDFLARE (COMPACT, STANDARD)
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
