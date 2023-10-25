var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  100M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 班级 |\n\
| - | - | - | - | - |\n\
| 1 | | - | - | - |\n\
| 2 | 曾欣妍 | 16.48 | 7 | 初二1班 |\n\
| 3 | 冯紫涵 | - | - | 初二3班 |\n\
| 4 | 刘睿涵 | 16.83 | 8 | 初二8班 |\n\
| 5 | 卢麒朵 | 16.26 | 5 | 初二2班 |\n\
| 6 | 许明阅 | 15.64 | 2 | 初二10班 |\n\
| 7 | | - | - | - |\n\
| 8 | | - | - | - |\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 班级 |\n\
| - | - | - | - | - |\n\
| 1 | | - | - | - |\n\
| 2 | 翁楚乔 | 16.23 | 4 | 初二9班 |\n\
| 3 | 余咏娴 | - | - | 初二6班 |\n\
| 4 | 郑佳欣 | 15.37 | 1 | 初二3班 |\n\
| 5 | 林秋瑾 | 15.87 | 3 | 初二7班 |\n\
| 6 | 林雨昕 | 16.37 | 6 | 初二2班 |\n\
| 7 | | - | - | - |\n\
| 8 | | - | - | - |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';