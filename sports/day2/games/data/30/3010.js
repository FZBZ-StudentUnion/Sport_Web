var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	林子涵	|	-	|	初二11班	|\n\
|	3	|	林瑾言	|	-	|	初二9班	|\n\
|	4	|	黄若铭	|	-	|	初二8班	|\n\
|	5	|	林雨诺	|	-	|	初二4班	|\n\
|	6	|	冯紫涵	|	-	|	初二3班	|\n\
|	7	|	林亚洁	|	-	|	初二5班	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	邓梓依	|	-	|	初二5班	|\n\
|	3	|	龚凡琪	|	-	|	初二12班	|\n\
|	4	|	何沛婷	|	-	|	初二8班	|\n\
|	5	|	张予忱	|	-	|	初二2班	|\n\
|	6	|	江宥颖	|	-	|	初二4班	|\n\
|	7	|	-	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';