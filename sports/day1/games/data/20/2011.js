var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 范书颜 | - | - | - | 高三10班 |\n\
| 2 | 林新民 | 24.40 | 3 | 4 | 高三9班 |\n\
| 3 | 吴浩田 | 25.31 | 4 | 3 | 高三9班 |\n\
| 4 | 黄瀚茗 | 23.86 | 1 | 7 | 高三2班 |\n\
| 5 | 王俊涛 | 24.39 | 2 | 5 | 高三5班 |\n\
| 6 | 兰孝浚 | 25.40 | 5 | 2 | 高三5班 |\n\
| 7 | 黄泽凯 | 26.61 | 6 | 1 | 高三2班 |\n\
| 8 | 甘岱涛 | - | - | - | 高三6班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';