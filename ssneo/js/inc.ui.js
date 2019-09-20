var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<h1><a href="main.html"><img src="images/logo.png" alt="ABIT"></a></h1>');
		incHD.push('<div class="gnb">');
		incHD.push('<ul>');
		incHD.push('<li><a href="ieo.html"><span>IEO</span></a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="ieo.html">IEO 참여신청</a></li>');
		incHD.push('<li><a href="ieo_list.html">신청 내역리스트 확인</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href="myasset01.html"><span>자산현황</span></a></li>');
		incHD.push('<li><a href=""><span>커뮤니티</span></a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="">뉴스</a></li>');
		incHD.push('<li><a href="">NEO insight</a></li>');
		incHD.push('<li><a href="">이벤트</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=""><span>고객지원</span></a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="">공지사항</a></li>');
		incHD.push('<li><a href="">FAQ</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=""><span>제휴&middot;제안</span></a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="">사업 제휴</a></li>');
		incHD.push('<li><a href="">상장</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="util">');
		incHD.push('<a href="login.html">로그인</a>');
		incHD.push('<a href="join.html">회원가입</a>');
		incHD.push('</div>');
		incHD.push('<button type="button" class="btn_menu"><img src="images/btn_menu.gif" alt="메뉴"></button>');
		incHD.push('<div class="gnb-layer"></div>');
		incHD.push('</header>');
		
		$("main").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
		incFR.push('<div class="csCenter">');
		incFR.push('<div class="cs_box">');
		incFR.push('<dl>');
		incFR.push('<dt>고객센터</dt>');
		incFR.push('<dd>');
		incFR.push('<strong>1544-4343</strong>');
		incFR.push('<span>평일 09:00~22:00 (토,일 및 공휴일 휴무)</span>');
		incFR.push('</dd>');
		incFR.push('</dl>');
		incFR.push('<dl>');
		incFR.push('<dt>K-DAX 라운지</dt>');
		incFR.push('<dd>');
		incFR.push('<p><img src="images/ico_cs01.gif" alt=""> 운영시간 : 평일 09:00~18:00</p>');
		incFR.push('<p><img src="images/ico_cs02.gif" alt=""> 서울특별시 강남구 논현동 학동로 20길 28 2층</p>');
		incFR.push('</dd>');
		incFR.push('</dl>');
		incFR.push('</div>');
		incFR.push('<div class="sns_box">');
		incFR.push('<a href=""><img src="images/sns_01.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_02.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_03.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_04.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_05.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_06.gif" alt=""></a>');
		incFR.push('<a href=""><img src="images/sns_07.gif" alt=""></a>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('<div class="fMenu">');
		incFR.push('<div class="innr">');
		incFR.push('<div class="fgnb">');
		incFR.push('<div class="box">');
		incFR.push('<div><a href="">IEO</a>');
		incFR.push('<ul class="dep2">');
		incFR.push('<li><a href="">- IEO 참여신청</a></li>');
		incFR.push('<li><a href="">- 신청 내역리스트 확인</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('<div><a href="">자산현황</a></div>');
		incFR.push('</div>');
		incFR.push('<div class="box"><a href="">커뮤니티</a>');
		incFR.push('<ul class="dep2">');
		incFR.push('<li><a href="">- 뉴스</a></li>');
		incFR.push('<li><a href="">- NEO insight</a></li>');
		incFR.push('<li><a href="">- 이벤트</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('<div class="box"><a href="">고객지원</a>');
		incFR.push('<ul class="dep2">');
		incFR.push('<li><a href="">- 공지사항</a></li>');
		incFR.push('<li><a href="">- FAQ</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('<div class="box"><a href="">제휴&middot;제안</a>');
		incFR.push('<ul class="dep2">');
		incFR.push('<li><a href="">- 사업 제휴</a></li>');
		incFR.push('<li><a href="">- 상장</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('<div class="down_info">');
		incFR.push('<a href="">K-DAX 회사정보</a>');
		incFR.push('<a href="">AST 백서</a>');
		incFR.push('<a href="">거래소 가이드 다운로드</a>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('<footer>');
		incFR.push('<div class="copy_wrap">');
		incFR.push('<div class="addr">');
		incFR.push('<span>사업자 등록번호 787-86-01212</span>');
		incFR.push('<span>서울특별시 강남구 학동로 20길 28(2,3층)</span>');
		incFR.push('<span>업무시간 09:00~18:00</span>');
		incFR.push('<span>고객센터 1544-4343</span>');
		incFR.push('<span>e-Mail  cs@ss-neo.com</span>');
		incFR.push('</div>');
		incFR.push('<p class="copy">COPYRIGHTⓒ 2018 SS-NEO.ALL RIGHT RESERVED.</p>');
		incFR.push('</div>');
		incFR.push('</footer>');
		incFR.push('<aside>');
		incFR.push('<a href="javascript:;">1:1문의</a>');
		incFR.push('<a href="javascript:;">1:1문의</a>');
		incFR.push('</aside>');
		
		$("main").after(incFR.join(''));
	}
}

$(function(){
	inc_dom.header();
	inc_dom.footer();
	$("header .gnb-layer").append('<h1><a href=""><img src="images/logo.png" alt="ABIT"></a></h1>');
	$("header .gnb-layer").append($("header .gnb").html());
	$("header .gnb-layer").append('<button type="button" class="btn_close"><img src="images/sub/btn_allMenuClose.gif" alt="메뉴 닫기"></button>');

	$("header .btn_menu").click(function(){
		$("body").css("overflow" , "hidden");
		$("header .gnb-layer").addClass("active");
	});
	$("header .gnb-layer .btn_close").click(function(){
		$("body").css("overflow" , "unset");
		$("header .gnb-layer").removeClass("active");
	});
});

function layers(target){
	$this = $(target).attr("data-layer");
	$(".layer-wrap").fadeIn("fast");
	$(".layer-wrap .layer-conts."+ $this).fadeIn("fast");
}
function layersClose(target){
	$this = $(target).closest(".layer-wrap");
	$(".layer-wrap").fadeOut("fast");
	$this.fadeOut("fast");
}

$(function(){
	$(".gnb li").on("mouseover" , function(){
		$(this).find(".dep2").css({
			"opacity" : "1",
			"visibility" : "visible"
		});
	});
	$(".gnb li").on("mouseout" , function(){
		$(".gnb li .dep2").css({
			"opacity" : "0",
			"visibility" : "hidden"
		});
	});
});
