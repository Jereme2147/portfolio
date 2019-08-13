<?php
    $email = $_POST['email'];
    $first = $_POST['first'];
    $last = $_POST['last'];
    $business = $_POST['business'];
    $message = $_POST['message'];
    $error = '<script>alert("Please enter a message")</script>';
    // echo "Email $email First $first Last $last Business $business Message $message";
    if ($message != '') {
        mail('info@jeremedaniels.com', 'Customer', $message . ' ' . $email);
        header("Location: ../index.html");
    } else {
        header("Location: ../index.html");
    }

?>