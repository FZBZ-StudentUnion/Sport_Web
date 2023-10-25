var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	李梓琪	|	-	|	初一11班	|\n\
|	2	|	杨子祺	|	-	|	初一7班	|\n\
|	3	|	吴子娴	|	-	|	初一6班	|\n\
|	4	|	陈庆钰	|	-	|	初一1班	|\n\
|	5	|	林凤仪	|	-	|	初一1班	|\n\
|	6	|	郑铃珊	|	-	|	初一7班	|\n\
|	7	|	施雅菡	|	-	|	初一10班	|\n\
|	8	|	王盈萤	|	-	|	初一10班	|\n\
|	9	|	傅子欣	|	-	|	初一1班	|\n\
|	10	|	陈彦冰	|	-	|	初一10班	|\n\
|	11	|	陈潘璐佳	|	-	|	初一3班	|\n\
|	12	|	梁予涵	|	-	|	初一11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';