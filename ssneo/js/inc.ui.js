var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<div class="innr">');
		incHD.push('<h1 class="logo"><a href="main.html"><img src="images/logo.png" alt="PIN"></a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul>');
		incHD.push('<li><a href="company01.html">회사소개</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="company01.html">Company Overview</a></li>');
		incHD.push('<li><a href="company02.html">Our Platform Technology</a></li>');
		incHD.push('<li><a href="company03.html">Team Structuring</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href="project.html">프로젝트</a></li>');
		incHD.push('<li><a href="notice.html">공지</a></li>');
		incHD.push('<li><a href="recruit.html">채용</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<ul class="util">');
		incHD.push('<li><a href=""><img src="images/btn_en.png" alt="영문"></a></li>');
		incHD.push('<li><a href="javascript:;" class="btn_all"><img src="images/btn_allMenu.png" alt="전체메뉴"></a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="allMenu">');
		incHD.push('<p class="logo"><a href="main.html"><img src="images/logo_all.png" alt="PIN"></a></p>');
		incHD.push('<div class="gnb_all"></div>');
		incHD.push('<button type="button" class="btn_close"><img src="images/btn_menuClose.gif" alt="전체메뉴 닫기"></button>');
		incHD.push('</div>');
		incHD.push('</header>');
		$("#container").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<footer>');
		incFR.push('<div class="innr">');
		incFR.push('<div class="util">');
		incFR.push('<ul>');
		incFR.push('<li><a href="">개인정보처리방침</a></li>');
		incFR.push('<li><a href="company01.html">회사소개</a></li>');
		incFR.push('<li><a href="project.html">프로젝트</a></li>');
		incFR.push('<li><a href="notice.html">공지</a></li>');
		incFR.push('<li><a href="recruit.html">채용</a></li>');
		incFR.push('</ul>');
		incFR.push('<select name="" id="">');
		incFR.push('<option value="">패밀리 사이트</option>');
		incFR.push('</select>');
		incFR.push('</div>');
		incFR.push('<p class="addr">');
		incFR.push('주소/전화번호<br />');
		incFR.push('©PinTherapeutics. All Rights Reserved.');
		incFR.push('</p>');
		incFR.push('<ul class="sns">');
		incFR.push('<li><a href=""><img src="images/sns_01.gif" alt="페이스북"></a></li>');
		incFR.push('<li><a href=""><img src="images/sns_02.gif" alt="인스타그램"></a></li>');
		incFR.push('<li><a href=""><img src="images/sns_03.gif" alt="유튜브"></a></li>');
		incFR.push('<li><a href=""><img src="images/sns_04.gif" alt="트위터"></a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
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

	$("header .allMenu .gnb_all").html($("header .gnb_wrap").html());
	$("header .btn_all").click(function(){
		$(".allMenu").show();
	});
	$("header .allMenu .btn_close").click(function(){
		$(".allMenu").hide();
	});
	
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




