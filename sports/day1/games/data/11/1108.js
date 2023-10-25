var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    | 分数 | 	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	许雅秋	|	-	|	- | - | 初二1班	|\n\
|	2	|	林子涵	|	-	|	- | - | 初二7班	|\n\
|	3	|	周梓悦	|	6.39	|	5 | 2 | 初二12班	|\n\
|	4	|	何沛婷	|	-	|	- | - | 初二8班	|\n\
|	5	|	卢麒朵	|	-	|	- | - | 初二2班	|\n\
|	6	|	许睿洁	|	-	|	- | - | 初二5班	|\n\
|	7	|	黄慧丽	|	6.39	|	4 | 3 | 初二2班	|\n\
|	8	|	朱静怡	|	7.29	|	3 | 4 | 初二1班	|\n\
|	9	|	江语霏	|	7.49	|	2 | 5 | 初二12班	|\n\
|	10	|	胡亦琳	|	-	|	- | - | 初二3班	|\n\
|	11	|	黄诗雅	|	-	|	- | - | 初二3班	|\n\
|	12	|	倪紫玲	|	8.15	|	1 | 7 | 初二10班	|\n\
|	13	|	曾欣妍	|	6.14	|	6 | 1 | 初二1班	|\n\
|	14	|	林宥汐	|	-	|	- | - | 初二11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';