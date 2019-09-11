<!doctype html>
<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="validator" uri="http://www.springmodules.org/tags/commons-validator" %>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta id="meta_viewport" name="viewport" content="width=device-width,target-densitydpi=device-dpi,user-scalable=0,initial-scale=0.5,minimum-scale=0.5,maximum-scale=1.0">
<meta name="keywords" content="${fcName }">
<meta name="description" content="${fcName }">

<c:forEach items="${theme.contentsListVo}" var="contentVo" varStatus="status">
<c:if test="${status.count==1 }">
	<c:if test="${contentVo.fileItemListVo ne null}">
		<c:forEach items="${contentVo.fileItemListVo}" var="fileItemListVo" varStatus="status3">
		<c:if test="${status3.count==1 }">
		<meta property="og:image" content="${fcUrl }${fcContextRoot }/cmm/fms/getImage.do?atchFileId=${fileItemListVo.atchFileId}&fileSn=${fileItemListVo.fileSn}" />
		</c:if>
		</c:forEach>
	</c:if>
	<c:if test="${contentVo.fileItemListVo eq null}">
		<c:forEach items="${contentVo.fileThumbnailListVo}" var="fileItemListVo" varStatus="status3">
		<c:if test="${status3.count==1 }">
		<meta property="og:image" content="${fcUrl }${fcContextRoot }/cmm/fms/getImage.do?atchFileId=${fileItemListVo.atchFileId}&fileSn=${fileItemListVo.fileSn}" />
		</c:if>
		</c:forEach>
	</c:if>
	<meta property="og:title" content="${fn:replace(contentVo.title, "'", "") }" />
	<meta property="og:description" content="${fn:replace(contentVo.description, "'", "") }" />
	<meta property="og:type" content="website" />
	
</c:if>
</c:forEach>



<link rel="stylesheet" type="text/css" href="<c:out value='${fcContextRoot }' />/common_ui/css/font.css"> 
<link rel="stylesheet" type="text/css" href="<c:out value='${fcContextRoot }' />/common_ui/css/common.css">
<link rel="stylesheet" type="text/css" href="<c:out value='${fcContextRoot }' />/common_ui/css/ui.css">
<link rel="stylesheet" type="text/css" href="<c:out value='${fcContextRoot }' />/common_ui/css/nc.css">
<link rel="stylesheet" type="text/css" href="<c:out value='${fcContextRoot }' />/common_ui/css/swiper.css">

<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/jquery.min.js"></script>
<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/jquery.nailthumb.1.1.min.js"></script>
<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/jquery.touchSwipe.min.js"></script>
<script type="text/javascript" src="<c:out value='${fcContextRoot }' />/common_ui/js/ui.js"></script>
<!-- 2016-06-13 추가 Swiper JS -->
<!-- <script type="text/javascript" src="<c:url value='/common_ui/js/swiper.min.js' />"></script> -->
<script type="text/javascript" src="<c:url value='/common_ui/js/swiper.latest.min.js' />"></script>

<script type="text/javascript">

function fn_sendSms(phoneNum){
	
	location.href = "sms:"+phoneNum;
}

function fn_call(phoneNum){
	
	location.href = "tel:"+phoneNum;
}


</script>

<body id="UserView">


<div id="wrap_content"><!-- 2015-07-08 추가 -->
	<!-- 사용자 화면 -->
	<div class="user_view">
	
		<div class="swiper-container">
			<div class="swiper-wrapper" >
		
		
		
	<c:forEach items="${theme.contentsListVo}" var="contentVo" varStatus="status">
	
		
		<c:if test="${contentVo.contentsType == 'T' }">
			<div class="swiper-slide" >
				<div class="item_news">
					<div class="news-wrap">
						<div class="news-title">
							<em><c:out value="${contentVo.title }" /></em>
							<span>등록일 : <c:out value="${contentVo.regDt }" /></span>
						</div>
						<c:out value="${contentVo.contents }" escapeXml="false" />
					</div>
					
				</div>
			</div><!-- //.item_con -->
		</c:if>
		
			
		<c:forEach items="${contentVo.fileItemListVo}" var="fileItemListVo" varStatus="status3">
			<div class="swiper-slide img-con" ><div class="swiper-zoom-container">
				<img src="<c:out value='${fcContextRoot }' />/cmm/fms/getImage.do?atchFileId=${fileItemListVo.atchFileId}&fileSn=${fileItemListVo.fileSn}" alt="아이템 컨텐츠 이미지<c:out value="${status3.count }" />"  class="full_con"  />
			</div></div><!-- //.item_con -->
		</c:forEach>
	</c:forEach>
	
	<c:if test="${namecard.namecardYn == 'Y'}">
			<div class="swiper-slide namecard" >
				<!-- 전자명함 사용자 화면 영역-->
				<div class="nc">
				
