<?php

require_once 'twilio.php';

getMessages();
function getMessages()
{
  $id = $_POST['id'];
  $sid = $_POST['sid'];
  if(empty($id) || empty($sid))
  {
    echo json_encode(['status' => 'error', 'data' => 'No id specified']);
    return;
  }
  if(session_status() == PHP_SESSION_NONE)
    session_start();
  if(empty($_SESSION['name']))
  {
    echo json_encode(['data' => 'User is not logged on', 'status' => 'error']);
    return;
  }
  $messages = getChannelMessages($id, $sid);
  $sentMessages = array();
  foreach($messages as $message)
  {
    array_push($sentMessages, ['message' => $_SESSION['name'] . ' : ' . $message->body]);
  }
  echo json_encode(['status' => 'success', 'data' => $sentMessages]);
}

?>
