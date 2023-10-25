var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	黄慧函	|	32.69	|	1 | 高二11班	|\n\
|	3	|	卓佳颖	|	-	|	- | 高二4班	|\n\
|	4	|	曾梓涵	|	37.46	|	7 | 高二16班	|\n\
|	5	|	江雨薇	|	39.01	|	8 | 高二6班	|\n\
|	6	|	戴月宸	|	33.20	|	2 | 高二15班	|\n\
|	7	|	-	|	- | -	|	-	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	-	|	- | -	|	-	|\n\
|	3	|	郑亦婷	|	36.22	|	5 | 高二5班	|\n\
|	4	|	林晓晗	|	34.98	|	4 | 高二14班	|\n\
|	5	|	蔡锦雯	|	37.42	|	6 | 高二16班	|\n\
|	6	|	詹雨涵	|	34.94	|	3 | 高二9班	|\n\
|	7	|	-	|	- | -	|	-	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';