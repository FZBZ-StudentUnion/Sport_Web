var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 吴鑫蕾 | 15.99 | 5 | 2 | 高一4班 |\n\
| 2 | 黄芊梦 | - | - | - | 高一2班 |\n\
| 3 | 宋全美 | 15.73 | 3 | 4 | 高一5班 |\n\
| 4 | 陈韫琪 | 14.56 | 1 | 7 | 高一15班 |\n\
| 5 | 吴钧琳 | - | - | - | 高一2班 |\n\
| 6 | 许佳琳 | 15.23 | 2 | 5 | 高一11班 |\n\
| 7 | 杜筱北 | 16.04 | 6 | 1 | 高一7班 |\n\
| 8 | 薛雯萱 | 15.93 | 4 | 3 | 高一13班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';