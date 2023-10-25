var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	林妙禧	|	-	|	初一3班	|\n\
|	2	|	潘妍冰	|	-	|	初一13班	|\n\
|	3	|	吴念芊	|	-	|	初一2班	|\n\
|	4	|	柯锴忻	|	-	|	初一8班	|\n\
|	5	|	陈玥忻	|	-	|	初一5班	|\n\
|	6	|	郑灵怡	|	-	|	初一9班	|\n\
|	7	|	王雨欣	|	-	|	初一14班	|\n\
|	8	|	李雯曦	|	-	|	初一10班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	杨潇	|	-	|	初一7班	|\n\
|	2	|	钟颖	|	-	|	初一6班	|\n\
|	3	|	陈韵霏	|	-	|	初一3班	|\n\
|	4	|	林睿馨	|	-	|	初一2班	|\n\
|	5	|	刘睿旗	|	-	|	初一8班	|\n\
|	6	|	郑雅彤	|	-	|	初一5班	|\n\
|	7	|	鲍芷昕	|	-	|	初一13班	|\n\
|	8	|	罗友欢	|	-	|	初一10班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';