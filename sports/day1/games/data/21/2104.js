var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	张逸凡	|	-	|	高三11班	|\n\
|	2	|	白如漪	|	-	|	高三12班	|\n\
|	3	|	林雯	|	-	|	高三1班	|\n\
|	4	|	刘美欣	|	-	|	高三7班	|\n\
|	5	|	吴婕仪	|	-	|	高三10班	|\n\
|	6	|	林嘉欣	|	-	|	高三1班	|\n\
|	7	|	卢函知	|	-	|	高三13班	|\n\
|	8	|	黄涵菲	|	-	|	高三13班	|\n\
|	9	|	刘宇倩	|	-	|	高三11班	|\n\
|	10	|	黄佳欣	|	-	|	高三10班	|\n\
|	11	|	王艺霏	|	-	|	高三4班	|\n\
|	12	|	杜依婷	|	-	|	高三3班	|\n\
|	13	|	王君语	|	-	|	高三4班	|\n\
|	14	|	潘妤宸	|	-	|	高三5班	|\n\
|	15	|	林雨芃	|	-	|	高三3班	|\n\
|	16	|	林祺	|	-	|	高三5班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';