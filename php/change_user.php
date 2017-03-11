<?php

require_once'connect_to_db.php';
register();

function register()
{
  $description = htmlspecialchars($_POST['description']);
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $password = htmlspecialchars($_POST['password']);
  $surname = htmlspecialchars($_POST['surname']);
  if(empty($name) || empty($email) || empty($password))
  {
    echo "One of the fields is empty";
    return;
  }
  if (session_status() == PHP_SESSION_NONE)
  {
    session_start();
  }
  if(empty($_SESSION['id']))
  {
    echo "Oops, no id in session";
  }
  $password = hash('sha256', $password);
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->bind_param('s', $email);
  $stmt->execute();
  $stmt_result = $stmt->get_result();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to create user.';
    return;
  }
  if($stmt_result->num_rows != 0)
  {
    echo "User already exists";
    return;
  }
  $stmt->close();
  $stmt = $mysqli->prepare("UPDATE users
                            SET name = ?,
                                surname = ?,
                                email = ?,
                                passhash = ?,
                                description = ?,
                            WHERE id = ?");
  $stmt->bind_param('ssssssi', $name, $surname, $email, $password, $description, $_SESSION['id']);
  $stmt->execute();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to create user';
    return;
  }
  $_SESSION['email'] = $email;
  $_SESSION['name'] = $name;
  $mysqli->close();
  echo 'success';
}

?>
