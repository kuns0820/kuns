var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header><div class="innr">');
		incHD.push('<h1><a href="main.html">CMDL</a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul class="gnb">');
		incHD.push('<li><a href="company01.html">COMPANY</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="company01.html">인사말</a></li>');
		incHD.push('<li><a href="company02.html">비전</a></li>');
		incHD.push('<li><a href="company03.html">연혁</a></li>');
		incHD.push('<li><a href="company04.html">오시는길</a></li>');
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
		incHD.push('<li><a href="support01.html">인재채용</a></li>');
		incHD.push('<li><a href="support02.html">Contact us</a></li>');
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
		incFR.push('<footer>');
		incFR.push('<span class="logo"><img src="images/logo_foot.jpg" alt="(주)씨엠디엘"></span>');
		incFR.push('<p>주식회사 씨엠디엘  |  사업자등록번호 : 129-81-1111  |  주소 : 충남 천안시 동남구 5산단2로107</p>');
		incFR.push('<p>Tel : 031-954-1111  |  fax : 031-953-1111  |  E-mail : cmdl@cmdl.co.kr</p>');
		incFR.push('<em>copyrightⓒ cmdl. all right reserved</em>');
		incFR.push('</footer>');
		
		$("main").after(incFR.join(''));
	}
}

$(function(){
	inc_dom.header();
	inc_dom.footer();

	
	$("header > .innr > .gnb_wrap > .gnb > li > a").on("mouseover" , function(){
		$("header").addClass("open");
	});
	$("header").on("mouseleave" , function(){
		$("header").removeClass("open");
	});

	$("header .gnb-layer").append($("header .gnb_wrap").html());
	$("header .btn_allMenu").click(function(){
		$("body").css("overflow" , "hidden");
		$("header .gnb-layer").fadeIn("fast");
	});
	$("header .gnb-layer .btn_allClose").click(function(){
		$("body").css("overflow" , "");
		$("header .gnb-layer").fadeOut("fast");
	});

	$(".bread .deps .selected").click(function(){
		$(this).closest(".deps").toggleClass("active");
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
