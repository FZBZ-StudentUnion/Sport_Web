var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - |  - | - | - | - |\n\
| 1 | 郑舒弈 | - |  - | - | 初三9班 |\n\
| 2 | 杜梦雅 | 16.31 |  5 | 2 | 初三9班 |\n\
| 3 | 林芷妍 | - |  - | - | 初三3班 |\n\
| 4 | 曹睿萱 | 14.61 |  1 | 7 | 初三6班 |\n\
| 5 | 方琳菲 | 15.52 |  2 | 5 | 初三10班 |\n\
| 6 | 陈婧萱 | 15.89 |  4 | 3 | 初三11班 |\n\
| 7 | 卢果 | 15.88 |  3 | 4 | 初三12班 |\n\
| 8 | 罗卿华 | 16.37 |  6 | 1 | 初三12班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';