var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王雨佳	|	-	|	高一3班	|\n\
|	2	|	谢妍	|	-	|	高一9班	|\n\
|	3	|	陈怡宁	|	-	|	高一15班	|\n\
|	4	|	潘思含	|	-	|	高一3班	|\n\
|	5	|	林如钰	|	-	|	高一11班	|\n\
|	6	|	王韵灵	|	-	|	高一7班	|\n\
|	7	|	许书晨	|	-	|	高一14班	|\n\
|	8	|	林玥言	|	-	|	高一10班	|\n\
|	9	|	朱彦亦	|	-	|	高一7班	|\n\
|	10	|	缪云楸	|	-	|	高一4班	|\n\
|	11	|	吴欣遥	|	-	|	高一3班	|\n\
|	12	|	潘思颖	|	-	|	高一13班	|\n\
|	13	|	陶悦涵	|	-	|	高一11班	|\n\
|	14	|	刘梓楠	|	-	|	高一7班	|\n\
|	15	|	陈子宁	|	-	|	高一2班	|\n\
|	16	|	吴鑫蕾	|	-	|	高一4班	|\n\
|	17	|	刘雨芯	|	-	|	高一5班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';