var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 王愿瑜 | 35.15 | 6 | 1 | 初三2班 |\n\
| 2 | 江珺萱 | - | - | - | 初三11班 |\n\
| 3 | 黄怡昕 | 33.08 | 3 | 4 | 初三5班 |\n\
| 4 | 林向祎 | 32.20 | 1 | 7 | 初三12班 |\n\
| 5 | 张谨茹 | 32.88 | 2 | 5 | 初三3班 |\n\
| 6 | 卢果 | 33.62 | 4 | 3 | 初三12班 |\n\
| 7 | 郑佳妍 | 34.92 | 5 | 2 | 初三3班 |\n\
| 8 | 郭芮含 | - | - | - | 初三1班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';