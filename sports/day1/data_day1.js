var m = document.querySelectorAll('code[markdown]');

var jinsai = '\
| a | a | a | a |\n\
| - | - | - | - |\n\
| <strong style=\"font-family: 黑体;\">上午</strong> | | | |\n\
| 初一 | 男子组 100M 预赛 | 09:30 | [查看详情](./games/games.html?id=1001) |\n\
| 初一 | 女子组 100M 预赛 | 09:36 | [查看详情](./games/games.html?id=1002) |\n\
| 初二 | 男子组 100M 预赛 | 09:42 | [查看详情](./games/games.html?id=1003) |\n\
| 初二 | 女子组 100M 预赛 | 09:50 | [查看详情](./games/games.html?id=1004) |\n\
| 初三 | 男子组 100M 预赛 | 09:54 | [查看详情](./games/games.html?id=1005) |\n\
| 初三 | 女子组 100M 预赛 | 10:02 | [查看详情](./games/games.html?id=1006) |\n\
| 高一 | 男子组 200M 预赛 | 10:06 | [查看详情](./games/games.html?id=1007) |\n\
| 高一 | 女子组 200M 预赛 | 10:14 | [查看详情](./games/games.html?id=1008) |\n\
| 高二 | 男子组 200M 预赛 | 10:18 | [查看详情](./games/games.html?id=1009) |\n\
| 高二 | 女子组 200M 预赛 | 10:24 | [查看详情](./games/games.html?id=1010) |\n\
| 高三 | 男子组 200M 预赛 | 10:28 | [查看详情](./games/games.html?id=1011) |\n\
| 高三 | 女子组 200M 预赛 | 10:36 | [查看详情](./games/games.html?id=1012) |\n\
| <strong style=\"font-family: 黑体;\">下午</strong> | | | |\n\
| 初一 | 男子组 100M 决赛 | 14:00 | [查看详情](./games/games.html?id=2001) |\n\
| 初一 | 女子组 100M 决赛 | 14:02 | [查看详情](./games/games.html?id=2002) |\n\
| 初二 | 男子组 100M 决赛 | 14:04 | [查看详情](./games/games.html?id=2003) |\n\
| 初二 | 女子组 100M 决赛 | 14:06 | [查看详情](./games/games.html?id=2004) |\n\
| 初三 | 男子组 100M 决赛 | 14:08 | [查看详情](./games/games.html?id=2005) |\n\
| 初三 | 女子组 100M 决赛 | 14:10 | [查看详情](./games/games.html?id=2006) |\n\
| 高一 | 男子组 200M 决赛 | 14:12 | [查看详情](./games/games.html?id=2007) |\n\
| 高一 | 女子组 200M 决赛 | 14:14 | [查看详情](./games/games.html?id=2008) |\n\
| 高二 | 男子组 200M 决赛 | 14:16 | [查看详情](./games/games.html?id=2009) |\n\
| 高二 | 女子组 200M 决赛 | 14:18 | [查看详情](./games/games.html?id=2010) |\n\
| 高三 | 男子组 200M 决赛 | 14:20 | [查看详情](./games/games.html?id=2011) |\n\
| 高三 | 女子组 200M 决赛 | 14:22 | [查看详情](./games/games.html?id=2012) |\n\
| 初一 | 女子组 800M 决赛 | 14:24 | [查看详情](./games/games.html?id=2013) |\n\
| 初二 | 女子组 800M 决赛 | 14:40 | [查看详情](./games/games.html?id=2014) |\n\
| 初三 | 女子组 800M 决赛 | 14:56 | [查看详情](./games/games.html?id=2015) |\n\
| 高一 | 男子组 1000M 决赛 | 15:12 | [查看详情](./games/games.html?id=2016) |\n\
| 高二 | 男子组 1000M 决赛 | 15:36 | [查看详情](./games/games.html?id=2017) |\n\
| 高三 | 男子组 1000M 决赛 | 16:00 | [查看详情](./games/games.html?id=2018) |\n\
| 初一 | 男子组 50M 预赛 | 16:24 | [查看详情](./games/games.html?id=2019) |\n\
| 初一 | 女子组 50M 预赛 | 16:28 | [查看详情](./games/games.html?id=2020) |\n\
| 初二 | 男子组 50M 预赛 | 16:31 | [查看详情](./games/games.html?id=2021) |\n\
| 初二 | 女子组 50M 预赛 | 16:34 | [查看详情](./games/games.html?id=2022) |\n\
| 初三 | 男子组 50M 预赛 | 16:36 | [查看详情](./games/games.html?id=2023) |\n\
| 初三 | 女子组 50M 预赛 | 16:40 | [查看详情](./games/games.html?id=2024) |\n\
';

