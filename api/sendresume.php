<?php
require_once '../PHPMailer/PHPMailer.php';
require_once '../PHPMailer/SMTP.php';
require_once '../PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = array();

    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $file = $_FILES['file'];

        $allowed = array('pdf' => 'application/pdf');

        $fileType = mime_content_type($file['tmp_name']);

        if (array_search($fileType, $allowed) !== false) {
            $response['status'] = 'success';
            $response['message'] = 'File is valid';

            $name = $_POST['name'];
            $subject = $_POST['subject'];
            $body = $_POST['body'];

            $mail = new PHPMailer(true);
            try {
                // Server settings
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'admin@a2zinsure.in';
                $mail->Password   = 'fxlp izrr dsnp uaau';
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587;

                // Recipients
                $mail->setFrom('admin@a2zinsure.in', $name);
                $mail->addAddress('admin@a2zinsure.in', $name);
                $mail->addAttachment($file['tmp_name'], $file['name']);

                // Content
                $mail->isHTML(true);
                $mail->Subject = $subject;
                $mail->Body    = $body;

                $mail->send();
                $response['email_status'] = 'success';
                $response['email_message'] = 'Email sent successfully';
            } catch (Exception $e) {
                $response['email_status'] = 'error';
                $response['email_message'] = "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Invalid file type';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'No file uploaded or upload error';
    }

    // Send the response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}
