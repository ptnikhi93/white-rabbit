var res;
$(window).scrollTop(0)
$(window).on("resize", function (a) {
    a.preventDefault();
    if (res) {
        clearTimeout(res)
    }
    res = setTimeout(function () {

        $('header nav').removeAttr('style')
        if($(window).width() < 1024){
            $('header nav').css('top',$('header').outerHeight())
        }
        
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