var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  铅球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王诗晴	|	-	|	高一10班	|\n\
|	2	|	吴攸	|	-	|	高一8班	|\n\
|	3	|	李学锶	|	-	|	高一5班	|\n\
|	4	|	周墨	|	-	|	高一14班	|\n\
|	5	|	王韵灵	|	-	|	高一7班	|\n\
|	6	|	蔡君忆	|	-	|	高一4班	|\n\
|	7	|	洪燕妮	|	-	|	高一9班	|\n\
|	8	|	郑恺心	|	-	|	高一15班	|\n\
|	9	|	林昕可	|	-	|	高一2班	|\n\
|	10	|	陈欣怡	|	-	|	高一6班	|\n\
|	11	|	郝尹宁	|	-	|	高一4班	|\n\
|	12	|	黄静蕾	|	-	|	高一13班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';