var inc_dom = {
	header : function(){
		var incHD = [];
		incHD.push('<header>');
		incHD.push('<div class="innr">');
		incHD.push('<h1 class="logo"><a href="main.html">K water 운영관리</a></h1>');
		incHD.push('<div class="gnb_wrap">');
		incHD.push('<ul>');
		incHD.push('<li class=""><a href="ceo.html">회사소개</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="ceo.html">CEO인사말</a></li>');
		incHD.push('<li><a href="org.html">조직 및 연락처</a></li>');
		incHD.push('<li><a href="location.html">오시는길</a></li>');
		incHD.push('<li><a href="ci.html">CI</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href="notice.html">알림마당</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="notice.html">공지사항</a></li>');
		incHD.push('<li><a href="download.html">자료실</a></li>');
		incHD.push('<li><a href="faq.html">FAQ</a></li>');
		incHD.push('<li><a href="qna.html">Q&A(1:1)</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href="recruit.html">채용정보</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="recruit.html">채용공고</a></li>');
		incHD.push('<li><a href=".html">채용문의</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li class=""><a href="stf_01.html">직원전용</a>');
		incHD.push('<ul class="dep2">');
		incHD.push('<li><a href="stf_01.html">업무공지</a></li>');
		incHD.push('<li><a href="stf_02.html">보고자료</a>');
		incHD.push('<ul>');
		incHD.push('<li><a href="stf_02.html"><i>-</i> 근태자료</a></li>');
		incHD.push('<li><a href="stf_03.html"><i>-</i> 교육자료</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('<li><a href="stf_04.html">노조게시판<br />(노조회원 전용)</a></li>');
		incHD.push('<li><a href=".html">회원정보 수정</a></li>');
		incHD.push('<li><a href=".html">회원탈퇴</a></li>');
		incHD.push('</ul>');
		incHD.push('</li>');
		incHD.push('</ul>');
		incHD.push('</div>');
		incHD.push('<ul class="util">');
		incHD.push('<li><a href="join.html">회원가입</a></li>');
		incHD.push('<li class="login"><a href="login.html">로그인</a></li>');
		incHD.push('<li><a href="id_srh.html">아이디·비번찾기</a></li>');
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
		incFR.push('<li><a href="location.html">오시는길</a></li>');
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




