var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  立定跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	陈致涵	|	-	|	初三2班	|\n\
|	2	|	邱梓烨	|	-	|	初三5班	|\n\
|	3	|	陈宥廷	|	-	|	初三7班	|\n\
|	4	|	刘昌烨	|	-	|	初三7班	|\n\
|	5	|	李泽宇	|	-	|	初三12班	|\n\
|	6	|	林奕聪	|	-	|	初三4班	|\n\
|	7	|	谢元睿	|	-	|	初三10班	|\n\
|	8	|	陈思宇	|	-	|	初三9班	|\n\
|	9	|	马言旭	|	-	|	初三4班	|\n\
|	10	|	倪梓康	|	-	|	初三1班	|\n\
|	11	|	陈卓	|	-	|	初三12班	|\n\
|	12	|	黄熠	|	-	|	初三8班	|\n\
|	13	|	陈韬文	|	-	|	初三2班	|\n\
|	14	|	黄涵锘	|	-	|	初三11班	|\n\
|	15	|	杨子毅	|	-	|	初三9班	|\n\
|	16	|	王圣杰	|	-	|	初三9班	|\n\
|	17	|	翁才硕	|	-	|	初三4班	|\n\
|	18	|	刘林森	|	-	|	初三2班	|\n\
|	19	|	王宇鹏	|	-	|	初三6班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';