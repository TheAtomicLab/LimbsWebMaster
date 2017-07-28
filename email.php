<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = "Email de contacto " . $email . "\n Mensaje: " . $_POST['message'];
    $to = "aca tu email";
    // mail (para, asunto, mensaje)
   mail($to, $name . " ha enviado un mensaje", $message);
}
?>