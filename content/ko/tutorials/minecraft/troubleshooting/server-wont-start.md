---
title: 마인크래프트 서버가 시작되지 않아요
description: 시작 스크립트, Java, 포트, 플러그인과 월드 문제를 로그를 기준으로 점검합니다.
category: Stella IT Console/Minecraft
---

서버가 시작되지 않을 때는 설정을 무작정 바꾸기보다 첫 번째 오류를 확인해야 합니다. 가장 최근 실행 기록은 일반적으로 `logs/latest.log`에 저장되고, 심각한 오류는 `crash-reports` 폴더에도 생성될 수 있습니다.

## 1. 로그가 생성되는지 확인

서버를 한 번 실행한 뒤 `logs/latest.log`를 엽니다. 파일이 없으면 시작 스크립트나 Java 명령 자체가 실행되지 않은 경우가 많습니다.

Windows에서 창이 바로 닫힌다면 시작 스크립트 마지막 줄에 임시로 `pause`를 추가해 오류를 읽습니다. 다음 항목도 확인하세요.

* 시작 명령의 `.jar` 이름이 실제 파일 이름과 같은지
* 터미널의 현재 폴더가 서버 폴더인지
* `java -version` 명령이 정상적으로 실행되는지
* Linux 시작 스크립트에 실행 권한이 있는지

## 2. 자주 발생하는 오류

### EULA에 동의하지 않았다는 메시지

`eula.txt`를 열어 내용을 확인합니다. Mojang EULA에 동의하는 경우에만 `eula=false`를 `eula=true`로 변경하고 다시 시작하세요.

### `Unable to access jarfile`

시작 명령에 적힌 파일 이름 또는 경로가 실제 서버 `.jar`와 다릅니다. 파일 확장자가 숨겨진 Windows에서는 실제 이름이 `server.jar.jar`처럼 되어 있지 않은지도 확인하세요.

### `UnsupportedClassVersionError`

현재 Java가 서버 또는 플러그인이 요구하는 버전보다 낮습니다. [Java 버전 오류 해결 방법](/tutorials/minecraft/troubleshooting/unsupported-class-version)을 따르세요.

### `Failed to bind to port`

다음 중 하나를 확인합니다.

1. 같은 포트를 사용하는 다른 Minecraft 또는 Java 프로세스가 이미 실행 중입니다.
2. [`server.properties`](/tutorials/minecraft/server-properties)의 `server-ip`에 잘못된 주소가 입력되어 있습니다. 특별한 이유가 없다면 비워 두세요.
3. 여러 서버를 같은 인스턴스에서 실행하면서 같은 `server-port`를 사용하고 있습니다.

방화벽은 외부 접속 허용 여부에 영향을 주지만, 일반적으로 서버 자체의 포트 바인딩 오류를 해결하지는 않습니다.

### `OutOfMemoryError`

Java 힙이 부족하거나 플러그인이 메모리를 과도하게 사용하고 있습니다.

* 시작 명령의 `-Xmx`가 지나치게 작은지 확인합니다.
* `-Xmx`를 인스턴스 전체 메모리와 같은 값으로 지정하지 말고 운영체제용 여유를 남깁니다.
* 최근 추가한 플러그인과 spark 메모리 지표를 확인합니다.
* 디스크 공간 부족 메시지가 함께 나타난다면 오래된 로그와 불필요한 백업을 인스턴스 밖으로 옮깁니다.

## 3. 플러그인 문제 분리

로그에 플러그인 이름이 나타나거나 플러그인 추가 후 문제가 시작됐다면 다음과 같이 확인합니다.

1. 서버를 중지하고 [전체 백업](/tutorials/minecraft/backup-and-restore)을 만듭니다.
2. `plugins` 폴더의 이름을 `plugins-disabled`처럼 변경합니다.
3. 빈 `plugins` 폴더로 서버를 시작합니다.
4. 문제가 사라지면 플러그인을 절반씩 되돌려 넣으며 원인을 좁힙니다.
5. 원인 플러그인의 호환 버전, 의존성과 공식 문제 해결 안내를 확인합니다.

플러그인 설정과 데이터가 필요할 수 있으므로 원인을 확인하기 전에 폴더를 삭제하지 마세요.

## 4. 월드 버전 오류

`Server attempted to load chunk saved with newer version`과 비슷한 메시지는 현재 서버보다 높은 Minecraft 버전에서 월드가 저장됐다는 뜻입니다. 월드 다운그레이드는 지원되지 않으며 강제로 열면 손상될 수 있습니다.

다음 중 하나를 선택하세요.

* 월드를 마지막으로 정상 실행한 버전 이상의 서버를 사용합니다.
* 낮은 버전에서 만든 [백업을 복구](/tutorials/minecraft/backup-and-restore)합니다.

## 5. 지원 요청 전에 준비할 정보

문제가 계속되면 다음 정보를 함께 준비하세요.

* `logs/latest.log` 전체와 생성된 crash report
* `java -version` 결과
* Minecraft 버전과 서버 구동기·빌드
* 시작 명령 또는 시작 스크립트
* 문제가 발생하기 직전에 변경한 플러그인과 설정

암호, RCON 비밀번호, NuVotifier 토큰과 비공개 키는 로그나 화면에 포함되지 않았는지 확인한 뒤 공유하세요.

Paper의 추가 점검 항목은 [공식 기본 문제 해결 문서](https://docs.papermc.io/paper/basic-troubleshooting/)에서 확인할 수 있습니다.