var tiansai = '\
| a | a | a | a |\n\
| - | - | - | - |\n\
| <strong style=\"font-family: 黑体;\">上午</strong> | | | |\n\
| 高一 | 男子组 跳高 | 09:30 | [查看详情](./games/games.html?id=1101) |\n\
| 初一 | 男子组 立定跳远 | 09:30 | [查看详情](./games/games.html?id=1103) |\n\
| 高二 | 男子组 跳远 决赛 | 09:30 | [查看详情](./games/games.html?id=1105) |\n\
| 高一 | 男子组 铅球 决赛 | 09:30 | [查看详情](./games/games.html?id=1112) |\n\
| 初二 | 男子组 实心球 决赛 | 09:30 | [查看详情](./games/games.html?id=1107) |\n\
| 初三 | 男子组 一分钟跳绳 决赛 | 09:30 | [查看详情](./games/games.html?id=1109) |\n\
| 高三 | 男子组 三级跳远 决赛 | 09:30 | [查看详情](./games/games.html?id=1111) |\n\
| 高一 | 女子组 跳高 决赛 | 10:30 | [查看详情](./games/games.html?id=1102) |\n\
| 初一 | 女子组 立定跳远 决赛 | 10:30 | [查看详情](./games/games.html?id=1104) |\n\
| 高二 | 女子组 跳远 决赛 | 10:30 | [查看详情](./games/games.html?id=1106) |\n\
| 初二 | 女子组 实心球 决赛 | 10:30 | [查看详情](./games/games.html?id=1108) |\n\
| 初三 | 女子组 一分钟跳绳 决赛 | 10:30 | [查看详情](./games/games.html?id=1110) |\n\
| <strong style=\"font-family: 黑体;\">下午</strong> | | | |\n\
| 高二 | 女子组 跳高 决赛 | 14:00 | [查看详情](./games/games.html?id=2101) |\n\
| 初二 | 女子组 立定跳远 决赛 | 14:00 | [查看详情](./games/games.html?id=2102) |\n\
| 高三 | 男子组 跳远 决赛 | 14:00 | [查看详情](./games/games.html?id=2103) |\n\
| 高二 | 男子组 铅球 决赛 | 14:00 | [查看详情](./games/games.html?id=2105) |\n\
| 初三 | 男子组 实心球  决赛 | 14:00 | [查看详情](./games/games.html?id=2107) |\n\
| 初一 | 女子组 一分钟跳绳 决赛 | 14:00 | [查看详情](./games/games.html?id=2109) |\n\
| 高一 | 男子组 三级跳远 决赛 | 14:00 | [查看详情](./games/games.html?id=2111) |\n\
| 高三 | 女子组 跳远 决赛 | 15:30 | [查看详情](./games/games.html?id=2104) |\n\
| 高二 | 女子组 铅球 决赛 | 15:30 | [查看详情](./games/games.html?id=2106) |\n\
| 初三 | 女子组 实心球 决赛 | 15:30 | [查看详情](./games/games.html?id=2108) |\n\
| 初一 | 男子组 一分钟跳绳 决赛 | 15:30 | [查看详情](./games/games.html?id=2110) |\n\
| 高一 | 女子组 三级跳远 决赛 | 15:30 | [查看详情](./games/games.html?id=2112) |\n\
';

m[0].innerHTML = jinsai;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';
m[1].innerHTML = tiansai;
m[1].outerHTML = '<div>' + marked(m[1].innerHTML) + '</div>';