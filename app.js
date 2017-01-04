$(doucument).ready(function(){
  $("#1").hide();
  $("#2").hide();
  $("#3").hide();
  $("#4").hide();
  $("#5").hide();
});


$(".show").mouseover(function(){
  $("#show-image").attr('src',$(this).attr('src'));
});

