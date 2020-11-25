


var utm_list = '';

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20)
			$('#header').addClass('scroll');
		else
			$('#header').removeClass('scroll');
	});

});

$(document).ready(function(){
	$(".input-mask").inputmask({
		mask: "+7 (*99) 999-99-99",
		greedy: false,
		definitions: {
			'*': {
				validator: "[01234569]{1}",
			}
		}
	});
});

$(document).ready(function () {
	function falidator(item) {
			check = true;
			$(item).find('.required').each(function() {
				if($(this).hasClass('required') && $(this).val() == '') {
					check = false;
					$(this).css('border', '1px red solid');
				} else {
					$(this).css('border', '1px transparent solid');
				}
			});
			if(check) {
				return true;
			} else {
				return false;
			}
		}

	/**************************/
	$("#form1").submit(function () {
		if(!falidator(this)) return false;
		var data = $("#form1").serialize();
		if (utm_list) {
			data += utm_list;
		}
		$.ajax({
			type: "POST",
			url: "php/form1.php",
			data: data,
			success: function (html) {
				yaCounter47175648.reachGoal('order');
				gtag('event', 'order');
				gtag('event', 'submit',{'event_category': 'goal'});
			},
			complete: function (response) {
				$('#form1').trigger("reset");
			},
			beforeSend: function (jqXHR, settings) {

			}
		});
		$('#spasibo').arcticmodal();

		return false;
	});
	/**************************/

	/**************************/
	$("#form0").submit(function () {
		if (!falidator(this)) return false;
		var data = $("#form0").serialize();
		if (utm_list) {
			data += utm_list;
		}
		$.ajax({
			type: "POST",
			url: "php/form0.php",
			data: data,
			success: function (html) {
				yaCounter47175648.reachGoal('order');
				gtag('event', 'order');
				gtag('event', 'submit',{'event_category': 'goal'});
			},
			complete: function (response) {
				$('#form0').trigger("reset");
			},
			beforeSend: function (jqXHR, settings) {

			}
		});
		$('#call_me').arcticmodal('close');
		$('#spasibo').arcticmodal();
		return false;
	});
	/**************************/


});

function setPhone(ref, phone) {
	var telBaseHref = "tel:+7";
	var telBaseText = "+7 ";
	$(ref).text(telBaseText + phone);
	$(ref).attr('href', telBaseHref + phone.replace(/ |\(|\)/g, ''));
}

var phones = {
	'opm_7857' : '(495) 801 78 57',
	'opm_7855': '(495) 801 78 55',
	'opm_7851' : '(495) 801 78 51',
};

$(document).ready(function () {
	$(".scroll").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - $('#subheader').outerHeight();

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
		$('.mobile-menu-trigger').removeClass('open');
		$('.main_menu').removeClass('open');
	});
});

$(document).ready(function () {
	$('body').click(function (e) {
		if (!$(e.target).parents('.open').length && !$(e.target).hasClass('open')) {
			$('.open').removeClass('open');
		}
	});

	$('.mobile-menu-trigger').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('open');
	});
});


function getUTM(name) {
	var target = location.search.match(
		new RegExp("utm_" + name + "=([^&]+)")
	);

	return target ? target[1] : null;
}

$('.my_tabs .dt ul a').click(function () {
	$('.my_tabs div.item').removeClass('active')
		.eq($(this).parent().index()).addClass('active');

});



$('.example_block .row .block .more_button').click(function (e) {
	$(this).hide().closest('.item').find('.hid_block').slideToggle();
});

$(document).ready(function () {
	var owl = $('.resp1slider');
	owl.owlCarousel({
		loop: false,
		items: 1,
		nav: true,
		navText: false
	})
});

function toggleContent(elem){
	$(elem).closest('.block').toggleClass('active');
	$(elem).closest('.block').find('.hide').slideToggle();
}


