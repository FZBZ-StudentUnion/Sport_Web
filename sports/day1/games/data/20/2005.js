var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 李泽宇 | - | 初三12班 |\n\
| 2 | 林宸君 | - | 初三12班 |\n\
| 3 | 邹铸星 | - | 初三6班 |\n\
| 4 | 叶文杰 | - | 初三6班 |\n\
| 5 | 张行健 | - | 初三4班 |\n\
| 6 | 翁才硕 | - | 初三4班 |\n\
| 7 | 刘凯烨 | - | 初三1班 |\n\
| 8 | 林锦泓 | - | 初三12班 |\n\
&nbsp;\n\
\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';