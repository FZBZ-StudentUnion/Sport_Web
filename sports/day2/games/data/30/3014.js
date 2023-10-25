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
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	陈一	|	-	|	高二3班	|\n\
|	2	|	张译丹	|	-	|	高二13班	|\n\
|	3	|	尹馨	|	-	|	高二9班	|\n\
|	4	|	黎歆然	|	-	|	高二14班	|\n\
|	5	|	郑索菲	|	-	|	高二14班	|\n\
|	6	|	汤宸钰	|	-	|	高二10班	|\n\
|	7	|	梁心妍	|	-	|	高二9班	|\n\
|	8	|	谢思睿	|	-	|	高二6班	|\n\
|	9	|	肖梓欣	|	-	|	高二5班	|\n\
|	10	|	陈若晰	|	-	|	高二4班	|\n\
|	11	|	林可馨	|	-	|	高二13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';