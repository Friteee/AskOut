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
  $sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
  $token = "e13175ce8269342d9c0c41168f4ce593";
  $service_sid = "IS9aa8b1a079d8434bbea625fc649b1461";
  $client = new Client($sid, $token);
  // Create the channel
  $channel = $client->chat
      ->services($service_sid)
      ->channels
      ->create(
          array(
              'friendlyName' => $name,
              'uniqueName' => strval($id)
          )
      );
  return $channel->sid;
}

function getChannelMessages($id, $channel_sid)
{
  $sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
  $token = "e13175ce8269342d9c0c41168f4ce593";
  $service_sid = "IS9aa8b1a079d8434bbea625fc649b1461";
  $client = new Client($sid, $token);
  // Create the channel
  $messages = $client->chat
      ->services($service_sid)
      ->channels($channel_sid)
      ->messages
      ->read();
  return $messages;
}

function createMessage($id, $channel_sid, $messageName)
{
  $sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
  $token = "e13175ce8269342d9c0c41168f4ce593";
  $service_sid = "IS9aa8b1a079d8434bbea625fc649b1461";
    // Initialize the client
    print($messageName);
  $client = new Client($sid, $token);

  //Send the message
  $message = $client->chat
      ->services($service_sid)
      ->channels($channel_sid)
      ->messages
      ->create($messageName);
}
