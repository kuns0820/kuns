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
		incHD.push('<li><a href="equipment.html">장비사업</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="equipment00.html">Introduction</a></li>');
		incHD.push('<li><a href="equipment01.html">연혁</a></li>');
		incHD.push('<li><a href="equipment02.html">소형장비</a></li>');
		incHD.push('<li><a href="equipment03.html">중형장비</a></li>');
		incHD.push('<li><a href="equipment04.html">대형장비</a></li>');
		incHD.push('<li><a href="equipment05.html">기타장비 및 악세사리</a></li>');
		incHD.push('<li><a href="equipment06.html">고객 맞춤 장비</a></li>');
		incHD.push('<li><a href="equipment07.html">승화정제서비스</a></li>');
		incHD.push('<li><a href="support02.html">Contact</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href="chemistry.html">화학사업</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="chemistry.html">Introduction</a></li>');
		incHD.push('<li><a href="chemistry01.html">OEM</a></li>');
		incHD.push('<li><a href="chemistry02.html">공정개발</a></li>');
		incHD.push('<li><a href="chemistry03.html">공장</a></li>');
		incHD.push('<li><a href="chemistry04.html">품질관리</a></li>');
		incHD.push('<li><a href="chemistry05.html">분석시설</a></li>');
		incHD.push('<li><a href="chemistry06.html">소자평가</a></li>');
		incHD.push('<li><a href="support02.html">Contact</a></li>');
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
		incHD.push('<a href="" class="btn_lang en">ENG</a>');
		incHD.push('<a href="" class="btn_lang ch">CHI</a>');
		incHD.push('<button type="button" class="btn_allMenu">전체메뉴</button>');
		incHD.push('<div class="gnb-layer"><button type="button" class="btn_allClose">전체메뉴 닫기</button></div>');
		incHD.push('</div></header>');
		
		$("main").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<footer>');
		incFR.push('<div class="innr">');
		incFR.push('<span class="logo"><img src="images/logo_foot.png" alt="(주)씨엠디엘"></span>');
		incFR.push('<p>주식회사 씨엠디엘  |  사업자등록번호 : 129-81-1111  |  주소 : 충남 천안시 동남구 5산단2로107</p>');
		incFR.push('<p>Tel : 031-954-1111  |  fax : 031-953-1111  |  E-mail : cmdl@cmdl.co.kr</p>');
		incFR.push('<em>copyrightⓒ cmdl. all right reserved</em>');
		incFR.push('<div class="fMenu">');
		incFR.push('<a href="">장비사업</a>');
		incFR.push('<a href="">화학사업</a>');
		incFR.push('<a href="">Contact</a>');
		incFR.push('<a href="">SiteMap</a>');
		incFR.push('</div>');
		incFR.push('</div>');
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
