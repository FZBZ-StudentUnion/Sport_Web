var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初三10班	|	-	|	- | - | -	|\n\
|	3	|	初三2班	|	-	|	- | - | -	|\n\
|	4	|	初三5班	|	-	|	- | - | -	|\n\
|	5	|	初三12班	|	1:03.57	|	2 | 10 | -	|\n\
|	6	|	初三4班	|	-	|	- | - | -	|\n\
|	7	|	初三3班	|	1:05.12	|	6 | 2 | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初三11班	|	1:04.20	|	4 | 6 | -	|\n\
|	3	|	初三7班	|	1:03.95	|	3 | 8 | -	|\n\
|	4	|	初三6班	|	1:02.89	|	1 | 14 | -	|\n\
|	5	|	初三9班	|	-	|	- | - | -	|\n\
|	6	|	初三1班	|	1:04.92	|	5 | 4 | -	|\n\
|	7	|	初三8班	|	-	|	- | - | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';