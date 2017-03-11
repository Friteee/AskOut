
var markers = [];
var position = null;
var map = null;
$(document).ready(function(){
  $('#logoutButton').click(logout);
  $('#submitmsg').click(createMessage);
});

function initMap() {
    getPosition();
}

function getPosition()
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(wrapGpsPosition, wrapIpPosition,{timeout:5000});
  } else {
    wrapIpPosition("no error");
  }
}

function wrapIpPosition(error)
{
  position = {lat: parseFloat(geoplugin_latitude()),
              lng: parseFloat(geoplugin_longitude())};
  setPosition();
  sendPosition();
  getMessages();
}

function wrapGpsPosition(pos) {
  var crd = pos.coords;
  position = {lat: parseFloat(crd.latitude), lng: parseFloat(crd.longitude)};
  setPosition();
  sendPosition();
  getMessages();
};

function setPosition()
{
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: position
  });
}

function sendPosition()
{
  // create the request to server
  $.ajax({
    url: "../php/send_location.php",
    type: 'POST',
    data: position
  }).done(appendNearbyPeople);
}

function appendNearbyPeople(response)
{
  if (response == 'success')
  {
    getPeopleNear();
  }
  else
  {
    alert(response);
  }
}

function getPeopleNear()
{
  $.ajax({
    url: "../php/get_users_near_location.php",
    type: 'POST',
    data: position
  }).done(function(response)
  {
    console.log(response);
    response = JSON.parse(response);
    var data = response['data'];
    clearMarkers();
    data.forEach(addUser);
  });
}

function addUser(user)
{
  var marker = null;
  if (position.lng == user.longitude && position.lat == user.latitude)
  {
    marker = new google.maps.Marker({
      position: {lat : user.latitude, lng: user.longitude},
      map: map,
      label: 'You are here'
    });
  }
  else
  {
    marker = new google.maps.Marker({
      position: {lat : user.latitude, lng: user.longitude},
      map: map,
      label: user.name
    });
  }
  marker.addListener('click', function()
  {
    window.location.replace('profile.html?id=' + user.id);
  });
  markers.push(marker);
}

function logout(event){
  $.ajax({
    url: "../php/logout.php",
    type: 'POST'
  }).done(function(){
    window.location.replace('../index.html');
  });
  event.preventDefault();
}

function createMessage(event)
{
  var messageData = {longitude: position.lng, latitude: position.lat, text: $('#usermsg').val()};
  console.log(messageData['text']);
  $.ajax({
    url: "../php/message.php",
    type: 'POST',
    data: messageData
  }).done(function(response)
  {
    if(response != 'success')
      console.log(response);
  });
  event.preventDefault();
  $('#usermsg').val("");
  getMessages();
}

function getMessages()
{
  $('#chatbox').val("");
  $.ajax({
    url: "../php/get_messages.php",
    type: 'POST',
    data: position
  }).done(function(response)
  {
    response = JSON.parse(response);
    var data = response['data'];
    data.forEach(addMessage);
  });
}

function clearMarkers()
{
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function addMessage(message)
{
  $('#chatbox').val($('#chatbox').val() + message.name + ' : ' + message.text + '\n');
  // TODO
}
