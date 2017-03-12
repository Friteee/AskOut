<?php

require_once'connect_to_db.php';
getUsersNearLocation();

function getUsersNearLocation()
{
  $latitude = htmlspecialchars($_POST['lat']);
  $longitude = htmlspecialchars($_POST['lng']);
  if(empty($longitude) || empty($latitude))
  {
    echo json_encode(['status' => 'error', 'data' => "One of the fields is empty"]);
    return;
  }
  $latitude = floatval($latitude);
  $longitude = floatval($longitude);
  if (session_status() == PHP_SESSION_NONE)
  {
    session_start();
  }
  if (empty($_SESSION) ||
      empty($_SESSION['email']))
  {
    echo json_encode(['status' => 'error', 'data' => 'Person is not logged in.']);
    return;
  }
  $mysqli = createMySQLi();
  $latDiff = 0.02;
  $lngDiff = 0.04;
  $stmt = $mysqli->prepare("SELECT * FROM users WHERE
                            longitude >= (? - $lngDiff) AND longitude <= (? + $lngDiff) AND
                            latitude >= (? - $latDiff) AND latitude <= (? + $latDiff) AND
                            track = 1");
  $stmt->bind_param('dddd', $longitude, $longitude, $latitude, $latitude);
  $stmt->execute();
  $stmt_result = $stmt->get_result();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo json_encode(['status' => 'error', 'data' => 'Failed to update location.']);
    return;
  }
  $data = array();
  while($row = $stmt_result->fetch_array())
  {
    array_push($data,['name'        => $row['name'],
                      'latitude'    => $row['latitude'],
                      'longitude'   => $row['longitude'],
                      'description' => $row['description'],
                      'id'          => $row['id'],
                      'sid'         => $row['chat_sid']]);
  }
  $mysqli->close();
  echo json_encode(['status' => 'success', 'data' => $data]);
}

?>
