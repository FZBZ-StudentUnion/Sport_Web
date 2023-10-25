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
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 郑宇晴 | - | - | - | 高三3班 |\n\
| 2 | 黄子晗 | 35.04 | 5 | 2 | 高三5班 |\n\
| 3 | 张瑾璘 | 33.41 | 3 | 4 | 高三12班 |\n\
| 4 | 曹羽涵 | 30.94 | 1 | 7 | 高三9班 |\n\
| 5 | 陈可歆 | 32.28 | 2 | 5 | 高三2班 |\n\
| 6 | 石可欣 | - | - | - | 高三12班 |\n\
| 7 | 俞欣柠 | 34.13 | 4 | 3 | 高三6班 |\n\
| 8 | 翁可欣 | 36.45 | 6 | 1 | 高三2班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';