var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 黄宏彬 | - | - | - | 高一1班 |\n\
| 2 | 钱禹泽 | 25.72 | 4 | 3 | 高一11班 |\n\
| 3 | 倪炙轩 | 25.87 | 6 | 1 | 高一6班 |\n\
| 4 | 周胤霖 | 25.01 | 1 | 7 | 高一1班 |\n\
| 5 | 陈子睿 | 25.61 | 3 | 4 | 高一4班 |\n\
| 6 | 陈诺霖 | 25.08 | 2 | 5 | 高一7班 |\n\
| 7 | 黄润峰 | - | - | - | 高一14班 |\n\
| 8 | 蒋泊元 | 25.86 | 5 | 2 | 高一5班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';