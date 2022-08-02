<?php
/**
 * 
 * E-Mail-Formular
 * 
 * **/

// In der Produktion: Error-Reporting ausschalten
//error_reporting(0);

// Daten, die gesendet werden, sind in JSON-Format
header('Content-Type: application/json');


// if the url field is empty 
if(isset($_POST['url']) && $_POST['url'] == ''){
    // Variablen:
    $name = @$_POST['name'];
    $email = @$_POST['email'];
    $url = @$_POST['url'];
    $category = @$_POST['category'];
    $message = @$_POST['message'];
    $copy = @$_POST['copy'];
    $human = @$_POST['human'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // E-Mail-Adresse nicht valide
        echo json_encode(array(
         'error'=> true,
         'message' => 'E-Mail-Adresse nicht valide.'
        ));
    } elseif ($name == "") {
        // Name nicht ausgefüllt
        echo json_encode(array(
         'error'=> true,
         'message' => 'Namensfeld darf nicht leer sein.'
        ));
    } elseif ($message == "") {
        // Nachricht ist leer
        echo json_encode(array(
         'error'=> true,
         'message' => 'Nachricht darf nicht leer sein.'
        ));
    } elseif ($human == "false") {
        // Human-Feld nicht checked
        echo json_encode(array(
         'error'=> true,
         'message' => 'Diese Website nimmt nur Nachrichten von Menschen entgegen.'
        ));
    } else {
        //Alles gut.

        // E-Mails gehen an:     
        $youremail = 'mailformular@hutt.io';

        // E-Mail zusammenbauen
        $subject = '[' . $category . '] ' . 'Kontaktformular auf hutt.io';

        // prepare a "pretty" version of the message
        $body = "Nachricht von ". $name ." <". $email ."> über das Kontaktformular auf hutt.io:\r\n<br/>\r\n<br/>";
        $body .= "$message";

        // E-Mail-Adresse des Absenders verwenden, falls angegeben
        if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
            $headers = "From: " . $_POST['email'] . "\r\n";     
        } else {
            $headers = "From: " . $youremail . "\r\n"; 
        }

        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html\r\n";

        $retval = mail($youremail, $subject, $body, $headers);

        if($copy == "true") {
            $headers = "From: " . $youremail . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html\r\n";

            $subject = 'Kopie: [' . $category . '] ' . 'Kontaktformular auf hutt.io';
            $body = "Hallo ". $name . ",\r\n<br/>" . "du hast mir folgende Nachricht über das Kontaktformular auf hutt.io gesendet:\r\n<br/>\r\n<br/>" . $message . "\r\n<br/>\r\n<br/>Beste Grüße\r\n<br/>Jannis Hutt";
            mail($email, $subject, $body, $headers);
        }

        if ($retval == true) {
          echo json_encode(array(
             'success'=> true,
             'message' => 'Deine Nachricht wurde erfolgreich versendet.'
          ));
        } else {
          echo json_encode(array(
             'error'=> true,
             'message' => 'Deine Nachricht konnte leider nicht versendet werden.'
          ));
        }
    }

} else {

    echo json_encode(array(
     'error'=> true,
     'message' => 'Ich nehme keinen Spam an.'
    ));

}
