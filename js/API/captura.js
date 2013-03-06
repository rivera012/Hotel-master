// Caputra

function TomarImagen(){
	// capture callback
	
var captureSuccess = function(mediaFiles) {
    for (i = 0; i < mediaFiles.length ; i++) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
	$('#foto').css('background-color','#CCC');
	$('#enviar').prepend('<img src="'+path+'" style="width:100%" />');
	uploadFile(path);
	//pgAlert(path,"Bien");
};

// capture error callback
var captureError = function(error) {
    pgAlert('Error code: ' + error.code, 'Capture Error');
};

// start audio capture
navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});

}