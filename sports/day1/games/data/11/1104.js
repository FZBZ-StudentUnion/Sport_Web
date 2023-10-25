var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  立定跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    |   分数    |	班级	|\n\
|	- 	|	-	|	- | - |  -	|	-	|\n\
|	1	|	吴洪朵儿  	|	2.05	|	4 | 3 | 初一10班	|\n\
|	2	|	陈佳滢 	|	1.79	|	6 | 1 | 初一6班	|\n\
|	3	|	李梓琪 	|	-	|	- | - | 初一11班	|\n\
|	4	|	梁熙汶 	| 2.30	|	1 | 7 | 初一5班	|\n\
|	5	|	卢滢 	|	2.25	|	2 | 5 | 初一7班	|\n\
|	6	|	陈思敏 	|	-	|	- | - | 初一13班	|\n\
|	7	|	陈沛灵 	|	-	|	- | - | 初一3班	|\n\
|	8	|	徐钰冰 	|	-	|	- | - | 初一9班	|\n\
|	9	|	张宸嫣 	|	-	|	- | - | 初一7班	|\n\
|	10	|	林思瑾 	|	1.87	|	5 | 2 | 初一2班	|\n\
|	11	|	陈彦冰 	|	-	|	- | - | 初一10班	|\n\
|	12	|	吴佳颖 	|	-	|	- | - | 初一9班	|\n\
|	13	|	李若瑶 	|	-	|	- | - | 初一3班	|\n\
|	14	|	郭雨洵 	|	2.21	|	3 | 4 | 初一1班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';