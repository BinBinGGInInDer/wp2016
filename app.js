$(document).ready(function() { /*畫面上所有的DOM都載入後*/

        
$)('#Sav').click(function() { 
        var C = $("#Hwmc").val();
        if( C ==0 || document.getElementById('Projectname').value=="請選擇項目名稱" )
                alert("有必填未填");
        else{
                var  check = $("#M5").val();
                if( check != 0)
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
                        $("#R5").show();
                
                }
        }
});
        
        
        
};