<c:set var="dispImg" ><c:out value='${fcContextRoot }' />/images/nc/cover_default.jpg</c:set>
<c:forEach items="${namecard.fileCoverListVo}" var="fileCoverListVo" varStatus="status">
	<c:if test="${fileCoverListVo.atchFileId != ''}">
		<c:set var="dispImg" ><c:out value='${fcContextRoot }' />/cmm/fms/getImage.do?atchFileId=<c:out value="${fileCoverListVo.atchFileId}&fileSn=${fileCoverListVo.fileSn}" /></c:set>				    
	</c:if>
</c:forEach>
								
						<!-- 상단 : 커버 이미지 및 프로필 내용 영역 -->
						<div class="nc_head">
<!-- 고객요청에 의해 제거 19.07.24 
                        	<p class="nc_logo2">
							<c:if test="${namecard.logo2 == null || namecard.logo2 == '' }">
								<img src="<c:out value='${fcContextRoot }' />/images/nc/logo/logo_default.png" alt="회사" />
							</c:if>
							<c:if test="${namecard.logo2 != null &&  namecard.logo2 != ''}">
								<img src="<c:out value='${fcContextRoot }' />/images/nc/logo/<c:out value="${namecard.logo1}" />/<c:out value="${namecard.logo2}" />" />
							</c:if>								
							</p>
 -->
 
							<!-- 2015-07-08 수정 -->
							<div class="nc_bg_cover" style="background-image:url(<c:out value="${dispImg }" />)">
								<img src="<c:out value='${fcContextRoot }' />/images/nc/dummy.png" alt=""><!-- 2015-07-13 추가 -->
								<div class="nc_bg_cover_shadow">
									<c:if test="${namecard.profileYn=='Y' }">
									<%
									pageContext.setAttribute("crcn", "\r\n"); 
									pageContext.setAttribute("br", "<br>"); 
									%>
									<p><c:out value="${fn:replace(namecard.profile, crcn, br) }" escapeXml="false" /></p>
									</c:if>
								</div>
							</div>
							<!-- 커버 이미지 백그라운드 경로 -->
						</div>
						<!-- //.nc_head -->
						<!-- //상단 : 커버 이미지 및 프로필 내용 영역 -->
						
						
						<!-- 하단 : FC정보 및 버튼 영역 -->
						<div class="nc_content" style="padding-bottom:30px !important;">
                            <p class="nc_name2"><em><c:out value="${namecard.name}"/></em> <span><c:out value="${namecard.companyName}"/></span></p>
							<ul class="nc_info">
							<c:if test="${namecard.phoneYn=='Y' }">
								<li><p>Mobile</p> <c:out value="${namecard.phone}"/></li>
							</c:if>							
							<c:if test="${namecard.companyFaxYn=='Y' }">
								<li><p>Fax</p> <c:out value="${namecard.companyFax}"/></li>
							</c:if>
							<c:if test="${namecard.idYn=='Y' }">
								<li><p>E-mail</p> <c:out value="${namecard.email}"/></li>
							</c:if>
							<c:if test="${namecard.addressYn=='Y' }">
								<li><p style="height:100px;">주소</p> <c:out value="${namecard.address1}"/></li>
							</c:if>

							</ul>
                            
						</div>
						<div class="btn-nameCard">
							<button type="button" class="text" onclick="fn_sendSms('<c:out value="${namecard.phone}"/>');">문자하기</button>
							<button type="button" class="tel" onclick="fn_call('<c:out value="${namecard.phone}"/>');">전화하기</button>
						</div>
						<!-- //.nc_content -->
					</div>
				</div>
						

		</c:if>
		
		
		</div><!-- //.item_wrap -->
		
	</div><!--//.item_view -->
		<div class="swiper-pagination"></div>			
		
</div><!-- //.user_view -->
<!-- //사용자 화면 -->
</div> <!-- 2015-07-08 추가 -->

