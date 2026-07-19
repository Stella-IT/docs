---
title: IPBan은 어떻게 설치하나요?
description: Windows 서버의 원격 데스크톱 무차별 대입 공격을 차단하기 위한 IPBan 설치 방법을 알아봅니다.

category: Stella IT Console
---

<alert type="warning">
이 문서에는 Stella IT에서 제공하지 않은 외부 오픈소스 소프트웨어 설치 방법을 제공합니다.
설치 후 발생할 수 있는 문제는 Stella IT에서 지원하지 않으므로, 설치 전 충분히 검토하시고 진행하시기 바랍니다.
</alert>

[IPBan](https://github.com/digitalruby/ipban) 은 무료·오픈소스 인트루전 프리벤션(Intrusion Prevention) 도구로, Windows 서버의 이벤트 뷰어를 실시간으로 모니터링하여 로그인 실패가 일정 횟수를 초과한 IP 주소를 방화벽에서 즉시 차단해 줍니다.  

외부에 공개된 RDP(원격 데스크톱) 서버는 노출과 동시에 전 세계에서 무차별 대입 대입 공격(Brute-Force Attack)이 들어오기 시작합니다. 이때 단순히 IPBan은 동일한 IP에서 반복적으로 인증에 실패할 경우, 해당 IP를 차단하여 공격을 방어합니다.

## Windows에 설치하기
Windows에서는 Microsoft에서 제공하는 원클릭 설치 스크립트를 사용하면, 약 1분 이내에 설치가 완료됩니다.  
설치 전에 PowerShell을 **관리자 권한으로 실행**해 주세요.

<alert type="info">
설치와 서비스 실행에는 관리자(Administrator) 권한이 필요합니다.
</alert>

### 원클릭 설치
아래 명령어를 관리자 PowerShell에 붙여넣고 실행합니다.

```powershell
$ProgressPreference = 'SilentlyContinue'; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/DigitalRuby/IPBan/master/IPBanCore/Windows/Scripts/install_latest.ps1'))```

설치가 완료되면 `IPBan` 서비스가 자동으로 등록되며, 별도의 작업 없이도 RDP / SSH 등 주요 로그인 이벤트에 대한 감시가 즉시 시작됩니다.

### 제거하기
Windows에서는 아래 명령어를 관리자 PowerShell에서 실행하면 서비스와 설치 파일이 모두 제거됩니다.

```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/DigitalRuby/IPBan/master/IPBanCore/Windows/Scripts/uninstall_latest.ps1'))
```

## RDP 계정 잠금 임계치 상향하기
기본 RDP 정책에서는 로그인 실패가 5회 이상 발생하면 계정이 잠기도록 설정되어 있습니다.  
하지만, IPBan을 설치하면 로그인 실패가 5회 이상 발생하면 해당 IP를 차단하기 때문에, 계정 잠금 임계치를 상향하여 계정이 잠기지 않도록 설정하는 것이 좋습니다.  
계정 잠금 임계치를 상향하려면 다음 단계를 따라 주세요.

1. `Win + R` 을 눌러 `secpol.msc` 를 실행하여 **로컬 보안 정책** 을 엽니다.
2. `계정 정책` → `계정 잠금 정책` 으로 이동합니다.
3. `계정 잠금 임계값` 을 `999` (사실상 무제한)로 변경합니다.
4. 변경 사항을 적용하고 RDP를 다시 시도합니다.

## 기본 모니터링 대상
설치 직후 별도의 설정 변경 없이도 IPBan은 다음 서비스를 기본으로 모니터링합니다.

- RDP (원격 데스크톱)
- OpenSSH
- VNC
- MySQL / SQL Server / Exchange / SmarterMail / MailEnable 등

모니터링할 서비스를 추가하거나 차단 정책을 변경하려면, 공식 저장소의 [Recipes](https://github.com/DigitalRuby/IPBan/tree/master/Recipes) 디렉터리를 참고하거나 [공식 위키](https://github.com/DigitalRuby/IPBan/wiki) 의 설정 가이드를 따라 주세요.

## 차단(ban) 해제하기
의도치 않게 차단된 IP가 있거나, 테스트를 위해 직접 차단한 IP를 해제해야 하는 경우, 다음 방법을 사용할 수 있습니다.

1. 서비스 설치 디렉터리(`C:\Program Files\IPBan`)에 `unban.txt` 파일을 생성합니다.
2. 한 줄에 하나씩 해제할 IP 주소를 입력합니다.
3. IPBan 서비스는 다음 폴링 사이클(보통 수 초 이내)에 변경 사항을 감지하여 자동으로 차단을 해제합니다.

<alert type="info">
<span class="font-bold">차단 데이터의 공유:</span> <br>
기본적으로 차단된 IP가 IPBan 전역 데이터베이스에 익명으로 보고됩니다. 개인정보 보호가 중요하다면 설정 파일의 `UseDefaultBannedIPAddressHandler` 를 `false` 로 변경해 주세요.
</alert>

## 참고 자료
- [IPBan 공식 저장소](https://github.com/digitalruby/ipban)
- [IPBan 공식 위키](https://github.com/DigitalRuby/IPBan/wiki)
- [IPBan Releases](https://github.com/DigitalRuby/IPBan/releases)
