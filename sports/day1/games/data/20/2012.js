var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 郑宇晴 | - | 高三3班 |\n\
| 2 | 黄子晗 | - | 高三5班 |\n\
| 3 | 张瑾璘 | - | 高三12班 |\n\
| 4 | 曹羽涵 | - | 高三9班 |\n\
| 5 | 陈可歆 | - | 高三2班 |\n\
| 6 | 石可欣 | - | 高三12班 |\n\
| 7 | 俞欣柠 | - | 高三6班 |\n\
| 8 | 翁可欣 | - | 高三2班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';