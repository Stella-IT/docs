---
title: Minecraft Java Edition 서버에 도메인을 어떻게 연결하나요?
description: 공인 IP가 할당된 마인크래프트 서버에 무료 또는 소유한 도메인을 연결하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

도메인을 연결하면 숫자로 된 공인 IP 대신 `play.example.com` 같은 주소로 서버에 접속할 수 있습니다.

## 준비 사항

1. Stella IT Console의 인스턴스 상세 화면에서 공인 IPv4 주소를 확인합니다.
2. [`server.properties`](/tutorials/minecraft/server-properties)의 `server-port`를 확인합니다. 기본 포트는 `25565`입니다.
3. 운영체제 방화벽에서 해당 TCP 포트를 허용합니다.
4. 공인 IP로 먼저 접속해 서버가 정상적으로 열려 있는지 확인합니다.

<alert type="warning">
DNS를 연결해도 닫힌 방화벽이나 실행되지 않은 서버가 열리지는 않습니다. 도메인 설정 전에 공인 IP로 접속되는지 먼저 확인하세요.
</alert>

## 무료 `mcsv.kr` 도메인 사용

Stella IT에서는 `원하는이름.mcsv.kr` 형식의 도메인을 제공합니다.

1. [Minehub](https://dash.minehub.kr/)에 Stella IT 계정으로 로그인합니다.
2. **도메인 관리**에서 새 도메인을 등록합니다.
3. 사용할 이름을 입력하고 등록을 완료합니다.
4. 등록한 도메인의 **마인크래프트 서버 연동** 메뉴를 엽니다.
5. Stella IT Cloud 서버 연동을 선택한 뒤 대상 인스턴스를 지정합니다.

연동 화면이나 제공 조건이 변경된 경우 Minehub에 표시되는 최신 안내를 따르세요.

## 소유한 도메인 사용

아래 예시는 Cloudflare DNS를 기준으로 하지만, 다른 DNS 제공자에서도 같은 종류의 레코드를 만들 수 있습니다.

### 기본 포트 `25565`를 사용하는 경우

다음 A 레코드를 만듭니다.

| 항목 | 값 예시 |
| --- | --- |
| 유형 | `A` |
| 이름 | `play` |
| IPv4 주소 | Stella IT Console에서 확인한 공인 IP |
| 프록시 상태 | DNS 전용 |
| TTL | 자동 |

저장한 뒤 `play.example.com`으로 접속합니다. 루트 도메인인 `example.com`을 사용하려면 이름에 `@`를 입력합니다.

<alert type="warning">
Minecraft는 일반 HTTP 서비스가 아니므로 Cloudflare의 일반 프록시를 사용할 수 없습니다. A 레코드의 프록시 상태를 반드시 **DNS 전용**으로 설정하세요.
</alert>

### 기본 포트가 아닌 경우

먼저 위와 같이 `play.example.com`을 공인 IP로 연결하는 A 레코드를 만듭니다. 그다음 다음 SRV 레코드를 추가합니다.

| 항목 | 값 예시 |
| --- | --- |
| 서비스 | `_minecraft` |
| 프로토콜 | `_tcp` |
| 이름 | `play` |
| 우선순위 | `0` |
| 가중치 | `0` |
| 포트 | `server-port`에 설정한 포트 |
| 대상 | `play.example.com` |

SRV 레코드의 대상에는 IP 주소가 아니라 앞에서 A 레코드를 만든 호스트 이름을 입력해야 합니다. 설정이 반영되면 사용자는 포트를 붙이지 않고 `play.example.com`으로 접속할 수 있습니다.

## 연결 확인

DNS 변경 사항은 캐시 때문에 바로 보이지 않을 수 있습니다. 잠시 기다린 뒤 다음 항목을 확인하세요.

1. `nslookup play.example.com` 또는 `dig play.example.com`이 인스턴스의 공인 IP를 반환하는지 확인합니다.
2. Minecraft 클라이언트에서 도메인으로 접속합니다.
3. 접속되지 않으면 서버 실행 상태, `server-port`, 방화벽 규칙을 다시 확인합니다.

Cloudflare의 레코드 생성과 프록시 제한은 [Cloudflare DNS 문서](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-subdomain/)에서 확인할 수 있습니다.
