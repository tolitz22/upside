<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];

    // Procesar y enviar el correo
    // Aquí puedes utilizar la función mail() de PHP o una librería como PHPMailer

    // Ejemplo utilizando la función mail():
    $to = 'lapu.torres@gmail.com';
    $subject = 'Nuevo formulario de contacto';
    $message = "Nombre: $name\n";
    $message .= "Email: $email\n";
    $message .= "Comentarios: $comments\n";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo 'success'; // Enviar respuesta de éxito al cliente
    } else {
        echo 'error';
    }
}
