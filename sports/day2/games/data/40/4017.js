var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 雷博涛 | - | 初三9班 |\n\
| 2 | 林秀哲 | - | 初三7班 |\n\
| 3 | 叶文杰 | - | 初三3班 |\n\
| 4 | 邹铸星 | - | 初三4班 |\n\
| 5 | 余奕锋 | - | 初三6班 |\n\
| 6 | 林宸君 | - | 初三10班 |\n\
| 7 | 林锦泓 | - | 初三1班 |\n\
| 8 | 林琛奇 | - | 初三11班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';