var m = document.querySelectorAll('code[markdown]');

var jinsai = '\
| a | a | a | a |\n\
| - | - | - | - |\n\
| <strong style=\"font-family: simhei;\">上午</strong> | | | |\n\
| 高一 | 男子组 100M 预赛 | 08:00 | [查看详情](./games/games.html?id=3001) |\n\
| 高一 | 女子组 100M 预赛 | 08:08 | [查看详情](./games/games.html?id=3002) |\n\
| 高二 | 男子组 100M 预赛 | 08:12 | [查看详情](./games/games.html?id=3003) |\n\
| 高二 | 女子组 100M 预赛 | 08:20 | [查看详情](./games/games.html?id=3004) |\n\
| 高三 | 男子组 100M 预赛 | 08:26 | [查看详情](./games/games.html?id=3005) |\n\
| 高三 | 女子组 100M 预赛 | 08:34 | [查看详情](./games/games.html?id=3006) |\n\
| 初一 | 男子组 200M 预赛 | 08:40 | [查看详情](./games/games.html?id=3007) |\n\
| 初一 | 女子组 200M 预赛 | 08:46 | [查看详情](./games/games.html?id=3008) |\n\
| 初二 | 男子组 200M 预赛 | 08:50 | [查看详情](./games/games.html?id=3009) |\n\
| 初二 | 女子组 200M 预赛 | 08:56 | [查看详情](./games/games.html?id=3010) |\n\
| 初三 | 男子组 200M 预赛 | 09:00 | [查看详情](./games/games.html?id=3011) |\n\
| 初三 | 女子组 200M 预赛 | 09:08 | [查看详情](./games/games.html?id=3012) |\n\
| 高一 | 女子组 800M 决赛 | 09:12 | [查看详情](./games/games.html?id=3013) |\n\
| 高二 | 女子组 800M 决赛 | 09:20 | [查看详情](./games/games.html?id=3014) |\n\
| 高三 | 女子组 800M 决赛 | 09:28 | [查看详情](./games/games.html?id=3015) |\n\
| 初一 | 男子组 1000M 决赛 | 09:36 | [查看详情](./games/games.html?id=3016) |\n\
| 初二 | 男子组 1000M 决赛 | 10:00 | [查看详情](./games/games.html?id=3017) |\n\
| 初三 | 男子组 1000M 决赛 | 10:24 | [查看详情](./games/games.html?id=3018) |\n\
| 初一 | 男子组 4X100M接力 决赛 | 10:48 | [查看详情](./games/games.html?id=3019) |\n\
| 初一 | 女子组 4X100M接力 决赛 | 10:58 | [查看详情](./games/games.html?id=3020) |\n\
| 初二 | 男子组 4X100M接力 决赛 | 11:08 | [查看详情](./games/games.html?id=3021) |\n\
| 初二 | 女子组 4X100M接力 决赛 | 11:18 | [查看详情](./games/games.html?id=3022) |\n\
| 初三 | 男子组 4X100M接力 决赛 | 11:28 | [查看详情](./games/games.html?id=3023) |\n\
| 初三 | 女子组 4X100M接力 决赛 | 11:38 | [查看详情](./games/games.html?id=3024) |\n\
| <strong style=\"font-family: simhei;\">下午</strong> | | | |\n\
| 初一 | 男子组 50M 决赛 | 14:00 | [查看详情](./games/games.html?id=4001) |\n\
| 初一 | 女子组 50M 决赛 | 14:01 | [查看详情](./games/games.html?id=4002) |\n\
| 初二 | 男子组 50M 决赛 | 14:02 | [查看详情](./games/games.html?id=4003) |\n\
| 初二 | 女子组 50M 决赛 | 14:03 | [查看详情](./games/games.html?id=4004) |\n\
| 初三 | 男子组 50M 决赛 | 14:04 | [查看详情](./games/games.html?id=4005) |\n\
| 初三 | 女子组 50M 决赛 | 14:05 | [查看详情](./games/games.html?id=4006) |\n\
| 高一 | 男子组 100M 决赛 | 14:06 | [查看详情](./games/games.html?id=4007) |\n\
| 高一 | 女子组 100M 决赛 | 14:08 | [查看详情](./games/games.html?id=4008) |\n\
| 高二 | 男子组 100M 决赛 | 14:10 | [查看详情](./games/games.html?id=4009) |\n\
| 高二 | 女子组 100M 决赛 | 14:12 | [查看详情](./games/games.html?id=4010) |\n\
| 高三 | 男子组 100M 决赛 | 14:14 | [查看详情](./games/games.html?id=4011) |\n\
| 高三 | 女子组 100M 决赛 | 14:16 | [查看详情](./games/games.html?id=4012) |\n\
| 初一 | 男子组 200M 决赛 | 14:18 | [查看详情](./games/games.html?id=4013) |\n\
| 初一 | 女子组 200M 决赛 | 14:20 | [查看详情](./games/games.html?id=4014) |\n\
| 初二 | 男子组 200M 决赛 | 14:22 | [查看详情](./games/games.html?id=4015) |\n\
| 初二 | 女子组 200M 决赛 | 14:24 | [查看详情](./games/games.html?id=4016) |\n\
| 初三 | 男子组 200M 决赛 | 14:26 | [查看详情](./games/games.html?id=4017) |\n\
| 初三 | 女子组 200M 决赛 | 14:28 | [查看详情](./games/games.html?id=4018) |\n\
| 高一 | 男子组 4X100M接力 决赛 | 14:30 | [查看详情](./games/games.html?id=4019) |\n\
| 高一 | 女子组 4X100M接力 决赛 | 14:38 | [查看详情](./games/games.html?id=4020) |\n\
| 高二 | 男子组 4X100M接力 决赛 | 14:46 | [查看详情](./games/games.html?id=4021) |\n\
| 高二 | 女子组 4X100M接力 决赛 | 14:54 | [查看详情](./games/games.html?id=4022) |\n\
| 高三 | 男子组 4X100M接力 决赛 | 15:02 | [查看详情](./games/games.html?id=4023) |\n\
| 高三 | 女子组 4X100M接力 决赛 | 15:10 | [查看详情](./games/games.html?id=4024) |\n\
';

