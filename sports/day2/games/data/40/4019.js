var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">男子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	高一6班	|	50.33	|	2 | 10 | -	|\n\
|	2	|	高一7班	|	51.04	|	4 | 6 | -	|\n\
|	3	|	高一5班	|	50.87	|	3 | 8 | -	|\n\
|	4	|	高一1班	|	-	|	- | - | -	|\n\
|	5	|	高一9班	|	-	|	- | - | -	|\n\
|	6	|	高一4班	|	-	|	- | - | -	|\n\
|	7	|	高一10班	|	51.47	|	5 | 4 | -	|\n\
|	8	|	高一15班	|	-	|	- | - | -	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	| 排名 | 分数 |	备注	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	高一13班	|	51.96	|	6 | 2 | -	|\n\
|	2	|	高一2班	|	-	|	- | - | -	|\n\
|	3	|	高一14班	|	-	|	- | - | -	|\n\
|	4	|	高一8班	|	-	|	- | - | -	|\n\
|	5	|	高一11班	|	50.16	|	1 | 14 | -	|\n\
|	6	|	高一12班	|	-	|	- | - | -	|\n\
|	7	|	高一3班	|	-	|	- | - | -	|\n\
|	8	|	-	|	- | - | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';