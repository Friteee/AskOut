<?php

require_once'connect_to_db.php';
getUser();

function getUser()
{
  $id = $_POST['id'];
  if(empty($id))
  {
    echo json_encode(['status' => 'error', 'data' => "Id is not provided"]);
    return;
  }
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("SELECT * FROM users WHERE
                            id = ?");
  $stmt->bind_param('i', $id);
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
                      'description' => $row['description']]);
  }
  $mysqli->close();
  echo json_encode(['status' => 'success', 'data' => $data]);
}

?>
