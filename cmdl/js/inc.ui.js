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
		incHD.push('<button type="button" class="btn_menu"><img src="images/btn_menu.png" alt="메뉴"></button>');
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
		incFR.push('<span>평일 09:00~18:00 (토,일 및 공휴일 휴무)</span>');
		incFR.push('</dd>');
		incFR.push('</dl>');
		incFR.push('<dl>');
		incFR.push('<dt>K-DAX 라운지</dt>');
		incFR.push('<dd>');
		incFR.push('<p><img src="images/ico_cs01.png" alt=""> 운영시간 : 평일 09:00~18:00</p>');
		incFR.push('<p><img src="images/ico_cs02.png" alt=""> 서울특별시 강남구 논현동 학동로 20길 28 2층</p>');
		incFR.push('<p><img src="images/ico_cs03.png" alt=""> 대표번호 : 02-2088-8656</p>');
		incFR.push('</dd>');
		incFR.push('</dl>');
		incFR.push('</div>');
		incFR.push('<div class="sns_box">');
		incFR.push('<a href="" class="sns01"></a>');
		incFR.push('<a href="" class="sns02"></a>');
		incFR.push('<a href="" class="sns03"></a>');
		incFR.push('<a href="" class="sns04"></a>');
		incFR.push('<a href="" class="sns05"></a>');
		incFR.push('<a href="" class="sns06"></a>');
		incFR.push('<a href="" class="sns07"></a>');
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
		incFR.push('<a href="">거래소 가이드 다운로드</a>');
		incFR.push('<a href="">제휴문의</a>');
		incFR.push('<a href="">상장문의</a>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('<footer>');
		incFR.push('<div class="copy_wrap">');
		incFR.push('<p class="logo"><img src="images/fLogo.png" alt="KDAX"></p>');
		incFR.push('<div class="futil">');
		incFR.push('<span><a href="javascript:;" data-layer="terms-foot" onclick="layers(this);">개인정보 처리방침</a></span>');
		incFR.push('<span><a href="javascript:;">서비스 이용약관</a></span><br />');
		incFR.push('<span><a href="javascript:;">API이용약관</a></span>');
		incFR.push('<span><a href="javascript:;">법적 고지</a></span>');
		incFR.push('</div>');
		incFR.push('<div class="addr">');
		incFR.push('<span>사업자 등록번호 787-86-01212</span><br class="mo" />');
		incFR.push('<span class="pc">서울특별시 강남구 학동로 20길 28(2,3층)</span><br class="pc" />');
		incFR.push('<span class="mo">업무시간 09:00~18:00</span><br class="mo" />');
		incFR.push('<span>고객센터 1544-4343</span>');
		incFR.push('<span>e-Mail  cs@ss-neo.com</span>');
		incFR.push('<span>매매주문 문의 02-2088-8656</span>');
		incFR.push('</div>');
		incFR.push('<p class="copy">COPYRIGHTⓒ 2018 SS-NEO.ALL RIGHT RESERVED.</p>');
		incFR.push('</div>');
		incFR.push('</footer>');
		incFR.push('<aside>');
		incFR.push('<p><a href="javascript:;" data-layer="questionForm" onclick="layers(this);">1:1문의</a></p>');
		incFR.push('<p><a href="javascript:;" data-layer="ingForm" onclick="layers(this);">진행중인<br /> 거래</a></p>');
		incFR.push('</aside>');
		incFR.push('<div class="layer-wrap">');
		incFR.push('<div class="layer-conts fixForm_style questionForm">');
		incFR.push('<h2>문의사항을 작성해 주세요.</h2>');
		incFR.push('<div class="tbl_col">');
		incFR.push('<dl>');
		incFR.push('<dt>이름</dt>');
		incFR.push('<dd><input type="text" name="" id="" placeholder="이름을 입력해 주세요."></dd>');
		incFR.push('</dl>');
		incFR.push('<dl>');
		incFR.push('<dt>이메일</dt>');
		incFR.push('<dd><input type="text" name="" id="" placeholder="이메일을 입력해 주세요."></dd>');
		incFR.push('</dl>');
		incFR.push('<dl>');
		incFR.push('<dt>문의내용</dt>');
		incFR.push('<dd><textarea name="" id="" cols="30" rows="10" placeholder="10글자 이상 작성해 주세요."></textarea>');
		incFR.push('<p>문의해주시면 이메일로 답변해드립니다.</p>');
		incFR.push('</dd>');
		incFR.push('</dl>');
		incFR.push('</div>');
		incFR.push('<div class="btn-col-1">');
		incFR.push('<button type="button"class="positive">문의 보내기</button>');
		incFR.push('</div>');
		incFR.push('<a href="javascript:;" onclick="layersClose(this);" class="close"><img src="images/sub/btn_popClose.png" alt="닫기"></a>');
		incFR.push('</div>');
		incFR.push('</div>');
		incFR.push('<div class="layer-wrap">');
		incFR.push('<div class="layer-conts fixForm_style ingForm">');
		incFR.push('<h2>진행 중인 거래<span class="date">2019-10-11</span></h2>');
		incFR.push('<div class="transact_list"><div class="innr">');
		incFR.push('<ul>');
		incFR.push('<li>');
		incFR.push('<strong class="text-blue">매도</strong>');
		incFR.push('<p>');
		incFR.push('<span>09:36:45</span>');
		incFR.push('<span>***zxc</span>');
		incFR.push('</p>');
		incFR.push('<em class="text-blue">+ 100 ASTA</em>');
		incFR.push('<a href="">상세</a>');
		incFR.push('</li>');
		incFR.push('<li>');
		incFR.push('<strong class="text-red">매수</strong>');
		incFR.push('<p>');
		incFR.push('<span>09:36:45</span>');
		incFR.push('<span>***wehxcdswer</span>');
		incFR.push('</p>');
		incFR.push('<em class="text-red">- 100,000,000 ASTA</em>');
		incFR.push('<a href="">상세</a>');
		incFR.push('</li>');
		incFR.push('</ul>');
		incFR.push('</div></div>');
		incFR.push('<a href="javascript:;" onclick="layersClose(this);" class="close"><img src="images/sub/btn_popClose.png" alt="닫기"></a>');
		incFR.push('</div>');
		incFR.push('</div>');
		
		$("main").after(incFR.join(''));
	},
	termsLayer : function(){
		var incTL = [];
		incTL.push('<div class="layer-wrap">');
		incTL.push('<div class="layer-conts terms-pop terms-foot">');
		incTL.push('<div class="head-terms">');
		incTL.push('<strong>이용약관</strong>');
		incTL.push('</div>');
		incTL.push('<div class="terms-text">');
		incTL.push('<p>개인정보&nbsp;처리방침<br>㈜아이엔케이(이하&nbsp;"회사"라&nbsp;함)은&nbsp;고객의&nbsp;개인정보를&nbsp;중요시하며,&nbsp;‘정보통신망&nbsp;이용촉진&nbsp;및&nbsp;정보보호&nbsp;등에&nbsp;관한&nbsp;법률’,&nbsp;‘전자상거래&nbsp;등에서의&nbsp;소비자보호에&nbsp;관한&nbsp;법률’,&nbsp;‘통신비밀보호법’,&nbsp;‘전기통신사업법’,&nbsp;‘개인정보보호법’&nbsp;등에&nbsp;관한&nbsp;법률&nbsp;및&nbsp;행정기관의&nbsp;행정지침을&nbsp;준수하고,&nbsp;관련&nbsp;법령에&nbsp;의거한&nbsp;개인정보처리방침을&nbsp;정하여&nbsp;이용자&nbsp;권익을&nbsp;보호하고&nbsp;있습니다.&nbsp;<br>“회사”의&nbsp;개인정보처리방침은&nbsp;개인정보보호와&nbsp;관련한&nbsp;법률&nbsp;또는&nbsp;지침의&nbsp;변경,&nbsp;당사&nbsp;정책의&nbsp;변화에&nbsp;따라&nbsp;변경될&nbsp;수&nbsp;있으므로,&nbsp;고객께서는&nbsp;당사&nbsp;사이트&nbsp;방문&nbsp;시&nbsp;수시로&nbsp;확인하여&nbsp;주시기&nbsp;바랍니다.&nbsp;"회사"의&nbsp;개인정보처리방침은&nbsp;다음과&nbsp;같은&nbsp;내용을&nbsp;담고&nbsp;있습니다.&nbsp;<br><br>1.&nbsp;수집하는&nbsp;개인정보의&nbsp;항목&nbsp;및&nbsp;수집&nbsp;방법<br><br>2.&nbsp;개인정보의&nbsp;수집&nbsp;및&nbsp;이용목적<br><br>3.&nbsp;개인정보의&nbsp;제공<br><br>4.&nbsp;개인정보의&nbsp;처리&nbsp;위탁<br><br>5.&nbsp;개인정보의&nbsp;보유&nbsp;및&nbsp;이용기간<br><br>6.&nbsp;개인정보의&nbsp;파기&nbsp;절차&nbsp;및&nbsp;방법<br><br>7.&nbsp;이용자의&nbsp;권리와&nbsp;그&nbsp;행사방법<br><br>8.&nbsp;개인정보의&nbsp;안전성&nbsp;확보&nbsp;조치<br><br>9.&nbsp;개인정보&nbsp;자동수집장치의&nbsp;설치•운영&nbsp;및&nbsp;그&nbsp;거부에&nbsp;대한&nbsp;사항<br><br>10.&nbsp;개인정보보호&nbsp;책임자&nbsp;및&nbsp;담당자<br><br>11.&nbsp;고지의무<br><br>1.&nbsp;수집하는&nbsp;개인정보의&nbsp;항목&nbsp;및&nbsp;수집&nbsp;방법<br>가.&nbsp;수집하는&nbsp;개인정보의&nbsp;항목&nbsp;<br>①&nbsp;“회사”는&nbsp;이용자의&nbsp;기본적&nbsp;인권&nbsp;침해의&nbsp;우려가&nbsp;있는&nbsp;민감한&nbsp;개인정보(인종&nbsp;및&nbsp;민족,&nbsp;사상&nbsp;및&nbsp;신조,&nbsp;출신지&nbsp;및&nbsp;본적지,&nbsp;정치적&nbsp;성향&nbsp;및&nbsp;범죄기록,&nbsp;건강상태&nbsp;및&nbsp;성생활&nbsp;등)는&nbsp;수집하지&nbsp;않습니다.&nbsp;<br>②&nbsp;“회사”는&nbsp;다음과&nbsp;같이&nbsp;필수적인&nbsp;개인정보만을&nbsp;수집하여&nbsp;이용합니다.&nbsp;<br>1)&nbsp;본인확인&nbsp;및&nbsp;회원가입&nbsp;의사&nbsp;확인<br>-&nbsp;일반회원:&nbsp;성명,&nbsp;아이디,&nbsp;비밀번호,&nbsp;휴대전화번호,&nbsp;이메일&nbsp;주소,&nbsp;보안비밀번호.<br><br>2)&nbsp;본인&nbsp;확인을&nbsp;위한&nbsp;인증.<br>-&nbsp;성명,&nbsp;생년월일,&nbsp;계좌번호,&nbsp;휴대전화번호,&nbsp;이메일주소,&nbsp;신분증을&nbsp;들고&nbsp;있는&nbsp;본인의&nbsp;사진(생년&nbsp;&nbsp;&nbsp;&nbsp;월일을&nbsp;제외한&nbsp;나머지정보&nbsp;마스킹)보안비밀번호<br>3)&nbsp;레벨&nbsp;상승을&nbsp;위한&nbsp;본인인증<br>-&nbsp;휴대전화번호,&nbsp;이메일&nbsp;주소,&nbsp;연계정보(CI),&nbsp;중복가입확인정보(DI),&nbsp;신분증을&nbsp;들고&nbsp;있는&nbsp;본인&nbsp;&nbsp;&nbsp;&nbsp;의&nbsp;사진(생년월일을&nbsp;제외한&nbsp;나머지정보&nbsp;마스킹),&nbsp;보안비밀번호<br>4)&nbsp;보안비밀번호&nbsp;초기화<br>-&nbsp;이름,&nbsp;이메일&nbsp;주소,&nbsp;휴대전화번호,&nbsp;신분증을&nbsp;들고&nbsp;있는&nbsp;본인의&nbsp;사진(생년월일을&nbsp;제외한&nbsp;나머&nbsp;&nbsp;&nbsp;&nbsp;지정보&nbsp;마스킹),&nbsp;보안비밀번호<br>5)&nbsp;불량회원의&nbsp;부정&nbsp;이용&nbsp;방지와&nbsp;비인가&nbsp;사용방지<br>-&nbsp;이용자&nbsp;접속IP주소,&nbsp;방문일시<br>6)&nbsp;간편실명&nbsp;확인<br>-&nbsp;이름,&nbsp;생년월일,&nbsp;성별<br>③&nbsp;‘서비스’&nbsp;이용&nbsp;또는&nbsp;처리&nbsp;과정에서&nbsp;다음과&nbsp;같은&nbsp;정보들이&nbsp;생성되어&nbsp;수집될&nbsp;수&nbsp;있습니다.<br>-&nbsp;서비스&nbsp;이용기록,&nbsp;결제기록,&nbsp;이용정지&nbsp;및&nbsp;해지&nbsp;기록,&nbsp;접속로그,&nbsp;쿠키,&nbsp;이용자&nbsp;접속IP주소,&nbsp;불량&nbsp;혹은&nbsp;비정상&nbsp;이용기록<br><br>나.&nbsp;개인정보&nbsp;수집방법<br>“회사”는&nbsp;다음과&nbsp;같은&nbsp;방법으로&nbsp;개인정보를&nbsp;수집합니다.<br>-&nbsp;홈페이지,&nbsp;휴대폰&nbsp;어플리케이션,&nbsp;휴대폰&nbsp;웹페이지,&nbsp;팩스,&nbsp;전화,&nbsp;상담&nbsp;게시판,&nbsp;이메일,&nbsp;이벤트&nbsp;응모<br>-&nbsp;생성정보&nbsp;수집&nbsp;툴을&nbsp;통한&nbsp;수집<br><br>2.&nbsp;개인정보의&nbsp;수집&nbsp;및&nbsp;이용목적<br>“회사”는&nbsp;고객의&nbsp;개인정보를&nbsp;수집&nbsp;이용하는&nbsp;목적은&nbsp;다음과&nbsp;같습니다.<br>가.&nbsp;회원관리<br>-&nbsp;회원제&nbsp;서비스&nbsp;이용에&nbsp;따른&nbsp;본인확인,&nbsp;개인식별<br>-&nbsp;불량회원의&nbsp;부정이용&nbsp;방지와&nbsp;비인가&nbsp;사용&nbsp;방지<br>-&nbsp;가입의사&nbsp;확인,&nbsp;가입&nbsp;및&nbsp;가입횟수&nbsp;제한<br>-&nbsp;미성년자의&nbsp;확인<br>-&nbsp;고객상담,&nbsp;고객불만&nbsp;접수&nbsp;및&nbsp;처리,&nbsp;분쟁조정을&nbsp;위한&nbsp;기록보존<br>-&nbsp;공지사항&nbsp;전달<br>나.&nbsp;서비스&nbsp;제공에&nbsp;관한&nbsp;계약의&nbsp;이행&nbsp;및&nbsp;요금정산<br>-&nbsp;서비스&nbsp;제공,&nbsp;콘텐츠&nbsp;제공,&nbsp;맞춤&nbsp;서비스&nbsp;제공<br>-&nbsp;요금&nbsp;결제&nbsp;및&nbsp;정산<br>-&nbsp;이벤트/경품당첨&nbsp;결과안내&nbsp;및&nbsp;상품배송<br>다.&nbsp;마케팅&nbsp;및&nbsp;광고에&nbsp;활용<br>-&nbsp;고객에게&nbsp;최적화된&nbsp;서비스&nbsp;제공<br>-&nbsp;신규&nbsp;서비스(제품)&nbsp;개발&nbsp;및&nbsp;특화<br>-&nbsp;인구통계학적&nbsp;특성에&nbsp;따른&nbsp;서비스&nbsp;제공&nbsp;및&nbsp;광고&nbsp;게재<br>-&nbsp;웹페이지&nbsp;접속&nbsp;빈도&nbsp;파악<br>-&nbsp;서비스&nbsp;이용에&nbsp;대한&nbsp;통계<br>-&nbsp;정기&nbsp;간행물&nbsp;발송,&nbsp;신규&nbsp;상품&nbsp;또는&nbsp;서비스&nbsp;안내<br>-&nbsp;고객&nbsp;관심사에&nbsp;부합하는&nbsp;웹서비스&nbsp;및&nbsp;이벤트&nbsp;기획<br>-&nbsp;경품행사,&nbsp;이벤트&nbsp;등&nbsp;광고성&nbsp;정보&nbsp;전달&nbsp;또는&nbsp;회원&nbsp;참여공간&nbsp;운영<br>-&nbsp;고객설문조사<br><br>3.&nbsp;개인정보의&nbsp;제공<br>“회사”는&nbsp;고객의&nbsp;개인정보를,&nbsp;수집&nbsp;시&nbsp;고객에게&nbsp;고지한&nbsp;범위&nbsp;또는&nbsp;서비스이용약관에&nbsp;명시한&nbsp;범위를&nbsp;넘어&nbsp;이용하거나&nbsp;제3자에게&nbsp;제공하지&nbsp;않습니다.&nbsp;다만,&nbsp;고객의&nbsp;동의가&nbsp;있거나&nbsp;다음에&nbsp;해당하는&nbsp;경우에는&nbsp;예외로&nbsp;합니다.<br>가.&nbsp;제휴관계:&nbsp;보다&nbsp;나은&nbsp;서비스&nbsp;제공을&nbsp;위하여&nbsp;고객의&nbsp;개인정보를&nbsp;제휴사에게&nbsp;제공하거나&nbsp;또는&nbsp;제휴사와&nbsp;공유할&nbsp;수&nbsp;있습니다.&nbsp;개인정보를&nbsp;제공하거나&nbsp;공유할&nbsp;경우에는&nbsp;사전에&nbsp;고객께&nbsp;제휴사가&nbsp;누구인지,&nbsp;제공&nbsp;또는&nbsp;공유되는&nbsp;개인정보항목이&nbsp;무엇인지,&nbsp;왜&nbsp;그러한&nbsp;개인정보가&nbsp;제공되거나&nbsp;공유되어야&nbsp;하는지,&nbsp;그리고&nbsp;언제까지&nbsp;어떻게&nbsp;보호&nbsp;•&nbsp;관리되는지에&nbsp;대해&nbsp;개별적으로&nbsp;서면&nbsp;또는&nbsp;전자우편&nbsp;등을&nbsp;통해&nbsp;고지하여&nbsp;동의를&nbsp;구하는&nbsp;절차를&nbsp;거치게&nbsp;되며,&nbsp;고객께서&nbsp;동의하지&nbsp;않는&nbsp;경우에는&nbsp;제휴사에게&nbsp;제공하거나&nbsp;제휴사와&nbsp;공유하지&nbsp;않습니다.&nbsp;제휴관계에&nbsp;변화가&nbsp;있거나&nbsp;제휴관계가&nbsp;종결될&nbsp;때도&nbsp;같은&nbsp;절차에&nbsp;의하여&nbsp;고지하거나&nbsp;동의를&nbsp;구합니다.<br>나.&nbsp;매각•인수합병&nbsp;등:&nbsp;영업의&nbsp;전부&nbsp;또는&nbsp;일부를&nbsp;양도하거나,&nbsp;합병•상속&nbsp;등으로&nbsp;서비스제공자의&nbsp;권리•의무를&nbsp;이전&nbsp;승계하는&nbsp;경우&nbsp;개인정보보호&nbsp;관련&nbsp;고객의&nbsp;권리를&nbsp;보장하기&nbsp;위하여&nbsp;반드시&nbsp;그&nbsp;사실을&nbsp;고객에게&nbsp;통지합니다.<br>다.&nbsp;서비스의&nbsp;제공에&nbsp;관한&nbsp;계약의&nbsp;이행을&nbsp;위하여&nbsp;필요한&nbsp;개인정보로서&nbsp;경제적•기술적인&nbsp;사유로&nbsp;통상의&nbsp;동의를&nbsp;받는&nbsp;것이&nbsp;현저히&nbsp;곤란한&nbsp;경우<br>라.&nbsp;서비스&nbsp;제공에&nbsp;따른&nbsp;요금정산을&nbsp;위하여&nbsp;필요한&nbsp;경우<br>마.&nbsp;통신비밀보호법,&nbsp;국세기본법,&nbsp;정보통신망&nbsp;이용촉진&nbsp;및&nbsp;정보보호&nbsp;등에&nbsp;관한&nbsp;법률,&nbsp;금융실명거래&nbsp;및&nbsp;비밀보장에&nbsp;관한&nbsp;법률,&nbsp;신용정보의&nbsp;이용&nbsp;및&nbsp;보호에&nbsp;관한&nbsp;법률,&nbsp;전기통신기본법,&nbsp;전기통신사업법,&nbsp;지방세법,&nbsp;소비자기본법,&nbsp;한국은행법,&nbsp;형사소송법&nbsp;등&nbsp;다른&nbsp;법률에&nbsp;특별한&nbsp;규정이&nbsp;있는&nbsp;경우.&nbsp;단,&nbsp;법률에&nbsp;특별한&nbsp;규정이&nbsp;있는&nbsp;경우’로&nbsp;행정목적이나&nbsp;수사목적으로&nbsp;행정관청&nbsp;또는&nbsp;수사기관이&nbsp;요구해&nbsp;온&nbsp;경우라도&nbsp;무조건&nbsp;고객의&nbsp;개인정보를&nbsp;제공하지&nbsp;않으며,&nbsp;법률에&nbsp;규정된&nbsp;바에&nbsp;따라&nbsp;영장&nbsp;또는&nbsp;기관장의&nbsp;직인이&nbsp;날인된&nbsp;서면에&nbsp;의한&nbsp;경우&nbsp;등&nbsp;적법한&nbsp;절차에&nbsp;따라&nbsp;제공합니다.<br>바.&nbsp;자사&nbsp;서비스를&nbsp;이용하여&nbsp;타인에게&nbsp;정신적,&nbsp;물리적&nbsp;피해를&nbsp;줌으로써&nbsp;그에&nbsp;대한&nbsp;법적인&nbsp;조치를&nbsp;취하기&nbsp;위하여&nbsp;개인정보를&nbsp;공개해야&nbsp;한다고&nbsp;판단되는&nbsp;충분한&nbsp;근거가&nbsp;있는&nbsp;경우.<br><br>4.&nbsp;개인정보의&nbsp;처리&nbsp;위탁<br>“회사”는&nbsp;원활하고&nbsp;향상된&nbsp;서비스를&nbsp;위하여&nbsp;개인정보를&nbsp;제한된&nbsp;범위에서&nbsp;타&nbsp;업체에게&nbsp;위탁하여&nbsp;관리할&nbsp;수&nbsp;있습니다.&nbsp;현재&nbsp;회원과의&nbsp;서비스&nbsp;계약&nbsp;이행을&nbsp;위해&nbsp;당사가&nbsp;개인정보처리를&nbsp;위탁하는&nbsp;업체는&nbsp;아래와&nbsp;같으며,&nbsp;관계법령에&nbsp;따라&nbsp;위탁&nbsp;계약시&nbsp;개인정보가&nbsp;안전하게&nbsp;관리될&nbsp;수&nbsp;있도록&nbsp;필요한&nbsp;사항을&nbsp;규정하고&nbsp;있습니다.<br></p><table><colgroup><col width="50%"><col width="50%"></colgroup><thead><tr><th>&lt;수탁사&gt;</th><th>위탁목적</th></tr></thead><tbody><tr><td>NICE신용평가정보(주)</td><td>본인인증</td></tr><tr><td>㈜케이엠케이</td><td>회원가입&nbsp;이벤트&nbsp;SS Asset지급</td></tr><tr><td>알리는&nbsp;사람들</td><td>회원&nbsp;SMS&nbsp;문자공시</td></tr><tr><td>LG&nbsp;U＋</td><td>회원&nbsp;콜센터&nbsp;상담&nbsp;이력관리</td></tr></tbody></table><p>5.&nbsp;개인정보의&nbsp;보유&nbsp;및&nbsp;이용기간<br>가.&nbsp;고객의&nbsp;개인정보는&nbsp;“회사”가&nbsp;고객에게&nbsp;서비스를&nbsp;제공하는&nbsp;기간&nbsp;동안에&nbsp;보유&nbsp;및&nbsp;이용됩니다.&nbsp;회원&nbsp;탈퇴&nbsp;시&nbsp;수집된&nbsp;개인의&nbsp;정보가&nbsp;열람&nbsp;또는&nbsp;이용될&nbsp;수&nbsp;없도록&nbsp;파기&nbsp;처리됩니다.&nbsp;다만,&nbsp;관계법령의&nbsp;규정에&nbsp;의하여&nbsp;보존할&nbsp;필요성이&nbsp;있는&nbsp;경우에는&nbsp;다음&nbsp;관계법령에&nbsp;따라&nbsp;보존합니다.<br>-&nbsp;계약&nbsp;또는&nbsp;청약철회&nbsp;등에&nbsp;관한&nbsp;기록:&nbsp;5년<br>-&nbsp;대금결제&nbsp;및&nbsp;재화&nbsp;등의&nbsp;공급에&nbsp;관한&nbsp;기록:&nbsp;5년<br>-&nbsp;소비자의&nbsp;불만&nbsp;또는&nbsp;분쟁처리에&nbsp;관한&nbsp;기록:&nbsp;3년<br>-&nbsp;통신비밀보호법로그인기록:&nbsp;3개월<br>나.&nbsp;고객의&nbsp;동의를&nbsp;받아&nbsp;보유하고&nbsp;있는&nbsp;거래정보에&nbsp;대해&nbsp;고객께서&nbsp;열람을&nbsp;요구하는&nbsp;경우에는&nbsp;지체없이&nbsp;그&nbsp;열람•확인할&nbsp;수&nbsp;있도록&nbsp;조치합니다.<br>다.&nbsp;회원가입을&nbsp;탈퇴한&nbsp;경우에는&nbsp;회원&nbsp;재가입,&nbsp;임의해지&nbsp;등을&nbsp;반복적으로&nbsp;행함으로써&nbsp;“회사”가&nbsp;제공하는&nbsp;할인쿠폰,&nbsp;이벤트&nbsp;혜택&nbsp;등의&nbsp;경제상의&nbsp;이익을&nbsp;불•편법적으로&nbsp;수취하거나&nbsp;이&nbsp;과정에서&nbsp;명의도용&nbsp;등의&nbsp;행위&nbsp;우려가&nbsp;있으므로&nbsp;이러한&nbsp;불•편법&nbsp;행위&nbsp;차단&nbsp;등의&nbsp;목적으로&nbsp;회원&nbsp;탈퇴&nbsp;후&nbsp;1개월&nbsp;동안&nbsp;회원의&nbsp;성명,&nbsp;생년월일,&nbsp;아이디,&nbsp;비밀번호&nbsp;식별정보를&nbsp;보관합니다.<br><br>6.&nbsp;개인정보의&nbsp;파기&nbsp;절차&nbsp;및&nbsp;방법<br>“회사”는&nbsp;수집한&nbsp;개인정보의&nbsp;이용목적이&nbsp;달성된&nbsp;후에는&nbsp;보관기간&nbsp;및&nbsp;이용기간에&nbsp;따라&nbsp;해당&nbsp;정보를&nbsp;지체없이&nbsp;파기&nbsp;또는&nbsp;별도&nbsp;분리&nbsp;보관&nbsp;합니다.&nbsp;그&nbsp;절차,&nbsp;시점,&nbsp;방법은&nbsp;다음과&nbsp;같습니다.<br>가.&nbsp;파기절차&nbsp;및&nbsp;시점<br>고객이&nbsp;서비스&nbsp;가입&nbsp;등을&nbsp;위해&nbsp;기재한&nbsp;개인정보는&nbsp;서비스&nbsp;해지&nbsp;등&nbsp;이용목적이&nbsp;달성된&nbsp;후&nbsp;내부&nbsp;방침&nbsp;및&nbsp;기타&nbsp;관련&nbsp;법령에&nbsp;의한&nbsp;정보보호&nbsp;사유(위&nbsp;개인정보의&nbsp;보유&nbsp;및&nbsp;이용기간&nbsp;참조)에&nbsp;따른&nbsp;보유기간이&nbsp;경과한&nbsp;후에&nbsp;즉시&nbsp;파기합니다.&nbsp;일반적으로&nbsp;잔존하는&nbsp;채권-채무&nbsp;관계가&nbsp;없는&nbsp;경우&nbsp;“회사”&nbsp;회원가입시&nbsp;수집되어&nbsp;전자적&nbsp;파일&nbsp;형태로&nbsp;관리하는&nbsp;개인정보는&nbsp;회원&nbsp;상거래관계&nbsp;종료후&nbsp;&nbsp;즉시(3개월이내)&nbsp;파기하여야&nbsp;합니다.&nbsp;다만,&nbsp;다음과&nbsp;같은&nbsp;경우에는&nbsp;그러하지&nbsp;아니합니다.<br>법령상&nbsp;의무이행&nbsp;등을&nbsp;위해&nbsp;보관이&nbsp;불가피한&nbsp;경우에는&nbsp;상거래관계가&nbsp;종료된&nbsp;날로부터&nbsp;5년이&nbsp;경과하기&nbsp;전에&nbsp;현재&nbsp;거래중인&nbsp;고객의&nbsp;정보와&nbsp;분리하여&nbsp;보관.<br>법령에서&nbsp;파기(또는&nbsp;삭제)&nbsp;시점을&nbsp;명확하게&nbsp;명시한&nbsp;경우에는&nbsp;해당&nbsp;시점에&nbsp;즉시&nbsp;파기(또는&nbsp;삭제)하여야&nbsp;함.<br>나.&nbsp;파기방법<br>종이에&nbsp;출력된&nbsp;개인정보는&nbsp;분쇄기로&nbsp;분쇄&nbsp;또는&nbsp;소각하거나&nbsp;화학약품&nbsp;처리를&nbsp;하여&nbsp;용해하여&nbsp;파기하고,&nbsp;전자적&nbsp;파일&nbsp;형태로&nbsp;저장된&nbsp;개인정보는&nbsp;기록을&nbsp;재생할&nbsp;수&nbsp;없는&nbsp;기술적&nbsp;방법을&nbsp;사용하여&nbsp;삭제합니다.<br>다.&nbsp;분리&nbsp;보관&nbsp;시점&nbsp;및&nbsp;방법<br>‘개인정보&nbsp;유효기간제’&nbsp;에&nbsp;따라&nbsp;1년간&nbsp;서비스를&nbsp;이용하지&nbsp;않은&nbsp;경우,&nbsp;해당&nbsp;이용자의&nbsp;계정은&nbsp;휴면상태로&nbsp;전환됩니다.&nbsp;휴면상태&nbsp;회원의&nbsp;개인정보는&nbsp;별도&nbsp;분리하여&nbsp;보관되며,&nbsp;접근&nbsp;제한&nbsp;및&nbsp;보안적용하여&nbsp;관리&nbsp;됩니다.<br><br>7.&nbsp;이용자의&nbsp;권리와&nbsp;그&nbsp;행사방법<br>가.&nbsp;이용자는&nbsp;언제든지&nbsp;등록되어&nbsp;있는&nbsp;자신의&nbsp;개인정보에&nbsp;대해&nbsp;다음의&nbsp;권리를&nbsp;행사할&nbsp;수&nbsp;있습니다.<br><br>-&nbsp;개인정보&nbsp;열람요구<br><br>-&nbsp;개인정보&nbsp;오류&nbsp;등이&nbsp;있을&nbsp;경우&nbsp;정정요구<br><br>-&nbsp;개인정보&nbsp;삭제&nbsp;요구<br><br>-&nbsp;개인정보&nbsp;처리정지&nbsp;요구<br><br>나.&nbsp;이용자&nbsp;및&nbsp;법정&nbsp;대리인은&nbsp;“회사”&nbsp;홈페이지(www.ss-neo.com)에&nbsp;로그인&nbsp;후&nbsp;‘회원정보변경’에서&nbsp;개인정보를&nbsp;열람&nbsp;또는&nbsp;정정하시거나,&nbsp;‘회사’의&nbsp;개인정보&nbsp;보호책임자에게&nbsp;전자우편&nbsp;또는&nbsp;서면&nbsp;요청을&nbsp;통해&nbsp;정정이&nbsp;가능합니다.&nbsp;단,&nbsp;회원&nbsp;아이디(ID),&nbsp;성명은&nbsp;정정이&nbsp;불가능합니다.<br>다.&nbsp;이용자&nbsp;및&nbsp;법정&nbsp;대리인의&nbsp;‘개인정보&nbsp;수집&nbsp;및&nbsp;이용에&nbsp;대한&nbsp;동의’&nbsp;철회(해지)는&nbsp;이메일,&nbsp;전화,&nbsp;팩스를&nbsp;통해&nbsp;가능하며,&nbsp;이&nbsp;경우&nbsp;반드시&nbsp;회원&nbsp;아이디(ID)와&nbsp;이메일&nbsp;주소를&nbsp;밝히셔야&nbsp;합니다.<br>라.&nbsp;이용자&nbsp;및&nbsp;법정&nbsp;대리인이&nbsp;개인정보의&nbsp;오류에&nbsp;대한&nbsp;정정&nbsp;및&nbsp;삭제를&nbsp;요청한&nbsp;경우에는&nbsp;처리&nbsp;완료시까지&nbsp;당해&nbsp;개인정보를&nbsp;이용&nbsp;또는&nbsp;제공하지&nbsp;않습니다.&nbsp;또한&nbsp;“회사”는&nbsp;이용자&nbsp;혹은&nbsp;법정&nbsp;대리인의&nbsp;요청에&nbsp;의해&nbsp;해지&nbsp;또는&nbsp;삭제된&nbsp;개인정보는&nbsp;"개인정보의&nbsp;보유&nbsp;및&nbsp;이용기간"에&nbsp;명시된&nbsp;바에&nbsp;따라&nbsp;처리하고&nbsp;그&nbsp;외의&nbsp;용도로&nbsp;열람&nbsp;또는&nbsp;이용할&nbsp;수&nbsp;없도록&nbsp;처리하고&nbsp;있습니다.<br><br>8.&nbsp;개인정보의&nbsp;안전성&nbsp;확보&nbsp;조치<br>“회사”는&nbsp;개인정보보호법&nbsp;안전성&nbsp;확보조치에&nbsp;필요한&nbsp;다음의&nbsp;사항을&nbsp;시행하고&nbsp;있습니다.<br>가.&nbsp;관리적&nbsp;보호대책<br>①&nbsp;내부관리계획의&nbsp;수립&nbsp;시행<br>-&nbsp;개인정보보호책임자의&nbsp;지정에&nbsp;관한&nbsp;사항<br>-&nbsp;개인정보보호책임자&nbsp;및&nbsp;개인정보취급자의&nbsp;역할&nbsp;및&nbsp;책임에&nbsp;관한&nbsp;사항<br>-&nbsp;개인정보의&nbsp;안전성&nbsp;확보에&nbsp;필요한&nbsp;조치에&nbsp;관한&nbsp;사항<br>-&nbsp;개인정보취급자&nbsp;및&nbsp;위탁업체에&nbsp;대한&nbsp;교육에&nbsp;관한&nbsp;사항<br>-&nbsp;그&nbsp;밖에&nbsp;개인정보&nbsp;보호를&nbsp;위하여&nbsp;필요한&nbsp;사항<br>②&nbsp;정기적인&nbsp;자체&nbsp;감사&nbsp;실시<br>-&nbsp;개인정보&nbsp;보호책임자와&nbsp;감사자의&nbsp;직무분리&nbsp;사항<br>-&nbsp;개인정보&nbsp;감사자의&nbsp;역할&nbsp;및&nbsp;책임에&nbsp;관한&nbsp;사항<br>-&nbsp;개인정보&nbsp;취급&nbsp;관련&nbsp;안전성&nbsp;확보를&nbsp;위한&nbsp;정기적&nbsp;자체&nbsp;감사<br><br>나.&nbsp;기술적&nbsp;보호대책<br>①&nbsp;개인정보취급자의&nbsp;고객정보의&nbsp;유출을&nbsp;방지하기&nbsp;위하여,&nbsp;개인정보&nbsp;유출방지&nbsp;시스템을&nbsp;운영하고&nbsp;있으며,&nbsp;단말기(PC)&nbsp;및&nbsp;네트워크&nbsp;상의&nbsp;전송되는&nbsp;개인정보는&nbsp;안전한&nbsp;암호&nbsp;알고리즘을&nbsp;적용하고&nbsp;있습니다.<br>②&nbsp;개인정보처리시스템에&nbsp;대한&nbsp;접근권한을&nbsp;업무&nbsp;수행에&nbsp;필요한&nbsp;최소한의&nbsp;범위로&nbsp;하여,&nbsp;업무&nbsp;담당자&nbsp;별로&nbsp;한&nbsp;개의&nbsp;사용자&nbsp;계정을&nbsp;차등&nbsp;부여하고&nbsp;있으며,&nbsp;개인정보취급자가&nbsp;변경되었을&nbsp;경우&nbsp;개인정보시스템의&nbsp;접근권한을&nbsp;변경&nbsp;또는&nbsp;말소하고&nbsp;그&nbsp;기록을&nbsp;최소&nbsp;5년간&nbsp;보관합니다.&nbsp;또한,&nbsp;개인정보취급자의&nbsp;비밀번호&nbsp;작성규칙을&nbsp;수립하여&nbsp;적용하고&nbsp;있습니다.<br>③&nbsp;개인의&nbsp;고유식별정보,&nbsp;비밀번호를&nbsp;정보통신망을&nbsp;통하여&nbsp;송•수신하거나&nbsp;보조저장매체&nbsp;등을&nbsp;통하여&nbsp;전달하는&nbsp;경우에는&nbsp;이를&nbsp;상용&nbsp;암호화&nbsp;소프트웨어를&nbsp;사용하여&nbsp;저장하고&nbsp;있으며,&nbsp;비밀번호는&nbsp;안전한&nbsp;암호알고리즘으로&nbsp;암호화하여&nbsp;저장합니다.<br>④&nbsp;개인정보취급자가&nbsp;개인정보처리시스템에&nbsp;접속한&nbsp;기록을&nbsp;최소&nbsp;6개월&nbsp;이상&nbsp;보관•관리하며,&nbsp;개인정보취급자의&nbsp;접속기록이&nbsp;위•변조&nbsp;및&nbsp;도난,&nbsp;분실되지&nbsp;않도록&nbsp;해당&nbsp;접속기록을&nbsp;안전하게&nbsp;보관하고&nbsp;있습니다.<br>⑤&nbsp;개인정보처리시스템&nbsp;또는&nbsp;업무용&nbsp;컴퓨터에&nbsp;악성&nbsp;프로그램&nbsp;등을&nbsp;방지•치료&nbsp;할&nbsp;수&nbsp;있는&nbsp;백신&nbsp;소프트웨어&nbsp;등의&nbsp;보안&nbsp;프로그램을&nbsp;설치•운영하고&nbsp;있으며,&nbsp;보안&nbsp;프로그램의&nbsp;자동&nbsp;업데이트&nbsp;기능을&nbsp;사용하고,&nbsp;주기적인&nbsp;단말기(PC)&nbsp;검사를&nbsp;실시하고&nbsp;있습니다.<br><br>다.&nbsp;물리적&nbsp;보호대책<br>전산실,&nbsp;자료보관실&nbsp;등&nbsp;개인정보를&nbsp;보관하고&nbsp;있는&nbsp;물리적&nbsp;보관&nbsp;장소에&nbsp;대한&nbsp;출입통제&nbsp;절차를&nbsp;수립&nbsp;운영하고&nbsp;있으며,&nbsp;개인정보가&nbsp;포함된&nbsp;서류,&nbsp;보조저장매체&nbsp;등을&nbsp;잠금&nbsp;장치가&nbsp;있는&nbsp;안전한&nbsp;장소에&nbsp;보관&nbsp;및&nbsp;관리하고&nbsp;있습니다.<br><br>9.&nbsp;개인정보&nbsp;자동수집장치의&nbsp;설치•운영&nbsp;및&nbsp;그&nbsp;거부에&nbsp;대한&nbsp;사항<br>가.&nbsp;“회사”가&nbsp;제공하는&nbsp;인터넷서비스를&nbsp;통하여&nbsp;고객의&nbsp;정보를&nbsp;저장하고&nbsp;수시로&nbsp;찾아내는&nbsp;쿠키(cookie)를&nbsp;설치•운용할&nbsp;경우도&nbsp;있습니다.&nbsp;쿠키란&nbsp;웹&nbsp;서버가&nbsp;웹&nbsp;브라우저에&nbsp;보내어&nbsp;저장했다가&nbsp;서버의&nbsp;부가적인&nbsp;요청이&nbsp;있을&nbsp;때&nbsp;다시&nbsp;서버로&nbsp;보내주는&nbsp;문자열&nbsp;정보를&nbsp;말합니다.&nbsp;고객이&nbsp;“회사”&nbsp;웹사이트에&nbsp;접속을&nbsp;하면&nbsp;고객의&nbsp;브라우저에&nbsp;있는&nbsp;쿠키의&nbsp;내용을&nbsp;읽고,&nbsp;추가정보를&nbsp;찾아&nbsp;접속에&nbsp;따른&nbsp;성명&nbsp;등의&nbsp;추가&nbsp;입력&nbsp;없이&nbsp;서비스를&nbsp;제공할&nbsp;수&nbsp;있습니다.<br>나.&nbsp;”회사”는&nbsp;쿠키(cookie)를&nbsp;통해&nbsp;수집한&nbsp;고객의&nbsp;정보를&nbsp;다음의&nbsp;목적을&nbsp;위해&nbsp;사용될&nbsp;수&nbsp;있습니다.<br>①&nbsp;개인의&nbsp;관심&nbsp;분야에&nbsp;따라&nbsp;차별화된&nbsp;정보를&nbsp;제공<br>②&nbsp;회원과&nbsp;비회원의&nbsp;접속빈도&nbsp;또는&nbsp;머문&nbsp;시간&nbsp;등을&nbsp;분석하여&nbsp;이용자의&nbsp;취향과&nbsp;관심분야를&nbsp;파악하여&nbsp;타겟(target)마케팅에&nbsp;활용<br>③&nbsp;관심&nbsp;있게&nbsp;둘러본&nbsp;내용들에&nbsp;대한&nbsp;자취를&nbsp;추적하여&nbsp;다음&nbsp;번&nbsp;접속&nbsp;때&nbsp;개인맞춤서비스를&nbsp;제공<br>④&nbsp;유료서비스&nbsp;이용&nbsp;시&nbsp;이용기간&nbsp;안내<br>⑤&nbsp;고객들의&nbsp;습관을&nbsp;분석하여&nbsp;서비스&nbsp;개편&nbsp;등의&nbsp;척도로&nbsp;활용<br><br>다.&nbsp;고객은&nbsp;쿠키&nbsp;설치에&nbsp;대한&nbsp;선택권을&nbsp;가지고&nbsp;있습니다.&nbsp;웹&nbsp;브라우저&nbsp;상단의&nbsp;“도구&nbsp;&gt;&nbsp;인터넷옵션&nbsp;&gt;&nbsp;개인정보&nbsp;&gt;&nbsp;고급”에서&nbsp;모든&nbsp;쿠키를&nbsp;다&nbsp;받아들이거나,&nbsp;쿠키가&nbsp;설치될&nbsp;때&nbsp;통지를&nbsp;보내도록&nbsp;하거나,&nbsp;아니면&nbsp;모든&nbsp;쿠키를&nbsp;거부할&nbsp;수&nbsp;있습니다.&nbsp;단,&nbsp;고객이&nbsp;쿠키&nbsp;설치를&nbsp;거부하였을&nbsp;경우&nbsp;서비스&nbsp;이용에&nbsp;불편이&nbsp;있거나,&nbsp;서비스&nbsp;제공에&nbsp;어려움이&nbsp;있을&nbsp;수&nbsp;있습니다.<br>라.&nbsp;쿠키는&nbsp;브라우저의&nbsp;종료&nbsp;시나&nbsp;로그아웃&nbsp;시&nbsp;만료됩니다.<br><br>10.&nbsp;개인정보보호&nbsp;책임자&nbsp;및&nbsp;담당자<br>가.&nbsp;“회사”는&nbsp;고객의&nbsp;개인정보보호를&nbsp;매우&nbsp;소중하게&nbsp;생각하며,&nbsp;고객의&nbsp;개인정보가&nbsp;훼손,&nbsp;침해&nbsp;또는&nbsp;누설되지&nbsp;않도록&nbsp;최선을&nbsp;다하고&nbsp;있습니다.&nbsp;그러나&nbsp;기술적인&nbsp;보완조치를&nbsp;했음에도&nbsp;불구하고,&nbsp;해킹&nbsp;등&nbsp;기본적인&nbsp;네트워크상의&nbsp;위험성에&nbsp;의해&nbsp;발생하는&nbsp;예기치&nbsp;못한&nbsp;사고로&nbsp;인한&nbsp;정보의&nbsp;훼손&nbsp;및&nbsp;방문자가&nbsp;작성한&nbsp;게시물에&nbsp;의한&nbsp;각종&nbsp;분쟁에&nbsp;관해서는&nbsp;책임이&nbsp;없습니다.<br>나.&nbsp;고객의&nbsp;개인정보보호&nbsp;관련&nbsp;문의&nbsp;시&nbsp;고객센터에서&nbsp;신속하고&nbsp;성실하게&nbsp;답변을&nbsp;드리도록&nbsp;하고&nbsp;있습니다.&nbsp;또한&nbsp;고객이&nbsp;“회사”의&nbsp;개인정보&nbsp;보호담당자와&nbsp;연락을&nbsp;원하실&nbsp;경우&nbsp;아래의&nbsp;연락처&nbsp;또는&nbsp;이메일로&nbsp;연락을&nbsp;주시면&nbsp;개인정보&nbsp;관련&nbsp;문의사항에&nbsp;대하여&nbsp;신속하고&nbsp;성실하게&nbsp;답변해&nbsp;드리겠습니다.<br>①&nbsp;개인정보&nbsp;보호책임자<br>-&nbsp;성명:&nbsp;윤민섭<br>-&nbsp;직위:&nbsp;CPO<br>-&nbsp;전화번호:&nbsp;1544-4343<br>-&nbsp;이메일:&nbsp;sec@ss-neo.com<br>다.&nbsp;기타&nbsp;개인정보&nbsp;침해로&nbsp;인해&nbsp;구제를&nbsp;받기&nbsp;위한&nbsp;상담이&nbsp;필요한&nbsp;경우에는&nbsp;개인정보&nbsp;분쟁조정위원회,&nbsp;대검찰청,&nbsp;경찰청,&nbsp;한국인터넷진흥원&nbsp;등으로&nbsp;문의하실&nbsp;수&nbsp;있습니다.<br>①&nbsp;개인정보분쟁조정위원회(www.kopico.go.kr):&nbsp;02-2100-2499<br>②&nbsp;대검찰청&nbsp;사이버범죄수사단(http:③&nbsp;경찰청&nbsp;사이버안전국(http:④&nbsp;개인정보&nbsp;침해신고센터(http:11.&nbsp;고지의무<br>현&nbsp;개인정보처리방침은&nbsp;2018년&nbsp;12월&nbsp;12일에&nbsp;제정되었으며,&nbsp;정부의&nbsp;정책&nbsp;또는&nbsp;보안기술의&nbsp;변경에&nbsp;따라&nbsp;내용의&nbsp;추가,&nbsp;삭제&nbsp;및&nbsp;수정이&nbsp;있을&nbsp;경우에는&nbsp;변경사항의&nbsp;시행&nbsp;7일&nbsp;전부터&nbsp;홈페이지의&nbsp;’공지사항’을&nbsp;통해&nbsp;고지할&nbsp;것입니다.<br>-&nbsp;시행일자:&nbsp;2018년&nbsp;12월&nbsp;17일</p>');
		incTL.push('</div>');
		incTL.push('<div class="btn-col-1">');
		incTL.push('<a href="javascript:;" class="positive" onclick="layersClose(this);">확인</a>');
		incTL.push('</div>');
		incTL.push('</div>');
		incTL.push('</div>');
		
		$("#ssneo_warp").after(incTL.join(''));
	},
}

$(function(){
	inc_dom.header();
	inc_dom.footer();
	inc_dom.termsLayer();
	$("header .gnb-layer").append('<h1><a href="/"><img src="images/logo.png" alt="ABIT"></a></h1>');
	$("header .gnb-layer").append($("header .gnb").html());
	$("header .gnb-layer").append('<button type="button" class="btn_close"><img src="images/sub/btn_allMenuClose.png" alt="메뉴 닫기"></button>');
	$("header .gnb-layer").append("<div class='layer_util'>" + $("header .util").html() + "</div>");

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
