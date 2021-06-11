---
title: Spigot 서버 설치 방법
description: Spigot 서버를 설치하는 방법에 대해 알아봅니다.

category: 'Tutorials/Minecraft/Install'
---

<alert type="warning">
    본 문서는 서버를 구동할 컴퓨터에 Java가 이미 설치되어있다는 전제하에 진행됩니다.<br>
    설치가 되어있지 않다면, <a href="/tutorials/minecraft/install-guide/java">Java 설치 방법</a> 페이지를 확인하여 Java를 설치해 주세요. 
</alert>


## 서버 환경
OpenJDK 16.0.1 64Bit

## 사전 준비
드롭박스나 윈드라이브 위치에 있으면 에러가 나옵니다.  
로컬디스크 내 별도의 폴더를 생성해서 작업하시는걸 추천드립니다.  

<a href="https://www.spigotmc.org/wiki/buildtools/ ">[다운로드]</a> buildtools.jar 

## 설치 시작
### Windows
1. 메모장을 엽니다.
2. 다음을 작성합니다.
    ```bat
    @echo off
    java -jar BuildTools.jar --rev 버전명 (ex 1.16.5)
    pause
    ```
    예를 들어, `1.16.5` 버전을 빌드하려면,  
    ```bat
    @echo off
    java -jar BuildTools.jar --rev 1.16.5
    pause
    ```  
    를 입력합니다.
3. BuildTools.jar 과 같은 폴더에 파일 종류로 `모든 파일 (*.*)` 를 선택하고, `run.bat` 으로 저장합니다.
4. `run.bat`을 실행합니다.
5. 스피갓의 해당버전을 빌드 중입니다. 대략 10분 내로 빌드가 완료됩니다.
6. 대기 후 생성하셨던 폴더안에 `spigot-버전명.jar` 이 생성됩니다.
7. 서버를 열 새 폴더를 하나 만들고, `spigot-버전명.jar` 을 그 폴더로 복사합니다.
8. 새로운 메모장을 하나 더 엽니다.
9. 다음을 작성합니다. (예, 7에서 생성된 파일의 이름이 `spigot-1.16.5.jar` 인 경우)
    ```bat
    @echo off
    java -Xmx1G -jar spigot-1.16.5.jar
    pause
    ```
10. `spigot-버전명.jar` 를 붙여넣은 폴더에 파일 종류로 `모든 파일 (*.*)` 를 선택하고, `start.bat` 으로 저장합니다.
11. `start.bat`을 실행해주세요.
12. `eula.txt` 파일을 연후 `eula=false` 부분을 `eula=true`로 변경해주세요
13. 배치파일을 다시 재실행 하면 서버가 열립니다.
