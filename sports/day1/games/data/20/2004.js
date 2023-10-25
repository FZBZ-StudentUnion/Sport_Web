var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 |  班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 曾欣妍 | - | - | - | 初二1班 |\n\
| 2 | 卢麒朵 | 16.31 | 5 | 2 | 初二2班 |\n\
| 3 | 林秋瑾 | 15.62 | 2 | 5 | 初二7班 |\n\
| 4 | 郑佳欣 | 15.22 | 1 | 7 | 初二3班 |\n\
| 5 | 许明阅 | 16.78 | 3 | 4 | 初二10班 |\n\
| 6 | 翁楚乔 | 16.08 | 4 | 3 | 初二9班 |\n\
| 7 | 林雨昕 | 16.49 | 6 | 1 | 初二2班 |\n\
| 8 | 刘睿涵 | - | - | - | 初二8班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';