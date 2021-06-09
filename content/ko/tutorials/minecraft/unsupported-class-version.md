---
title: UnsupportedClassVersion 에러가 떠요!
description: 도메인을 연결 하는 방법에 대해 알아봅니다.

category: Tutorials/minecraft
---

## 오류 상황
다음과 같은 메세지가 발생합니다.  
```
09.06 17:14:21 [Server] INFO Exception in thread "main" java.lang.UnsupportedClassVersionError: net/minecraft/server/Main has been compiled by a more recent version of the Java Runtime (class file version 60.0), this version of the Java Runtime only recognizes class file versions up to 52.0
```

## Minecraft Java Edition 1.17과, Java 16.
Minecraft Java Edition는 1.16까지 Java 8 버전을 기반으로 제공되고 있었으나, [21w19a Snapshot](https://www.minecraft.net/en-us/article/minecraft-snapshot-21w19a) 이후로 Minecraft Java Edition의 기반 코드가 Java 16를 대상으로 작동되도록 변경되었습니다.

### 저는 Java 8보다 높은 버전을 사용해도 작동했었는데요?
Java는 초기부터 [JVM](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%EA%B0%80%EC%83%81_%EB%A8%B8%EC%8B%A0)의 [Backwards Compatibility (하위 호환성)](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9C%84_%ED%98%B8%ED%99%98%EC%84%B1)이 고려되어 작성되어, 구버전이더라도 신버전의 Java Runtime 에서 작동할 수 있도록 설계되어, 문제가 없었던 것입니다.

### 그럼 호환성이 있는데도 왜 작동하지 못하나요.
Java Runtime은 기본적으로 [Forward Compatibility (상위 호환성)](https://ko.wikipedia.org/wiki/%EC%83%81%EC%9C%84_%ED%98%B8%ED%99%98%EC%84%B1) 가 지원되지 않습니다. 구버전인 Java 8이 Java 16을 대상으로 작동하도록 설계된 Class파일을 읽어들이지 못하므로, 마인크래프트 서버 부분의 코드를 읽어 들일 수 없는 문제가 발생하는 것입니다.

## 해결 방안

### Windows
<alert type="warning">
    현재 Stella IT의 기본 템플릿에 포함된 버전은 **AdoptOpenJDK Java 8** 그리고 **AdoptOpenJDK Java 11** 버전이며, **AdoptOpenJDK Java 16** 은 아직 기본 탑재가 되어있지 않습니다.  

    빠른 시일 내에 기본 탑재 할 수 있도록 하겠습니다.
</alert>

1. [AdoptOpenJDK 다운로드 페이지](https://adoptopenjdk.net/?variant=openjdk16&jvmVariant=hotspot)로 이동합니다.
2. **1. Choose a Version** 에서 `OpenJDK 16 (Latest)` 를 선택합니다.
3. (선택) **2. Choose a JVM** 에서 원하는 JVM 종류를 선택합니다.
   * [**Hotspot**](https://openjdk.java.net/groups/hotspot/): Oracle Java에서 사용하는 것과 같은 런타임. 호환성이 제일 높음
   * [**Eclipse OpenJ9**](https://www.eclipse.org/openj9/): IBM Java에서 사용하는 것과 같은 런타임. 속도가 빠르고, 메모리를 적게 사용함.
4. **Latest Release** 버튼을 눌러 다운로드를 시작합니다.

### Linux
작성 중
