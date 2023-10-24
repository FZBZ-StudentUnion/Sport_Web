var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王诺妍	|	-	|	初三2班	|\n\
|	2	|	林向祎	|	-	|	初三12班	|\n\
|	3	|	高钰淇	|	-	|	初三8班	|\n\
|	4	|	郭芮含	|	-	|	初三1班	|\n\
|	5	|	刘钥尔	|	-	|	初三11班	|\n\
|	6	|	王彦之	|	-	|	初三7班	|\n\
|	7	|	王慧敏	|	-	|	初三2班	|\n\
|	8	|	刘婧	|	-	|	初三6班	|\n\
|	9	|	石芷凝	|	-	|	初三7班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	罗卿华	|	-	|	初三12班	|\n\
|	2	|	王愿瑜	|	-	|	初三2班	|\n\
|	3	|	戴义荞	|	-	|	初三6班	|\n\
|	4	|	张晨晞	|	-	|	初三8班	|\n\
|	5	|	谢子妤	|	-	|	初三11班	|\n\
|	6	|	林晞	|	-	|	初三11班	|\n\
|	7	|	黄圣鑫	|	-	|	初三7班	|\n\
|	8	|	周舒怡	|	-	|	初三8班	|\n\
|	9	|	谢若琳	|	-	|	初三6班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';