<?php
// Get the PHP helper library from twilio.com/docs/php/install
require_once '/path/to/vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/user/account
$sid = "ACa0c7fb496a58af7fcc32e8c5e41bbe2e";
$token = "e13175ce8269342d9c0c41168f4ce593";
$client = new Client($sid, $token);

$client->messages->create(
    "+15558675309", //change to the user mobile number variable
    array(
        'from' => '+442033222462',
        'body' => "User (name and surname) with the number (mobile number) is checked in.",
        'mediaUrl' => "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    )
);
>