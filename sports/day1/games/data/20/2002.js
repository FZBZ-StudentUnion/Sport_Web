var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 吴念芊 | - | 初一2班 |\n\
| 2 | 郑铃珊 | - | 初一7班 |\n\
| 3 | 梁熙汶 | - | 初一5班 |\n\
| 4 | 郑雅彤 | - | 初一5班 |\n\
| 5 | 郑灵怡 | - | 初一9班 |\n\
| 6 | 罗友欢 | - | 初一10班 |\n\
| 7 | 郭耀婷 | - | 初一11班 |\n\
| 8 | 王金菁 | - | 初一2班 |\n\
&nbsp;\n\
\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';