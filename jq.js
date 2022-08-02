$(function(){

 //デザインのモーダル
 $('.design-box').eq(0).click(function(){
 	$('.designpage').eq(0).fadeIn();
 });
  $('.design-box').eq(1).click(function(){
 	$('.designpage').eq(1).fadeIn();
 });

 $('.close').click(function(){
 	$('.designpage').fadeOut();

 });

 //スクロール時の表示
	$(window).scroll(function () {
	    $(".box").each(function () {
	      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
	      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
	      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
	      if (scroll > elemPos - windowHeight) {
	        /* 要素位置までスクロール出来たときに動作する */
	        $(this).addClass("effect-scroll");
	      }
	    });
	  });
	jQuery(window).scroll();

});
