var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 蒋泊元 | - | - | - | 高一5班 |\n\
| 2 | 倪睿康 | 12.23 | 4 | 3 | 高一10班 |\n\
| 3 | 陈子睿 | - | - | - | 高一4班 |\n\
| 4 | 周胤霖 | 11.84 | 1 | 7 | 高一1班 |\n\
| 5 | 洪彦彬 | 12.04 | 3 | 4 | 高一10班 |\n\
| 6 | 李智昕 | 12.03 | 2 | 5 | 高一13班 |\n\
| 7 | 陈思源 | - | - | - | 高一5班 |\n\
| 8 | 王奕钱 | 12.49 | 5 | 2 | 高一12班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';