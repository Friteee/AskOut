<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once '../vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;
// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
$token = "e13175ce8269342d9c0c41168f4ce593";
$service_sid = "IS9aa8b1a079d8434bbea625fc649b1461";

function createChannel($id, $name)
{
  $client = new Client($sid, $token);
  // Create the channel
  $channel = $client->ipMessaging
      ->services($service_sid)
      ->channels
      ->create(
          array(
              'friendlyName' => $name,
              'uniqueName' => strval($id)
          )
      );
}

function getChannelMessages($id)
{
  $client = new Client($sid, $token);
  // Create the channel
  $messages = $client->ipMessaging
      ->services($service_sid)
      ->channels($id)
      ->messages
      ->read();
  return $messages;
}

function createMessage($id, $messageName)
{
    // Initialize the client
  $client = new Client($sid, $token);

  //Send the message
  $message = $client->ipMessaging
      ->services($service_id)
      ->channels($id)
      ->messages
      ->create($messageName);
}
