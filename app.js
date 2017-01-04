$(doucument).ready(function(){
  $("#R1").hide();
  $("#R2").hide();
  $("#R3").hide();
  $("#R4").hide();
  $("#R5").hide();
});


$(".show").mouseover(function(){
  $("#show-image").attr('src',$(this).attr('src'));
});

