var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  1000M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	陈昱城	|	-	|	初三1班	|\n\
|	2	|	陈韬文	|	-	|	初三2班	|\n\
|	3	|	陈弈含	|	-	|	初三10班	|\n\
|	4	|	林书禾	|	-	|	初三11班	|\n\
|	5	|	吴思翰	|	-	|	初三3班	|\n\
|	6	|	陈冕	|	-	|	初三5班	|\n\
|	7	|	乐涵	|	-	|	初三2班	|\n\
|	8	|	游浩瀚	|	-	|	初三8班	|\n\
|	9	|	邓皓文	|	-	|	初三9班	|\n\
|	10	|	余奕锋	|	-	|	初三6班	|\n\
|	11	|	刘恒屹	|	-	|	初三11班	|\n\
|	12	|	林秀哲	|	-	|	初三7班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	刘浚铠	|	-	|	初三7班	|\n\
|	2	|	林俊贤	|	-	|	初三4班	|\n\
|	3	|	黄楚桐	|	-	|	初三8班	|\n\
|	4	|	王晖	|	-	|	初三10班	|\n\
|	5	|	林琛奇	|	-	|	初三11班	|\n\
|	6	|	谢元睿	|	-	|	初三10班	|\n\
|	7	|	林楷宸	|	-	|	初三5班	|\n\
|	8	|	危铠承	|	-	|	初三2班	|\n\
|	9	|	林哲祺	|	-	|	初三8班	|\n\
|	10	|	林宸	|	-	|	初三6班	|\n\
|	11	|	邓名竣	|	-	|	初三6班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';