$(document).ready(function () {
	var i, numberBlocks = $('.questions_block .row .block').size(), marginLeft = 0;

	if (window.innerWidth > 1000) {
		for (i = 1; i <= numberBlocks; i++) {
			if (i & 1) { marginLeft = '-20' } else { marginLeft = '20' };
			$('.questions_block .row .block:nth-child(' + i + ')').animate({ 'left': marginLeft });
		}
	}
});




$('#usloviya').click(function () {
	$('#usloviya_modal').arcticmodal();
});


$('.questions_block .ah2').click(function () {
	$(this).toggleClass('active').siblings('p').slideToggle();
});



$(document).ready(function () {
	$(".owl-carousel-1").owlCarousel({
		loop: true,
		//
		autoWidth: true,
		navText: [
			"<div class='prev'></div>",
			"<div class='next'></div>"
		],
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1,
				nav: false,
				center: true,

				margin: 10,
			},
			600: {
				items: 3,
				nav: true,
				center: false,

				margin: 15,
			},
			1000: {

				items: 3,
				nav: true,
				center: false,

				margin: 25,
			},
			1501: {
				items: 5,
				nav: true,
				center: false,

				autoplay: false,
				margin: 25,
				mouseDrag: false,
			},

		}
	});

	$(".owl-carousel-2").owlCarousel({
		loop: true,
		//
		autoWidth: true,
		navText: [
			"<div class='prev'></div>",
			"<div class='next'></div>"
		],
		dots: true,
		autoplay: true,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1,
				nav: false,
				center: true,

				margin: 10,
			},
			600: {
				items: 3,
				nav: true,
				center: false,

				margin: 15,
			},
			1000: {

				items: 3,
				nav: true,
				center: false,

				margin: 55,
			}

		}
	});
});

$(document).ready(function () {
	setTimeout(
		function () {
			$('.bottom .more').click(function () {
				($('#' + $(this).attr('data-more-id'))).arcticmodal();
			})

			$('.modal_call').click(function () {
				$(this).closest('.b-modal').arcticmodal('close');
				$('#call_me').arcticmodal();
				$('#title').text('');
				$(this).closest('.form1_block').find('.ah1').clone().appendTo('#title');
				var fieldValue = $(this).closest('.form1_block').find('.ah1').text();
				$('#VACANCY').val(fieldValue);

			});

			$('.tarif_block .dt li.it2').click(function () {
				$(this).find('a').addClass('active');
				$('.tarif_block .dt li.it1 a').removeClass('active');
			});

			$('.tarif_block .dt li.it1').click(function () {
				$(this).find('a').addClass('active');
				$('.tarif_block .dt li.it2 a').removeClass('active');
			});




			$('.call_me').click(function (e) {
				$('#call_me').arcticmodal();
				$('#title').text('');
				$('#price').text('');
				$(this).parent().prev().prev().clone().appendTo('#title');
				$(this).prev().clone().appendTo('#price');
				var fieldValue = $(this).parent().prev().prev().text();
				$('#VACANCY').val(fieldValue);
			});


			var utm_source = '';

			if (getUTM('source') != null) {
				utm_source = decodeURIComponent(getUTM('source')); // источник перехода по ссылки
				utm_list += '&utm_source=' + utm_source;
			}

			if (getUTM('medium') != null) {
				var utm_medium = decodeURIComponent(getUTM('medium')); // ключевой запрос
				utm_list += '&utm_medium=' + utm_medium;
			}

			if (getUTM('campaign') != null) {
				var utm_campaign = decodeURIComponent(getUTM('campaign')); // компания
				utm_list += '&utm_campaign=' + utm_campaign;
			}

			if (getUTM('term') != null) {
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
				var id = $(this).attr('href'),

					//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top - $('#subheader').outerHeight();

				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({ scrollTop: top }, 1500);

			});

		}, 3000);
});

$('.owl-special').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoWidth:true,
    margin:88,
    autoplay:true,
    autoplayTimeout:3000
});
