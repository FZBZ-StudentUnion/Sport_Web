var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">男子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名    | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	黄子峻	|	-	|	- | - | 初二9班	|\n\
|	2	|	陈奕宏	|	-	|	- | - | 初二6班	|\n\
|	3	|	林煜宸	|	-	|	- | - | 初二1班	|\n\
|	4	|	周煜昊	|	-	|	- | - | 初二10班	|\n\
|	5	|	刘禹凡	|	9.57	|	3 | 4 | 初二11班	|\n\
|	6	|	陈鸿杰	|	-	|	- | - | 初二6班	|\n\
|	7	|	林奕程	|	-	|	- | - | 初二3班	|\n\
|	8	|	林睿阳	|	8.55	|	6 | 1 | 初二10班	|\n\
|	9	|	林钰澄	|	-	|	- | - | 初二1班	|\n\
|	10	|	张鑫煜	|	10.09	|	2 | 5 | 初二8班	|\n\
|	11	|	李昂	|	-	|	- | - | 初二4班	|\n\
|	12	|	许梓航	|	-	|	- | - | 初二2班	|\n\
|	13	|	黄正弘	|	9.39	|	4 | 3 | 初二4班	|\n\
|	14	|	潘秭桦	|	-	|	- | - | 初二11班	|\n\
|	15	|	桂浩然	|	-	|	- | - | 初二7班	|\n\
|	16	|	黄琪凯	|	11.11	|	1 | 7 | 初二8班	|\n\
|	17	|	肖毅涵	|	-	|	- | - | 初二5班	|\n\
|	18	|	黄可一	|	-	|	- | - | 初二6班	|\n\
|	19	|	刘峻熙	|	-	|	- | - | 初二1班	|\n\
|	20	|	叶嘉乐	|	-	|	- | - | 初二9班	|\n\
|	21	|	王柯楠	|	9.29	|	5 | 2 | 初二2班	|\n\
|	22	|	刘章銮	|	-	|	- | - | 初二2班	|\n\
|	23	|	陈德斌	|	-	|	- | - | 初二4班	|\n\
|	24	|	林家锐	|	-	|	- | - | 初二7班	|\n\
|	25	|	严锦跃	|	-	|	- | - | 初二5班	|\n\
|	26	|	葛绍宁	|	-	|	- | - | 初二3班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';