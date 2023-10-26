var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 甘湘榕 | 15.53 | 6 | 1 | 高二4班 |\n\
| 2 | 谢思睿 | 14.90 | 2 | 5 | 高二6班 |\n\
| 3 | 戴月宸 | - | - | - | 高二15班 |\n\
| 4 | 郑佳怡 | 14.51 | 1 | 7 | 高二14班 |\n\
| 5 | 张思琪 | 15.47 | 4 | 3 | 高二7班 |\n\
| 6 | 刘子瑄 | 15.16 | 3 | 4 | 高二9班 |\n\
| 7 | 林佳梦 | 15.49 | 5 | 2 | 高二4班 |\n\
| 8 | 李兆阳 | - | - | - | 高二13班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';