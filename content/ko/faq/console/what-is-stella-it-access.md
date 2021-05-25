---
title: Stella IT Access 란?
description: Stella IT Access 기능에 대해 간단히 설명합니다.

category: FAQ/Console
---

Stella IT Access는 HTTP Proxy에 설정 할 수 있는 기능으로, 로그인이 되지 않는 경우 VM의 주인 Stella IT Accounts 로 로그인 하여야 실제 웹 페이지에 있도록 사이트를 잠그는 기능입니다.

![image](https://user-images.githubusercontent.com/27724108/119512718-89df3d00-bdae-11eb-90dd-2a71f3d1a409.png)


## Stella IT Access 내부용 URL

### 로그인: `/_s4ait.access/login`
내부 애플리케이션에서 Stella IT Access의 로그인을 유도 할때 이 링크로 Redirect 하세요. (기본적으로 로그인 되지 않은 경우 이 경로로 자동으로 Redirect 됩니다.)

### 로그아웃: `/_s4ait.access/logout`
내부 애플리케이션에서 Stella IT Access의 로그아웃을 유도 할때 이 링크로 Redirect 하세요.
