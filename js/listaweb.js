function listaweb(data) {
			
		
			
			$.ajax({
		url: 'http://app.dentef.com/php/listaweb.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
		var web = item.web;
			
		window.open(web,'_blank','location=no','closebuttoncaption=Return');	
				 
		});
		
		}
		
		});
		
    }  


function abrirweb(ruta){
	
	var xruta = ruta;
	
	window.open(xruta,'_blank','location=no','closebuttoncaption=Return');
	
	}