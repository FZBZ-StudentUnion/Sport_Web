var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  立定跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	张鑫炜	|	-	|	- | - | 初一10班	|\n\
|	2	|	林昀昊	|	-	|	- | - | 初一13班	|\n\
|	3	|	翁浩洋	|	2.28	|	5 | 2 | 初一6班	|\n\
|	4	|	涂博凯	|	2.31	|	4 | 3 | 初一8班	|\n\
|	5	|	林铂尧	|	-	|	- | - | 初一14班	|\n\
|	6	|	薛子涵	|	-	|	- | - | 初一14班	|\n\
|	7	|	吴泓睿	|	-	|	- | - | 初一1班	|\n\
|	8	|	林煜博	|	-	|	- | - | 初一4班	|\n\
|	9	|	郑谢伟	|	2.46	|	1 | 7 | 初一5班	|\n\
|	10	|	王睿杰	|	-	|	- | - | 初一14班	|\n\
|	11	|	许家棋	|	-	|	- | - | 初一12班	|\n\
|	12	|	魏楚杰	|	-	|	- | - | 初一4班	|\n\
|	13	|	祝晓杰	|	2.41	|	2 | 5 | 初一9班	|\n\
|	14	|	林展熠	|	-	|	- | - | 初一12班	|\n\
|	15	|	林则议	|	-	|	- | - | 初一12班	|\n\
|	16	|	吴丞越	|	-	|	- | - | 初一8班	|\n\
|	17	|	陈泓亦	|	-	|	- | - | 初一6班	|\n\
|	18	|	黄馨睿	|	-	|	- | - | 初一1班	|\n\
|	19	|	陈则睿	|	-	|	- | - | 初一11班	|\n\
|	20	|	陈博涛	|	-	|	- | - | 初一11班	|\n\
|	21	|	孙懿辰	|	2.07	|	6 | 1 | 初一3班	|\n\
|	22	|	郭雨洋	|	2.31	|	3 | 4 | 初一1班	|\n\
|	23	|	何浩喆	|	-	|	- | - | 初一10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';