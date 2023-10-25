var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  100M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 班级 |\n\
| - | - | - | - | - |\n\
| 1 | 曹睿萱 | 14.59 | 1 | 初三6班 |\n\
| 2 | 罗卿华 | 15.94 | 8 | 初三12班 |\n\
| 3 | 高琳菲 | - | - | 初三1班 |\n\
| 4 | 方琳菲 | 15.06 | 2 | 初三10班 |\n\
| 5 | 许茗静 | - | - | 初三4班 |\n\
| 6 | 陈婧萱 | 15.69 | 4 | 初三11班 |\n\
| 7 | 杜梦雅 | 15.74 | 5 | 初三9班 |\n\
| 8 | 郑佳妍 | - | - | 初三3班 |\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 班级 |\n\
| - | - | - | - | - |\n\
| 1 | 黄钰淋 | - | - | 初三3班 |\n\
| 2 | 黄鑫 | - | - | 初三2班 |\n\
| 3 | 卢果 | 15.77 | 6 | 初三12班 |\n\
| 4 | 胡钰灵 | - | - | 初三1班 |\n\
| 5 | 费敏琳 | - | - | 初三10班 |\n\
| 6 | 涂梓晴 | - | - | 初三5班 |\n\
| 7 | 林芷妍 | 15.42 | 3 | 初三3班 |\n\
| 8 | 郑舒弈 | 15.84 | 7 | 初三9班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';