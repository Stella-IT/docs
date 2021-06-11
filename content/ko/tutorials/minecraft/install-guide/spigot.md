---
title: Spigot 서버 설치 방법
description: Spigot 서버를 설치하는 방법에 대해 알아봅니다.

category: 'Tutorials/Minecraft/Install'
---

<alert type="warning">
    본 문서는 서버를 구동할 컴퓨터에 Java가 이미 설치되어있다는 전제하에 진행됩니다.<br>
    설치가 되어있지 않다면, <a href="/tutorials/minecraft/install-guide/java">Java 설치 방법</a> 페이지를 확인하여 Java를 설치해 주세요. 
</alert>


*WINDOWS*

## 서버 환경
OpenJDK 16.0.1 64Bit

## 사전 준비
드롭박스나 윈드라이브 위치에 있으면 에러가 나옵니다.
로컬디스크 내 별도의 폴더를 생성해서 작업하시는걸 추천드립니다.  

<a href="https://www.spigotmc.org/wiki/buildtools/ ">[다운로드]</a> buildtools.jar 

## 내용
1. buildtools.jar 과 실행 배치파일(.bat)을 만듭니다.
`@echo off
java -jar BuildTools.jar --rev 버전명 (ex 1.16.5)
pause`
2. 배치파일(.bat)을 실행해주세요.
3. 스피갓의 해당버전을 빌드 중입니다. 대략 10분 내로 빌드가 완료됩니다.
4. 대기 후 생성하셨던 폴더안에 `spigot-버전명.jar` 이 생성됩니다.
5. 파일`(spigot-버전명.jar)`을 복사하여 새로운 폴더와 배치파일(.bat) 생성해 줍니다. `(예시. 1.16.5 Version)`
'@echo off
java -Xmx1G -jar spigot-버전명.jar
pause'
6. 배치파일(.bat)을 실행해주세요.
7. Eula.txt 파일을 연후 `Eula=false` 부분을 `Eula=true`로 변경해주세요
8. 배치파일을 다시 재실행 하면 서버가 열립니다.
