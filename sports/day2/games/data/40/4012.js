var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 徐瑜苹 | - | 高三8班 |\n\
| 2 | 董秋君 | - | 高三2班 |\n\
| 3 | 张瑾璘 | - | 高三12班 |\n\
| 4 | 曹羽涵 | - | 高三9班 |\n\
| 5 | 陈可歆 | - | 高三2班 |\n\
| 6 | 李靖颖 | - | 高三13班 |\n\
| 7 | 余宸亦 | - | 高三4班 |\n\
| 8 | 官灵 | - | 高三6班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';