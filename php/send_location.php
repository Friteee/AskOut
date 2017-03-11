<?php

require_once'connect_to_db.php';
sendLocation();

function sendLocation()
{
  $latitude = htmlspecialchars($_POST['lat']);
  $longitude = htmlspecialchars($_POST['lng']);
  if(empty($longitude) || empty($latitude))
  {
    echo "One of the fields is empty";
    return;
  }
  // // Try to convert latitude and longitude to floating point numbers
  // if(strval(floatval($latitude)) != $latitude || strval(floatval($longitude)) != $longitude)
  // {
  //   echo "wrong latitude/longitude provided";
  //   return;
  // }
  $latitude = floatval($latitude);
  $longitude = floatval($longitude);
  if (session_status() == PHP_SESSION_NONE)
  {
    session_start();
  }
  if (empty($_SESSION) ||
      empty($_SESSION['email']))
  {
    echo "Person is not logged in";
    return;
  }
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("UPDATE users SET latitude = ?, longitude = ? WHERE email = ?");
  $stmt->bind_param('dds', $latitude, $longitude, $_SESSION['email']);
  $stmt->execute();
  $stmt_result = $stmt->get_result();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to update location.';
    return;
  }
  $mysqli->close();
  echo 'success';
}

?>
