/*document.addEventListener("DOMContentLoaded", function(event){
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);

});*/



$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]');
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
       modal.toggleClass('modal--visible'); 
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible'); 
     });

     const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
  
      // Настройка навигации слайдера
      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');
      next.css('left', prev.width() + 10 + bullets.width() +10);
      bullets.css('left', prev.width() + 10);

});