$(document).ready(init); /*畫面上所有的DOM都載入後*/
        function init() {
            $('#R1').hide();
            $('#R2').hide();
            $('#R3').hide();
            $('#R4').hide();
            $('#R5').hide();
        }


$("#Sav").onclick(function(){
        var check=$("#M5").val();
        if(check==0)
                alert("超過五個物品囉");
        else{
                var T=$("#Projectname").text();
                $("P5").text(T);
                T=$("#Unit").text();
                $("U5").text(T);
                var N=$("#Num").val();
                $("N5").val(N);
                var P=$("#Prc").val();
                $("P5").val(P);
                
        }
        
  $("#show-image").attr('src',$(this).attr('src'));
});

