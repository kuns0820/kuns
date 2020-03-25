$(function(){
	var _body = $("body");
	$("header .btn-menu").click(function(){
		if(!_body.hasClass("menuOn")){
			_body.addClass("menuOn");
		}else{
			_body.removeClass("menuOn");
		}
	});
	$("#side_wrap .menu_close").click(function(){
		_body.removeClass("menuOn");
	});

	$("#side_wrap .menu_dep1 li a").click(function(){
		_target = $(this).parent().data("tg");
		$(this).parent().addClass("on").siblings().removeClass("on");
		$("#side_wrap .menu_dep2 ul." + _target).addClass("on").siblings().removeClass("on");
	});
});

function layers(target){
	$this = $(target).attr("data-layer");
	$dom = $(".layer-wrap .layer-conts."+ $this);
	$dom.closest(".layer-wrap").fadeIn("fast");
	$dom.fadeIn("fast");

	var _docT = $(document).height();
	var _winT = $(window).scrollTop() + 30;
	var _layerT = $dom.height();

	if($dom.hasClass("hidden")){console.log(123)
		$("body").css("overflow" , "hidden");
	}

	if(_winT + _layerT >= _docT){
		$dom.css({
			top : _winT - ((_winT + _layerT) - _docT + 50)
		});
	}else{
		$dom.css({
			top : _winT
		});
	}
}
function layersClose(target){
	$this = $(target).closest(".layer-wrap");
	$this.fadeOut("fast");
	$("body").css("overflow" , "");
}
