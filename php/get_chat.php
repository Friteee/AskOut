<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once '../vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;
// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
$token = "e13175ce8269342d9c0c41168f4ce593";
$client = new Client($sid, $token);
$SERVICE_SID = "IS9aa8b1a079d8434bbea625fc649b1461";
?>
