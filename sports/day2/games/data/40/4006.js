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
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 江珺萱 | - | - | - | 初三11班 |\n\
| 2 | 李滟滨 | 7.95 | 6 | 1 | 初三9班 |\n\
| 3 | 谢叶燊 | 7.52 | 2 | 5 | 初三7班 |\n\
| 4 | 曹睿萱 | 7.42 | 1 | 7 | 初三6班 |\n\
| 5 | 方琳菲 | 7.64 | 3 | 4 | 初三10班 |\n\
| 6 | 刘婧 | 7.91 | 5 | 2 | 初三6班 |\n\
| 7 | 黄怡昕 | 7.88 | 4 | 3 | 初三5班 |\n\
| 8 | 郑舒弈 | - | - | - | 初三9班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';