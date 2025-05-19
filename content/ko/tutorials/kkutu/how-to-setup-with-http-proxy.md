---
title: HTTP Proxy용으로 끄투 서버 시작/설정하기
description: 끄투 서버를 Stella IT에서 열기 위해 필요한 정보들을 담았습니다.

category: 'Tutorials/KKuTu'
---

<alert type="danger">
이 문서는 구버전의 Stella IT Console에 대한 내용을 다루고 있습니다.  
일부 내용은 설명된 내용과 다를 수 있습니다.
</alert>

[KKuTu](https://github.com/JJoriping/KKuTu#linux-%ED%99%98%EA%B2%BD) 는 레거시 기술을 많이 사용하며, Stella IT에서 제공하는 SNI 기반의 Reverse Proxy를 바로 지원하지 않기에, 다음과 같은 추가 설정이 필요합니다.

본 문서는 Ubuntu 18.04 기준으로 설명합니다.

## 기본 설치 가이드
### Node 12.x 설치
```bash
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs
```

### PostgreSQL 11 설치

```bash
# 18.04인 경우 코드네임에 맞춰 xenial, 20.04 인 경우, bionic.
echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" >> /etc/apt/sources.list

wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update

sudo apt install postgresql-11
pg_ctlcluster 11 main start
```

### node 의존성 모듈 `grunt` 설치
```bash
npm install -g grunt grunt-cli
```

### 레포지토리 클론
```bash
git clone https://github.com/JJoriping/KKuTu
```

### postgreSQL 데이터베이스
```bash
sudo -u postgres psql
```
다음을 실행 한 후: 이렇게 입력하세요.

```sql
CREATE DATABASE main;
ALTER USER postgres WITH PASSWORD '정할패스워드';
COMMIT;
EXIT;
```
쉘로 돌아왔다면, 다음 명령어를 입력해 데이터베이스에 단어 데이터를 입력하세요.

```bash
sudo -u postgres psql --quiet main < ./db.sql
```

## KKuTu 코드 수정 (CloudFlare, Stella IT HTTP Proxy 등을 이용하기 위함)
**본 내용은 작성이 진행 중이며, 정상적으로 작동되지 않습니다.**  

JJoriping의 소스코드의 경우 KKuTu의 게임서버를 접속할 경우, 해당 호스트 이름의 포트에 반드시 접속하는 것으로 시스템에 하드코딩이 되어있습니다. (이로 인해 Websocket 기반의 게임임에도 불구하고, CloudFlare 호환이 Out-of-the-box 로 지원 되지 않습니다.)  
  
이 Solution은 깔끔하지는 않지만 Stella IT, 또는 CloudFlare와 같은 SNI 기반의 리버스 프록시를 운용할 때 이용할 수 있도록 코드를 다음과 같이 수정합니다.  

`/Server/lib/Web/main.js` (154번 줄):   
```js
Const.MAIN_PORTS.forEach(function(v, i){
        var KEY = process.env['WS_KEY'];
        var protocol;
        if(Const.IS_SECURED) {
                protocol = 'wss';
        } else {
                protocol = 'ws';
        }

        if (typeof v === 'number') {
          gameServers[i] = new GameClient(KEY, `${protocol}://${GLOBAL.GAME_SERVER_HOST}:${v}/${KEY}`);
        } else if (typeof v === 'object') {
          if (v.url) {
            gameServers[i] = new GameClient(KEY, `${v}/${KEY}`);
          }
        }
});
```  

해당 코드로 변경할 경우, MAIN_PORT에 `wss://gamesrv1.my.kkutu.com` 등을 게임 서버로 대체하여 활용하도록 재 구성할 수 있습니다.  
  
이 솔루션은 깔끔하지 않으므로 필자는 업스트림에 기여하지 않을 예정입니다. 누군가가 더욱 깔끔한 솔루션을 개발한다면, [업스트림](https://github.com/JJoriping/KKuTu) 로 기여 바랍니다.  

## 서버 시작
우선 실행 권한을 제공합니다.

```
chmod +x ./server-setup.bat
chmod +x ./server-flush.bat
```





