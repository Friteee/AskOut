<?php

require_once'connect_to_db.php';
register();

function register()
{
  $description = htmlspecialchars($_POST['description']);
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $mobileNumber = htmlspecialchars($_POST['mobnum']);
  $password = htmlspecialchars($_POST['password']);
  if(empty($name) || empty($email) || empty($mobileNumber) || empty($password))
  {
    echo "One of the fields is empty";
    return;
  }
  $mysqli = createMySQLi();
  $mysqli->close();
}

?>
