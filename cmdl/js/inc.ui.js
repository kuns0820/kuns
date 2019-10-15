var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header><div class="innr">');
		incHD.push('<h1><a href="main.html">CMDL</a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul class="gnb">');
		incHD.push('<li><a href=".html">COMPANY</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인사말</a></li>');
		incHD.push('<li><a href=".html">비전</a></li>');
		incHD.push('<li><a href=".html">연혁</a></li>');
		incHD.push('<li><a href=".html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=".html">BUSINESS</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">화학사업</a></li>');
		incHD.push('<li><a href=".html">장비사업</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=".html">MANUFACTURE</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">공장</a></li>');
		incHD.push('<li><a href=".html">품질</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=".html">SUPPORT</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인재채용</a></li>');
		incHD.push('<li><a href=".html">Contact us</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<button type="button" class="btn_allMenu">전체메뉴</button>');
		incHD.push('<div class="gnb-layer"><button type="button" class="btn_allClose">전체메뉴 닫기</button></div>');
		incHD.push('</div></header>');
		
		$("main").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<div class="csCenter">');
		
		
		$("main").after(incFR.join(''));
	}
}

$(function(){
	inc_dom.header();
	//inc_dom.footer();

	
	$("header > .innr > .gnb_wrap > .gnb > li > a").on("mouseover" , function(){
		$("header").addClass("open");
	});
	$("header").on("mouseleave" , function(){
		$("header").removeClass("open");
	});

	$("header .gnb-layer").append($("header .gnb_wrap").html());
	$("header .btn_allMenu").click(function(){
		$("header .gnb-layer").fadeIn("fast");
	});
	$("header .gnb-layer .btn_allClose").click(function(){
		$("header .gnb-layer").fadeOut("fast");
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
	$(".layer-wrap").fadeOut("fast");
	$this.fadeOut("fast");
}
