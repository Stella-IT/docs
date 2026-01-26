---
title: Votifier(NuVotifier) 설치는 어떻게 하나요?
description: 서버 추천 받을 때마다 유저에게 추천 보상을 지급해봐요!

category: Stella IT Console/Minecraft
---

해당 문서는 마인크래프트 자바 에디션 플러그인 "Votifier" 또는 "NuVotifier"를 설치하고 설정하는 방법에 대한 내용을 다루고 있습니다.
이 플러그인은 서버에서 설정한 투표 사이트에서 보내온 투표를 신호를 수신하여, GAListner(Give Anything Listener)와 같은 서버내 보상 플러그인을 통해, 추천한 서버 유저에게 추천 보상을 지급할 수 있습니다.

## 적절한 플러그인 선택
고객님께서 현재 운영하시고 계신 마인크래프트 서버 버전이 어떻게 되시나요?
마인크래프트 서버 버전에 따라, 다운로드해야 되는 링크가 달라지므로, 하단 정보를 참고 부탁드리겠습니다.

### Votifier 플러그인
- 지원하는 마인크래프트 자바 에디션 서버 버전 : ``1.5``, ``1.6`` 등,,,
만약 하위 버전 마인크래프트 서버를 운영을 하신다면, Votifier 플러그인을 사용하셔야 됩니다.

### NuVotifier 플러그인
- 지원하는 마인크래프트 자바 에디션 서버 버전 : ``1.7``, ``1.8``, ``1.9``, ``1.10``, ``1.11``, ``1.12``, ``1.13``, ``1.14``, ``1.15``, ``1.16``
모든 최신 (1.7+) 버전의 마인크래프트 서버와 호환되며, 자주 업데이트되기 때문에, 마인크래프트 업데이트로 중단될 가능성은 거의 없습니다.

## 설치

### Votifier 설치
1. Bukkit.org의 [Votifier](https://dev.bukkit.org/projects/votifier/files)를 다운로드 합니다.
2. (작성 중)

## NuVotifier 설치
1. Spigotmc.org에서 [NuVotifier](https://www.spigotmc.org/resources/nuvotifier.13449/)를 다운로드 합니다.
2. "Download Now" 버튼 클릭하기.
3. 다운로드할 때 `"This Type of file can harm your computer. Do you want to keep nuvotifier-X.X.X.jar anyway?"` 라고 질문을 할 때, `"Keep"` 버튼을 눌러줍니다.
   한국어 환경인 경우, `"이 종류의 파일은 컴퓨터를 손상시킬 수 있습니다."` 와 같은 메세지가 표시됩니다. 이 경우, `유지` 버튼을 눌러주세요. 버튼이 보이지 않는 경우 `Ctrl`+`J` 를 통해 다운로드 창을 열면, 해당 화면이 표시됩니다.


## (Nu)Votifier 적용
1. 다운로드가 완료되었는지 확인합니다.
2. 다운로드 된 파일을 클릭한 후 `[Ctrl + C]` 또는 `[우 클릭 -> 복사하기]`를 통해 파일을 복사합니다.
3. 서버 버킷 폴더로 이동합니다. -> `plugins` 폴더로 이동합니다.
4. `[Ctrl + V]` 또는 `[우 클릭 -> 붙여넣기]`를 통해 파일을 붙여넣기 합니다.
5. 서버가 이미 실행 중인경우, 미인크래프트 서버를 재시작합니다.

## (Nu)Votifier 설정
1. `plugins/Votifier`로 이동해 주세요! (NuVotifier의 경우 `plugins/NuVotifier` 를 대신 사용해야 할 수도 있습니다.)
2. 메모장이나 워드패드와 같은 파일 수정 프로그램을 통해 `config.yml` 파일을 열어주세요!
3. `config.yml` 파일을 다음과 같이 수정합니다.
    - `host: 0.0.0.0`
    - `port: Stella IT Console에서 받은 포트 번호`
       해당 포트 번호의 경우, **Stella IT Console**의 나의 가상머신 페이지에서, `마인리스트 연동을 위한 추가 포트` 부분에 명시되어있는 포트번호를 사용하여 주세요.
       예를 들어, `yeouido-save-02.stella-it.com:26111` 으로 적혀있다면, `port: 26111` 로 수정하세요.
4. 정상적으로 설정을 적용하기 위해서 마인크래프트 서버를 재시작합니다.
