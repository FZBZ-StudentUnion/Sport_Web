var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 彭欣乐 | - | 初一12班 |\n\
| 2 | 杨于瞳 | - | 初一8班 |\n\
| 3 | 张恩涤 | - | 初一7班 |\n\
| 4 | 陈阳睿 | - | 初一2班 |\n\
| 5 | 蔡宗轩 | - | 初一12班 |\n\
| 6 | 卓思承 | - | 初一11班 |\n\
| 7 | 林奕轩 | - | 初一12班 |\n\
| 8 | 黄浩宇 | - | 初一14班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';