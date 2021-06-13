var res;
$(window).scrollTop(0)
$(window).on("resize", function (a) {
    a.preventDefault();
    if (res) {
        clearTimeout(res)
    }
    res = setTimeout(function () {

        $('header nav,.slider').removeAttr('style')
        if($(window).width() < 1024){
            $('header nav').css('top',$('header').outerHeight())
        }
        $('.slider').css('height',$('.slides .items').outerHeight())
    }, 100)   
}).trigger('resize');

$(window).scroll(function () {
    scrolTop = $(this).scrollTop()
    if (scrolTop > 25) {
        $('header').addClass('act');
                 
    } else if(scrolTop==0){
        $('header').removeClass('act');
       
    }
  
}).trigger('scroll');


$('header .menu').on('click',function(){
    $(this).toggleClass('act')
    $('header nav,.cover').toggleClass('act')
})

function slider(){
    var tl = $('.slides').length;
    var c_index= $('.slides.active').index()+1;
    if((c_index)>=tl){c_index=0;}
    $('.slides').eq(c_index).addClass('active').siblings().removeClass('active')
}
setInterval(function(){
    slider()
},3000)