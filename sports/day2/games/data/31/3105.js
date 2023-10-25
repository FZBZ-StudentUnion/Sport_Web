var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  立定跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	刘文君	|	-	|	初三3班	|\n\
|	2	|	陈思婷	|	-	|	初三4班	|\n\
|	3	|	张谨茹	|	-	|	初三3班	|\n\
|	4	|	周舒怡	|	-	|	初三8班	|\n\
|	5	|	黄梓涵	|	-	|	初三5班	|\n\
|	6	|	戴义荞	|	-	|	初三6班	|\n\
|	7	|	谢若琳	|	-	|	初三6班	|\n\
|	8	|	肖子睿	|	-	|	初三1班	|\n\
|	9	|	王紫菡	|	-	|	初三12班	|\n\
|	10	|	杜梦雅	|	-	|	初三9班	|\n\
|	11	|	林若熙	|	-	|	初三10班	|\n\
|	12	|	陶子衿	|	-	|	初三7班	|\n\
|	13	|	胡艺龄	|	-	|	初三8班	|\n\
|	14	|	郜希洺	|	-	|	初三5班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';