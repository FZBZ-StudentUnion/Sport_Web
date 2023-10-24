var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  铅球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	马一帆	|	-	|	高三3班	|\n\
|	2	|	金婉欣	|	-	|	高三12班	|\n\
|	3	|	王心颖	|	-	|	高三11班	|\n\
|	4	|	刘宇倩	|	-	|	高三11班	|\n\
|	5	|	李响	|	-	|	高三9班	|\n\
|	6	|	马涵君	|	-	|	高三12班	|\n\
|	7	|	吴婕仪	|	-	|	高三10班	|\n\
|	8	|	林雨芃	|	-	|	高三3班	|\n\
|	9	|	汤思颖	|	-	|	高三14班	|\n\
|	10	|	谢羽庭	|	-	|	高三13班	|\n\
|	11	|	杜依婷	|	-	|	高三3班	|\n\
|	12	|	王艺霏	|	-	|	高三4班	|\n\
|	13	|	黄煦橦	|	-	|	高三11班	|\n\
|	14	|	蔡亚兰	|	-	|	高三15班	|\n\
|	15	|	林祺	|	-	|	高三5班	|\n\
|	16	|	李美艺	|	-	|	高三4班	|\n\
|	17	|	李家乐	|	-	|	高三4班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';