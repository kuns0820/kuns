var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<div class="innr">');
		incHD.push('<h1><a href="main.html"><img src="../images/logo.png" alt="설악산 생태탐방원"></a></h1>');
		incHD.push('<a href="javascript:;" class="btn-menu">메뉴</a>');
		incHD.push('</div>');
		incHD.push('<div class="menu_wrap">');
		incHD.push('<div class="innr">');
		incHD.push('<h1><a href="main.html"><img src="../images/logo_menu.png" alt="설악산 생태탐방원"></a></h1>');
		incHD.push('<a href="javascript:;" class="btn-menu_close">메뉴 닫기</a>');
		incHD.push('</div>');
		incHD.push('<section>');
		incHD.push('<div class="sub_list">');
		incHD.push('<div class="list">');
		incHD.push('<h2><a href="javascript:;">생태탐방원 소개</a></h2>');
		incHD.push('<ul>');
		incHD.push('<li><a href="company01.html">탐방원 안내</a></li>');
		incHD.push('<li><a href="company02.html">조직안내</a></li>');
		incHD.push('<li><a href="company03.html">오시는길</a></li>');
		incHD.push('<li><a href="company04.html">주변 볼거리</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="list">');
		incHD.push('<h2><a href="javascript:;">이용안내</a></h2>');
		incHD.push('<ul>');
		incHD.push('<li><a href="info01.html">예약안내</a></li>');
		incHD.push('<li><a href="info02.html">시설안내</a></li>');
		incHD.push('<li><a href="info03.html">요금안내</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="list">');
		incHD.push('<h2><a href="javascript:;">프로그램 소개</a></h2>');
		incHD.push('<ul>');
		incHD.push('<li><a href="program01.html">생태관광</a></li>');
		incHD.push('<li><a href="program02.html">환경교육</a></li>');
		incHD.push('<li><a href="program03.html">특화</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="list">');
		incHD.push('<h2><a href="javascript:;">커뮤니티</a></h2>');
		incHD.push('<ul>');
		incHD.push('<li><a href="community01.html">공지사항</a></li>');
		incHD.push('<li><a href="community02.html">갤러리</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('</div>');
		incHD.push('</section>');
		incHD.push('</div>');
		incHD.push('</header>');

		$("#container").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<footer>');
		incFR.push('<ul class="util_menu">');
		incFR.push('<li><a href="">생태탐방원 소개</a></li>');
		incFR.push('<li><a href="">국립공원 바로가기</a></li>');
		incFR.push('<li><a href="sitemap.html">사이트맵</a></li>');
		incFR.push('</ul>');
		incFR.push('<div class="innr">');
		incFR.push('<img src="../images/f_logo.gif" alt="설악산 생태탐방원" class="f_logo">');
		incFR.push('<div class="addr">');
		incFR.push('(우)26466 강원도 원주시 혁신로 22(반곡동) 국립공원공단<br /> 사업자등록번호 : 211-82-06541');
		incFR.push('대표전화 : 033-769-9300<br /> 고객센터 : 1670-9201 팩스번호 : 033-769-9419');
		incFR.push('<p class="copy">Copyright © Korea National Park Service. All Rights Reserved.</p>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('</footer>');
		
		$("#container").after(incFR.join(''));
	}
}

$(function(){
	inc_dom.header();
	inc_dom.footer();
	$("header .btn-menu").click(function(){
		$("body").addClass("menu_on");
	});
	$("header .btn-menu_close").click(function(){
		$("body").removeClass("menu_on");
	});
	$("header .sub_list h2 a").click(function(){
		$(this).closest(".list").toggleClass("active");
	});
});
