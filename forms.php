<?php
    $to = "optimistic.mailgmail.com";
    $subject = "New order";

    $txt = "Name: " . $_POST["name"] . " \n"
           . "Mail: " . $_POST["email"] . " \n"
           . "Phone: " . $_POST["phone"] . " \n"
           . "Product: " . $_POST["product"] . " \n"
           . "Price: " . $_POST["price"] . " \n"
           . "Qty: " . $_POST["qty"] . " \n"
           . "Where came: " . $_POST["section"];

    mail($to,$subject,$txt);
?>
