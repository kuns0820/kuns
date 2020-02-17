function layers(target){
	$this = $(target).attr("data-layer");
	$dom = $(".layer_wrap."+ $this);
	$dom.closest(".layer_wrap").fadeIn("fast");
	$dom.fadeIn("fast");

	var _docT = $(document).height();
	var _winT = $(window).scrollTop() + 30;
	var _layerT = $dom.height();


	$(".dim").show();

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
	$this = $(target).closest(".layer_wrap");
	$this.fadeOut("fast");
	$(".dim").hide();
}
