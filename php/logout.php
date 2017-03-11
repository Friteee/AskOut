<?php

require_once'connect_to_db.php';
logout();

function logout()
{
  if (session_status() != PHP_SESSION_NONE) {
    session_start();
  }
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("UPDATE users SET logged_in = 0 WHERE email = ?");
  $stmt->bind_param('s', $_SESSION['email']);
  $stmt->execute();
  session_destroy();
  $stmt->close();
  $mysqli->close();
  echo 'success';
}

?>
