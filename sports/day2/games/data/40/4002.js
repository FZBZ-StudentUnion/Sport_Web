var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 陈沛灵 | - | 初一3班 |\n\
| 2 | 林睿馨 | - | 初一2班 |\n\
| 3 | 叶夏冉 | - | 初一13班 |\n\
| 4 | 卢滢 | - | 初一7班 |\n\
| 5 | 戴子诺 | - | 初一12班 |\n\
| 6 | 王雨欣 | - | 初一14班 |\n\
| 7 | 张宸嫣 | - | 初一7班 |\n\
| 8 | 吴佳颖 | - | 初一9班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';