var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  立定跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    |   分数    |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	林燃	|	1.95	|	6 | 1 | 初二11班	|\n\
|	2	|	金时峣	|	2.03	|	4 | 3 | 初二9班	|\n\
|	3	|	江语霏	|	-	|	- | - | 初二12班	|\n\
|	4	|	林子涵	|	-	|	- | - | 初二7班	|\n\
|	5	|	吴予心	|	-	|	- | - | 初二8班	|\n\
|	6	|	陈欣颐	|	-	|	- | - | 初二11班	|\n\
|	7	|	林宥汐	|	1.96	|	5 | 2 | 初二11班	|\n\
|	8	|	张思琦	|	-	|	- | - | 初二6班	|\n\
|	9	|	倪紫玲	|	2.05	|	3 | 4 | 初二10班	|\n\
|	10	|	陈悦	|	-	|	- | - | 初二6班	|\n\
|	11	|	郭梓涵	|	2.08	|	2 | 5 | 初二7班	|\n\
|	12	|	范烨莹	|	-	|	- | - | 初二5班	|\n\
|	13	|	林亚洁	|	2.15	|	1 | 7 | 初二5班	|\n\
|	14	|	陈沛临	|	-	|	- | - | 初二12班	|\n\
|	15	|	林以忻	|	-	|	- | - | 初二12班	|\n\
|	16	|	翁煜芊	|	-	|	- | - | 初二1班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';