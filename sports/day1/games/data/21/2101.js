var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	陈悦彤	|	-	|	高二1班	|\n\
|	2	|	孙涵婧	|	-	|	高二8班	|\n\
|	3	|	周雯	|	-	|	高二12班	|\n\
|	4	|	林可馨	|	-	|	高二13班	|\n\
|	5	|	肖振轩	|	-	|	高二10班	|\n\
|	6	|	刘子瑄	|	-	|	高二9班	|\n\
|	7	|	夏颖琪	|	-	|	高二6班	|\n\
|	8	|	朱枢弋	|	-	|	高二3班	|\n\
|	9	|	卞雨瞳	|	-	|	高二15班	|\n\
|	10	|	陈麒棂	|	-	|	高二10班	|\n\
|	11	|	江佳玲	|	-	|	高二4班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';