---
title: UnsupportedClassVersion 에러가 떠요!
description: 설치된 Java가 서버 요구 버전보다 낮을 때 발생하는 오류를 해결합니다.
category: Stella IT Console/Minecraft
---

# UnsupportedClassVersion 오류 해결

다음과 비슷한 메시지가 표시되며 서버가 시작되지 않을 수 있습니다.

```text
java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime
```

이 오류는 서버 또는 플러그인이 현재 실행 중인 Java보다 높은 버전으로 컴파일되었다는 뜻입니다. 오류에 표시되는 `class file version` 숫자만 보고 임의의 Java를 설치하기보다는 서버 구동기가 요구하는 버전을 확인하는 편이 안전합니다.

## 해결 방법

1. 현재 실행 중인 Java 버전을 확인합니다.

   ```bash
   java -version
   ```

2. [Java 버전 호환성 가이드](/tutorials/minecraft/java-version-compatibility)에서 서버 버전에 필요한 Java를 확인합니다.
3. [Java 설치 방법](/tutorials/minecraft/install-guide/java)에 따라 알맞은 버전을 설치합니다.
4. 터미널이나 명령 프롬프트를 완전히 닫았다가 다시 열고 `java -version`을 재확인합니다.
5. 시작 스크립트가 특정 Java 실행 파일 경로를 직접 사용한다면 그 경로도 새 설치 위치로 변경합니다.

여러 Java가 설치되어 있으면 운영체제의 `PATH`, `JAVA_HOME` 또는 기본 Java 선택 설정 때문에 이전 버전이 계속 실행될 수 있습니다.
