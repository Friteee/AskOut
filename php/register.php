<?php

require_once'connect_to_db.php';
register();

function register()
{
  $description = htmlspecialchars($_POST['description']);
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $mobileNumber = htmlspecialchars($_POST['phone']);
  $password = htmlspecialchars($_POST['password']);
  $surname = htmlspecialchars($_POST['surname']);
  if(empty($name) || empty($email) || empty($mobileNumber) || empty($password))
  {
    echo "One of the fields is empty";
    return;
  }
  $mysqli = createMySQLi();
  $stmt = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->bind_param('s', $email);
  $stmt->execute();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to create user.';
    return;
  }
  if($stmt->num_rows != 0)
  {
    echo "User already exists";
    return;
  }
  $stmt->close();
  $stmt = $mysqli->prepare("INSERT INTO users
                            (name, surname, email, passhash, description, phone)
                            VALUES
                            (?, ?, ?, ?, ?, ?)");
  $stmt->bind_param('ssssss', $name, $surname, $email, $password, $description, $mobileNumber);
  $stmt->execute();
  if ($stmt->errno != 0)
  {
    $stmt->close();
    $mysqli->close();
    echo 'Failed to create user.';
    return;
  }
  $mysqli->close();
  echo 'success';
}

?>
