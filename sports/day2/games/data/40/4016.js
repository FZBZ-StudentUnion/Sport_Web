var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 龚凡琪 | 35.76 | 6 | 1 | 初二12班 |\n\
| 2 | 张予忱 | - | - | - | 初二2班 |\n\
| 3 | 黄若铭 | 33.64 | 3 | 4 | 初二8班 |\n\
| 4 | 邓梓依 | 32.99 | 1 | 7 | 初二5班 |\n\
| 5 | 江宥颖 | 33.17 | 2 | 5 | 初二4班 |\n\
| 6 | 林亚洁 | 33.70 | 4 | 3 | 初二5班 |\n\
| 7 | 冯紫涵 | 35.52 | 5 | 2 | 初二3班 |\n\
| 8 | 林瑾言 | - | - | - | 初二9班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';