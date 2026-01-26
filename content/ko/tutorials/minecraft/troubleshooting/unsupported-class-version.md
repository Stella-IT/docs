---
title: UnsupportedClassVersion 에러가 떠요!
description: UnsupportedClassVersion 에러를 해결하기 위해 Java 16으로 업그레이드 하는 방법을 알아봅니다.

category: Stella IT Console/Minecraft
---

## 오류 상황
다음과 같은 메세지가 발생합니다.  
```
09.06 17:14:21 [Server] INFO Exception in thread "main" java.lang.UnsupportedClassVersionError: net/minecraft/server/Main has been compiled by a more recent version of the Java Runtime (class file version 60.0), this version of the Java Runtime only recognizes class file versions up to 52.0
```

## Minecraft 1.17의 타겟 Java 버전 변경
Minecraft Java Edition는 1.16까지 Java 8 버전을 기반으로 제공되고 있었으나, [21w19a Snapshot](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w19a) 이후로 Minecraft Java Edition의 기반 코드가 Java 16를 대상으로 작동되도록 변경되었습니다.

### 저는 Java 8보다 높은 버전을 사용해도 작동했었는데요?
Java는 초기부터 [JVM](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%EA%B0%80%EC%83%81_%EB%A8%B8%EC%8B%A0)의 [Backwards Compatibility (하위 호환성)](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9C%84_%ED%98%B8%ED%99%98%EC%84%B1)이 고려되어 작성되어, 구버전이더라도 신버전의 Java Runtime 에서 작동할 수 있도록 설계되어, 문제가 없었던 것입니다.

## 해결 방안

[Java 설치 방법](/tutorials/minecraft/install-guide/java)에 따라 올바른 Java 버전을 설치해 주세요.
