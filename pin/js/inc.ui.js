var inc_dom = {
	header : function(){
		var incHD = [];
	//	incHD.push('<header>');
		
	//	incHD.push('</header>');

		$("#container").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
	//	incFR.push('<footer>');
		
	//	incFR.push('</footer>');
		
		$("#container").after(incFR.join(''));
	}
}
var winW;
$(function(){
	inc_dom.header();
	inc_dom.footer();
	winW = $(document).width();
	resize();
	
	if(!$("body").hasClass("mobile")){
		$(".gnb_wrap > ul > li > a, .gnb_wrap .dep2").hover(function(){
			$(this).parent().addClass("on");
		}, function(){
			$(this).parent().removeClass("on");
		});
		$(".gnb_wrap .dep2").hover(function(){
			$(this).parent().addClass("on");
		}, function(){
			$(this).parent().removeClass("on");
		});
	}
	
	/* MOBILE */
	$("header .btn_allMenu, .allDim").click(function(){
		$(".gnb_wrap").toggleClass("on");
	});

	$(".mobile .gnb_wrap > ul > li > a").click(function(){
		$(this).parent().toggleClass("on");
		return false;
	});

	$(".bread .deps .selected").click(function(){
		$(this).closest(".deps").toggleClass("active");
	});
});

$(window).resize(function(){
	winW = $(document).width();
	resize();
});

function resize(){
	if(winW < 1200){
		$("body").addClass("mobile");
	}else{
		$("body").removeClass("mobile");
	}
}
