var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  100M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	郑羽桐	|	-	|	高一7班	|\n\
|	2	|	黄芊梦	|	-	|	高一2班	|\n\
|	3	|	陈欣怡	|	-	|	高一6班	|\n\
|	4	|	黄梦雪	|	-	|	高一12班	|\n\
|	5	|	陈伟琪	|	-	|	高一15班	|\n\
|	6	|	曾俞晴	|	-	|	高一13班	|\n\
|	7	|	李学锶	|	-	|	高一5班	|\n\
|	8	|	许佳琳	|	-	|	高一11班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	沈金茹	|	-	|	高一8班	|\n\
|	2	|	杜筱北	|	-	|	高一7班	|\n\
|	3	|	吴钧琳	|	-	|	高一2班	|\n\
|	4	|	陈韫琪	|	-	|	高一15班	|\n\
|	5	|	吴鑫蕾	|	-	|	高一4班	|\n\
|	6	|	黄馨菲	|	-	|	高一12班	|\n\
|	7	|	薛雯萱	|	-	|	高一13班	|\n\
|	8	|	宋全美	|	-	|	高一5班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';