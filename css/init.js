




function dlgAsk(){
	
	onVail();
	$('body').append('\
			<div id="dlgAsk" class="dlg dlg_form_1">\
				<div class="lineClose"><div class="butClose"></div></div>\
				<div class="outerDiv">\
					<div class="lineCap"><div class="cap">Задать вопрос</div></div>\
					<div class="innerDiv">\
						<table>\
							<tr><td class="label">*</td><td><input class="name" placeholder="Имя"></td><td><input class="company" placeholder="Компания"></td></tr>\
							<tr><td class="label">*</td><td><input class="mail" placeholder="Электронаая почта"></td><td><input class="phone" placeholder="Телефон"></td></tr>\
							<tr><td class="label">*</td><td colspan="2"><textarea class="message" placeholder="Сообщение"></textarea></td></tr>\
						</table>\
						<div class="butLine"><div class="error"></div><div class="butSend noselect bg_orange">Отправить</div></div>\
					</div>\
				</div>\
		</div>');
		
		$('#dlgAsk .butClose').click(function(){
			$('#veil').remove();
			$('#dlgAsk').remove();
		});
		$('#dlgAsk .butSend').click(function(){
			
			if($('#dlgAsk .butSend').hasClass('done')){
				console.log('уже отправлял');
				return;
			}

			var name=$('#dlgAsk .name').val();
			var mail=$('#dlgAsk .mail').val();
			var phone=$('#dlgAsk .phone').val();
			var company=$('#dlgAsk .company').val();
			var message=$('#dlgAsk .message').val();

			if(!name){$('#dlgAsk .error').text('Заполните поле Имя');return;}
			if(!mail){$('#dlgAsk .error').text('Заполните поле E-mail');return;}			
			if(!message){$('#dlgAsk .error').text('Заполните поле Cообщение');return;}

			$('#dlgAsk .butSend').addClass('done');
			console.log('отправил');
			
			$.ajax({
				url:'sys/mail_ask.php?t='+(new Date().getTime()),
				type:'POST',
				data:{name:name,mail:mail,phone:phone,company:company,message:message},
				success: function(src){

					$('#dlgAsk .innerDiv').remove();
					if(src.trim()=='1'){
						$('#dlgAsk').append('<div class="msg color2">Ваше сообщение успешно отправлено!</div>');						
						console.log('good');
					}				
					else{
						$('#dlgAsk').append('<div class="msg color2">Во время отправки сообщения произошел сбой. Приносим извинения за неудобства.</div>');	
						console.log('no good');
					}
				},
				error: function(e, xhr, settings, exception){
					console.error('error');
				}
			})
		});
}


function dlgMakeOrder(){
	
	onVail();
	$('body').append('\
			<div id="dlgMakeOrder" class="dlg dlg_form_1">\
				<div class="lineClose"><div class="butClose"></div></div>\
				<div class="outerDiv">\
					<div class="lineCap"><div class="cap">Оформить заказ</div></div>\
					<div class="comments">Укажите наименование продукции и контактные данные. С Вами свяжется специалист отдела продаж. Спасибо! </div>\
					<div class="innerDiv">\
						<table>\
							<tr><td class="label">*</td><td><input class="name" placeholder="ФИО"></td><td><input class="company" placeholder="Компания"></td></tr>\
							<tr><td class="label">*</td><td><input class="mail" placeholder="Электронная почта"></td><td><input class="phone" placeholder="Телефон"></td></tr>\
							<tr><td class="label">*</td><td colspan="2"><textarea class="message" placeholder="Сообщение"></textarea></td></tr>\
						</table>\
						<div class="butLine"><div class="error"></div><div class="butSend noselect bg_orange">Отправить</div></div>\
					</div>\
				</div>\
		</div>');
		
		$('#dlgMakeOrder .butClose').click(function(){
			$('#veil').remove();
			$('#dlgMakeOrder').remove();
		});
		$('#dlgMakeOrder .butSend').click(function(){
			
			if($('#dlgMakeOrder .butSend').hasClass('done')){
				console.log('уже отправлял');
				return;
			}

			var name=$('#dlgMakeOrder .name').val();
			var mail=$('#dlgMakeOrder .mail').val();
			var phone=$('#dlgMakeOrder .phone').val();
			var company=$('#dlgMakeOrder .company').val();
			var message=$('#dlgMakeOrder .message').val();

			if(!name){$('#dlgMakeOrder .error').text('Заполните поле ФИО');return;}
			if(!mail){$('#dlgMakeOrder .error').text('Заполните поле E-mail');return;}			
			if(!message){$('#dlgMakeOrder .error').text('Заполните поле Cообщение');return;}

			$('#dlgMakeOrder .butSend').addClass('done');
			console.log('отправил');
			
			$.ajax({
				url:'sys/mail_makeorder.php?t='+(new Date().getTime()),
				type:'POST',
				data:{name:name,mail:mail,phone:phone,company:company,message:message},
				success: function(src){

					$('#dlgMakeOrder .innerDiv').remove();
					$('#dlgMakeOrder .comments').remove();
					if(src.trim()=='1'){
						$('#dlgMakeOrder').append('<div class="msg color2">Ваше сообщение успешно отправлено!</div>');						
						console.log('good');
					}				
					else{
						$('#dlgMakeOrder').append('<div class="msg color2">Во время отправки сообщения произошел сбой. Приносим извинения за неудобства.</div>');	
						console.log('no good');
					}
				},
				error: function(e, xhr, settings, exception){
					console.error('error');
				}
			})
		});
}


