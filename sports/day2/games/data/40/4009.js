var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 陈致宏 | - | 高二4班 |\n\
| 2 | 陈冠泽 | - | 高二9班 |\n\
| 3 | 柯南 | - | 高二16班 |\n\
| 4 | 王垚彬 | - | 高二7班 |\n\
| 5 | 许翔 | - | 高二4班 |\n\
| 6 | 陈杰 | - | 高二9班 |\n\
| 7 | 张海韵 | - | 高二12班 |\n\
| 8 | 林仕诚 | - | 高二12班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';