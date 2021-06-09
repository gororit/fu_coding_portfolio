$(function(){
 $('a[href^="#"]:not([href="#"])').click(function(){
  var target=$($(this).attr("href")).offset().top;
  target -= 110;
 $("html,body").animate({scrollTop:target},500);
 
  return false;
 });
 
 $('.flex h1').click(function(){
 $('html,body').animate({scrollTop:0},500);
 });

 $('.ham').on('click', function(){
  $('.menu').toggleClass('is-active');
  $('.ham').toggleClass('clicked');
 });
 
 $('.menu__item a[href]').on('click', function(){
  $('.menu').toggleClass('is-active');
  $('.ham').toggleClass('clicked');
 });

 $('.send').prop("disabled", true);

$('form input:required').change(function () {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required').each(function(e) {
        //もし必須項目が空なら
        if ($('form input:required').eq(e).val() === "") {
            flag = false;
        }
    });
    //全て埋まっていたら
    if (flag) {
        //送信ボタンを復活
        $('.send').prop("disabled", false);
    }
    else {
        //送信ボタンを閉じる
        $('.send').prop("disabled", true);
    }
});

$('form').submit(function(){
$('input[type="submit"]').css('display','none');
});

function postToGoogle() {
 var name = $('#name').val();
 var email = $('#email').val();
 var contact = $('#contact').val();

 $.ajax({
 url: "https://docs.google.com/forms/d/[key]/formResponse",
 data: {"entry.893826426": name,"entry.1898328826":email,"entry.1224220940":contact},
 type: "POST",
 dataType: "xml",
 statusCode: {
     0: function() {
         //Success message
         location.href="#"
     },
     200: function() {
         //Success Message
         location.href="#"
     }
 }
});
}
});