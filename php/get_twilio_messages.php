<?php

require_once 'twilio.php';

getMessages();
function getMessages()
{
  $id = $_POST['id'];
  if(empty($id) || $id !== intval($id))
  {
    echo json_encode(['status' => 'error', 'data' => 'No id specified']);
    return;
  }
  $messages = getChannelMessages($id);
  $sentMessages = array();
  for($messages as $message)
  {
    array_push($sentMessages, ['message' => $message->body]);
  }
  echo json_encode(['status' => 'success', 'data' => $sentMessages]);
}

?>
