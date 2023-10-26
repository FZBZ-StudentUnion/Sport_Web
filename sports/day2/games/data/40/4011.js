var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 备注 |\n\
| - | - | - | - | - | - |\n\
| 1 | 林锐杰 | 13.03 | 6 | 1 | 高三11班 |\n\
| 2 | 翁嘉宝 | - | - | - | 高三6班 |\n\
| 3 | 黄瀚茗 | **11.26** | 2 | 15 | 高三2班 |\n\
| 4 | 黄泺宁 | **11.16** | 1 | 17 | 高三5班 |\n\
| 5 | 王俊涛 | **11.53** | 3 | 14 | 高三5班 |\n\
| 6 | 兰孝浚 | 12.02 | 4 | 3 | 高三5班 |\n\
| 7 | 游陈畅 | 12.45 | 5 | 2 | 高三3班 |\n\
| 8 | 范书颜 | - | - | - | 高三10班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';