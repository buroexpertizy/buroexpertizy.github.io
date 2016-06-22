

//вуаль
function onVail(){
	$('body').append('<div id="veil"></div>');
}

//конвертация цены(в копейках) [число - форматированный текст]
function convertPrice(price){
	
	if(!price) return '';
	price=price.toString();
	
	var priceText,part,rubFormat='';
	var length=price.length;
	var rub=price.substr(0,length-2);
	var kop=price.substr(length-2,2);

	length=length-2;
	while (length>3){
		part=rub.substr(length-3,3);
		rubFormat=' '+part+rubFormat;
		length=length-3;
	}
	
	part=rub.substr(0,length);
	rubFormat=part+rubFormat;
	
	priceText=rubFormat+','+kop;
	
	return priceText;
}