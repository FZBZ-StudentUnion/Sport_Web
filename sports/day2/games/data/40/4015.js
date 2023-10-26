var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 方远骏 | - | 初二11班 |\n\
| 2 | 丁浩昇 | - | 初二12班 |\n\
| 3 | 郑嘉俊 | - | 初二7班 |\n\
| 4 | 翁晨阳 | - | 初二7班 |\n\
| 5 | 张羽铮 | - | 初二4班 |\n\
| 6 | 王喆赫 | - | 初二12班 |\n\
| 7 | 李思言 | - | 初二9班 |\n\
| 8 | 王轶源 | - | 初二5班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';