var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	黄梓涵	|	-	|	- | 初三5班	|\n\
|	2	|	刘钥尔	|	-	|	- | 初三11班	|\n\
|	3	|	卢果	|	33.14	|	4 | 初三12班	|\n\
|	4	|	费敏琳	|	-	|	- | 初三10班	|\n\
|	5	|	肖子睿	|	-	|	- | 初三1班	|\n\
|	6	|	叶若希	|	-	|	- | 初三12班	|\n\
|	7	|	江珺萱	|	33.55	|	5 | 初三11班	|\n\
|	8	|	郑佳妍	|	34.34	|	6 | 初三3班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	林芷妍	|	-	|	- | 初三3班	|\n\
|	2	|	黄怡昕	|	33.08	|	3 | 初三5班	|\n\
|	3	|	张谨茹	|	33.07	|	2 | 初三3班	|\n\
|	4	|	林向祎	|	32.03	|	1 | 初三12班	|\n\
|	5	|	薛雯月	|	-	|	- | 初三9班	|\n\
|	6	|	郭芮含	|	35.14	|	8 | 初三1班	|\n\
|	7	|	王愿瑜	|	34.91	|	7 | 初三2班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';