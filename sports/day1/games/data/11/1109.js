var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  一分钟跳绳  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	刘宸华	|	-	|	初三6班	|\n\
|	2	|	周晟榛	|	-	|	初三6班	|\n\
|	3	|	陈弈含	|	-	|	初三10班	|\n\
|	4	|	林子睿	|	-	|	初三3班	|\n\
|	5	|	肖淳昕	|	-	|	初三7班	|\n\
|	6	|	黄胜晨	|	-	|	初三4班	|\n\
|	7	|	黄杨潇	|	-	|	初三1班	|\n\
|	8	|	林铠尧	|	-	|	初三12班	|\n\
|	9	|	林锦东	|	-	|	初三4班	|\n\
|	10	|	余梓源	|	-	|	初三9班	|\n\
|	11	|	林俊贤	|	-	|	初三4班	|\n\
|	12	|	邱浩刚	|	-	|	初三10班	|\n\
|	13	|	林志伟	|	-	|	初三9班	|\n\
|	14	|	陈昱城	|	-	|	初三1班	|\n\
|	15	|	林楷宸	|	-	|	初三5班	|\n\
|	16	|	王奕程	|	-	|	初三7班	|\n\
|	17	|	庄浩轩	|	-	|	初三6班	|\n\
|	18	|	陈柏宏	|	-	|	初三10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';