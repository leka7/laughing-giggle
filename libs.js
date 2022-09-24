document.addEventListener('DOMContentLoaded', function() {
	$(document).ready(function(){

		$('body').addClass('js');

		$("body").on("click", "[data-ajaxc]:not(.is-active)", function(){
			var $castom = $(this).attr("data-ajaxc"),
			$targetBox = $(this).closest('.sect').children('.sect-cont');
			$targetBox.html('<span class="fa fa-spinner fa-spin"></span>');
			$.post(dle_root+"engine/ajax/custom.php", {castom:$castom}, function(data){
				$targetBox.html(data);
			});
			$(this).addClass('is-active').siblings().removeClass('is-active');
		});
		
		$('body').on('click','.js-login',function(){
			if ( $('.login-overlay').length < 1 ) {
				$('.login-box').before('<div class="login-overlay"></div>');
				$('.login-box').prepend('<div class="login-close"><span class="fa fa-times"></span></div>');
			};
			$('.login-box, .login-overlay').fadeIn(200);
			$('#side-panel, .btn-close').removeClass('active');
			$('#close-overlay').fadeOut(200);
			$('body').removeClass('opened-menu');
			return false;
		});
		$('body').on('click','.login-overlay, .login-close',function(){
			$('.login-box, .login-overlay').fadeOut(200);
		});ы
	});
	$(document).ready(function check_reg_daten () {

				if(document.forms.registration.name.value == '') {

					DLEalert('Имя пользователя не может быть пустым!', dle_info);return false;

				}

				if(document.forms.registration.password1.value.length < 6) {

					DLEalert('Длина пароля должна быть не менее 6 символов!', dle_info);return false;

				}

				if(document.forms.registration.password1.value != document.forms.registration.password2.value) {

					DLEalert('Оба введённых пароля должны быть идентичны!', dle_info);return false;

				}

				if(document.forms.registration.email.value == '') {

					DLEalert('Введён неверный e-mail адрес!', dle_info);return false;

				}

				return true;

			})
});