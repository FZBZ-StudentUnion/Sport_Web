var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	黄慧函	|	-	|	高二11班	|\n\
|	3	|	卓佳颖	|	-	|	高二4班	|\n\
|	4	|	曾梓涵	|	-	|	高二16班	|\n\
|	5	|	江雨薇	|	-	|	高二6班	|\n\
|	6	|	戴月宸	|	-	|	高二15班	|\n\
|	7	|	-	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	-	|	-	|	-	|\n\
|	3	|	郑亦婷	|	-	|	高二5班	|\n\
|	4	|	林晓晗	|	-	|	高二14班	|\n\
|	5	|	蔡锦雯	|	-	|	高二16班	|\n\
|	6	|	詹雨涵	|	-	|	高二9班	|\n\
|	7	|	-	|	-	|	-	|\n\
|	8	|	-	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';