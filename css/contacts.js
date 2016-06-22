



$(document).ready(function(){
	

	
    ymaps.ready(init);

	var myMap, myPlacemark;
	
	function init(){   
	
		myMap = new ymaps.Map("map", {
				center: [59.957470, 30.318633],
				zoom: 16, 
				controls: ["zoomControl", "fullscreenControl", "typeSelector"]
				});
		
		myPlacemark = new ymaps.Placemark([59.958134, 30.320185], { hintContent: 'Малая Посадская, 4к3, "БЭиСПР"', balloonContent: 'Малая Посадская, 4к3, "БЭиСПР"' });
		
		myMap.geoObjects.add(myPlacemark);
		
		myMap.behaviors.disable('scrollZoom');
	}	
	
	
	
	
	
	
});