<?php
// Include PHPMailer classes
require_once '../PHPMailer/PHPMailer.php';
require_once '../PHPMailer/SMTP.php';
require_once '../PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Get the JSON data from POST request
$data = json_decode(file_get_contents('php://input'), true);
$name = htmlspecialchars($data['name']);
$subject = htmlspecialchars($data['subject']);
$body = $data['body'];

 
// Initialize PHPMailer
$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     // SMTP server
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'admin@a2zinsure.in';               // SMTP username
    $mail->Password   = 'fxlp izrr dsnp uaau';                        // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS`

    //Recipients
    $mail->setFrom('admin@a2zinsure.in', $name);
    $mail->addAddress('admin@a2zinsure.in', $name);                           // Add a recipient

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    http_response_code(200);
    echo json_encode(['message' => 'Email sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Email could not be sent']);
}
