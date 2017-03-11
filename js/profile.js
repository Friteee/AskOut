
$(document).ready(getUserProfile);

function getUserProfile()
{
  if(!('id' in get_url_vars()))
  {
    console.log("No id");
    return;
  }
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
