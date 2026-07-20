---
title: 서버 최대 인원은 어떻게 설정하나요?
description: server.properties에서 Minecraft 서버의 최대 동시 접속자 수를 설정합니다.

category: Stella IT Console/Minecraft
---

## 서버 인원 제한하기

1. 서버 콘솔에서 `stop`을 입력해 서버를 완전히 종료합니다.
2. `server.properties`를 열어 `max-players` 값을 원하는 최대 동시 접속자 수로 변경합니다.

   ```properties
   max-players=20
   ```

3. 파일을 저장하고 서버를 다시 시작합니다.

이 값은 접속을 허용할 최대 인원이며, 인스턴스가 해당 인원을 원활하게 처리할 수 있다는 의미는 아닙니다. 플러그인, 월드와 플레이 방식에 맞춰 실제 성능을 확인하세요.

다른 기본 설정은 [`server.properties` 기본 설정](/tutorials/minecraft/server-properties)을 참고하세요.
