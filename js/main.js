$(document).ready(function () {

    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // slide section

    $('#scene01 .visual .main_visual').slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#scene01 .visual .prev'), //이전 화살표
        nextArrow: $('#scene01 .visual .next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    $('#section02 .main_img .img1')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList()
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList()
        });

    function list01(){
        $('#scene01').addClass('active');
    }
    function list02(){
        $('#scene01').addClass('active');

    }
    function list03(){

    }

    function starList(){

        if($('#slick-slide00').hasClass('slick-active')){
            $('#scene01').addClass('active');

        }
        if($('#slick-slide01').hasClass('slick-active')){
            $('#scene01').addClass('active');


        }
        if($('#slick-slide02').hasClass('slick-active')){
            list03();
        }
    }

    // slide end

    $('#scene04 .visual .main_visual').slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#scene01 .visual .prev'), //이전 화살표
        nextArrow: $('#scene01 .visual .next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide: 0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    $('#section02 .main_img .img1')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList()
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList()
        });

    function list01(){
        $('#scene01').addClass('active');
    }
    function list02(){
        $('#scene01').addClass('active');

    }
    function list03(){

    }

    function starList(){

        if($('#slick-slide00').hasClass('slick-active')){
            $('#scene01').addClass('active');

        }
        if($('#slick-slide01').hasClass('slick-active')){
            $('#scene01').addClass('active');


        }
        if($('#slick-slide02').hasClass('slick-active')){
            list03();
        }
    }

});

$(function () {

    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");
        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        if (a >= 1) {
            // $("").addClass("on");

        } else {
            // $("").removeClass("on");

        }
        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })
});

