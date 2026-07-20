---
title: 마인크래프트 버전별 Java 호환성 가이드
description: 마인크래프트 Paper 서버 버전에 필요한 Java 버전을 확인합니다.
category: Stella IT Console/Minecraft
---

# 마인크래프트 버전별 Java 호환성 가이드

서버 버전과 Java 버전이 맞지 않으면 서버가 시작되지 않습니다. 아래 표는 [Paper 공식 요구 사항](https://docs.papermc.io/paper/getting-started/)을 기준으로 합니다. 다른 서버 구동기를 사용한다면 해당 구동기의 요구 사항도 함께 확인하세요.

## Paper 서버 버전별 Java 요구 사항

| 마인크래프트 버전 | Java 버전 |
| --- | --- |
| **26.1 이상** | Java 25 |
| **1.20 - 1.21.11** | Java 21 |
| **1.17 - 1.19** | Java 17 |
| **1.16.5** | Java 16 |
| **1.12 - 1.16.4** | Java 11 |
| **1.7.10 - 1.11** | Java 8 |

<alert type="warning">
최신 Java를 무조건 설치하지 말고, 운영 중인 서버 버전에 맞는 Java를 선택하세요. 특히 오래된 플러그인이나 모드는 더 높은 Java 버전에서 동작하지 않을 수 있습니다.
</alert>

참고로 바닐라 마인크래프트는 [1.20.5부터 Java 21과 64비트 운영체제](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5)를 요구합니다.

## 설치된 버전 확인

터미널, 명령 프롬프트 또는 PowerShell에서 다음 명령어를 실행합니다.

```bash
java -version
```

필요한 Java가 없거나 다른 버전이 실행된다면 [Java 설치 방법](/tutorials/minecraft/install-guide/java)을 따라 설치하세요.

운영체제별 서버 구축 과정은 다음 문서를 참고할 수 있습니다.

- [Ubuntu에서 마인크래프트 서버 구축하기](/tutorials/minecraft/setup-on-ubuntu)
- [CentOS 계열에서 마인크래프트 서버 구축하기](/tutorials/minecraft/setup-on-centos)
- [Windows Server에서 마인크래프트 서버 구축하기](/tutorials/minecraft/setup-on-windows)
