var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<h1><a href="index.php"><img src="images/logo.jpg" alt="호창엠에프"></a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul>');
		incHD.push('<li><a href="company01.html">호창 HOchang</a>');
		incHD.push('<div class="dep2">');
		incHD.push('<ul>');
		incHD.push('<li><a href="company01.html">인사말</a></li>');
		incHD.push('<li><a href="company02.html">연혁</a></li>');
		incHD.push('<li><a href="company03.html">조직도</a></li>');
		incHD.push('<li><a href="company04.html">인증현황&특허</a></li>');
		incHD.push('<li><a href="company05.html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('</li>');
		incHD.push('<li><a href="car01.html">자동차부품사업부</a>');
		incHD.push('<div class="dep2">');
		incHD.push('<ul>');
		incHD.push('<li><a href="car01.html">제조공법 흐름도</a></li>');
		incHD.push('<li><a href="car02.html">제조공정</a></li>');
		incHD.push('<li><a href="car03.html">설비&측정 설비현황</a></li>');
		incHD.push('<li><a href="car04.html">제품소개</a></li>');
		incHD.push('<li><a href="car05.html">R&D 현황</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('</li>');
		incHD.push('<li><a href="build01.html">건설자재사업부</a>');
		incHD.push('<div class="dep2">');
		incHD.push('<ul>');
		incHD.push('<li><a href="build01.html">제품소개</a></li>');
		incHD.push('<li><a href="build02.html">시험성적서</a></li>');
		incHD.push('<li><a href="build03.html">동영상</a></li>');
		incHD.push('<li><a href="build04.html">견적문의</a></li>');
		incHD.push('<li><a href="build05.html">기술자료</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('</li>');
		incHD.push('<li><a href="bio01.html">바이오사업부</a>');
		incHD.push('<div class="dep2">');
		incHD.push('<ul>');
		incHD.push('<li><a href="bio01.html">Strategy</a></li>');
		incHD.push('<li><a href="bio02.html">R&D</a></li>');
		incHD.push('<li class="sub"><a href="bio03.html">Biotechnology</a></li>');
		incHD.push('<li class="sub"><a href="bio04.html">Biocosmetics</a></li>');
		incHD.push('<li><a href="bio05.html">Products</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<i class="allDim"></i>');
		incHD.push('<a href="javascript:;" class="btn_allMenu">');
		incHD.push('<svg viewbox="0 0 40 35" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="nonzero" fill="rgb(34, 34, 34)" d="M-0.000,35.000 L-0.000,30.000 L40.000,30.000 L40.000,35.000 L-0.000,35.000 ZM20.000,15.000 L40.000,15.000 L40.000,20.000 L20.000,20.000 L20.000,15.000 ZM-0.000,-0.000 L40.000,-0.000 L40.000,5.000 L-0.000,5.000 L-0.000,-0.000 Z"/></svg>');
		incHD.push('</a>');
		incHD.push('</header>');

		$("#container").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<div id="quick">');
		incFR.push('<h2>quick</h2>');
		incFR.push('<ul>');
		incFR.push('<li><a href="">(주)호창</a></li>');
		incFR.push('</ul>');
		incFR.push('<ul>');
		incFR.push('<li><a href="">(주)호창 MF</a></li>');
		incFR.push('<li><a href="">제품소개</a></li>');
		incFR.push('<li><a href="">인증서</a></li>');
		incFR.push('</ul>');
		incFR.push('<ul>');
		incFR.push('<li><a href="">(주)호창메탈</a></li>');
		incFR.push('<li><a href="">커플러소개</a></li>');
		incFR.push('<li><a href="">화장품소개</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('<footer>');
		incFR.push('<p class="addr">호창MF<br />부산 강서구 과학산단로 417 <br class="br" />(지사동)</p>');
		incFR.push('<span>고객센터 +82 51.831.3445</span>');
		incFR.push('<span>팩스 +82 51.831.3444</span>');
		incFR.push('<em class="copy">Copyright(c)HochangMF,<br class="br" />all Rights Reserved</em>');
		incFR.push('<a href="sitemap.html" class="btn_sitemap">사이트맵</a>');
		incFR.push('</footer>');
		
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
