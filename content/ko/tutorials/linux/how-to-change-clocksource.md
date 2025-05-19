---
title: 어떻게 Linux에서 실행되는 가상 머신의 클럭 소스를 변경하나요?
description: Linux에서 실행되는 가상 머신의 클럭 소스를 TSC로 변경하는 방법에 대해 알아봅니다.

category: Tutorials/linux
---

<alert type="danger">
이 문서는 구버전의 Stella IT Console에 대한 내용을 다루고 있습니다.  
현재는 필요하지 않을 수 있습니다.
</alert>

<alert type="info">
이 가이드는 Stella IT Save, Highend, HFQ 요금제에 한합니다.
</alert>

Stella IT에서 실행되는 가상 머신은 Xen에서 실행되며, 기본 클럭 소스는 Xen입니다.  
이러한 기본 클럭 소스는 Linux의 환경에서 시간 값을 가져올 때 낮은 성능을 나타낼 수 있습니다.  
아래 가이드를 통하여 기본 클럭 소스를 알아보고, Time Stamp Counter로 변경하는 방법에 대해 알아봅니다.

## 현재 사용중인 클럭 소스 알아보기
현재 실행중인 가상 머신의 클럭 소스를 확인하려면 아래 명령어를 실행하세요.
```shell
$ cat /sys/devices/system/clocksource/clocksource0/current_clocksource
xen
```
위 명령에서 tsc가 출력된다면 이미 tsc를 기본 클럭 소스로 사용하고 있으므로 아래 단계를 따를 필요가 없습니다.

현재 실행중인 가상 머신의 클럭 소스를 변경하기 위해 사용 가능한 다른 클럭 소스들을 알아보려면 아래 명령어를 실행하세요.
```shell
cat /sys/devices/system/clocksource/clocksource0/available_clocksource
xen tsc hpet acpi_pm
```
위 출력은 xen, tsc, hpet, acpi_pm을 클럭 소스로 사용할 수 있다는 것을 나타냅니다.  
Stella IT는 위 클럭 소스 중 tsc를 클럭 소스로 사용할 것을 권장합니다.

## 일시적으로 클럭 소스 변경하기
클럭 소스를 변경하려면 아래 명령어를 실행하면 일시적으로 클럭 소스를 변경할 수 있습니다.
```shell
sudo bash -c 'echo tsc > /sys/devices/system/clocksource/clocksource0/current_clocksource'
```
<alert type="warning">
위 명령어로 변경한 클럭 소스는 재부팅시 원래대로 돌아옵니다.
</alert>

## 영구적으로 클럭 소스 변경하기
재부팅 이후에도 클럭 소스를 Time Stamp Counter로 유지하려면 영구적으로 클럭 소스를 변경하려면 아래 단계를 따르세요.

### 수동으로 설정하기
커널 명령줄 파라미터에서 clocksource를 tsc로 설정하세요. 만약 Ubuntu를 사용하고 있다면 GRUB을 사용하고 있으므로, 아래 명령어를 따라할 수 있습니다.
1. ```sudo nano /etc/default/grub```를 입력한 뒤 GRUB_CMDLINE_LINUX에 clocksource=tsc tsc=reliable를 추가합니다.
2. ```sudo update-grub```를 입력하려 GRUB를 업데이트합니다.
3. ```sudo reboot now```를 입력하여 시스템을 재시작합니다.

### 자동으로 설정하기
Stella IT에서는 자동으로 클럭 소스를 tsc로 변경하는 스크립트를 제공합니다. 사용하려면 아례 명령어를 실행하세요.
1. ```curl -fsSL s4a.it/fixts | bash```를 입력합니다.
