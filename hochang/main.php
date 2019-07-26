<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0. user-scalable=no">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/front.css">
	<link rel="stylesheet" type="text/css" href="css/swiper.min.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/swiper.min.js"></script>
	<script type="text/javascript" src="js/inc.ui.js"></script>
</head>
<body>
<div id="hc_warp">
	<div id="container">
		<article class="main">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide visual01"><img src="images/imgm_visual_01.jpg" alt="" class="mo"></div>
					<div class="swiper-slide visual02"><img src="images/imgm_visual_02.jpg" alt="" class="mo"></div>
				</div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-pagination"></div>
			</div>
			<script>
			var swiper = new Swiper('.swiper-container', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
				},
				effect: 'fade',
				loop: true,
			});
			</script>

			<div class="main_bnr">
				<div class="bnr01">
					<a href="car01.php"><p>자동차부품 사업부<span>㈜호창MF</span></p>
						<img src="images/bnrm_main_01.jpg" alt="" class="mo">
					</a>
				</div>
				<div class="bnr02">
					<a href="build01.php"><p>건설 자재 사업부<span>㈜호창메탈</span></p>
						<img src="images/bnrm_main_02.jpg" alt="" class="mo">
					</a>
				</div>
				<div class="bnr03">
					<a href="bio.php"><p>바이오사업부<span>㈜호창메탈</span></p>
						<img src="images/bnrm_main_03.jpg" alt="" class="mo">
					</a>
				</div>
			</div>
		</article>
	</div>
</div>
</body>
</html>
