var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">男子组  跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	王致韬	|	-	|	高二12班	|\n\
|	2	|	傅博文	|	-	|	高二11班	|\n\
|	3	|	谢启楠	|	-	|	高二6班	|\n\
|	4	|	魏楷燃	|	-	|	高二15班	|\n\
|	5	|	陈钦雨	|	-	|	高二12班	|\n\
|	6	|	江龚羿	|	-	|	高二8班	|\n\
|	7	|	刘宸鸣	|	-	|	高二15班	|\n\
|	8	|	柯南	|	-	|	高二16班	|\n\
|	9	|	吴城安	|	-	|	高二4班	|\n\
|	10	|	陈子利	|	-	|	高二3班	|\n\
|	11	|	蔡晏泽	|	-	|	高二4班	|\n\
|	12	|	郑锦程	|	-	|	高二2班	|\n\
|	13	|	李辰锐	|	-	|	高二14班	|\n\
|	14	|	陈叶鹏	|	-	|	高二8班	|\n\
|	15	|	陈冠华	|	-	|	高二6班	|\n\
|	16	|	叶旭	|	-	|	高二10班	|\n\
|	17	|	谢丰瑞	|	-	|	高二2班	|\n\
|	18	|	黄毅	|	-	|	高二2班	|\n\
|	19	|	王铠迪	|	-	|	高二5班	|\n\
|	20	|	杨望	|	-	|	高二8班	|\n\
|	21	|	陆柏涛	|	-	|	高二3班	|\n\
|	22	|	陈德胜	|	-	|	高二11班	|\n\
|	23	|	俞嘉宸	|	-	|	高二16班	|\n\
|	24	|	林航宇	|	-	|	高二7班	|\n\
|	25	|	郑诗杰	|	-	|	高二7班	|\n\
|	26	|	林明瑞	|	-	|	高二6班	|\n\
|	27	|	黄子鉴	|	-	|	高二15班	|\n\
|	28	|	黄鹏飞	|	-	|	高二14班	|\n\
|	29	|	叶未央	|	-	|	高二16班	|\n\
|	30	|	杨加曜	|	-	|	高二5班	|\n\
|	31	|	郭知涵	|	-	|	高二11班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';