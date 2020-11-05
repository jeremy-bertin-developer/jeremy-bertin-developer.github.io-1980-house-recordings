// TRANSITION BETWEEN PAGES NAVBAR TOP
$(function(){
  let request = window.location.hash;

  if(request == "#home" || request == "#releases" || request == "#artists" || request == "#partners" || request == "#about-us"){
    $(".page.current").removeClass("current");

    $(".page").eq(0).addClass("current");
  }

  $("#navbar .nav-clic").on("click", function(){
    // var speed = 800;
    let i = $("#navbar .nav-clic").index(this);
    $(".page.current").animate({opacity: 0, marginLeft:500}, 800, function(){
      $(this).removeClass("current");
      $('.page').eq(i).animate({opacity:1, marginLeft: 0}, 1000).addClass("current");
      // $(window).scrollTop(0);
    });
  });
});

// TRANSITION BETWEEN PAGES NAVBAR FOOTER
$(function(){
  let request = window.location.hash;

  if(request == "#home" || request == "#releases" || request == "#artists" || request == "#partners" || request == "#about-us"){
    $(".page.current").removeClass("current");
    $(".page").eq(0).addClass("current");
  }

  $("#navbar-footer .nav-clic2").on("click", function(){
    // var speed = 800;
    let i = $("#navbar-footer .nav-clic2").index(this);
    $(".page.current").animate({opacity: 0, marginLeft:500}, 800, function(){
      $(this).removeClass("current");
      $('.page').eq(i).animate({opacity:1, marginLeft: 0}, 1000).addClass("current");
      $(window).scrollTop(0);
    });
  });
});

// TRANSITIONS BETWEEN INDEX PAGE AND HOME PAGES

$(document).ready(function(){

  $('#navbar').css("margin-top", "-100px");
  $('#index').show();
  $('#home').css("visibility", "hidden");
  $('footer').hide();


  $("#index a").on("click", function(event){

    $("#index").css("position", "static");
    $('#navbar').css("margin-top", "0px");
    $('#navbar').slideDown(1400);
    $('#home').addClass("current").fadeIn(1000);
    $('#home').css("visibility", "visible");

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400, function(){

        window.location.hash = hash;

        $('#index').remove();
        $('#myModal').modal('show');
        $('footer').show();

      });
    }
  });
});

// TRANSITION FOR THE CONTACT FORM

$(".nav-contact-us").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    // $("#navbar").slideUp(1000);
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 2000, function(){

      window.location.hash = hash;
    });
  }
});

// NAVBAR REDUCING HEIGHT WHEN SCROLLING ON BIG SCREEN


$(function(){
  $('#navbar').data('size','big');
});

$(window).scroll(function(){

    if($(document).scrollTop() > 0) {
      if($(window).width() > 992){
        if($('#navbar').data('size') == 'big') {
            $('#navbar').data('size','small');
            $('#navbar').stop().animate({
                height:'60px'
            },600);
        }
      }
  }

  else {
    if($(window).width() > 992){
      if($('#navbar').data('size') == 'small'){
          $('#navbar').data('size','big');
          $('#navbar').stop().animate({
              height:'100px'
          },600);
        }
      }
    }

});

// LOGO REDUCING HEIGHT AND WIDTH WHEN SCROLLING ON BIG SCREEN

$(function(){
  $('.main-logo').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0) {
    if($(window).width() > 992){
      if($('.main-logo').data('size') == 'big') {
          $('.main-logo').data('size','small');
          $('.main-logo').stop().animate({
              height:'40px',
              width:'40px'
          },600);
      }
    }
}
  else {
    if($(window).width() > 992){
      if($('.main-logo').data('size') == 'small'){
          $('.main-logo').data('size','big');
          $('.main-logo').stop().animate({
              height:'60px',
              width:'60px'
          },600);
        }
      }
    }
});

//BEHAVIOR SLIDE LEFT RIGHT NAVBAR COLLAPSE

$('.navbar-toggler').on('click', function(){
  if($('.navbar-collapse .navbar-nav').is(':hidden')){
    $('.navbar-collapse .navbar-nav').animate({marginLeft: 150}, 800);
  } else {
    $('.navbar-collapse .navbar-nav').animate({marginLeft: -150}, 1000);
  }
});


// NAVBAR HIDING WHEN FOOTER IS REACHED

$(window).scroll(function() {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
      $("#navbar").fadeOut(800);
    } else {
      $("#navbar").fadeIn(400);
    }
});

// PARALLAX ABOUT US

$(window).scroll(function () {
    $(".background-about-us").css("background-position","2%" + ($(this).scrollTop() / 64) + "px");
});


// CAROUSEL INTERVAL

$('.carousel').carousel({
  interval: 4500
});

$(window).scroll(function() {
    if ($('.header-image h2').height() <= ($('.header-image h2').height(window))) {
      $(".header-image h2").fadeOut(800);
    } else {
      $(".header-image h2").fadeIn(400);
    }
});

// SUBMITION CONTACT FORM

$('#contact-form').submit(function(e) {
    e.preventDefault();
    $('.comments').empty();
    var postdata = $('#contact-form').serialize();

    $.ajax({
        type: 'POST',
        url: '../php/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {

            if(json.isSuccess)
            {
                $('#contact-form').append("<p class='thank-you'> Message sent. We will reply as soon as possible. Thank you !</p>");
                $('#contact-form')[0].reset();
            }
            else
            {
                $('#subject + .comments').html(json.subjectError);
                $('#name + .comments').html(json.nameError);
                $('#email + .comments').html(json.emailError);
                $('#message + .comments').html(json.messageError);
            }
        }
    });
});

// DISABLE / ENABLE DEPENDS ON SCREEN SIZES

$(function(){
  if($(window).width() > 992){
    $('#navbar').addClass('shadow');
  }
})

$(function(){
  if($(window).width() < 992){
    $('#footer').addClass('block');
    $('#navbar .navbar-brand').css("display", "none");
  }
})

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $(this).toggleClass("is-active");
  });
});


//LAZY LOAD
$(function() {

    // Default
    // $('img').loadScroll();

    // Custom fadeIn Duration
    $('img').loadScroll(300);
    $('iframe').loadScroll(300);
    // $('.fb-page').loadScroll(300);
});
