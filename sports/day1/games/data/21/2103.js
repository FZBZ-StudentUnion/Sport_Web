var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	翁嘉宝	|	5.78	|	1 | 7 | 高三6班	|\n\
|	2	|	林志强	|	-	|	- | - | 高三1班	|\n\
|	3	|	苏璟栋	|	-	|	- | - | 高三10班	|\n\
|	4	|	甘宇涵	|	5.04	|	5 | 2 | 高三5班	|\n\
|	5	|	陈凯卫劳塔罗	|	-	|	- | - | 高三3班	|\n\
|	6	|	张绍洋	|	5.37	|	2 | 5 | 高三12班	|\n\
|	7	|	游程曦	|	-	|	- | - | 高三6班	|\n\
|	8	|	李浩易	|	-	|	- | - | 高三7班	|\n\
|	9	|	陈凯泽	|	-	|	- | - | 高三12班	|\n\
|	10	|	谢万林	|	-	|	- | - | 高三4班	|\n\
|	11	|	林西就	|	-	|	- | - | 高三1班	|\n\
|	12	|	郑泓浩	|	5.25	|	3 | 4 | 高三10班	|\n\
|	13	|	徐昌俊	|	-	|	- | - | 高三2班	|\n\
|	14	|	蔡子轩	|	-	|	- | - | 高三1班	|\n\
|	15	|	汪翰鹏	|	-	|	- | - | 高三9班	|\n\
|	16	|	邹振喆	|	-	|	- | - | 高三14班	|\n\
|	17	|	徐俊泽	|	4.85	|	6 | 1 | 高三5班	|\n\
|	18	|	王铃淏	|	-	|	- | - | 高三13班	|\n\
|	19	|	许成梁	|	-	|	- | - | 高三10班	|\n\
|	20	|	吴思远	|	-	|	- | - | 高三9班	|\n\
|	21	|	张浩	|	-	|	- | - | 高三2班	|\n\
|	22	|	罗光皓	|	-	|	- | - | 高三4班	|\n\
|	23	|	何昱辰	|	-	|	- | - | 高三9班	|\n\
|	24	|	林锐杰	|	-	|	- | - | 高三11班	|\n\
|	25	|	范恩泽	|	5.16	|	4 | 3 | 高三5班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';