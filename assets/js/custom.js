
$(function(){
    
    //--- Nav Menu
    var isOpen = false
    
    var linkAnimationIn = anime({
        targets: '.menu-link',
        translateX: ['100%', 0],
        duration: 700,
        delay: anime.stagger(100),
        autoplay: false,
    
    })
    
    var linkAnimationOut = anime({
        targets: '.menu-link',
        translateX: [0, '100vw'],
        duration: 700,
        delay: anime.stagger(100),
        autoplay: false,
    })

    $('.nav-link').on('click',function(){

        if(isOpen == false){
            $('.menu-main').addClass('open')
            linkAnimationIn.play()
        
            isOpen = true

        }else {
            $('.menu-main').removeClass('open')
            linkAnimationOut.play()
                        
            isOpen = false
        }

    })

    $('.menu-link a').on('click', function(){
        $('.menu-main').removeClass('open')
        linkAnimationOut.play()
                        
        isOpen = false
    })

    //--- Swiper ---//
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        autoplay:{
            delay: 8000,
        }
    })

    //--- Mixitup ---//
    $(function(){
        $('#Container').mixItUp({
            animation: {
                easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
            }
        });
    });
    
    $('.taxonomy-item').on('click', function(){
        $('.taxonomy-item').removeClass('is-active');
        $(this).addClass('is-active')
    })


    //--- AOS ---//
    AOS.init({
        once: true,
    });



})