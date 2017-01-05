$(document).ready(init); /*畫面上所有的DOM都載入後*/


        function init() {
            
            $('#R1').hide();
            $('#R2').hide();
            $('#R3').hide();
            $('#R4').hide();
            $('#R5').hide();
        }


$(".show").mouseover(function(){
  $("#show-image").attr('src',$(this).attr('src'));
});

