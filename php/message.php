<?php

require_once'connect_to_db.php';
message();

function message()
{
  $text = htmlspecialchars($_POST['text']);
  $latitude = htmlspecialchars($_POST['latitude']);
  $longitude = htmlspecialchars($_POST['longitude']);
  if(empty($latitude) || empty($text) || empty($longitude))
  {
    echo "One of the fields is empty";
    return;
  }
  if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
  $name = $_SESSION['name'];
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("INSERT INTO messages
                            (latitude, longitude, name, text)
                            VALUES
                            (?, ?, ?, ?)");
  $stmt->bind_param('ddss', $latitude, $longitude, $name, $text);
  $stmt->execute();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to create user';
    return;
  }
  $mysqli->close();
  echo 'success';
}

?>
