;(function($){
	var arr=[];
	$times=$(".times");
	$times.each(function(){
		arr.push($(this).offset().top);
	})
	console.log(arr);

	$("section").scroll(function(){
		var roll=$(this).scrollTop()+95;
		//document.title=roll;
		console.log(roll);
		for(var i=0;i<arr.length;i++){
			
			if(roll>arr[i]){
				var index=i+1;
				$(".times").removeClass("fixed");
				$(".time"+index+"").addClass("fixed");
			}

			if(roll==95){
				$(".times").removeClass("fixed");
			}
		}

	})


})(Zepto)