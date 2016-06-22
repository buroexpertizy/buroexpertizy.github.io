$(document).ready(function(){


	//раскрытие меню Материалы
	$('#material a.slave').click(function(){
		var target = $(this).attr('data-target');
		target = $('#'+target);
		if(target.hasClass('active')) target.removeClass('active');
		else target.addClass('active');
	});
	
	
});