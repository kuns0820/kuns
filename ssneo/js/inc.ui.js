var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<h1><a href=""><img src="images/logo.png" alt="ABIT"></a></h1>');
		incHD.push('<div class="gnb">');
		incHD.push('<ul>');
		incHD.push('<li><a href="">IEO</a></li>');
		incHD.push('<li><a href="">자산현황</a></li>');
		incHD.push('<li><a href="">커뮤니티</a></li>');
		incHD.push('<li><a href="">고객지원</a></li>');
		incHD.push('<li><a href="">제휴&middot;제안</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="util">');
		incHD.push('<a href="">로그인</a>');
		incHD.push('<a href="">회원가입</a>');
		incHD.push('</div>');
		incHD.push('<button type="button" class="btn_menu"><img src="images/btn_menu.gif" alt="메뉴"></button>');
		incHD.push('</header>');
		
		$("main").before(incHD.join(''));
	},
	footer : function(){
		var incFR = [];
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
		incFR.push('<div class="certifi">');
		incFR.push('<a href="javascript:;"><img src="images/img_copy01.jpg" alt=""></a>');
		incFR.push('<a href="javascript:;"><img src="images/img_copy02.jpg" alt=""></a>');
		incFR.push('<a href="javascript:;"><img src="images/img_copy03.jpg" alt=""></a>');
		incFR.push('<a href="javascript:;"><img src="images/img_copy04.jpg" alt=""></a>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('</footer>');
		
		$("main").after(incFR.join(''));
	}
}

$(function(){
//	inc_dom.header();
	inc_dom.footer();
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
		$(".gnb li .dep2").show();
	});
	$(".gnb li").on("mouseout" , function(){
		$(".gnb li .dep2").hide();
	});
});
