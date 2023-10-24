var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  一分钟跳绳  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王盈萤	|	-	|	初一10班	|\n\
|	2	|	李梓瑶	|	-	|	初一3班	|\n\
|	3	|	陈思琪	|	-	|	初一9班	|\n\
|	4	|	陈歆诺	|	-	|	初一7班	|\n\
|	5	|	戴子诺	|	-	|	初一12班	|\n\
|	6	|	傅子欣	|	-	|	初一1班	|\n\
|	7	|	林书瑶	|	-	|	初一3班	|\n\
|	8	|	李若瑶	|	-	|	初一3班	|\n\
|	9	|	池沐澄	|	-	|	初一4班	|\n\
|	10	|	陈庆钰	|	-	|	初一1班	|\n\
|	11	|	方琳煊	|	-	|	初一4班	|\n\
|	12	|	刘涵婧	|	-	|	初一11班	|\n\
|	13	|	陈嘉薇	|	-	|	初一2班	|\n\
|	14	|	徐钰冰	|	-	|	初一9班	|\n\
|	15	|	黄益可	|	-	|	初一1班	|\n\
|	16	|	施雅菡	|	-	|	初一10班	|\n\
|	17	|	陈可歆	|	-	|	初一6班	|\n\
|	18	|	陈予湉	|	-	|	初一13班	|\n\
|	19	|	刘雅雯	|	-	|	初一14班	|\n\
|	20	|	余思泓	|	-	|	初一11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';