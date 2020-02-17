$(function() {

//-------------------------------preloader---------------------------------------
    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');

      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 2000);
    

//-------------------------------hero slider---------------------------------------
	var swiper = new Swiper('.portfolio__slider', {
        direction: 'vertical',
        slidesPerView: 1,
        effect: 'fade',
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
		   delay: 4500,
		   disableOnInteraction: false,
		},
    });

//-------------------------------hero slider---------------------------------------
	var swiper = new Swiper('.hero__slider', {
	  spaceBetween: 0,
	  effect: 'fade',
	  lazy: true,
	  autoplay: {
	    delay: 4500,
	    disableOnInteraction: false,
	  },
	});

//-------------------------------fullpage---------------------------------------
	// $('#fullpage').fullpage({
	//     // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], // фон цвет
	//     anchors: ['firstPage', 'secondPage', 'lastPage'], // якори
	//     menu: '#menu', // меню
	//     lazyLoad: true, // оптимизация
	//     navigation: true, // навигация
	//     // navigationTooltips: ['Мы', 'Портфолио', 'Контакты'], // названия меню
	//     showActiveTooltip: true, // меню
	//     slidesNavigation: true, // стрелки
	// });

	// // стрелки
	// $('#moveSectionUp').click(function(e){
	//     e.preventDefault();
	//     $.fn.fullpage.moveSectionUp();
	// });

	// $('#moveSectionDown').click(function(e){
	//     e.preventDefault();
	//     $.fn.fullpage.moveSectionDown();
	// });

//-------------------------------lang slider---------------------------------------
	$('.nav a').each(function () {
	  var location = window.location.href;
	  var link = this.href; 
	  if(location == link) {
	      $(this).addClass('active');
	  }
	});

});

