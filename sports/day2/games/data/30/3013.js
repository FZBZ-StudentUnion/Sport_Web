var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  800M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - |-	|	-	|\n\
|	1	|	李思思	|	-	|	- | - |高一2班	|\n\
|	2	|	刘雨芯	|	-	|	- | - |高一5班	|\n\
|	3	|	赵晗	|	-	|	- | - |高一1班	|\n\
|	4	|	吴欣悦	|	3:15.97	|	5 | 2 |高一4班	|\n\
|	5	|	陈伟琪	|	-	|	- | - |高一15班	|\n\
|	6	|	吴旖珊	|	-	|	- | - |高一15班	|\n\
|	7	|	蒋文晞	|	-	|	- | - |高一10班	|\n\
|	8	|	李唯伊	|	3:02.01	|	1 | 7 |高一6班	|\n\
|	9	|	吴钧琳	|	3:12.63	|	3 | 4 |高一2班	|\n\
|	10	|	赖司麦	|	3:17.43	|	6 | 1 |高一15班	|\n\
|	11	|	刘晴月	|	3:14.85	|	4 | 3 |高一8班	|\n\
|	12	|	肖琳轩	|	-	|	- | - |高一11班	|\n\
|	13	|	黄馨菲	|	-	|	- | - |高一12班	|\n\
|	14	|	王子瑶	|	3:10.00	|	2 | 5 |高一8班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';