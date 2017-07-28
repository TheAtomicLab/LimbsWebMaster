document.getElementById("boton").onclick=function(){ 
//falta validación    
        var datos = {
    		name: $("#inputName").val(),
    		email: $("#inputEmail").val(),
    		message: $("#inputText").val()
		};
        $.ajax({
            type: "POST",
            url: "email.php",
            data: datos,
            success: function(){
              console.log("success");
            }

        });
 };