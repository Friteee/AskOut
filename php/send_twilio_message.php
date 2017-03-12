<?php

require_once 'twilio.php';

sendMessage();
function sendMessage()
{
  if (session_status() == PHP_SESSION_NONE)
    session_start();
  $message = htmlspecialchars($_POST['message']);
  $message = $_SESSION['name'] . ' : ' . $message;
  $id = $_POST['id'];
  $sid = htmlspecialchars($_POST['sid']);
  if(empty($message) || empty($id) || empty($sid))
  {
    echo "Message is empty";
    return;
  }
  if(empty($_SESSION['name']))
  {
    echo "User is not logged on";
    return;
  }
  $name = $_SESSION['name'];
  createMessage($id, $sid, $message);
}

?>
