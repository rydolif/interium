$(function() {

//-------------------------------certificate slider---------------------------------------
	var swiper = new Swiper('.certificate__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.certificate__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.certificate__next',
        prevEl: '.certificate__prev',
      },
      breakpoints: {
	    992: {
	      slidesPerView: 2,
	      spaceBetween: 20
	    },
	    480: {
	      slidesPerView: 1,
	      spaceBetween: 20
	    },
	  }
    });


//-------------------------скорость якоря---------------------------------------
	$(".click").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	        top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
	});


//---------------------------tabs-----------------------
	$('.tabs__wrap').hide();
	$('.tabs__wrap:first').show();
	$('.tabs ul a:first').addClass('active');
	 $('.tabs ul a').click(function(event){
	  event.preventDefault();
	  $('.tabs ul a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs__wrap').hide();
	   var selectTab = $(this).attr('href');
	  $(selectTab).fadeIn();
	});


//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });


//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
        mail: "Введите Вашу почту",
        comments: "Введите комментарий",
        position: "Введите должность",
        company: "Введите название компании",
        addres: "Введите адресс",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          mail: jQuery('.form-' + index).find("input[name=mail]").val(),
          comments: jQuery('.form-' + index).find("input[name=comments]").val(),
          rated: jQuery('.form-' + index).find("input[name=rated]").val(),
          number: jQuery('.form-' + index).find("input[name=number]").val(),
          time: jQuery('.form-' + index).find("input[name=time]").val(),
          reservation: jQuery('.form-' + index).find("input[name=reservation]").val(),
          textarea: jQuery('.form-' + index).find("textarea[name=textarea]").val(),
          position: jQuery('.form-' + index).find("input[name=position]").val(),
          company: jQuery('.form-' + index).find("input[name=company]").val(),
          addres: jQuery('.form-' + index).find("input[name=addres]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val(),
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  };

});

