---
title: 마인리스트와 NuVotifier는 어떻게 연동하나요?
description: 마인리스트에 NuVotifier의 공인 IP, 수신 포트와 공개 키를 등록하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

이 작업을 진행하기 전에 다음 준비를 완료하세요.

* [마인리스트에 서버 등록하기](/tutorials/minecraft/minelist/how-to-register-my-server)
* [NuVotifier 설치와 포트 설정](/tutorials/minecraft/minelist/how-to-install-votifier)
* NuVotifier 포트에 대한 운영체제 방화벽 허용

## NuVotifier 정보 등록

1. 마인리스트에서 등록한 서버의 관리 화면을 엽니다.
2. **Votifier 수정** 메뉴를 선택합니다.
3. IP 주소에 Stella IT Console의 인스턴스 상세 화면에서 확인한 공인 IP를 입력합니다.
4. 포트에 `plugins/NuVotifier/config.yml`의 `port` 값을 입력합니다.
5. Public Key에 `plugins/NuVotifier/rsa/public.key`의 전체 내용을 붙여 넣습니다.
6. Votifier 사용을 활성화하고 저장합니다.
7. 마인리스트에서 테스트 기능을 제공한다면 테스트 추천을 보냅니다.

<alert type="warning">
공개 키인 `public.key`만 등록하세요. `private.key` 또는 설정 파일의 토큰은 절대 붙여 넣거나 다른 사람에게 공유하지 마세요.
</alert>

## 연동되지 않을 때

다음 순서로 확인합니다.

1. Minecraft 서버와 NuVotifier가 실행 중인지 확인합니다.
2. 마인리스트에 입력한 포트가 `config.yml`과 같은지 확인합니다.
3. 해당 TCP 포트가 운영체제 방화벽에서 허용되어 있는지 확인합니다.
4. `logs/latest.log`에서 NuVotifier의 포트 바인딩 또는 인증 오류를 찾습니다.
5. Minecraft 포트와 NuVotifier 포트를 같은 값으로 설정하지 않았는지 확인합니다.

설정을 변경했다면 서버를 다시 시작한 뒤 테스트하세요.
