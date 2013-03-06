// Ajax

function registrar(nombre,lugar,email,telefono){
			$.ajax({
				
				type: "POST",
				url: "http://igitsoft.com/pgtest.php",
				data: "nom="+nombre+"&lug="+lugar+"&mai="+email+"&tel="+telefono
			}).done(function(msg){
					if(msg==1){
						pgAlert(msg,"Enviado");
						
					}
					else
						pgAlert(msg,"Cancelar");
				});
			
	}