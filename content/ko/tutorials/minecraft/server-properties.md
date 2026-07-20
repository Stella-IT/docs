---
title: server.properties 기본 설정하기
description: 마인크래프트 서버의 접속, 게임 규칙, 인원, MOTD와 아이콘을 설정하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

`server.properties`는 Minecraft 서버의 기본 동작을 정하는 파일입니다. 서버를 한 번 이상 실행하면 서버 실행 파일과 같은 폴더에 생성됩니다.

## 안전하게 수정하기

1. 서버 콘솔에서 `stop`을 입력해 서버를 완전히 종료합니다.
2. `server.properties`를 복사해 백업합니다.
3. 일반 텍스트 편집기로 파일을 열어 `키=값` 형식의 값을 수정합니다.
4. 저장한 뒤 서버를 다시 시작합니다.
5. 콘솔과 `logs/latest.log`에서 설정 오류를 확인합니다.

같은 키를 여러 번 추가하지 말고 기존 줄의 값을 변경하세요.

## 자주 사용하는 설정

| 설정 | 설명 | 예시 |
| --- | --- | --- |
| `motd` | 서버 목록에 표시할 설명 | `motd=Stella Minecraft Server` |
| `gamemode` | 기본 게임 모드 | `gamemode=survival` |
| `difficulty` | 난이도 | `difficulty=normal` |
| `max-players` | 최대 동시 접속자 수 | `max-players=20` |
| `white-list` | 화이트리스트 사용 여부 | `white-list=true` |
| `enforce-whitelist` | 목록에서 제거된 사용자의 즉시 퇴장 여부 | `enforce-whitelist=true` |
| `server-port` | Minecraft가 수신할 TCP 포트 | `server-port=25565` |
| `server-ip` | 수신할 로컬 인터페이스 | 대부분 빈 값 유지 |
| `view-distance` | 플레이어에게 전송할 청크 거리 | `view-distance=10` |
| `simulation-distance` | 엔티티와 블록이 동작할 청크 거리 | `simulation-distance=10` |
| `online-mode` | Mojang 계정 인증 사용 여부 | `online-mode=true` |
| `enable-rcon` | 원격 콘솔 사용 여부 | 사용하지 않으면 `false` |

<alert type="danger">
프록시 네트워크를 별도로 안전하게 구성한 경우가 아니라면 `online-mode=false`로 변경하지 마세요. 다른 사용자가 타인의 이름으로 접속할 수 있습니다. RCON도 필요하지 않다면 비활성화 상태로 두세요.
</alert>

`server-ip`에는 공인 IP를 입력하지 않는 것이 일반적입니다. 잘못 입력하면 `Failed to bind to port` 오류로 서버가 시작되지 않을 수 있으므로 특별한 이유가 없다면 등호 뒤를 비워 두세요.

## MOTD 변경

`motd` 값은 멀티플레이 서버 목록에 표시됩니다.

```properties
motd=a Minecraft Server
```

변경 후 서버를 다시 시작하고 클라이언트의 서버 목록을 새로 고칩니다. 플러그인이 MOTD를 변경하고 있다면 `server.properties`보다 플러그인 설정이 우선할 수 있습니다.

## 서버 아이콘 변경

1. 정확히 `64x64` 픽셀인 PNG 이미지를 준비합니다.
2. 파일 이름을 `server-icon.png`로 지정합니다.
3. 서버 실행 파일과 같은 폴더에 놓습니다.
4. 서버를 다시 시작합니다.

아이콘이 표시되지 않으면 실제 확장자가 `.png`인지, 파일 이름의 대소문자와 이미지 크기가 정확한지 확인하세요.

## 화이트리스트와 인원 관리

명령어로 사용자를 추가하거나 제거하는 방법은 [화이트리스트 설정](/tutorials/minecraft/how-to-set-whitelist)을 참고하세요. 최대 인원만 변경하려면 [서버 인원 제한](/tutorials/minecraft/how-to-limit-a-number-of-users)을 참고할 수 있습니다.

모든 설정과 기본값은 [Paper `server.properties` 참고 문서](https://docs.papermc.io/paper/reference/server-properties/)에서 확인할 수 있습니다.
