var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  跳高  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	陈凯泽	|	-	|	- | - | 高三12班	|\n\
|	2	|	胡孙睿	|	-	|	- | - | 高三2班	|\n\
|	3	|	游英杰	|	-	|	- | - | 高三10班	|\n\
|	4	|	黄恺	|	-	|	- | - | 高三13班	|\n\
|	5	|	张城绮	|	1.63	|	1 | 7 | 高三1班	|\n\
|	6	|	李家锌	|	-	|	- | - | 高三7班	|\n\
|	7	|	张绍洋	|	1.57	|	4 | 3 | 高三12班	|\n\
|	8	|	徐俊泽	|	-	|	- | - | 高三5班	|\n\
|	9	|	林宇翔	|	-	|	- | - | 高三1班	|\n\
|	10	|	胡曦文	|	-	|	- | - | 高三11班	|\n\
|	11	|	李浩易	|	-	|	- | - | 高三7班	|\n\
|	12	|	许成栋	|	-	|	- | - | 高三10班	|\n\
|	13	|	黄泽凯	|	-	|	- | - | 高三2班	|\n\
|	14	|	畅庭煦	|	1.45	|	6 | 0.5 | 高三3班	|\n\
|	15	|	许成梁	|	-	|	- | - | 高三10班	|\n\
|	16	|	林耿乐	|	1.45	|	6 | 0.5 | 高三2班	|\n\
|	17	|	张东檀	|	-	|	- | - | 高三9班	|\n\
|	18	|	吴浩田	|	1.60	|	2 | 5 | 高三9班	|\n\
|	19	|	许隽灏	|	-	|	- | - | 高三15班	|\n\
|	20	|	陈郁	|	1.60	|	3 | 4 | 高三5班	|\n\
|	21	|	陈益昉	|	-	|	- | - | 高三14班	|\n\
|	22	|	陈誉仁	|	1.53	|	5 | 2 | 高三9班	|\n\
|	23	|	陈佳乐	|	-	|	- | - | 高三11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';