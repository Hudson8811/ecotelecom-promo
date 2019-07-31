


var utm_list = '';

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20)
			$('#header').addClass('scroll');
		else
			$('#header').removeClass('scroll');
	});

});	
	
$(".input-mask").mask("+7 (999) 999-99-99");

$(document).ready(function(){
	function falidator(item) {
		check = true;
		$(item).find('.required').each(function() {
			if($(this).hasClass('required') && $(this).val() == '') {
				check = false;
				$(this).css('border', '1px red solid' );
			} else {
				$(this).css('border', '1px #fff solid');
			}
		});
		if(check) {
			return true;
		} else {
			return false;
		}
	}
	

	/**************************/
	$("#form1").submit(function(){
		if(!falidator(this)) return false;
		var data = $("#form1").serialize();
		if(utm_list) {
            data += utm_list;
        } 
		$.ajax({ 
			type: "POST", 
			url: "php/form1.php",
			data: data,
			success: function(html) { 
			yaCounter49966909.reachGoal('order');
            gtag('event', 'submit') ;
			},
			complete: function(response) {
				$('#form1').trigger("reset");
			},
			beforeSend: function(jqXHR, settings) {
				Comagic.addOfflineRequest({
					name: $("#name1").val(),
					phone: $("#phone1").val(),
					message: $("#adr1").val()+' '+$("#adr11").val(),
					// group_id: 1234
				}, function(o) {
					console.log(o);
				});
			}
		});
		$('#spasibo').arcticmodal();

		return false;
	});
	/**************************/
	
	/**************************/
	$("#form0").submit(function(){
		if(!falidator(this)) return false;
		var data = $("#form0").serialize();
		if(utm_list) {
            data += utm_list;
        } 
		$.ajax({ 
			type: "POST", 
			url: "php/form0.php",
			data: data,
			success: function(html) { 
			yaCounter49966909.reachGoal('order');
                gtag('event', 'tarif');
			},
			complete: function(response) {
				$('#form0').trigger("reset");
			},
			beforeSend: function(jqXHR, settings) {
				Comagic.addOfflineRequest({
					name: $("#name0").val(),
					phone: $("#phone0").val(),
					message: $("#adr0").val()+' '+$("#adr01").val(),
					// group_id: 1234
				}, function(o) {
					console.log(o);
				});
			}
		});
		$('#call_me').arcticmodal('close');
		$('#spasibo').arcticmodal();
		return false;
	});
	/**************************/

	
});

function setPhone(ref, phone)
{
	var telBaseHref = "tel:+7";
	var telBaseText = "+7 ";
	$(ref).text(telBaseText + phone);
	$(ref).attr('href', telBaseHref + phone.replace(/ |\(|\)/g, ''));
}

var phones = {
	'yandex' : '(499) 505 56 27',
	'google' : '(499) 505 56 12',
	'vk' : '(499) 505 56 85',
	'yandex_audience' : '(499) 505 57 63',
	'mobile' : '(499) 505 57 69'
};

$(document).ready(function(){
	    var utm_source = '';
		
		if(getUTM('source') != null) {
			utm_source = decodeURIComponent(getUTM('source')); // источник перехода по ссылки
			utm_list += '&utm_source=' + utm_source;
		}
		
		if(getUTM('medium') != null) {
			var utm_medium = decodeURIComponent(getUTM('medium')); // ключевой запрос
			utm_list += '&utm_medium=' + utm_medium;
		}
		
		if(getUTM('campaign') != null) {
			var utm_campaign = decodeURIComponent(getUTM('campaign')); // компания
			utm_list += '&utm_campaign=' + utm_campaign;
		}
		
		if(getUTM('term') != null) {
			var utm_term = decodeURIComponent(getUTM('term')); // ключевые слова
			utm_list += '&utm_term=' + utm_term;
		}
		if (utm_source && phones[utm_source]) {
			setPhone('.telphone', phones[utm_source]);
		}
	    $(".scroll1").click(function (event) {
	        //отменяем стандартную обработку нажатия по ссылке
	        event.preventDefault();
	 
	        //забираем идентификатор бока с атрибута href
	        var id  = $(this).attr('href'),
	 
	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top - $('#subheader').outerHeight();
	         
	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({scrollTop: top}, 1500);
	    });
});

