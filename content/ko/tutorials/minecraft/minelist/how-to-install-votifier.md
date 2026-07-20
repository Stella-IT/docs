---
title: NuVotifier는 어떻게 설치하나요?
description: 마인리스트의 추천 신호를 받을 수 있도록 NuVotifier를 설치하고 공인 IP 포트를 설정합니다.
category: Stella IT Console/Minecraft
---

NuVotifier는 서버 목록 사이트가 보내는 추천 신호를 Minecraft 서버에 전달합니다. 추천한 사용자에게 아이템이나 명령어 보상을 지급하려면 NuVotifier와 별도로 호환되는 보상 플러그인이 필요합니다.

<alert type="warning">
NuVotifier의 공식 최신 릴리스는 오래되었을 수 있습니다. 설치 전에 사용 중인 Paper와 Minecraft 버전에서 동작하는지 릴리스 설명과 사용자 보고를 확인하고, 서버 전체를 백업하세요.
</alert>

## 1. 플러그인 설치

1. [NuVotifier 공식 릴리스](https://github.com/NuVotifier/NuVotifier/releases)에서 서버 플랫폼에 맞는 `.jar` 파일을 받습니다.
2. [플러그인 설치·관리 방법](/tutorials/minecraft/how-to-install-plugins)에 따라 파일을 서버의 `plugins` 폴더에 넣습니다.
3. 서버를 다시 시작해 `plugins/NuVotifier` 폴더와 설정 파일을 생성합니다.
4. 콘솔 또는 게임에서 `/plugins`를 실행해 NuVotifier가 정상적으로 활성화되었는지 확인합니다.

## 2. 수신 주소와 포트 설정

서버를 중지하고 `plugins/NuVotifier/config.yml`을 엽니다. 단일 서버 구성에서는 다음 값을 확인합니다.

```yaml
ip: 0.0.0.0
port: 8192
```

* `ip`: 일반적인 단일 인스턴스에서는 `0.0.0.0`을 사용합니다.
* `port`: `1`부터 `65535` 사이에서 다른 프로그램이 사용하지 않는 TCP 포트를 선택합니다. Minecraft의 `server-port`와 같은 포트를 사용할 수 없습니다.

`8192`가 이미 사용 중이면 다른 포트로 변경할 수 있습니다. 선택한 포트는 마인리스트 연동 화면에도 똑같이 입력해야 합니다.

## 3. 방화벽 허용

공인 IP에서는 운영체제 방화벽이 NuVotifier 포트의 TCP 연결을 허용해야 합니다.

Ubuntu에서 `8192`를 사용하는 예시는 다음과 같습니다.

```bash
sudo ufw allow 8192/tcp
sudo ufw status
```

Windows에서는 **Windows Defender 방화벽 고급 설정 → 인바운드 규칙 → 새 규칙**에서 선택한 TCP 포트를 허용합니다.

<alert type="warning">
필요한 포트만 허용하세요. 방화벽을 끄거나 전체 포트를 일괄 허용하지 마세요.
</alert>

## 4. 키와 보상 플러그인 확인

서버를 시작한 뒤 다음 항목을 확인합니다.

1. `plugins/NuVotifier/rsa/public.key`에 공개 키가 생성되었는지 확인합니다.
2. 추천 보상을 처리할 플러그인을 설치하고 해당 플러그인의 공식 안내에 따라 보상을 설정합니다.
3. [마인리스트와 NuVotifier 연동하기](/tutorials/minecraft/minelist/how-to-integrate-votifier)에 따라 공인 IP, 포트와 공개 키를 등록합니다.
4. 테스트 추천을 보내고 `logs/latest.log`에서 수신 결과와 오류를 확인합니다.

비밀 키가 들어 있는 `plugins/NuVotifier/rsa/private.key`와 설정의 토큰은 외부에 공유하지 마세요.

자세한 구성은 [NuVotifier 공식 설정 가이드](https://github.com/NuVotifier/NuVotifier/wiki/Setup-Guide)를 참고하세요.
