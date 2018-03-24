$(function () {
    console.log('hello')
    $(".blast").hover(function(){
        $(this).addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend' , function () {
            $(this).removeClass('animated rubberBand')
        })
    });
})