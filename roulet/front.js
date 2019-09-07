$(function(){
	/*
	90 - 7,000 포인트
	150 - 5,000 포인트
	210 - 3,000 포인트
	275 - 꽝
	335 - 1,000 포인트
	390 - 10,000 포인트

	roulette(1, 5, 위의 적용 숫자 값);
	*/

	var gift_num = 390;
	var stat = null;
	$(".btn_roulette").on("click" , function(){
		if (stat == 1){
			return false
		}else if(stat == null){
			stat = 1;
			roulette(3, 15, gift_num);
		}else{
			alert("금일 이벤트 참여가 완료되었습니다.");
		}
	})

	function roulette($time, $spin, $realAngle){
		$("#event_roulette").rotate({
			angle: 0,
			animateTo: 360 * $spin - $realAngle,
			duration: $time * 1000,
			easing: $.easing.easeOutCirc,
			callback: function(){
				ending(gift_num);
				stat = 2;
			}
		});
	};

	function ending($Num){
		$(".layer-wrap.win").show().css("top" , $(window).scrollTop() + 30);
		$(".layer-wrap.win img.win-"+ $Num).show();
	}
});

function layers(target){
	$this = $(target).attr("data-layer");
	$(".layer-wrap."+ $this).css("top" , $(window).scrollTop() + 30).fadeIn("fast");
}
function layersClose(target){
	$this = $(target).closest(".layer-wrap");
	$this.fadeOut("fast");
}
