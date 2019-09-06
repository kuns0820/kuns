$(function(){
	/*
	60 - 꽝
	25 - 추석 명절봉투
	90 - 건강체크키트
	158 - L자 홀더
	205 - 추석 명절봉투
	275 - 기프티쇼

	roulette(1, 5, 위의 적용 숫자 값);
	*/

	var gift_num = 275;
	var stat = null;
	$(".btn_roulette").on("click" , function(){
		if (stat == 1){
			return false
		}else if(stat == null){
			stat = 1;
			$(".ev_01 .son").fadeOut("fast");
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
		$(window).scrollTop(0);
		$("i.dim").show();
		switch ($Num) {
			case 60:
				$(".layer.lose").show();
			break;
			case 25:
				$(".layer.win").show();
				$(".layer.win .txt em").text("추석 명절봉투 당첨");
			break;
			case 90:
				$(".layer.win").show();
				$(".layer.win .txt em").text("건강체크키트 당첨");
			break;
			case 158:
				$(".layer.win").show();
				$(".layer.win .txt em").text("L자 홀더 당첨");
			break;
			case 205:
				$(".layer.win").show();
				$(".layer.win .txt em").text("추석 명절봉투 당첨");
			break;
			case 275:
				$(".layer.win").show();
				$(".layer.win .txt em").text("기프티쇼 당첨");
			break;
		}
	}
});

function layer_close(){
	$(".layer , i.dim").hide();
}

function layer_history(){
	$(window).scrollTop(0);
	$(".layer.history , i.dim").show();
}