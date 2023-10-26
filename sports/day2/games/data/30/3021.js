var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初二5班	|	-	|	- | - | -	|\n\
|	3	|	初二1班	|	-	|	- | - | -	|\n\
|	4	|	初二11班	|	54.91	|	2 | 10 | -	|\n\
|	5	|	初二12班	|	55.58	|	4 | 6 | -	|\n\
|	6	|	初二3班	|	-	|	- | - | -	|\n\
|	7	|	初二10班	|	-	|	- | - | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 | 	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	-	|	- | - | -	|	-	|\n\
|	2	|	初二4班	|	55.17	|	3 | 8 | -	|\n\
|	3	|	初二7班	|	54.10	|	1 | 14 | -	|\n\
|	4	|	初二6班	|	-	|	- | - | -	|\n\
|	5	|	初二9班	|	-	|	- | - | -	|\n\
|	6	|	初二8班	|	56.24	|	5 | 4 | -	|\n\
|	7	|	初二2班	|	56.39	|	6 | 2 | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';