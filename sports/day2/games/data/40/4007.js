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
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 蒋泊元 | - | 高一5班 |\n\
| 2 | 倪睿康 | - | 高一10班 |\n\
| 3 | 陈子睿 | - | 高一4班 |\n\
| 4 | 周胤霖 | - | 高一1班 |\n\
| 5 | 洪彦彬 | - | 高一10班 |\n\
| 6 | 李智昕 | - | 高一13班 |\n\
| 7 | 陈思源 | - | 高一5班 |\n\
| 8 | 王奕钱 | - | 高一12班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';