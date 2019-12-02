$(document).ready(function(){
    $('.gallery-list').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: $("#gallery_back"),
        nextArrow: $("#gallery_next"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    var header_slide = $('.header-slide').slick({
      prevArrow: $("#header_back"),
      nextArrow: $("#header_next"),
      speed: 1000,
    });

    var count = header_slide.slick("getSlick").slideCount;
    console.log(count);
    if (count<10) count = " / 0"+count;
    else count = " / "+count;
    $("#header-count").html(count);

    header_slide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var header_num = $("#header-num");
        var num = nextSlide+1;
        if (num<10) num = "0"+num;
        header_num.html(num);
    });

    $(".about-slide").slick({

    });

    $('.know-slider-container').slick({
        prevArrow: $("#know_back"),
        nextArrow: $("#know_next")
    });

    $('.calendar-slider-container').slick({
        prevArrow: $("#calendar_back"),
        nextArrow: $("#calendar_next")
    });

    $("#play").click(function() {
        var popap = $(".popup").show();
        popap.html('<video src="video/GRADED_NESTED_FILM04.mp4" controls autoplay="false" ></video>');
        $("video").trigger('play');
    })

    $(".call").click(function () {
        $(".popup_form").show()
    })

    $(".popup_form").click(function() {
        $(this).hide();
    })

    $(".popup").click(function() {
        $("video").trigger('pause');
        $(this).html("");
        $(this).hide();
    })

    if ($(window).scrollTop()>10) {
        white_header();
    }


    $(window).scroll(function() {
      if ($(window).scrollTop()>10) {
          white_header();
      }
      if ($(window).scrollTop()<=10) {
          var v = $(".navbar");
          reset_header();
      }
    });


    function white_header () {
        var nav = $(".navbar");
        nav.addClass("nav-white")
    }

    function reset_header () {
        var nav = $(".navbar");
        nav.removeClass("nav-white")
    }

    let hide_menu = $(".hide-menu");
    hide_menu.on('click',function() {
      var target = $(this).attr("target");
      $("#"+target).toggle();
    })
});