$('.header__line-active').on('mouseover', function(e){
  e.preventDefault;
  $(this).removeClass('header__line-active');
})

$('.header__line-active').on('mouseout', function(e){
  e.preventDefault;
  if (true) {}
  $(this).addClass('header__line-active');
}) 

//////////photo-portfolio

$('.gallery__item a').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
})

$('.gallery__item').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('gallery__img__active');
  $('.gallery__item').toggleClass('gallery__item__active');
  $('.gallery__blur').toggleClass('gallery__active');
  $('.entrails').toggleClass('entrails__active');
  $('.gallery__img').toggleClass('active__background');
  $('.portfolio').toggleClass('active__background2');
})



$('.entrails').on('click', function(e){
  e.preventDefault;
  $(this).removeClass('entrails__active');
  $('.gallery__item a').removeClass('gallery__img__active');
  $('.gallery__active').removeClass('gallery__active');
  $('.gallery__item').removeClass('gallery__item__active');
  $('.gallery__item').removeClass('gallery__img__active');
  $('.gallery__img').removeClass('active__background');
  $('.portfolio').removeClass('active__background2');
})



// $(function(){
//   $("a[href^='#']").on('click', function(e){
//     var _href = $(this).attr("href");
//     $('html,body').stop().animate({ scrollTop: $(_href).offset().top }, 1500);
//     e.preventDefault;
//   });

// });


//////nav-anime





document.addEventListener("DOMContentLoaded", function(event) { 
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = document.querySelector('body').offsetWidth;
  if (widthWind >= 1100) {
    const main = document.getElementById('mainBtn');
    const port = document.getElementById('portBtn');
    const about = document.getElementById('aboutBtn');
    const contacts = document.getElementById('contactsBtn');

    const nav = document.getElementById('title__anime-wrap');
    const wrappedP = document.getElementById('title__anime-wrap');
    const wrappedCh = document.getElementById('title__anime');

    let words = ["Главная", "Порфтолио", "Обо мне", "Контакты"];


    main.addEventListener('mouseenter', strokeMain);
    port.addEventListener('mouseenter', strokePort);
    about.addEventListener('mouseenter', strokeAbout);
    contacts.addEventListener('mouseenter', strokeContacts);



    function strokeMain(){
      wrappedP.appendChild(wrappedCh);
      for (var i = 0; i < 7; i++) {
        var elem = document.createElement('h4'), 
        content = document.createTextNode(words[0]);




        elem.appendChild(content);

        elem.style.color = '#fff';
        elem.style.animation = "1.5s linear 0s infinite normal none running textanim";
        elem.style.fontSize = '36px';
        elem.style.textTransform = 'lowercase';
        elem.style.textAlign = 'center';
        elem.style.lineHeight = '2';
        elem.style.fontFamily = "Stalinist One', cursive';"

        wrappedCh.appendChild(elem);
      }
    }

    function strokePort(){
      wrappedP.appendChild(wrappedCh);
      for (var i = 0; i < 7; i++) {
        var elem = document.createElement('h4'), 
        content = document.createTextNode(words[1]);




        elem.appendChild(content);

        elem.style.color = '#fff';
        elem.style.animation = "1.5s linear 0s infinite normal none running textanim";
        elem.style.fontSize = '36px';
        elem.style.textTransform = 'lowercase';
        elem.style.textAlign = 'center';
        elem.style.lineHeight = '2';
        elem.style.fontFamily = "Stalinist One', cursive';"

        wrappedCh.appendChild(elem);
      }
    }

    function strokeAbout(){
      wrappedP.appendChild(wrappedCh);
      for (var i = 0; i < 7; i++) {
        var elem = document.createElement('h4'), 
        content = document.createTextNode(words[2]);




        elem.appendChild(content);

        elem.style.color = '#fff';
        elem.style.animation = "1.5s linear 0s infinite normal none running textanim";
        elem.style.fontSize = '36px';
        elem.style.textTransform = 'lowercase';
        elem.style.textAlign = 'center';
        elem.style.lineHeight = '2';
        elem.style.fontFamily = "Stalinist One', cursive';"

        wrappedCh.appendChild(elem);
      }
    }

    function strokeContacts(){
      wrappedP.appendChild(wrappedCh);
      for (var i = 0; i < 7; i++) {
        var elem = document.createElement('h4'), 
        content = document.createTextNode(words[3]);




        elem.appendChild(content);

        elem.style.color = '#fff';
        elem.style.animation = "1.5s linear 0s infinite normal none running textanim";
        elem.style.fontSize = '36px';
        elem.style.textTransform = 'lowercase';
        elem.style.textAlign = 'center';
        elem.style.lineHeight = '2';
        elem.style.fontFamily = "Stalinist One', cursive';"

        wrappedCh.appendChild(elem);
      }
    }








    function strokeLeave(){
      wrappedCh.innerHTML = ' ';
    }





    function flex(){
      wrappedP.style.display = 'flex';
    }

    function none(){
      wrappedP.style.display = 'none';
    }


    var buttons = document.querySelectorAll('.btn'),
    index, button;
    for (index = 0; index < buttons.length; index++) {
      button = buttons[index];
      button.addEventListener('mouseenter', flex);
      button.addEventListener('mouseleave', none);
      button.addEventListener('mouseleave', strokeLeave);
    }

  }
});




/////burger-menu

$('.header__burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('header__burger-active');
  $('.header__nav').toggleClass('header__nav-active')
});

//menu-animation
$(function() {
   $('.header__nav').toggleClass('anim__nav');
   $('.main__text').toggleClass('main__text-active');
});

//portfolioButton

$('.portfolio__mobile-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('portfolio__mobile-active');
  $('.portfolio__side').toggleClass('portfolio__side-active')
});