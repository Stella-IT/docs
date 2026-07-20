---
title: 마인크래프트 플러그인은 어떻게 설치하고 관리하나요?
description: Paper 서버에 플러그인을 안전하게 설치하고 업데이트·제거·점검하는 방법을 알아봅니다.
category: Stella IT Console/Minecraft
---

플러그인은 Paper, Spigot, CraftBukkit 같은 서버 구동기에 기능을 추가하는 `.jar` 파일입니다. Vanilla 서버나 Forge·Fabric 모드 로더에는 Paper 플러그인을 설치할 수 없습니다.

<alert type="danger">
플러그인은 인스턴스의 파일과 네트워크에 접근할 수 있습니다. 공식 배포처와 개발자를 확인하고, 출처를 신뢰할 수 없는 파일은 설치하지 마세요.
</alert>

## 설치 전 확인

1. [서버를 백업](/tutorials/minecraft/backup-and-restore)합니다.
2. 플러그인이 현재 Minecraft와 서버 구동기 버전을 지원하는지 확인합니다.
3. 필수 의존성 플러그인이 있는지 확인합니다.
4. 플러그인의 공식 설치·업데이트 안내와 변경 사항을 읽습니다.

Paper 플러그인은 [Hangar](https://hangar.papermc.io/), [Modrinth](https://modrinth.com/plugins) 또는 개발자의 공식 GitHub 릴리스에서 찾을 수 있습니다.

## 플러그인 설치

1. 서버 콘솔에서 `stop`을 입력하고 Java 프로세스가 완전히 종료될 때까지 기다립니다.
2. 내려받은 파일이 `.jar`인지 확인합니다. `.zip`으로 배포된다면 압축을 풀고 Paper 또는 Bukkit용 `.jar`를 찾습니다.
3. 서버 실행 파일과 같은 위치에 있는 `plugins` 폴더에 `.jar`를 넣습니다.
4. 서버를 시작합니다.
5. 콘솔 또는 게임에서 `/plugins`를 실행해 플러그인 이름이 정상 상태로 표시되는지 확인합니다.
6. `logs/latest.log`에서 해당 플러그인의 오류나 경고를 확인합니다.

`plugins` 폴더 안의 하위 폴더가 아니라 바로 아래에 `.jar` 파일을 놓아야 합니다. 처음 실행한 뒤 생성되는 `plugins/플러그인이름` 폴더에는 일반적으로 설정과 데이터가 저장됩니다.

## 플러그인 업데이트

1. 새 버전이 현재 서버와 호환되는지 확인합니다.
2. 서버를 중지하고 플러그인 `.jar`와 설정 폴더를 백업합니다.
3. 기존 `.jar`를 새 파일로 교체합니다. 같은 플러그인의 구버전과 신버전을 함께 두지 마세요.
4. 서버를 시작하고 시작 로그와 플러그인 기능을 확인합니다.

운영 중인 서버에서 `/reload`로 플러그인을 다시 불러오지 마세요. Paper는 플러그인 변경 후 서버를 완전히 재시작하는 방식을 권장합니다.

## 플러그인 제거

1. 서버를 중지합니다.
2. 플러그인 `.jar`를 서버 폴더 밖의 임시 보관 위치로 이동합니다.
3. 서버를 시작해 다른 플러그인과 서버 기능에 문제가 없는지 확인합니다.
4. 더 이상 데이터가 필요하지 않은 것이 확인된 뒤에만 해당 플러그인의 설정 폴더를 정리합니다.

설정 폴더를 먼저 삭제하면 복구하기 어려울 수 있으므로 바로 지우지 않는 편이 안전합니다.

## 로드되지 않을 때

`/plugins`에서 이름이 표시되지 않거나 비활성 상태라면 `logs/latest.log`에서 다음 표현을 찾습니다.

* `UnknownDependencyException`: 필요한 의존성 플러그인이 없습니다.
* `InvalidPluginException` 또는 `InvalidDescriptionException`: 잘못된 파일이거나 지원하지 않는 플러그인입니다.
* `UnsupportedClassVersionError`: 플러그인이 더 높은 Java 버전을 요구합니다.
* `Ambiguous plugin name`: 같은 플러그인의 `.jar`가 두 개 이상 있습니다.

원인을 찾지 못했다면 [서버가 시작되지 않을 때](/tutorials/minecraft/troubleshooting/server-wont-start)의 플러그인 분리 절차를 따르세요.

자세한 내용은 [Paper 플러그인 설치 문서](https://docs.papermc.io/paper/adding-plugins/)에서 확인할 수 있습니다.
