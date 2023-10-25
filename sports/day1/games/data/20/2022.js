var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  50M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	吴予心	|	-	|	- | 初二8班	|\n\
|	2	|	林以忻	|	7.67	|	2 | 初二12班	|\n\
|	3	|	林雨昕	|	-	|	- | 初二2班	|\n\
|	4	|	林燃	|	7.92	|	5 | 初二11班	|\n\
|	5	|	林秋瑾	|	7.72	|	3 | 初二7班	|\n\
|	6	|	许明阅	|	7.90	|	4 | 初二10班	|\n\
|	7	|	范烨莹	|	7.97	|	6 | 初二5班	|\n\
|	8	|	郑佳欣	|	7.63	|	1 | 初二3班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	胡亦琳	|	-	|	- | 初二3班	|\n\
|	2	|	刘睿涵	|	-	|	- | 初二8班	|\n\
|	3	|	林瑾言	|	-	|	- | 初二9班	|\n\
|	4	|	邓汐岑	|	8.00	|	7 | 初二2班	|\n\
|	5	|	龚凡琪	|	-	|	- | 初二12班	|\n\
|	6	|	陈敏	|	-	|	- | 初二7班	|\n\
|	7	|	陈欣颐	|	-	|	- | 初二11班	|\n\
|	8	|	张思琦	|	8.01	|	8 | 初二6班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';