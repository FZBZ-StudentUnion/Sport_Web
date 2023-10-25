var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 林木淞 | - | 初三5班 |\n\
| 2 | 蒋仕铉 | - | 初三11班 |\n\
| 3 | 唐正 | - | 初三1班 |\n\
| 4 | 林奕聪 | - | 初三4班 |\n\
| 5 | 马言旭 | - | 初三4班 |\n\
| 6 | 陈顺杰 | - | 初三8班 |\n\
| 7 | 倪梓康 | - | 初三1班 |\n\
| 8 | 林宸 | - | 初三6班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';