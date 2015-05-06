function registrarColegiado() {

               	
				var xnumero = $("#numero").val();
				var xnombre = $("#nombre").val().toUpperCase();
    		  	var xapellidos = $("#apellidos").val().toUpperCase();
				var xtelefono = $("#telefono").val();
				var xcorreo = $("#correo").val();
				var xpa1 = $("#pa1").val();
				var xisla = $("#isla").val();
				
				var xregid = $("#regId").val();
				
					
				
		if(document.formulario1.numero.value.length ==  ""){
		alert("Escriba su número colegiado ");
		document.formulario1.numero.focus();
		return false;
		
		}else if(document.formulario1.nombre.value.length == ""){
		alert("Escriba su nombre");
		document.formulario1.nombre.focus();
		return false;
		
		}else if(document.formulario1.apellidos.value.length ==  ""){
		alert("Escriba sus apellidos ");
		document.formulario1.apellidos.focus();
		return false;	
		
		}else if(document.formulario1.telefono.value.length ==  ""){
		alert("Escriba su número movil ");
		document.formulario1.telefono.focus();
		return false;
		
		}else if(document.formulario1.correo.value.length == ""){
		alert("Escriba su correo");
		document.formulario1.correo.focus();
		return false;
		
		}else if(document.formulario1.pa1.value.length == ""){
		alert("Escriba su contraseña");
		document.formulario1.pa1.focus();
		return false;
		
		}else if(document.formulario1.isla.value.length == ""){
		alert("Elija su isla");
		document.formulario1.isla.focus();
		return false;
		
		}else		
			
			
			
			
			
			
		   $.ajax({
           type: "POST",
           url: "http://app.dentef.com/php/registrocolegiado.php",
           data: ({numero: xnumero, nombre: xnombre, apellidos: xapellidos, telefono: xtelefono, correo: xcorreo, isla: xisla, regid: xregid, pa1: xpa1}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
              		
			alert(data);
			
			if (data=="Datos guardados"){
			
		localStorage.numero = xnumero;
		localStorage.correo = xcorreo;
		localStorage.pass = xpa1;
		localStorage.nombre = xnombre;
		localStorage.apellidos = xapellidos;
		localStorage.telefono = xtelefono;
		
		inicio();
		globo();
		}
			
            }
			
		/*var n = xnumero.length;
		if(n == 1){
			xnumero = "38000"+xnumero;
		}else if(n == 2){
			xnumero = "3800"+xnumero;
		}else if(n == 3){
			xnumero = "380"+xnumero;
		}else{
			xnumero = "38"+xnumero;
		}*/
		
		
  }