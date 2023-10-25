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
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 李思言 | - | 初二9班 |\n\
| 2 | 戴志炜 | - | 初二9班 |\n\
| 3 | 王佳睿 | - | 初二2班 |\n\
| 4 | 林伟杰 | - | 初二4班 |\n\
| 5 | 刘亦翔 | - | 初二11班 |\n\
| 6 | 肖楠 | - | 初二5班 |\n\
| 7 | 官睿晨 | - | 初二8班 |\n\
| 8 | 张浚榕 | - | 初二7班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';