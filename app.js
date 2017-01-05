$(document).ready(init); /*畫面上所有的DOM都載入後*/


        function init() {
            /*註冊removeRow函數*/
            $.fn.removeRow = function (row) {
                // Make sure row has value     
                if (!row) { row = 1; }
                $(' table tr :nth-child(' + row + '), table tr :nth-child(' + row + ')', this).hide();/*該欄隱藏*/
                return this;
            };
            /*註冊addRowl函數*/
            $.fn.addRow = function (row) {
                // Make sure col has value     
                if (!row) { row = 1; }
                $('tr td:nth-child(' + row + '), tr th:nth-child(' + row + ')', this).show();/*該欄顯示*/
                return this;
            };
            
        }


$(".show").mouseover(function(){
  $("#show-image").attr('src',$(this).attr('src'));
});

