// Eventos
$(document).ready(function() {
	document.addEventListener("deviceready",function(){
		
		var dispositivo = new Array();
		dispositivo[0] = device.name;
		dispositivo[1] = device.cordova;
		dispositivo[2] = device.platform;
		dispositivo[3] = device.uuid;
		
		 pgAlert(dispositivo,"Ok");
		
		$('#foto').click(function(){
		
		TomarImagen();
	});
	
		if(!isLogin())
			window.location.href= "#login";
			
			$('#enviar').tap(function(){
				var nombre= $('#nombre').val();
				var origen= $('#origen').val();
				var emial= $('#email').val();
				var telefono= $('#telefono').val();
			
				
				if(nombre && origen && email && telefono){
					registrar(nombre,origen,email,telefono);
					}
				else{
					pgAlert("Falta llenar algún campo","Reintentar");
					}
			});
		},false);
	
	
	
});


		