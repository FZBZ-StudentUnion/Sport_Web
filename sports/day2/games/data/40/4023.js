var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	高三1班	|	-	|	- | - | -	|\n\
|	2	|	高三4班	|	-	|	- | - | -	|\n\
|	3	|	高三13班	|	-	|	- | - | -	|\n\
|	4	|	高三2班	|	50.46	|	2 | 10 | -	|\n\
|	5	|	高三6班	|	53.18	|	6 | 2 | -	|\n\
|	6	|	高三14班	|	-	|	- | - | -	|\n\
|	7	|	高三12班	|	-	|	- | - | -	|\n\
|	8	|	高三11班	|	-	|	- | - | -	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	高三5班	|	48.45	|	1 | 14 | -	|\n\
|	2	|	高三7班	|	-	|	- | - | -	|\n\
|	3	|	高三3班	|	52.30	|	4 | 6 | -	|\n\
|	4	|	高三9班	|	52.67	|	5 | 4 | -	|\n\
|	5	|	高三10班	|	50.69	|	3 | 8 | -	|\n\
|	6	|	高三15班	|	-	|	- | - | -	|\n\
|	7	|	高三8班	|	-	|	- | - | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';