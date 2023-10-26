var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初二3班	|	-	|	- | - | -	|\n\
|	3	|	初二7班	|	1:06.64	|	5 | 4 | -	|\n\
|	4	|	初二4班	|	-	|	- | - | -	|\n\
|	5	|	初二2班	|	1:05.64	|	4 | 6 | -	|\n\
|	6	|	初二9班	|	-	|	- | - | -	|\n\
|	7	|	初二5班	|	1:05.49	|	2 | 10 | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初二1班	|	1:06.80	|	6 | 2 | -	|\n\
|	3	|	初二11班	|	-	|	- | - | -	|\n\
|	4	|	初二6班	|	1:05.42	|	1 | 14 | -	|\n\
|	5	|	初二12班	|	1:05.56	|	3 | 8 | -	|\n\
|	6	|	初二8班	|	-	|	- | - | -	|\n\
|	7	|	初二10班	|	-	|	- | - | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';