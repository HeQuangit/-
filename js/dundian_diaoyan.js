//	$(function(){
	var objulimgs_dudian = $(".duan_dainbner ul");
		var objkzulimgs_1 =$(".box3_ul_1s_1").children("ul");
		var objnerong_1= $(".box3_ul_1s_1").children("h2");
		
		bojnr = objulimgs_dudian.children().eq(0).children().children("img").attr("alt");
		objnerong_1.text(bojnr);
		var nums=0;
		
		objulimgs_dudian.children().eq(0).css("display","block").siblings().css("display","none");
		
		objkzulimgs_1.children().eq(0).css("background","#68d118");
		objkzulimgs_1.children().mousemove(function(){
			nums = $(this).index();
			$(this).css("background","#68d118");
			$(this).siblings().css("background","#FFFFFF");
			objulimgs_dudian.children().eq(nums).fadeIn().siblings().fadeOut();
			bojnr = objulimgs_dudian.children().eq(nums).children().children("img").attr("alt");
			objnerong_1.text(bojnr);
		});
		var lbtimes = setInterval(show,3000);
		function show(){
			nums ++;
			if(nums >3){
				nums =0;
			}
			bojnr =objulimgs_dudian.children().eq(nums).children().children("img").attr("alt");
			objnerong_1.text(bojnr);
			objulimgs_dudian.children().eq(nums).css("display","block").siblings().fadeOut();
			objkzulimgs_1.children().eq(nums).css("background","#68d118");
			objkzulimgs_1.children().eq(nums).siblings().css("background","#FFFFFF")
		}
