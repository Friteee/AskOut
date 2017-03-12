<?php

require_once 'twilio.php';

sendMessage();
function sendMessage()
{
  $message = htmlspecialchars($_POST['message']);
  $id = $_POST['id'];
  if(empty($message) || $id !== intval($id) || empty($id))
    return "Message is empty";
  if (session_status() == PHP_SESSION_NONE)
    session_start();
  if(empty($_SESSION['name']))
  {
    echo "User is not logged on";
    return;
  }
  $name = $_SESSION['name'];
  createMessage($id, $name);
}

?>