var tiansai = '\
| a | a | a | a |\n\
| - | - | - | - |\n\
| <strong style=\"font-family: simhei;\">上午</strong> | | | |\n\
| 高三 | 男子组 跳高 决赛 | 08:00 | [查看详情](./games/games.html?id=3101) |\n\
| 初三 | 女子组 立定跳远 决赛 | 08:00 | [查看详情](./games/games.html?id=3105) |\n\
| 高一 | 男子组 跳远 决赛 | 08:00 | [查看详情](./games/games.html?id=3103) |\n\
| 高三 | 男子组 铅球 决赛 | 08:00 | [查看详情](./games/games.html?id=3107) |\n\
| 初二 | 男子组 一分钟跳绳 决赛 | 08:00 | [查看详情](./games/games.html?id=3110) |\n\
| 高二 | 男子组 三级跳远 决赛 | 08:00 | [查看详情](./games/games.html?id=3112) |\n\
| 初一 | 男子组 实心球 决赛 | 09:00 | [查看详情](./games/games.html?id=3109) |\n\
| 高三 | 女子组 跳高 决赛 | 09:30 | [查看详情](./games/games.html?id=3102) |\n\
| 初三 | 男子组 立定跳远 决赛 | 09:30 | [查看详情](./games/games.html?id=3106) |\n\
| 高一 | 女子组 跳远 决赛 | 09:30 | [查看详情](./games/games.html?id=3104) |\n\
| 高三 | 女子组 铅球 决赛 | 09:30 | [查看详情](./games/games.html?id=3108) |\n\
| 初二 | 女子组 一分钟跳绳 决赛 | 09:30 | [查看详情](./games/games.html?id=3111) |\n\
| 高二 | 女子组 三级跳远 决赛 | 09:30 | [查看详情](./games/games.html?id=3113) |\n\
| <strong style=\"font-family: simhei;\">下午</strong> | | | |\n\
| 高二 | 男子组 跳高 决赛 | 14:00 | [查看详情](./games/games.html?id=4102) |\n\
| 初二 | 男子组 立定跳远 决赛 | 14:00 | [查看详情](./games/games.html?id=4103) |\n\
| 高一 | 女子组 铅球 决赛 | 14:00 | [查看详情](./games/games.html?id=4101) |\n\
| 初一 | 女子组 实心球 决赛 | 14:00 | [查看详情](./games/games.html?id=4105) |\n\
| 高三 | 女子组 三级跳远 决赛 | 14:00 | [查看详情](./games/games.html?id=4104) |\n\
';

m[0].innerHTML = jinsai;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';
m[1].innerHTML = tiansai;
m[1].outerHTML = '<div>' + marked(m[1].innerHTML) + '</div>';