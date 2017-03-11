

var position = null;
// $( window ).on('beforeunload', function() {
//   $.ajax({
//     url: "php/logout.php",
//     type: 'POST',
//     async: false
//   }).done(function(){
//     alert("asd");
//   });
// });

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
}

function wrapGpsPosition(pos) {
  var crd = pos.coords;
  position = {lat: parseFloat(crd.latitude), lng: parseFloat(crd.longitude)};
  setPosition();
  sendPosition();
};

function setPosition()
{
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    label: 'You are here'
  });
}

function sendPosition()
{
  // create the request to server
  $.ajax({
    url: "php/send_location.php",
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
    url: "php/get_users_near_location.php",
    type: 'POST',
    data: position
  }).done(function(response)
  {
    console.log(response);
  });
}
