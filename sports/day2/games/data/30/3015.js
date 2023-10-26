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
|	赛道	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - |-	|	-	|\n\
|	1	|	孔洛琳	|	3:14.55	|	4 | 3 |高三7班	|\n\
|	2	|	潘欣楠	|	-	|	- | - |高三5班	|\n\
|	3	|	陈欣灿	|	-	|	- | - |高三12班	|\n\
|	4	|	王君语	|	3:13.06	|	3 | 4 |高三4班	|\n\
|	5	|	马涵君	|	3:08.85	|	1 | 7 |高三12班	|\n\
|	6	|	黄涵菲	|	3:16.88	|	6 | 1 |高三13班	|\n\
|	7	|	林子砚	|	-	|	- | - |高三12班	|\n\
|	8	|	金雨恬	|	-	|	- | - |高三11班	|\n\
|	9	|	李响	|	-	|	- | - |高三9班	|\n\
|	10	|	余宸亦	|	3:11.07	|	2 | 5 |高三4班	|\n\
|	11	|	李靖颖	|	3:16.47	|	5 | 2 |高三13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';