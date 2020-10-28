
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
      


})