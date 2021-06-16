var res;
$(window).scrollTop(0)
$(window).on("resize", function (a) {
    a.preventDefault();
    if (res) {
        clearTimeout(res)
    }
    res = setTimeout(function () {

        $('header nav,.slider,.tablets .tablets-slider').removeAttr('style')
        if($(window).width() < 1024){
            $('header nav').css('top',$('header').outerHeight())
        }
        $('.slider').css('height',$('.slides .items').outerHeight())
        $('.tablets .tablets-slider').css({'height':$('.product-box').outerHeight()})
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

$('.scrollToTop').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop : 0},700);
    
});       

var t_items = $('.tablets-slider .product-box').length;
var t_width = $('.tablets .product-box').outerWidth();
$('.tablets .arw').on('click',function(e){
    e.preventDefault();
    var dir = $(this).attr('data-value');
    var d_value = (dir=='next')?-1:1;
    var c_index = $('.tablets-slider .product-box.active').index()-d_value;
    var transform = -(t_width * c_index);
    if(d_value==-1){
        $('.tablets .product_items').animate({
            left: + transform
        }, 300, function () {
            $('.tablets-slider .product-box:first-child').appendTo('.tablets .product_items');   
            $('.tablets .product_items').css('left', '');
        });
    }else{
        $('.tablets .product_items').animate({
            left: + transform
        }, 300, function () {
            $('.tablets-slider .product-box:last-child').prependTo('.tablets .product_items');   
            $('.tablets .product_items').css('left', '');
        });
    }
    $('.tablets-slider .product-box').eq(c_index).addClass('active').siblings().removeClass('active')
    })
