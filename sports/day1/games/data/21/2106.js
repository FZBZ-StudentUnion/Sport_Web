var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  铅球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	江佳玲	|	4.65	|	4 | 3 | 高二4班	|\n\
|	2	|	尹馨	|	-	|	- | - | 高二9班	|\n\
|	3	|	林雨润	|	-	|	- | - | 高二8班	|\n\
|	4	|	黄湉婧	|	4.78	|	3 | 4 | 高二4班	|\n\
|	5	|	詹锦垚	|	6.05	|	2 | 5 | 高二10班	|\n\
|	6	|	夏颖琪	|	-	|	- | - | 高二6班	|\n\
|	7	|	陈刘璐	|	4.24	|	6 | 1 | 高二12班	|\n\
|	8	|	曾梓涵	|	-	|	- | - | 高二16班	|\n\
|	9	|	欧友知	|	-	|	- | - | 高二16班	|\n\
|	10	|	李钟焓	|	-	|	- | - | 高二14班	|\n\
|	11	|	梁心妍	|	4.63	|	5 | 2 | 高二9班	|\n\
|	12	|	蔡欣楠	|	-	|	- | - | 高二14班	|\n\
|	13	|	詹雨诗	|	6.72	|	1 | 7 | 高二2班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';