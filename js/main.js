'use strict'

{
  const btn = document.getElementById('btn');
  const text = document.getElementById(`text`);

  btn.addEventListener('click', () => {
    const results = [`二十世紀`,`あきづき`,`ほうすい`,`こうすい`]
    const results2 = [
      `味は甘みが強く、果肉の食感は柔らかいのが二十世紀梨です。`,
      `味は甘みが強く、果肉は柔らかいのが特徴です。糖度が高くて酸味が少ない、`,
      `食感はやや柔らかめ。二十世紀と似たような口当たりですが、それよりも洋梨っぽさがあると思えばよいでしょう。`,
      `味は甘みが強く梨独特の香りも強い。`,
    ]
    const n = Math.floor(Math.random() * results.length );
    btn.textContent = results[n];
    text.textContent = results2[n];
  });

}
$(function(){
  //アンカースクロール
  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });
  
  $('#box a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },500);
  });
//写真ポップアップ
  $(window).on("load", function () {
    $(".scale-img").on("click", function () {
      var elm = $($(this).parent()).find(".default"), tmp = $(this).attr("src");
      elm.addClass("active");
      elm.removeClass("default");
      elm.find("img").attr("src", tmp)
    });
    $('.in_design').click(function(){
      var elm = $($(this).parent()).find(".active"), tmp = $(this).attr("src");
      elm.addClass("default");
      elm.removeClass("active");
      elm.find("img").attr("src", tmp)
    });
  });

  function demo01() {
    $(this).next().slideToggle(300);
    }
    
  $(".toggle").click(demo01);

  function demo02() {
    $(this).toggleClass('active').next().slideToggle(300);
    }
    
  $(".switch .toggle").click(demo02);


  
});
    jQuery(function ($) {
      $(".accordion-content").css("display", "none");
      
      $(".js-accordion-title").click(function () {
        $(this).toggleClass("open");
        $(this).next().slideToggle(300);
      });
    });