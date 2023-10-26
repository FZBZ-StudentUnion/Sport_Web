var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 陈玥忻 | - | 初一5班 |\n\
| 2 | 王雨欣 | - | 初一14班 |\n\
| 3 | 陈韵霏 | - | 初一3班 |\n\
| 4 | 郑灵怡 | - | 初一9班 |\n\
| 5 | 罗友欢 | - | 初一10班 |\n\
| 6 | 钟颖 | - | 初一6班 |\n\
| 7 | 潘妍冰 | - | 初一13班 |\n\
| 8 | 林睿馨 | - | 初一2班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';