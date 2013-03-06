// Upload files to server
    function uploadFile(ruta) {
        var ft = new FileTransfer();

        ft.upload(ruta,
            "http://igitsoft.com/pgtest.php",
            function(result) {
               pgAlert("Archivo Subido Exitosamente."+path ,"Ok");
			   almacenarBD('nombre',$('#nombre').val());
			   almacenarBD('dispId',device.uuid);
            },
            function(error) {
                pgAlert('Error uploading file ' + path + ': ' + error.code,"Error");
            },
            { fileKey:"archivo",fileName: "abraham.jpg" });   
    }