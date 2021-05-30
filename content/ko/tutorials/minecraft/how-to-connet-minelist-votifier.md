---
title: 마인리스트 Votifier(NuVotifier) 설정은 어떻게 해야 되나요?
description: 서버 추천 받을 때마다 유저에게 추천 보상을 지급해봐요!

category: Tutorials/minecraft
---

해당 작업을 진행하기 전에 앞서, 미리 마인리스트에 서버 등록이 되어있어야합니다.
만약 안하셨다면 [마인리스트에 서버 등록하는 방법이 궁금해요!](./how_to_add_minelist) 를 참고 후 등록해 주세요!

## 서버 주인 인증하기
1. 자신이 등록한 서버 페이지에 접속합니다. [이름 ▼ ->  내 서버] 
2. "관리" 하단에 있는 "주인 인증" 버튼 클릭해 주세요.
3. [등록] 버튼 클릭해 주세요.

<alert type="warning">
      MOTD는 마인크래프트 클라이언트에서 멀티플레이어 메뉴에서 들어갔을 때, 표시되는 서버를 설명할 수 있는 메시지
</alert>

4. 서버 주인 인증을 위해서, 요구 사항에 따라 ``server.properties`` 파일에서 ``motd=`` 내용 변경 후 서버 재부팅을 진행해줍니다.
5. 완료가 된다면, ``알림! 성공적으로 관리자로 변경되었습니다. 0개의 서버가 중복처리 되었습니다.``라는 메시지가 나옵니다.

<alert type="danger">
      미리, [Votifier(NuVotifier) 플러그인 설정](./how-to-setup-votifier)를 진행해야됩니다.
</alert>

## Votifier 설정하기

1. "관리" 하단에 있는 "Votifier 수정" 버튼을 클릭해주세요.
2. IP 주소 란은 고객님께서 사용 중이신 원격 주소 앞에 있는 ``ex) yeouido-save-01.stella-it.com:331XX -> yeouido-save-01.stella-it.com`` 으로 입력해주세요!
3. 포트 란은  꼭앞전에 설정했던 ``261XX`` 포트로 설정해주세요!
4. Public Key 란은 ``plugins/Votifier/rsa/public.key`` 파일을 메모장이나 워드패드와 같은 파일 수정 프로그램을 통해 열어서 파일 내용을 복사 후 붙여넣어주세요!
5. [Votifier 사용] 체크해주세요!
6. [수정] 버튼을 클릭해주세요!
7. 완료가 될 경우 ``알림! Votifier 수정 성공`` 라는 메시지가 나옵니다.