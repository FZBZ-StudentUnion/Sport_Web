var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">男子组  200M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
| - | - | - | - | - | - |\n\
| 1 | 林延鑫 | - | - | - | 高二11班 |\n\
| 2 | 周嘉毅 | 26.33 | 5 | 2 | 高二5班 |\n\
| 3 | 陈俊懋 | 24.72 | 3 | 4 | 高二8班 |\n\
| 4 | 丁跃翔 | 24.08 | 2 | 5 | 高二3班 |\n\
| 5 | 王垚彬 | **23.37** | 1 | 17 | 高二7班 |\n\
| 6 | 张海韵 | 25.53 | 4 | 3 | 高二12班 |\n\
| 7 | 黄家铭 | 26.58 | 6 | 1 | 高二11班 |\n\
| 8 | 孙为权 | - | - | - | 高二15班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';