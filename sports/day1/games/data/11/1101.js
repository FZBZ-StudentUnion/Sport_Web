var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">男子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	郑宇轩	|	-	|	高一2班	|\n\
|	2	|	林子焜	|	-	|	高一14班	|\n\
|	3	|	黄桢昊	|	-	|	高一6班	|\n\
|	4	|	陈方炫	|	-	|	高一11班	|\n\
|	5	|	赵伦甲	|	-	|	高一6班	|\n\
|	6	|	杨展滔	|	-	|	高一13班	|\n\
|	7	|	张毅涛	|	-	|	高一9班	|\n\
|	8	|	张逸晨	|	-	|	高一12班	|\n\
|	9	|	龚正轩	|	-	|	高一5班	|\n\
|	10	|	黄君灏	|	-	|	高一7班	|\n\
|	11	|	叶铭垚	|	-	|	高一13班	|\n\
|	12	|	李博韬	|	-	|	高一6班	|\n\
|	13	|	鄢仁盛	|	-	|	高一10班	|\n\
|	14	|	郑蕴博	|	-	|	高一15班	|\n\
|	15	|	朱林袆	|	-	|	高一12班	|\n\
|	16	|	周俊翔	|	-	|	高一10班	|\n\
|	17	|	龚思俊	|	-	|	高一9班	|\n\
|	18	|	曾伟豪	|	-	|	高一7班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';