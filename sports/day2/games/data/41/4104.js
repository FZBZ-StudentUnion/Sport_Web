var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  三级跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	潘妤宸	|	7.60	|	1 | 7 | 高三5班	|\n\
|	2	|	邱子涵	|	7.58	|	3 | 4 | 高三4班	|\n\
|	3	|	石可欣	|	7.60	|	2 | 5 | 高三12班	|\n\
|	4	|	黄煦橦	|	7.29	|	4 | 3 | 高三11班	|\n\
|	5	|	王心颖	|	6.74	|	5 | 2 | 高三11班	|\n\
|	6	|	潘欣楠	|	6.43	|	6 | 1 | 高三5班	|\n\
|	7	|	谢羽庭	|	-	|	- | - | 高三13班	|\n\
|	8	|	乐冰冰	|	-	|	- | - | 高三10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';