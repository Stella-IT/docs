---
title: 공인 IP로 전환하기
description: Stella IT 인스턴스에 공인 IP를 할당하는 방법을 알아봅니다.

category: 'Tutorials/Console'
---

Stella IT는 본래 공인 IP를 할당하지 않고 4개의 포트를 할당하여 인스턴스를 제공하였습니다.  
하지만, [Stella IT의 공인 IP 할당 계획](https://stella-it.com/notice/133)에 따라 기존처럼 한정된 포트만 할당받을 수 없으며, 공인 IP를 할당받아 모든 포트를 자유롭게 사용할 수 있습니다.

<alert type="info">
2026년 1월 1일 이후에 생성된 인스턴스에는 이미 공인 IP가 할당되어 제공됩니다.
</alert>

## 1. 인스턴스에 공인 IP를 할당을 시작하는 방법
인스턴스에 공인 IP를 할당하는 것은 몇 가지 단계를 거치기만 하면 됩니다.  

<alert type="warning">
<span class="font-bold">공인 IP를 할당하기 전 몇 가지 유의사항을 확인하시기 바랍니다.</span> <br>
- 공인 IP를 할당하면 기존에 할당된 4개의 포트는 더 이상 사용할 수 없습니다.  <br>
- 공인 IP를 할당하면 인스턴스의 IP 주소가 변경됩니다.  <br>
- 공인 IP를 할당하면 HTTP Proxy를 더 이상 사용할 수 없게 됩니다.  <br>
- 공인 IP를 할당하면 모든 포트가 인터넷에 공개됩니다. 보안에 유의하시고, 반드시 방화벽을 설정하세요.  <br>
- 공인 IP 할당을 시작하면 작업이 완료되기 전까지 인스턴스의 인터넷이 끊어집니다.  <br>
- 공인 IP 할당을 완료하려면 인스턴스 내에서 별도의 작업이 필요합니다.  <br>
<span class="font-semibold">공인 IP 할당은 시작하면 절대 되돌릴 수 없습니다. 발생할 수 있는 모든 영향을 최소화한 뒤에 진행하시기 바랍니다.  </span>
</alert>

1. [Stella IT Console](https://console.stella-it.cloud)에 로그인합니다.
2. [인스턴스 메뉴](https://console.stella-it.cloud/instances)로 이동합니다.
3. 공인 IP를 할당하려는 인스턴스의 [상세 정보 보기] 버튼을 클릭합니다.
<img width="1317" height="909" alt="CleanShot 2026-01-04 at 13 46 25" src="https://github.com/user-attachments/assets/0ce79ccb-fcce-4b41-974b-a1e125315998" />

4. 인스턴스 세부 정보 페이지에서 [마이그레이션] 탭을 선택하여 [지금 공인 IP 할당 마이그레이션 실행] 버튼을 클릭합니다.
<img width="1317" height="909" alt="CleanShot 2026-01-04 at 13 51 13" src="https://github.com/user-attachments/assets/841f3237-9eb5-4b5a-a9e5-f5f96eefa8e0" />

5. 확인 창이 나타나면 [확인] 버튼을 클릭하여 공인 IP 할당을 완료합니다.
6. Stella IT Console의 인스턴스 세부 정보 페이지에서 [포트 정보] 탭 대신 [IP 정보] 탭이 나타나며, 할당된 공인 IP 주소를 확인할 수 있습니다.
<img width="1317" height="909" alt="CleanShot 2026-01-04 at 13 52 42" src="https://github.com/user-attachments/assets/cc529c3a-90e4-4a7c-ac6e-beb5a71621ba" />

7. 반면, [원격 접속] 탭에서 원격 접속 정보를 확인할 수 없고, 실제로 접속도 되지 않을 수 있습니다. 이는 의도 동작으로 남은 추가 작업을 모두 수행하면 올바른 원격 접속 정보를 다시 받을 수 있습니다.
8. 남은 추가 작업을 수행하기 위하여 VNC를 연결하세요.
<img width="1317" height="909" alt="CleanShot 2026-01-04 at 13 53 32" src="https://github.com/user-attachments/assets/6f07f331-7a8f-4dac-b6f6-49bcb43be357" />


## 2. 인스턴스 내에서 추가 작업하기
인스턴스에 공인 IP를 할당한 후에는 인스턴스 내부에서 IP 할당 작업이 필요합니다.

### Windows
1. Stella IT Console에서 VNC 접속을 시작합니다.
2. 검은 화면이 나타나면 마우스로 한번 클릭하면 Windows 로그인 화면을 확인할 수 있습니다.
3. [Ctrl+Alt+Del 입력] 버튼을 클릭하여 암호 입력창에 진입합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 54 52" src="https://github.com/user-attachments/assets/20420d84-bfaf-4191-b7f8-ad18232935c6" />

4. 암호 입력칸이 나타나면 암호를 입력하세요. 만약, 인스턴스의 암호를 변경하지 않았다면 [기본 비밀번호 입력] 버튼을 눌러 자동 완성하세요.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 55 49" src="https://github.com/user-attachments/assets/46c4e813-aea9-4e51-8cd3-5fe9a003e20a" />

5. 작업 표시줄 하단 오른쪽의 네트워크 아이콘을 마우스 오른쪽 버튼으로 클릭하고 [네트워크 및 인터넷 설정 열기]를 선택합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 56 51" src="https://github.com/user-attachments/assets/a4f3baa4-6472-4c99-9e72-9e398184fcb5" />

6. [어댑터 옵션 변경]을 클릭합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 57 14" src="https://github.com/user-attachments/assets/55477a85-b81b-4b75-a7c7-fe15ccc86d75" />

7. 네트워크 연결 창에서 사용 중인 네트워크 어댑터를 마우스 오른쪽 버튼으로 클릭하고 [속성]을 선택합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 57 33" src="https://github.com/user-attachments/assets/51fc37db-e48d-4a8b-ad94-ef433d571f5d" />

8. [인터넷 프로토콜 버전 4(TCP/IPv4)]를 선택하고 [속성] 버튼을 클릭합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 13 58 01" src="https://github.com/user-attachments/assets/3f5b5c89-147c-46ef-bc6e-7ed21ef6a8f9" />

9. [다음 IP 주소 사용]을 선택하고 다음 정보를 입력합니다.
    - IP 주소 및 서브넷 마스크: Stella IT Console의 인스턴스 세부 정보 페이지에서 확인한 공인 IP 주소와 서브넷 마스크
    - 기본 게이트웨이: Stella IT Console의 인스턴스 세부 정보 페이지에서 확인한 게이트웨이 주소
    - DNS 서버: 8.8.8.8
<img width="1910" height="1298" alt="CleanShot 2026-01-04 at 13 59 34 복사" src="https://github.com/user-attachments/assets/a948e7a5-5328-448e-8ac2-4d256ceae2b5" />

10. [확인] 버튼을 클릭하여 설정을 저장합니다.
11. 인스턴스에서 icanhazip.com를 접속하여 방금 입력한 공인 IP가 정상적으로 출력되는지 확인합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 14 04 24" src="https://github.com/user-attachments/assets/18fac77b-1638-49a7-aebb-30a4ceb7013e" />


### Linux (Ubuntu 기준)
1. Stella IT Console에서 VNC 접속을 시작합니다.
2. 사용자 이름과 비밀번호를 묻는 화면이 나타납니다. 인스턴스의 계정과 암호를 입력하여 로그인합니다. 별도로 설정하지 않았다면, 사용자 이름은 ubuntu 이며, 암호는 [기본 비밀번호 입력] 버튼을 눌러 자동 완성할 수 있습니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 14 07 35" src="https://github.com/user-attachments/assets/d0ec9594-13b2-4fa7-b37c-44c2e1b09a2e" />

3. 터미널을 열고 다음 명령어를 입력하여 네트워크 설정 파일을 엽니다. 이름은 다를 수 있으나, /etc/netplan/ 디렉터리 내에 있는 YAML 파일입니다.
    ```bash
    sudo nano /etc/netplan/50-cloud-init.yaml
    ```
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 14 09 35" src="https://github.com/user-attachments/assets/81958d62-1909-4ba0-b12e-e2631914df0e" />

4. 파일 내용을 다음과 같이 수정합니다. IP 주소, 서브넷 마스크, 게이트웨이, DNS 서버는 Stella IT Console의 인스턴스 세부 정보 페이지에서 확인한 값을 사용합니다.
    ```yaml
    network:
        version: 2
        ethernets:
            eth0:
                mtu: 1400
                addresses:
                - <공인 IP 주소>/<서브넷 접두사 길이>
                nameservers:
                    addresses:
                    - 8.8.8.8
                routes:
                -   to: default
                    via: <게이트웨이 주소>
                set-name: eth0
    ```
    공인 IP 주소와 서브넷 접두사 길이는 Stella IT Console의 인스턴스 세부 정보 페이지에서 확인할 수 있습니다.  
    예를 들어, 공인 IP가 `141.11.195.1`이고 서브넷 접두사 길이가 `25`인 경우, `141.11.195.1/25`로 입력합니다.
<img width="1976" height="1364" alt="CleanShot 2026-01-04 at 14 10 20 복사" src="https://github.com/user-attachments/assets/8e4a181c-6d88-4f6f-a429-abbd2eb44453" />

5. Ctrl+X를 눌러 파일을 저장하고 닫습니다.
6. 다음 명령어를 입력하여 네트워크 설정을 적용합니다.
    ```bash
    sudo netplan apply
    ```
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 14 13 32" src="https://github.com/user-attachments/assets/4583b947-8afd-4c98-8563-c32eefab736f" />

7. 인스턴스에서 icanhazip.com를 접속하여 방금 입력한 공인 IP가 정상적으로 출력되는지 확인합니다.
<img width="1136" height="983" alt="CleanShot 2026-01-04 at 14 14 04" src="https://github.com/user-attachments/assets/2d0c01a8-bbe0-4d3a-bd4d-5706e1f64524" />


## 3. 마무리
이제 인스턴스에 공인 IP가 성공적으로 할당되었습니다.  
인스턴스에 공인 IP가 할당되었으므로, 이제 모든 포트를 자유롭게 사용할 수 있습니다.  
보안을 위해 방화벽 설정을 검토하고, 필요에 따라 포트를 차단하거나 허용하는 규칙을 설정하는 것이 좋습니다.

방화벽을 구성하려면 Windows인 경우 Windows 방화벽 설정을, Linux인 경우 ufw와 같은 도구를 사용할 수 있습니다.

### Windows 방화벽 설정
1. 제어판을 열고 [시스템 및 보안] > [Windows Defender 방화벽]을 선택합니다.
2. 왼쪽 메뉴에서 [고급 설정]을 클릭합니다.
3. 인바운드 규칙 또는 아웃바운드 규칙을 선택하여 새 규칙을 만듭니다.
4. 포트, 프로그램, 사용자 지정 규칙 등을 설정하여 방화벽 규칙을 구성합니다.

### UFW 설정 (Ubuntu 기준)
1. UFW에 SSH 접속을 허용합니다.
    ```bash
    sudo ufw allow ssh
    ```
2. 필요한 포트를 허용합니다. 예를 들어, HTTP(80)와 HTTPS(443) 포트를 허용하려면 다음 명령어를 입력합니다.
    ```bash
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    ```
3. UFW를 활성화합니다.
    ```bash
    sudo ufw enable
    ```
4. 현재 UFW 상태를 확인합니다.
    ```bash
    sudo ufw status
    ```
