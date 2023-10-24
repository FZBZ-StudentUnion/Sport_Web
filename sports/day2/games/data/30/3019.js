var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	初一13班	|	-	|	-	|\n\
|	2	|	初一6班	|	-	|	-	|\n\
|	3	|	初一2班	|	-	|	-	|\n\
|	4	|	初一10班	|	-	|	-	|\n\
|	5	|	初一7班	|	-	|	-	|\n\
|	6	|	初一1班	|	-	|	-	|\n\
|	7	|	初一5班	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	初一12班	|	-	|	-	|\n\
|	2	|	初一3班	|	-	|	-	|\n\
|	3	|	初一8班	|	-	|	-	|\n\
|	4	|	初一14班	|	-	|	-	|\n\
|	5	|	初一4班	|	-	|	-	|\n\
|	6	|	初一9班	|	-	|	-	|\n\
|	7	|	初一11班	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';