var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - |  - | - | - | - |\n\
| 1 | 高继瀚 | - |  - | - | 初二5班 |\n\
| 2 | 王喆赫 | 13.25 |  5 | 2 | 初二12班 |\n\
| 3 | 黄天健 | 13.10 |  4 | 3 | 初二8班 |\n\
| 4 | 刘亦翔 | 12.66 |  2 | 5 | 初二11班 |\n\
| 5 | 翁晨阳 | 12.62 |  1 | 7 | 初二7班 |\n\
| 6 | 张羽铮 | 12.94 |  3 | 4 | 初二4班 |\n\
| 7 | 吴鸣泓 | 13.52 |  6 | 1 | 初二12班 |\n\
| 8 | 余熙童 | - |  - | - | 初二5班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';