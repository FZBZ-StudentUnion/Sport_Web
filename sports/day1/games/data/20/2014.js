var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	郭梓涵	|	-	|	初二7班	|\n\
|	2	|	林子涵	|	-	|	初二11班	|\n\
|	3	|	周梓悦	|	-	|	初二12班	|\n\
|	4	|	陈琪涵	|	-	|	初二1班	|\n\
|	5	|	江宥颖	|	-	|	初二4班	|\n\
|	6	|	何苗玙	|	-	|	初二10班	|\n\
|	7	|	蔡睿桐	|	-	|	初二3班	|\n\
|	8	|	余咏娴	|	-	|	初二6班	|\n\
|	9	|	张予忱	|	-	|	初二2班	|\n\
|	10	|	翁楚乔	|	-	|	初二9班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	黄若铭	|	-	|	初二8班	|\n\
|	2	|	邓汐岑	|	-	|	初二2班	|\n\
|	3	|	陈乐芸	|	-	|	初二11班	|\n\
|	4	|	金时峣	|	-	|	初二9班	|\n\
|	5	|	邓梓依	|	-	|	初二5班	|\n\
|	6	|	朱静怡	|	-	|	初二1班	|\n\
|	7	|	林钰淼	|	-	|	初二10班	|\n\
|	8	|	黄妙图	|	-	|	初二10班	|\n\
|	9	|	邹晓谦	|	-	|	初二6班	|\n\
|	10	|	林雨诺	|	-	|	初二4班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';