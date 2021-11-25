---
title: OP 플레이어는 무엇을 의미하나요?
description: 마인크래프트 OP 플레이어의 의미를 알아봅시다.

category: Tutorials/minecraft
---

## OP 의 의미
마인크래프트에서 OP는 `Operator`의 약자로 `운영자`를 의미하며, 서버 내에서 가장 높은 권한을 소지하고 있습니다.

## OP 주는 법
서버 내에서 OP를 주는 법에는 또다른 OP 또는 서버 버킷의 Console에서 특정 사용자에게 `/op <target>`을 통하여 OP를 지급할 수 있습니다.

## OP 의 제한
싱글 월드 또는 랜서버에서는 OP의 제한이 없고, 버킷서버와 같은 경우에는 `server.properties`에서 `op-permission-level=`을 수정하여 제한할 수 있습니다.
<alert type="info">
op-permission-level=1 - 생성보호지역을 설치 및 파괴 가능.<br>
op-permission-level=2 - /clear, /difficulty, /effect, /gamemode 등의 명령어 가능<br>
op-permission-level=3 - /kick, /mute, /ban, /op, /deop 등의 명령어 가능<br>
op-permission-level=4 - /stop 명령어 가능<br>
</alert>
<alert type="warning">
op-permission-level=3 이 적절하며, /stop 명령어는 console 을 통하여 작동시킬 수 있습니다.
</alert>

## OP 뺐는 법
서버 내에서 OP를 뺐는 법에는 또다는 OP 또는 서버 버킷의 Console에서 사용자에게 `/deop <target>`을 통하여 OP를 뺏을 수 있습니다.
