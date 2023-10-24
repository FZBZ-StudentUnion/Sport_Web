var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	初三2班	|	-	|	-	|\n\
|	3	|	初三12班	|	-	|	-	|\n\
|	4	|	初三1班	|	-	|	-	|\n\
|	5	|	初三3班	|	-	|	-	|\n\
|	6	|	初三7班	|	-	|	-	|\n\
|	7	|	初三5班	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	初三11班	|	-	|	-	|\n\
|	3	|	初三8班	|	-	|	-	|\n\
|	4	|	初三6班	|	-	|	-	|\n\
|	5	|	初三4班	|	-	|	-	|\n\
|	6	|	初三10班	|	-	|	-	|\n\
|	7	|	初三9班	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';