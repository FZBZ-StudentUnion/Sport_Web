var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  50M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 李思言 | 6.98 | 6 | 1 | 初二9班 |\n\
| 2 | 戴志炜 | 6.97 | 5 | 2 | 初二9班 |\n\
| 3 | 王佳睿 | - | - | - | 初二2班 |\n\
| 4 | 林伟杰 | 6.88 | 3 | 4 | 初二4班 |\n\
| 5 | 刘亦翔 | 6.36 | 1 | 7 | 初二11班 |\n\
| 6 | 肖楠 | 6.96 | 4 | 3 | 初二5班 |\n\
| 7 | 官睿晨 | - | - | - | 初二8班 |\n\
| 8 | 张浚榕 | 6.75 | 2 | 5 | 初二7班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';