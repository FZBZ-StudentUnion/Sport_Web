var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">男子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	吴张恒	|	-	|	高二6班	|\n\
|	2	|	蔡镇浩	|	-	|	高二14班	|\n\
|	3	|	陈钦雨	|	-	|	高二12班	|\n\
|	4	|	刘瑄铠	|	-	|	高二9班	|\n\
|	5	|	陈鑫城	|	-	|	高二4班	|\n\
|	6	|	李辰锐	|	-	|	高二14班	|\n\
|	7	|	朱李行正	|	-	|	高二13班	|\n\
|	8	|	余潘超	|	-	|	高二9班	|\n\
|	9	|	林泓希	|	-	|	高二8班	|\n\
|	10	|	魏廷	|	-	|	高二6班	|\n\
|	11	|	杨俊哲	|	-	|	高二3班	|\n\
|	12	|	陈醒哲	|	-	|	高二13班	|\n\
|	13	|	林健波	|	-	|	高二7班	|\n\
|	14	|	陈致宏	|	-	|	高二4班	|\n\
|	15	|	黄显宸	|	-	|	高二16班	|\n\
|	16	|	叶未央	|	-	|	高二16班	|\n\
|	17	|	陆柏涛	|	-	|	高二3班	|\n\
|	18	|	陈俊懋	|	-	|	高二8班	|\n\
|	19	|	张家睿	|	-	|	高二15班	|\n\
|	20	|	任杰	|	-	|	高二15班	|\n\
|	21	|	卓海宁	|	-	|	高二9班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';