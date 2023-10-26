var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 李烜骏 | - | 初一4班 |\n\
| 2 | 黄正轩 | - | 初一4班 |\n\
| 3 | 吴栎涵 | - | 初一1班 |\n\
| 4 | 张珂源 | - | 初一12班 |\n\
| 5 | 洪浩添 | - | 初一10班 |\n\
| 6 | 林奕轩 | - | 初一12班 |\n\
| 7 | 张宁远 | - | 初一11班 |\n\
| 8 | 林圣涛 | - | 初一3班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';