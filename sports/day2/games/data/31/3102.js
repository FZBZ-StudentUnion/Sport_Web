var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">高三女子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	金雨恬	|	1.00	|	6 | 0.5 | 高三11班	|\n\
|	2	|	张逸凡	|	-	|	- | - | 高三11班	|\n\
|	3	|	林子旻	|	1.05	|	4 | 3 | 高三11班	|\n\
|	4	|	乐冰冰	|	-	|	- | - | 高三10班	|\n\
|	5	|	廖书棋	|	-	|	- | - | 高三7班	|\n\
|	6	|	林雯	|	1.00	|	6 | 0.5 | 高三1班	|\n\
|	7	|	李家乐	|	1.15	|	1 | 7 | 高三4班	|\n\
|	8	|	余乐园	|	1.10	|	3 | 4 | 高三14班	|\n\
|	9	|	邱子涵	|	1.10	|	2 | 5 | 高三4班	|\n\
|	10	|	陈欣灿	|	1.05	|	5 | 2 | 高三12班	|\n\
|	11	|	李美艺	|	-	|	- | - | 高三4班	|\n\
|	12	|	黄佳欣	|	-	|	- | - | 高三10班	|\n\
|	13	|	宋雨灿	|	-	|	- | - | 高三13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';