var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  一分钟跳绳  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	许雅秋	|	-	|	初二1班	|\n\
|	2	|	黄慧丽	|	-	|	初二2班	|\n\
|	3	|	陈沛临	|	-	|	初二12班	|\n\
|	4	|	许睿洁	|	-	|	初二5班	|\n\
|	5	|	张熙琳	|	-	|	初二8班	|\n\
|	6	|	林钰淼	|	-	|	初二10班	|\n\
|	7	|	陈悦	|	-	|	初二6班	|\n\
|	8	|	黄诗雅	|	-	|	初二3班	|\n\
|	9	|	陈可心	|	-	|	初二4班	|\n\
|	10	|	陈琪涵	|	-	|	初二1班	|\n\
|	11	|	蔡睿桐	|	-	|	初二3班	|\n\
|	12	|	黄妙图	|	-	|	初二10班	|\n\
|	13	|	何苗玙	|	-	|	初二10班	|\n\
|	14	|	邹晓谦	|	-	|	初二6班	|\n\
|	15	|	翁煜芊	|	-	|	初二1班	|\n\
|	16	|	陈敏	|	-	|	初二7班	|\n\
|	17	|	陈乐芸	|	-	|	初二11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';