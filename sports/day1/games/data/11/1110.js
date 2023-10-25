var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  一分钟跳绳  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    |   分数    |	班级	|\n\
|	- 	|	-	|	- |-	|	-	|\n\
|	1	|	陶子衿 	|	-	|	- | - |初三7班	|\n\
|	2	|	王馨媛 	|	19.60	|	3 | 4 |初三5班	|\n\
|	3	|	高钰淇 	|	-	|	- | - |初三8班	|\n\
|	4	|	郑昕栎 	|	21.50	|	1 | 7 |初三1班	|\n\
|	5	|	江宥彤 	|	19.60	|	2 | 5 |初三8班	|\n\
|	6	|	王彦之 	|	18.40	|	6 | 1 |初三7班	|\n\
|	7	|	江昕诺 	|	-	|	- | - |初三5班	|\n\
|	8	|	郜希洺 	|	-	|	- | - |初三5班	|\n\
|	9	|	赵安娜 	|	19.10	|	5 | 2 |初三4班	|\n\
|	10	|	谢子妤 	|	-	|	- | - |初三11班	|\n\
|	11	|	李滟滨 	|	-	|	- | - |初三9班	|\n\
|	12	|	刘睿琪 	|	19.50	|	4 | 3 |初三10班	|\n\
|	13	|	石芷凝 	|	-	|	- | - |初三7班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';