---
title: Stella IT Cloud를 사용할 수 있는 환경
description: Stella IT Cloud를 사용할 수 있는 환경

category: FAQ/Console
---

Stella IT에서 현재 서비스 하는 제품군은 DDoS 방어 시스템이 기본적으로 포함 되어 있습니다.  
그러나, DDoS 방어 시스템 특성상 호환이 되지 않는 애플리케이션이 있을 수 있습니다.  

이용 목적은 서비스 예정이신 프로그램이 Stella IT DDoS 방어 시스템과의 충돌 여부를 확인 하기 위하여 제작되었습니다.  
사용 목적에 애플리케이션이 존재 하지 않는 경우, 아래 이용할 수 있는 프로그램 여부를 확인 후, 이용 부탁드리겠습니다.  

## 이용할 수 있는 프로그램
> 1. UDP 를 이용하지 않는 프로그램
> 2. Public IP 로의 개방을 위해 특정 포트 번호의 포트 개방이 필요하지 않은 프로그램  
>    (단, HTTP/HTTPS의 경우, HTTP Cluster Proxy를 통해 사용하실 수 있습니다.)  
>    (ex. 접속시 포트번호 지정 OR SRV Record 설정을 통한 Domain level의 포트번호 지정이 가능한 경우)
> 3. NAT 환경과 호환되는 프로그램

<alert type="warning">
Stella IT 제품군에서 호환되는 프로그램이더라도, <a href="https://stella-it.com/policy/terms" target="_blank">Stella IT 이용약관</a>에 위반되는 프로그램의 경우 (예. 저작권 위반의 소지가 있는 서비스), 이용하실 수 없으며, 적발시 직권 해지될 수 있습니다. (Stella IT 이용약관에 따라 중도 해지가 제한될 수 있습니다.)
</alert>

## 호환 테스트된 프로그램
아래 프로그램은 Stella IT의 인프라에 테스트가 진행 된 프로그램입니다.
* HTTP, HTTPS (with Stella IT HTTP Proxy)
* Minecraft Java Edition
* Terraria
* Cloudflare Argo Tunnel

## 호환되지 않는 프로그램
이용하시려는 프로그램이 해당 리스트에 포함되는 경우 이용시 문제가 발생 하실 수 있습니다.
* Minecraft Bedrock Edition (UDP)
* SCP SL (UDP)
* FiveM (UDP)
* KKuTu (특정 포트사용이 웹 인터페이스에 하드코딩 되어있음, 그 외의 스펙은 공식 지원하므로, SNI 지원 패치시 사용 가능) (추후 소스코드 수정 문서 추가 예정)

