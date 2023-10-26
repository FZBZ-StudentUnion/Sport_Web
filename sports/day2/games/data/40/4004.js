var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 邓汐岑 | - | - | - | 初二2班 |\n\
| 2 | 林燃 | - | - | - | 初二11班 |\n\
| 3 | 林秋瑾 | 7.78 | 3 | 4 | 初二7班 |\n\
| 4 | 郑佳欣 | 7.60 | 1 | 7 | 初二3班 |\n\
| 5 | 林以忻 | 7.64 | 2 | 5 | 初二12班 |\n\
| 6 | 许明阅 | 7.92 | 5 | 2 | 初二10班 |\n\
| 7 | 范烨莹 | 8.01 | 6 | 1 | 初二5班 |\n\
| 8 | 张思琦 | 7.86 | 4 | 3 | 初二6班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';