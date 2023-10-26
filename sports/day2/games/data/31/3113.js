var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  三级跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	甘湘榕	|	-	|	- | - | 高二4班	|\n\
|	2	|	孙涵婧	|	-	|	- | - | 高二8班	|\n\
|	3	|	林南希	|	-	|	- | - | 高二16班	|\n\
|	4	|	蔡欣楠	|	-	|	- | - | 高二14班	|\n\
|	5	|	林槿云	|	-	|	- | - | 高二14班	|\n\
|	6	|	欧友知	|	-	|	- | - | 高二16班	|\n\
|	7	|	周曼馨	|	7.57	|	3 | 4 | 高二6班	|\n\
|	8	|	黄慧函	|	6.80	|	4 | 3 | 高二11班	|\n\
|	9	|	江雨薇	|	-	|	- | - | 高二6班	|\n\
|	10	|	林佳梦	|	7.58	|	2 | 5 | 高二4班	|\n\
|	11	|	陈沭锦	|	-	|	- | - | 高二10班	|\n\
|	12	|	林妍	|	7.77	|	1 | 7 | 高二9班	|\n\
|	13	|	良心田	|	6.70	|	6 | 1 | 高二9班	|\n\
|	14	|	黄湉婧	|	6.76	|	5 | 2 | 高二4班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';