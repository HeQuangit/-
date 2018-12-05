$(function(){
	var objli = $(".wubnav ul");
	var objjulbox = $(".wubai_conter");
	var num = 0;
	objli.children("li").eq(0).css({"background": "#c7181e"});
	objli.children("li").eq(1).css({"background": "#bfbfbf"});
	
	objjulbox.children("div").eq(0).css("display","block");
	objjulbox.children("div").eq(1).css("display","none");
	objli.children("li").mousemove(function(){
		num = $(this).index();
	    objli.children("li").eq(num).css({"background":"#c7181e"}).siblings().css("background","#bfbfbf");
		objjulbox.children("div").eq(num).css("display","block").siblings().css("display","none");
	})
});
