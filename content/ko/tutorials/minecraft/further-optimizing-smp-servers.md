---
title: 야생 서버 최적화 하기
description: CPU를 많이 사용하는 야생서버를 더욱 가볍게 만들어 봅시다.

category: Tutorials/minecraft
---

## 월드보더 설정하기
서버 플레이어분들이 elytra등을 사용해 날아다니며 청크를 지속적으로 로드 하는 경우, CPU 자원을 많이 요구하고, 하드 공간도 많이 요구합니다. 미리 월드보더를 설정해 지속적으로 새 청크가 만들어 지는 것을 막으면, CPU 자원이 낭비되는 것을 막을 수 있습니다.

월드보더는 다음 명령어를 통해 설정할 수 있습니다:  
`/worldborder set (x,z 축으로 거리)`

월드보더를 설정하는 방법은 [worldborder 명령어](https://minecraft.fandom.com/ko/wiki/%EC%84%B8%EA%B3%84_%EA%B2%BD%EA%B3%84#%EB%AA%85%EB%A0%B9%EC%96%B4) 페이지에서 더 확인하실 수 있습니다.

## 맵 사전 렌더하기
맵을 실시간으로 생성하는 건 서버에 지속적으로 부하를 주는 작업입니다. 이를 미리 해두면, 실제 사용자가 접속했을때 청크가 생성된 후 렌더되는 것이 아닌 미리 생성된 청크를 렌더하는 것이기에, 성능이 대폭 강화됩니다.  

[Chunky](https://www.spigotmc.org/resources/81534/) 플러그인을 이용해 미리 렌더하는 것을 추천드려요.

## `view-distance` 값 변경하기
`server.properties`의 `view-distance` 를 제한하면, 플레이어가 볼수 있는 시야가 제한 되지만, 서버에서 보내줘야 하는 청크의 양이 감소하므로, 성능개선을 체감할 수 있습니다.

<alert type="warning">
`view-distance`값을 변경할 때는 서버 컨텐츠에 따라 적절히 조절하여 컨텐츠 진행에 불편함을 발생시키지 않도록 유의하여 변경해 주시기 바랍니다.
</alert>

## 몬스터 스폰 제한하기
`bukkit.yml`에 있는 `spawn-limits` 값을 조정 해 몬스터의 스폰량을 제한하여 서버의 성능을 향상할 수 있습니다.  

<alert type="warning">
야생 서버의 특성상, 몬스터 스폰을 제한 할 경우, 몬스터를 통해 얻을 수 있는 전리품의 가치가 변동 되므로, 유의하여 변경해 주시기 바랍니다.
</alert>

## 청크 언로드 설정 변경
`bukkit.yml`에 있는 `chunk-gc.period-in-ticks` 값을 변경하여, 비어있는 청크를 서버가 더 빠르게 언로드 할 수 있도록 설정 할 수 있습니다.

## (Paper 한정) 레드스톤 최적화 적용 (호환성 확인 필요)
`paper.yml`에 있는 `use-faster-eigencraft-redstone` 을 `true` 로 설정하세요.  

커스텀 레드스톤 플러그인이 적용 된 경우, 충돌이 일어날 수 있으니 미리 사전에 확인해 주세요.

## (Paper 한정) 깔때기 최적화 적용 (호환성 확인 필요)
`paper.yml`에 있는 `hopper.disable-move-event` 을 `true` 로 설정하세요.  

매번 깔때기에서 아이템이 이동할때마다 Event 가 트리거 되는 것을 막을 수 있습니다.  
만약 플러그인에서 깔때기에서 아이템이 이동하는 것을 감지해야 한다면 충돌이 일어나므로, 해당하는 경우에는 적용하지 말아주세요.  

## 추가 최적화
[이 SpigotMC 쓰레드](https://www.spigotmc.org/threads/guide-server-optimization%E2%9A%A1.283181/)에서 더욱 많은 내용을 확인 하실 수 있습니다.

