var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<div class="innr">');
		incHD.push('<h1 class="logo"><a href="main.html">K water 운영관리</a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul>');
		incHD.push('<li class=""><a href="company01.html">회사소개</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인사말</a></li>');
		incHD.push('<li><a href=".html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href=".html">사업분야</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인사말</a></li>');
		incHD.push('<li><a href=".html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href=".html">알림마당</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인사말</a></li>');
		incHD.push('<li><a href=".html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href=".html">채용정보</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">인사말</a></li>');
		incHD.push('<li><a href=".html">오시는길</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href=".html">직원전용</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href=".html">2depth</a>');
		incHD.push('<ul>');
		incHD.push('<li><a href=".html"><i>-</i> 3depth</a></li>');
		incHD.push('<li><a href=".html"><i>-</i> 3depth</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href=".html">2depth</a>');
		incHD.push('<ul>');
		incHD.push('<li><a href=".html"><i>-</i> 3depth</a></li>');
		incHD.push('<li><a href=".html"><i>-</i> 3depth</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<ul class="util">');
		incHD.push('<li><a href="">회원가입</a></li>');
		incHD.push('<li class="login"><a href="">로그인</a></li>');
		incHD.push('<li><a href="">아이디·비번찾기</a></li>');
		incHD.push('<li class="last"><a href="javascript:;" class="btn_all">전체메뉴</a></li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<div class="allMenu"></div>');
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
		incFR.push('<li><a href="">이용약관</a></li>');
		incFR.push('<li><a href="">오시는길</a></li>');
		incFR.push('</ul>');
		incFR.push('</div>');
		incFR.push('<div class="addr">');
		incFR.push('<img src="images/f_logo.gif" alt="">');
		incFR.push('<p>');
		incFR.push('<span>우편번호34350 대전광역시 대덕구 신탄진로 200</span><span>대표전화 042-629-3114</span><span>고객센터 1577-0600</span><br>');
		incFR.push('COPYRIGHT ⓒ K-water ALL RIGHTS RESERVED.');
		incFR.push('</p>');
		incFR.push('<select name="" id="" class="family_site">');
		incFR.push('<option value="">패밀리 사이트</option>');
		incFR.push('</select>');
		incFR.push('</div>');
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

	$("header .btn_all").click(function(){
		if(!$("body").hasClass("allMenu")){
			$("body").addClass("allMenu");
		}else{
			$("body").removeClass("allMenu");
		}
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
});

$(window).resize(function(){
	winW = $(document).width();
	resize();
});

function resize(){
	if(winW <= 1024){
		$("body").addClass("mobile");
		$("header .allMenu").html($("header .gnb_wrap").html());
	}else{
		$("body").removeClass("mobile");
		$("header .allMenu").empty();
	}
}




