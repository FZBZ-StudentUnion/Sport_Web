var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	柯泳佳	|	-	|	初一14班	|\n\
|	2	|	余思怡	|	-	|	初一9班	|\n\
|	3	|	李雯曦	|	-	|	初一10班	|\n\
|	4	|	林书瑶	|	-	|	初一3班	|\n\
|	5	|	陈颖萱	|	-	|	初一6班	|\n\
|	6	|	方琳煊	|	-	|	初一4班	|\n\
|	7	|	叶夏冉	|	-	|	初一13班	|\n\
|	8	|	张茈妍	|	-	|	初一4班	|\n\
|	9	|	林佳潼	|	-	|	初一5班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王容萱	|	-	|	初一2班	|\n\
|	2	|	李思玥	|	-	|	初一14班	|\n\
|	3	|	潘妍冰	|	-	|	初一13班	|\n\
|	4	|	吴洪朵儿	|	-	|	初一10班	|\n\
|	5	|	陈可歆	|	-	|	初一6班	|\n\
|	6	|	柯锴忻	|	-	|	初一8班	|\n\
|	7	|	林若熙	|	-	|	初一4班	|\n\
|	8	|	陈韵霏	|	-	|	初一3班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';