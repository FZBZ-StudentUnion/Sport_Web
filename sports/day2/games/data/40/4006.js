var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 江珺萱 | - | 初三11班 |\n\
| 2 | 李滟滨 | - | 初三9班 |\n\
| 3 | 谢叶燊 | - | 初三7班 |\n\
| 4 | 曹睿萱 | - | 初三6班 |\n\
| 5 | 方琳菲 | - | 初三10班 |\n\
| 6 | 刘婧 | - | 初三6班 |\n\
| 7 | 黄怡昕 | - | 初三5班 |\n\
| 8 | 郑舒弈 | - | 初三9班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';