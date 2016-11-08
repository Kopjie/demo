var shouyelist=new IScroll("#shouye");
//var tongxunlist=new IScroll("#tongxun");
$(function(){
	$(".nav").on("click","li",function(){
		var index=$(this).index();
		var boxid=$(this).attr("title");
		//alert(index);
		$(boxid).css({
			"-webkit-transform":"translateX(0)",
			"-webkit-transition":"all 1s"
		}).siblings().css({
			"-webkit-transform":"translateX(100%)"
		});
		if (index==1) {
			$("aside").css({"display":"block"});
		}else{
			$("aside").css({"display":"none"});
		}
	});
	//获取字母到顶端位置
	var arr=[];
	$zimu=$("h2");
	$zimu.each(function(){
		arr.push($(this).offset().top-80);
	})
	console.log(arr);

	//
	$(".tongxunlist").scroll(function(){
		var roll=$(this).scrollTop();
		//document.title=roll;
		console.log(roll);
		for(var i=0;i<arr.length;i++){
			
			if(roll>arr[i]){
				var index=i+1;
				$(".tit").removeClass("fixed");
				$(".tit"+index+"").addClass("fixed");
			}

			if(roll<=241){
				$(".tit").removeClass("fixed");
			}
		}

	})


})