<!-- Pop up : FC 상세정보  -->
<div id="pop_fcinfo" class="modal-box pop3">	
	<div class="wrap_pop">
		<div class="header_pop">
			<h2 class="h2_pop_3"><c:out value="${namecard.name}"/></h2>
			<button class="pop_btn_close" onclick="destroyModal('#pop_fcinfo');">창 닫기</button>
		</div>
		<div class="con_pop">
			 <div class="nc_contact_view">
				<table>
					<thead><colgroup><col class="th"><col class="td_1"><col class="td_2"></colgroup></thead>
					<tbody>
					
						<c:if test="${namecard.phoneYn=='Y' }">
							<tr><th>휴대폰</th><td><a href="#"><c:out value="${namecard.phone}"/></a></td></tr>
						</c:if>					
						<c:if test="${namecard.idYn=='Y' }">
							<tr><th>이메일</th><td><a href="#"><c:out value="${namecard.email}"/></a></td></tr>
						</c:if>
						<c:if test="${namecard.companyNameYn=='Y' }">
							<tr><th>회사명</th><td><c:out value="${namecard.companyName}"/></td></tr>
						</c:if>	
						<c:if test="${namecard.companyPhoneYn=='Y' }">
							<tr><th>유선전화</th><td><a href="#"><c:out value="${namecard.companyPhone}"/></a></td></tr>
						</c:if>
						<c:if test="${namecard.companyFaxYn=='Y' }">
							<tr><th>팩스</th><td><c:out value="${namecard.companyFax}"/></td></tr>
						</c:if>
						<c:if test="${namecard.addressYn=='Y' }">
							<tr><th>회사주소</th><td><c:out value="${namecard.address1}"/></td></tr>
						</c:if>
						
						
					</tbody>
				</table>
			</div><!-- //.nc_contact -->

			<ul class="share_list clearfix">
				<li><a href="sms:<c:out value="${namecard.phone}"/>"><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_sms.png" alt="메시지"></a></li>
				<c:if test="${namecard.snsKakaotalkYn == 'Y' }">
					<li><a href="<c:out value="${namecard.snsKakaotalk}"/>" target="_blank"><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_kakaotalk.png" alt="카카오톡"></a></li>
				</c:if>
				<c:if test="${namecard.snsKakaostoryYn == 'Y' }">
					<li><a href="<c:out value="${namecard.snsKakaostory}"/>" target="_blank"><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_kakaostory.png" alt="카카오스토리"></a></li>
				</c:if>
				<c:if test="${namecard.snsFacebookYn == 'Y' }">
					<li><a href="<c:out value="${namecard.snsFacebook}"/>" target="_blank" ><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_facebook.png" alt="facebook"></a></li>
				</c:if>
				<c:if test="${namecard.snsTwitterYn == 'Y' }">
					<li><a href="<c:out value="${namecard.snsTwitter}"/>" target="_blank" ><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_twitter.png" alt="트위터"></a></li>
				</c:if>
				<li><a href="mailto:<c:out value="${namecard.id}"/>"><img src="<c:out value='${fcContextRoot }' />/images/common/ic_share_email.png" alt="이메일"></a></li>
			</ul><!-- //.share_list -->

		</div><!-- //.con_pop -->

	</div><!-- //.wrap_pop -->
</div><!-- //#pop_fcinfo -->
<!-- //Pop up : FC 상세정보  -->



<script type="text/javaScript" language="javascript">
<!--

window.addEventListener("load", function() {
	setTimeout(scrollTo, 0, 0, 1);
}, false);

var swiper = new Swiper('.swiper-container', {
	autoHeight:true,
	zoom:true,
	pagination: {
	el: '.swiper-pagination',
		clickable: true
	},
	onSlideChangeEnd : function(swiper) {
		var swiperPage = swiper.isEnd;
		if (swiperPage == true){
		$('.swiper-pagination').hide();
		} else {
		$('.swiper-pagination').show();
		}
	}
});

/* ********************************************************
 * 메세지 처리및 이동
 ******************************************************** */
<c:if test="${dispMessage != null && dispMessage != ''}">
	alert("<c:out value='${dispMessage}'/>");
</c:if>
<c:if test="${goAction != null && goAction != ''}">
	location.href = "${goAction}";
</c:if>
-->
</script>
<c:import url="/FcGnb/FcAcecounter.do" charEncoding="utf-8"></c:import>
</body>
</html>
