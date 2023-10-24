var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  50M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	郑舒弈	|	-	|	初三9班	|\n\
|	2	|	赵安娜	|	-	|	初三4班	|\n\
|	3	|	刘婧	|	-	|	初三6班	|\n\
|	4	|	方琳菲	|	-	|	初三10班	|\n\
|	5	|	林若熙	|	-	|	初三10班	|\n\
|	6	|	黄怡昕	|	-	|	初三5班	|\n\
|	7	|	陈婧萱	|	-	|	初三11班	|\n\
|	8	|	黄鑫	|	-	|	初三2班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	张晨晞	|	-	|	初三8班	|\n\
|	2	|	李滟滨	|	-	|	初三9班	|\n\
|	3	|	涂梓晴	|	-	|	初三5班	|\n\
|	4	|	曹睿萱	|	-	|	初三6班	|\n\
|	5	|	谢叶燊	|	-	|	初三7班	|\n\
|	6	|	刘睿琪	|	-	|	初三10班	|\n\
|	7	|	江珺萱	|	-	|	初三11班	|\n\
|	8	|	林子晰	|	-	|	初三3班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';