$(document).ready(function(){
	    $(".scroll").click(function (event) {
	        //отменяем стандартную обработку нажатия по ссылке
	        event.preventDefault();
	 
	        //забираем идентификатор бока с атрибута href
	        var id  = $(this).attr('href'),
	 
	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top - $('#subheader').outerHeight();
	         
	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({scrollTop: top}, 1500);
			$('.mobile-menu-trigger').removeClass('open');
			$('.main_menu').removeClass('open');
	    });
});

$(document).ready(function(){
	$('body').click(function(e){
        if(!$(e.target).parents('.open').length && !$(e.target).hasClass('open')) {
            $('.open').removeClass('open');
        }
    });
    
    $('.mobile-menu-trigger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.main_menu').toggleClass('open');
    });
});

$('.call_me').click(function(e){
    $('#call_me').arcticmodal();
	$('#title').text('');
	$(this).parent().prev().clone().appendTo('#title');
	var fieldValue = $(this).parent().prev().text();
		$('#VACANCY').val(fieldValue);
});

function getUTM(name){ 
  var target = location.search.match(
     new RegExp("utm_"+name+"=([^&]+)")
  );

  return target ? target[1] : null;
}

$('.my_tabs .dt ul a').click(function() {
	$('.my_tabs div.item').removeClass('active')
	                  .eq($(this).parent().index()).addClass('active');
	
});

$('.tarif_block .dt li.it2').click(function() {
	$(this).find('a').addClass('active');
	$('.tarif_block .dt li.it1 a').removeClass('active');
});

$('.tarif_block .dt li.it1').click(function() {
	$(this).find('a').addClass('active');
	$('.tarif_block .dt li.it2 a').removeClass('active');
});

$('.example_block .row .block .more_button').click(function(e){
    $(this).hide().closest('.item').find('.hid_block').slideToggle();
});

$(document).ready(function() {
              var owl = $('.resp1slider');
              owl.owlCarousel({
                loop: false,
                items: 1,
				nav:true,
				navText:false
              })
            });
			
$('.equipment_block .block .left_block .more_button').click(function(e){
    $(this).closest('.block').toggleClass('active');
    $(this).closest('.block').find('.hide').slideToggle();
});


$(document).ready(function() {
	var i, numberBlocks = $('.questions_block .row .block').size(), marginLeft = 0;

	if(window.innerWidth > 1000){
		for (i = 1; i <= numberBlocks; i++) {
			if (i & 1) {marginLeft= '-20'} else { marginLeft= '20'};
			$('.questions_block .row .block:nth-child(' + i + ')').animate({'left': marginLeft});
		}
	}
});

$('#more1').click(function(){
    $('#more_modal1').arcticmodal();
});

$('#more2').click(function(){
    $('#more_modal2').arcticmodal();
});

$('#more3').click(function(){
    $('#more_modal3').arcticmodal();
});

$('#more4').click(function(){
    $('#more_modal4').arcticmodal();
});

$('#more5').click(function(){
    $('#more_modal5').arcticmodal();
});

$('#more6').click(function(){
    $('#more_modal6').arcticmodal();
});

$('#more7').click(function(){
    $('#more_modal7').arcticmodal();
});

$('.modal_call').click(function(){
	$(this).closest('.b-modal').arcticmodal('close');
    $('#call_me').arcticmodal();
	$('#title').text('');
	$(this).closest('.form1_block').find('.ah1').clone().appendTo('#title');
	var fieldValue = $(this).closest('.form1_block').find('.ah1').text();
		$('#VACANCY').val(fieldValue);
	console.log(fieldValue);
});



$('.questions_block .ah2').click(function(){
	$(this).toggleClass('active').siblings('p').slideToggle();
});