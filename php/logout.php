<?php

require_once'connect_to_db.php';
logout();

function logout()
{
  $email = htmlspecialchars($_POST['email']);
  $password = htmlspecialchars($_POST['password']);
  if(empty($email) || empty($password))
  {
    echo "One of the fields is empty";
    return;
  }
  $password = hash('sha256', $password);
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ? AND passhash = ?");
  $stmt->bind_param('ss', $email, $password);
  $stmt->execute();
  $stmt_result = $stmt->get_result();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to login user';
    return;
  }
  if($stmt_result->num_rows == 0)
  {
    echo "User doesn't exist";
    return;
  }
  $row = $stmt_result->fetch_array();
  if (session_status() != PHP_SESSION_NONE) {
    session_destroy();
  }
  $stmt = $mysqli->prepare("UPDATE users SET logged_in = 0 WHERE email = ?");
  $stmt->bind_param('s', $email);
  $stmt->execute();
  $stmt->close();
  $mysqli->close();
  echo 'success';
}

?>
