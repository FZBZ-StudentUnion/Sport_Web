var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	陈一	|	3:25.53	|	6 | 1 | 高二3班	|\n\
|	2	|	张译丹	|	-	|	- | - | 高二13班	|\n\
|	3	|	尹馨	|	3:12.16	|	2 | 5 | 高二9班	|\n\
|	4	|	黎歆然	|	-	|	- | - | 高二14班	|\n\
|	5	|	郑索菲	|	3:12.93	|	4 | 3 | 高二14班	|\n\
|	6	|	汤宸钰	|	3:12.54	|	3 | 4 | 高二10班	|\n\
|	7	|	梁心妍	|	-	|	- | - | 高二9班	|\n\
|	8	|	谢思睿	|	3:08.94	|	1 | 7 | 高二6班	|\n\
|	9	|	肖梓欣	|	-	|	- | - | 高二5班	|\n\
|	10	|	陈若晰	|	3:15.91	|	5 | 2 | 高二4班	|\n\
|	11	|	林可馨	|	-	|	- | - | 高二13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';