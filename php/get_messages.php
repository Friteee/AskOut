<?php

require_once'connect_to_db.php';
getMessages();

function getMessages()
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
  $mysqli = createMySQLi();
  $diff = 0.5;
  $stmt = $mysqli->prepare("SELECT * FROM messages WHERE
                            longitude >= (? - $diff) AND longitude <= (? + $diff) AND
                            latitude >= (? - $diff) AND latitude <= (? + $diff)
                            ORDER BY creation LIMIT 100
                            ");
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
                      'text'        => $row['text']]);
  }
  $mysqli->close();
  echo json_encode(['status' => 'success', 'data' => $data]);
}

?>
