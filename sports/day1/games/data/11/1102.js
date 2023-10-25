var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    |   分数    |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	刘梓楠	|	**1.31**	|	2 | 10 | 高一7班	|\n\
|	2	|	缪云楸	|	-	|	- | - | 高一4班	|\n\
|	3	|	李筱雅	|	1.20	|	4 | 3 | 高一11班	|\n\
|	4	|	李唯伊	|	-	|	- | - | 高一6班	|\n\
|	5	|	郑恬静	|	1.25	|	3 | 4 | 高一14班	|\n\
|	6	|	郑佳璐	|	-	|	- | - | 高一3班	|\n\
|	7	|	李思思	|	-	|	- | - | 高一2班	|\n\
|	8	|	郑恺心	|	1.20	|	5 | 2 | 高一15班	|\n\
|	9	|	林玥言	|	**1.35**	|	1 | 12 | 高一10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';