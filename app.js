$(function(){
	var $showImage = $('#show-image');
	$('.abgne-block a').mouseover(function(){
		var $this = $(this),
			_src = $this.attr('href');
		
		if($showImage.attr('src') != _src){
			$showImage.hide().attr('src', _src).stop(false, true).fadeTo(400, 1);
		}
	}).click(function(){
		
		return false;
	});
});

