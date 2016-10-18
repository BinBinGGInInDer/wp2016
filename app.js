$(function(){
	var $showImage = $('#show-image');
	$('.abgne-block a').mouseover(function(){
		$showImage.attr('src', $(this).attr('href'));
	}).click(function(){
		return false;
	});
});
