var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	卢思羽	|	-	|	高二5班	|\n\
|	2	|	陈若晰	|	-	|	高二4班	|\n\
|	3	|	林妍	|	-	|	高二9班	|\n\
|	4	|	肖振轩	|	-	|	高二10班	|\n\
|	5	|	郑佳怡	|	-	|	高二14班	|\n\
|	6	|	周曼馨	|	-	|	高二6班	|\n\
|	7	|	良心田	|	-	|	高二9班	|\n\
|	8	|	陈悦彤	|	-	|	高二1班	|\n\
|	9	|	林槿云	|	-	|	高二14班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';