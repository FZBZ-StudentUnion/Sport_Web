var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">男子组  100M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- |  -	|	-	|\n\
|	1	|	许宸硕	|	-	|	- | 高一5班	|\n\
|	2	|	詹奕钊	|	-	|	- | 高一6班	|\n\
|	3	|	林承俊	|	-	|	- | 高一1班	|\n\
|	4	|	王奕钱	|	-	|	- | 高一12班	|\n\
|	5	|	鄢仁盛	|	-	|	- | 高一10班	|\n\
|	6	|	李隆琨	|	-	|	- | 高一14班	|\n\
|	7	|	曾炜峰	|	-	|	- | 高一8班	|\n\
|	8	|	陈子豪	|	-	|	- | 高一7班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | - | -	|\n\
|	1	|	李智昕	|	12.20	|	4 |高一13班	|\n\
|	2	|	蒋泊元	|	-	|	- |高一5班	|\n\
|	3	|	王玉东	|	-	|	- |高一15班	|\n\
|	4	|	郑想	|	-	|	- |高一1班	|\n\
|	5	|	刘嘉杰	|	-	|	- |高一12班	|\n\
|	6	|	张熙	|	-	|	- | 高一9班	|\n\
|	7	|	邹志涛	|	-	|	- | 高一3班	|\n\
|	8	|	-	|	- | - | -	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | - | -	|\n\
|	1	|	赖永垚	|	-	|	- | 高一6班	|\n\
|	2	|	柯博文	|	-	|	- | 高一2班	|\n\
|	3	|	陈思源	|	12.52	| 高一5班	|\n\
|	4	|	郑蕴博	|	-	|	- | 高一15班	|\n\
|	5	|	倪睿康	|	12.46	|	5 | 高一10班	|\n\
|	6	|	郑斯腾	|	-	|	- |高一4班	|\n\
|	7	|	郑又齐	|	-	|	- |  高一14班	|\n\
|	8	|	-	|	- | - | -	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- |  -	|	-	|\n\
|	1	|	兰梓恒	|	-	|	- |  高一12班	|\n\
|	2	|	黄桢昊	|	-	|	- |  高一6班	|\n\
|	3	|	潘忱俨	|	-	|	- |  高一8班	|\n\
|	4	|	曾伟豪	|	-	|	- |  高一7班	|\n\
|	5	|	周胤霖	|	12.04	|	1 |  高一1班	|\n\
|	6	|	洪彦彬	|	12.05	|	2 |  高一10班	|\n\
|	7	|	陈子睿	|	12.10	|	3 |  高一4班	|\n\
|	8	|	-	|	- | - | -	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';