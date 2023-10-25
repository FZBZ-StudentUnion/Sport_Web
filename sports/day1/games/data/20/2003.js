var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 高继瀚 | - | 初二5班 |\n\
| 2 | 王喆赫 | - | 初二12班 |\n\
| 3 | 黄天健 | - | 初二8班 |\n\
| 4 | 刘亦翔 | - | 初二11班 |\n\
| 5 | 翁晨阳 | - | 初二7班 |\n\
| 6 | 张羽铮 | - | 初二4班 |\n\
| 7 | 吴鸣泓 | - | 初二12班 |\n\
| 8 | 余熙童 | - | 初二5班 |\n\
&nbsp;\n\
\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';