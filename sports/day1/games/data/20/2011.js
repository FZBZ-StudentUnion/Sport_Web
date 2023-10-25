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
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 范书颜 | - | 高三10班 |\n\
| 2 | 林新民 | - | 高三9班 |\n\
| 3 | 吴浩田 | - | 高三9班 |\n\
| 4 | 黄瀚茗 | - | 高三2班 |\n\
| 5 | 王俊涛 | - | 高三5班 |\n\
| 6 | 兰孝浚 | - | 高三5班 |\n\
| 7 | 黄泽凯 | - | 高三2班 |\n\
| 8 | 甘岱涛 | - | 高三6班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';