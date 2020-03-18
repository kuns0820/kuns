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
