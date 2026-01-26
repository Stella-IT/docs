---
title: 원격 데스크톱 계정이 잠겼을 때 해결 방법
description: 원격 데스크톱 계정이 잠겼을 때 해결 방법을 알아봅시다.

category: Stella IT Console
---
![image](https://github.com/user-attachments/assets/a99869c5-5a7d-4a3a-a0b8-804c476f322d)

```로그인 시도나 암호 변경 시도를 너무 많이 했기 때문에 보안을 위해 사용자 계정이 잠겼습니다. 잠시 기다렸다가 다시 시도하거나 시스템 관리자나 기술 지원 서비스에 문의하십시오.```

위 메시지가 표시되며 RDP에 접근 할 수 없을 때 해결 방법은 두 가지 방법이 있습니다. 
아래 단계를 따라 진행해 주세요.

## 자동 잠금 해제 기다리기  
로그온 시도로 인한 사용자 계정 잠금은 별도로 설정하지 않았다면, 10분 뒤 자동으로 해제됩니다.  
10분 뒤에 잠금이 해제되면 다시 시도하세요.

## VNC로 로그인하여 해제하기  
VNC로 로그인하여 계정 잠금을 해제하려면 아래 단계를 따라주세요.

1. Stella IT Console에서 VNC 연결 버튼을 클릭합니다.
[VNC 연결] 버튼을 클릭합니다. 버튼은 <전원> 버튼 옆 <설정> 버튼 안에 있습니다.  
![image](https://github.com/user-attachments/assets/a779ad24-f28e-489a-af0e-42824234905e)

VNC가 연결되었다면, 검은 화면이 표시될 수 있습니다. 클릭하거나 마우스를 움직여 컴퓨터의 화면 보호기를 해제합니다.

3. [Send CtrlAltDel] 버튼을 눌러 화면 보호기를 해제합니다.  
![image](https://github.com/user-attachments/assets/298d0515-0b82-48e5-9500-e9af0ba900e6)


4. 표시된 암호 입력창에서 암호를 입력합니다. 암호는 Stella IT 계정이 아닌, 인스턴스의 비밀번호를 입력해야 합니다.  
![image](https://github.com/user-attachments/assets/d2120174-1b6e-4ac0-96ad-ef8d083fee35)


5. 암호를 입력하여 로그인에 성공했다면 VNC 창을 닫고 다시 RDP 접속을 시도합니다.
