---
title: 마인리스트 Votifier(NuVotifier) 설정은 어떻게 해야 되나요?
description: 서버 추천 받을 때마다 유저에게 추천 보상을 지급해봐요!

category: Stella IT Console/Minecraft
---

해당 작업을 진행하기 전에 앞서, 미리 마인리스트에 서버 등록이 되어있어야합니다.
만약 안하셨다면 [마인리스트에 서버 등록하는 방법이 궁금해요!](/tutorials/minecraft/minelist/how-to-register-my-server) 를 참고 후 등록해 주세요!

<alert type="danger">
      미리, <a href="/tutorials/minecraft/minelist/how-to-install-votifier">Votifier(NuVotifier) 플러그인 설정</a>를 진행해야됩니다.
</alert>

## Votifier 설정하기

1. `관리` 하단에 있는 `Votifier 수정` 버튼을 클릭합니다.
2. IP 주소 란은 Stella IT Console에 명시된 `마인리스트 연동을 위한 추가 포트` 에 표기된 `:` 앞을 입력해 주세요. `ex) yeouido-save-01.stella-it.com:261XX -> yeouido-save-01.stella-it.com` 으로 입력합니다.
3. 포트 란은 Stella IT Console에 명시된 `마인리스트 연동을 위한 추가 포트` 에 표기된 `:` 뒤를 입력해 주세요. `ex) yeouido-save-01.stella-it.com:261XX -> 261XX`
4. Public Key 란은 `plugins/Votifier/rsa/public.key` 파일을 메모장이나 워드패드와 같은 파일 수정 프로그램을 통해 열어 파일 내용을 복사 후 붙여넣습니다.
5. [Votifier 사용] 체크합니다.
6. [수정] 버튼을 클릭해 적용합니다.
7. 완료가 될 경우 `알림! Votifier 수정 성공` 라는 메시지가 나오며, Minelist와의 연동 절차가 완료됩니다.
