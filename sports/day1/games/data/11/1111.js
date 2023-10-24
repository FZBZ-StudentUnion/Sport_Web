var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  三级跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王震杰	|	-	|	高三6班	|\n\
|	2	|	吴雨轩	|	-	|	高三13班	|\n\
|	3	|	黄泺宁	|	-	|	高三5班	|\n\
|	4	|	张城绮	|	-	|	高三1班	|\n\
|	5	|	陈志翔	|	-	|	高三14班	|\n\
|	6	|	许成栋	|	-	|	高三10班	|\n\
|	7	|	林志强	|	-	|	高三1班	|\n\
|	8	|	王宏	|	-	|	高三11班	|\n\
|	9	|	游陈畅	|	-	|	高三3班	|\n\
|	10	|	汪翰鹏	|	-	|	高三9班	|\n\
|	11	|	高铭	|	-	|	高三10班	|\n\
|	12	|	林宇翔	|	-	|	高三1班	|\n\
|	13	|	胡孙睿	|	-	|	高三2班	|\n\
|	14	|	黄恺	|	-	|	高三13班	|\n\
|	15	|	苏璟栋	|	-	|	高三10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';