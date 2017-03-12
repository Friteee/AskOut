
$(document).ready(function()
{
  if(!('id' in get_url_vars()))
  {
    console.log("No id");
    return;
  }
  getUserProfile();
  getMessages();
  $('#submitmsg').click(createMessage);
});

function getUserProfile()
{
  // create the request to server
  $.ajax({
    url: "../php/get_user.php",
    type: 'POST',
    data: {id: get_url_vars()['id']}
  }).done(changeProfile);
}

function changeProfile(response)
{
  response = JSON.parse(response);
  var profile = response['data'][0];
  console.log(profile);
  $('#name').html(profile.name);
  $('#aboutus').html(profile.description);
}

function getMessages()
{
  // create the request to server
  $.ajax({
    url: "../php/get_twilio_messages.php",
    type: 'POST',
    data: {id: get_url_vars()['id']}
  }).done(processMessages);
}

function processMessages(response)
{
  console.log(response);
  $('#chatbox').val("");
  response = JSON.parse(response);
  if(response['status'] !== 'success')
  {
    alert(response['data']);
    return;
  }
  var data = response['data'];
  data.forEach(processMessage);
}

function processMessage(message)
{
  $('#chatbox').val($('#chatbox').val() + message.message + '\n');
}

function createMessage(event)
{
  // create the request to server
  $.ajax({
    url: "../php/send_twilio_message.php",
    type: 'POST',
    data: {id: get_url_vars()['id'], message: $('#usermsg').val()}
  });
  processMessage({message: $('#usermsg').val()});
  getMessages();
  event.preventDefault();
}


// function to get GET parameters
// Used as getUrlVars()['parameter']
// Copied from stack overflow answer
// Kinda surprised that neither JS nor JQuery has a url parameter getters
function get_url_vars()
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}
