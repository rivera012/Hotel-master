// Notificaciones

function pgAlert(mensaje,boton){
	navigator.notification.alert(mensaje,null,"Recervaciones",boton);
	}
	
/*//Beep
function sonar(num){
navigator.notification.beep(5);
}

// Vibrador
function vibrar(){
	navigator.notification.vibrate(1000);
}

//Confirm
function confirmar(mensaje,botones,funcion){
	navigator.notification.confirm(mensaje,funcion,'Reservaciones',botones);
}

//cuando se minimiza o cierra la plicacion
document.addEventListener("pause",function(){ },false);

//Cuando se reanuda la apliacion
document.addEventListener("resume",function(){ },false);

//Detecta conexion a internet
document.addEventListener("online",function(){ },false);

//Cuando se desconecta la aplicacion de intenet
document.addEventListener("offline",function(){ },false);*/

