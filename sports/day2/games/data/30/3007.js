var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	吴默嵘	|	-	|	- | 初一8班	|\n\
|	2	|	洪浩添	|	28.94	|	2 | 初一10班	|\n\
|	3	|	林圣涛	|	32.38	|	8 | 初一3班	|\n\
|	4	|	肖涵羽	|	-	|	- | 初一12班	|\n\
|	5	|	李烜骏	|	31.49	|	7 | 初一4班	|\n\
|	6	|	林奕轩	|	30.14	|	4 | 初一12班	|\n\
|	7	|	林浩翔	|	-	|	- | 初一1班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	李泰允	|	-	|	- | 初一1班	|\n\
|	3	|	林熠辉	|	-	|	- | 初一10班	|\n\
|	4	|	陈亮羽	|	-	|	- | 初一3班	|\n\
|	5	|	林浩曦	|	-	|	- | 初一14班	|\n\
|	6	|	徐鼎沣	|	-	|	- | 初一7班	|\n\
|	7	|	张珂源	|	28.76	|	1 | 初一12班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	张宁远	|	31.43	|	6 | 初一11班	|\n\
|	3	|	吴栎涵	|	29.42	|	3 | 初一1班	|\n\
|	4	|	黄正轩	|	30.54	|	5 | 初一4班	|\n\
|	5	|	林彦晨	|	-	|	- | 初一6班	|\n\
|	6	|	苏琰之	|	-	|	- | 初一14班	|\n\
|	7	|	王思涵	|	-	|	- | 初一9班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';