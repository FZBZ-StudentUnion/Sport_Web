var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	孔洛琳	|	-	|	高三7班	|\n\
|	2	|	潘欣楠	|	-	|	高三5班	|\n\
|	3	|	陈欣灿	|	-	|	高三12班	|\n\
|	4	|	王君语	|	-	|	高三4班	|\n\
|	5	|	马涵君	|	-	|	高三12班	|\n\
|	6	|	黄涵菲	|	-	|	高三13班	|\n\
|	7	|	林子砚	|	-	|	高三12班	|\n\
|	8	|	金雨恬	|	-	|	高三11班	|\n\
|	9	|	李响	|	-	|	高三9班	|\n\
|	10	|	余宸亦	|	-	|	高三4班	|\n\
|	11	|	李靖颖	|	-	|	高三13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';