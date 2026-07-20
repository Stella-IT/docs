---
title: 화이트리스트는 어떻게 설정하나요?
description: 허용한 사용자만 Minecraft 서버에 접속하도록 화이트리스트를 관리합니다.

category: Stella IT Console/Minecraft
---

화이트리스트를 활성화하면 목록에 등록된 사용자만 서버에 접속할 수 있습니다. 명령어는 서버 콘솔에서 실행하거나 필요한 권한이 있는 게임 계정으로 실행하세요. 서버 콘솔에서는 명령어 앞의 `/`를 생략할 수 있습니다.

## 화이트리스트 활성화

```text
/whitelist on
```

`server.properties`에서는 다음 값과 같습니다.

```properties
white-list=true
enforce-whitelist=true
```

`enforce-whitelist=true`이면 목록에서 제거된 사용자가 서버에서 퇴장됩니다.

## 사용자 추가와 제거

사용자를 추가합니다.

```text
/whitelist add <사용자 이름>
```

사용자를 제거합니다.

```text
/whitelist remove <사용자 이름>
```

현재 목록을 확인합니다.

```text
/whitelist list
```

화이트리스트를 비활성화하려면 다음 명령어를 실행합니다.

```text
/whitelist off
```

명령어를 실행할 게임 계정에 권한이 없다면 먼저 [OP 권한 안내](/tutorials/minecraft/what-is-op-meaning)를 확인하세요. 파일을 직접 수정하기보다 위 명령어나 [`server.properties` 설정](/tutorials/minecraft/server-properties)을 사용하는 편이 안전합니다.
