---
title: 가용 포트는 무엇인가요?
description: Stella IT VM에서의 가용 포트에 대해 알아봅니다.

category: FAQ/Console
---

<alert type="warning">
이 내용은 Stella IT Compact, 그리고 Standard 요금제에 한합니다.<br>
공인 IP가 제공되는 Dedicated 요금제의 경우, 포트를 개방하는 경우 자동으로 할당된 공인 IP로 개방되게 됩니다.
</alert>

가용포트는 Stella IT의 Standard/Compact 요금제에서 개인이 사용 할 수 있는 외부로 개방된 포트입니다.  
내부에서 25565 포트로 개방하실 경우, 콘솔에 표기된 해당 포트로 개방이 되게 됩니다.  

## 어떻게 사용 하여야 하나요?
### Minecraft Java Edition 서버
기본으로 설정하여 서버를 여실 경우, 자동으로 해당 포트로 줄이실 수 있습니다.  
마인크래프트 서버의 경우 `SRV` 레코드 설정을 통해 해당 host:port 형태의 연결을 도메인으로 줄일 수 있습니다.  

<alert type="warning">
SRV 레코드를 통하지 않고 직접 연결하는 경우 서버 주소에 host:port 형태로 입력해야합니다. | ex) 185.213.243.162:XXXXX
</alert>
  
자세한 내용은 [도메인은 어떻게 연결하나요?](/tutorials/minecraft/how-to-connect-domain) 을 확인 해 주세요.

### Terraria 서버
(작성 중)
