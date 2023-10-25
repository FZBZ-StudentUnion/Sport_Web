var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 吴念芊 | - | - | - | 初一2班 |\n\
| 2 | 郑铃珊 | 16.96 | 6 | 1 | 初一7班 |\n\
| 3 | 梁熙汶 | 14.45 | 1 | 7 | 初一5班 |\n\
| 4 | 郑雅彤 | 14.97 | 2 | 5 | 初一5班 |\n\
| 5 | 郑灵怡 | 15.94 | 4 | 3 | 初一9班 |\n\
| 6 | 罗友欢 | 15.77 | 3 | 4 | 初一10班 |\n\
| 7 | 郭耀婷 | - | - | - | 初一11班 |\n\
| 8 | 王金菁 | 16.92 | 5 | 2 | 初一2班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';