function dlgCourses(){
	
	if($('#regCourses .butSend').hasClass('done')){
		console.log('уже отправлял');
		return;
	}

	var course=$('#regCourses .course').val();
	var name=$('#regCourses .name').val();
	var mail=$('#regCourses .mail').val();
	var phone=$('#regCourses .phone').val();
	var company=$('#regCourses .company').val();
	var message=$('#regCourses .message').val();

	if(!name){$('#regCourses .error').text('Заполните поле Имя');return;}
	if(!mail){$('#regCourses .error').text('Заполните поле E-mail');return;}

	$('#regCourses .butSend').addClass('done');
	console.log('отправил');
	
	$.ajax({
		url:'sys/mail_courses.php?t='+(new Date().getTime()),
		type:'POST',
		data:{course:course,name:name,mail:mail,phone:phone,company:company,message:message},
		success: function(src){

			var height = $('#regCourses').height();
			$('#regCourses table').remove();
			$('#regCourses .butLine').remove();			
			$('#regCourses').height(height);
			
			if(src.trim()=='1'){
				$('#regCourses').append('<div class="msg color2">Ваша заявка успешно отправлена!</div>');
				console.log('good');
			}				
			else{
				$('#regCourses').append('<div class="msg color2">Во время отправки заявки произошел сбой. Приносим извинения за неудобства.</div>');	
				console.log('no good');
			}
		},
		error: function(e, xhr, settings, exception){
			console.error('error');
		}
	})

}




function calcHeightCenter(){ //не используется
	
	var heightHeader = $('#header').height();
	var heightMenu = $('#menu').height();	
	var heightFooter = $('#footer').height();	
	var heightWindow = window.innerHeight;

	heightCenter = heightWindow - heightHeader - heightMenu - heightFooter;
	$('#center').css('min-height', heightCenter+'px');
}



//ресайз меню продукция
function menu_products_resize(){
	if ($('#menu_products').length == 0) return;
	setTimeout(
		function(){
			//var heightMenu = $('#menu_products').height();
			var heightBlockRight = $('.blockRight').height();
			//if (heightMenu<heightContent) $('#menu_products').height(heightContent);	
			$('#menu_products').height(heightBlockRight);
		},0
	)
}



$(window).resize(function(){})


$(document).ready(function(){

	//menu_products_resize();
	
	//По наведению на кнопку меню Продукция включение всплывающего меню Продукция
	$('#menu .products').hover(
		function(){
			if(window.location.pathname.search('products') == -1) $('#menu #menu_products2').addClass('active');
		},
		function(e){
			if(e.toElement.id != 'menu_products2' && $(e.toElement).parents('#menu_products2').length==0) $('#menu #menu_products2').removeClass('active');
		}
	);
	$('#menu_products2').mouseleave(function(e){
		$('#menu #menu_products2').removeClass('active');
			
	});	
	
	
	//кнопка Задать вопрос
	$('#butAsk').click(function(){
		dlgAsk();	
	});	

	//кнопка Оформить заказ
	$('#butMakeOrder').click(function(){
		dlgMakeOrder();	
	});		
	
	//кнопка Записаться на курсы
	$('#regCourses .butSend').click(function(){
		dlgCourses();	
	});		
	
	
	
});//end



