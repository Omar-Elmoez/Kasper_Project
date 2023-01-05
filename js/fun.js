$(window).on('load', function(){
    $('.loading-overlay .sk-cube-grid').fadeOut(1000,function(){
        $(this).parent().fadeOut(2000,function(){
            $('body').css('overflow','auto');
        })
    });
});

$(document).ready(function(){
    var scrollButton = $('.arrow-up');
   
    // Show and Hide scrollButton
    $(window).scroll(function(){
        $(this).scrollTop() >= 1500 ? scrollButton.show() : scrollButton.hide();
    });

    // Click On scrollButton
    $(scrollButton).click(function(){
        $('html,body').animate({scrollTop: 0}, 600);
    });
});