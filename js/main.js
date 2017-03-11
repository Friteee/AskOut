

var location;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(wrapGpsPosition, wrapIpPosition);
    } else {
        wrapIpPosition("no error");
    }
}

function wrapIpPosition(error)
{
  var position = {lat: parseFloat(geoplugin_latitude()),
                  lng: parseFloat(geoplugin_longitude())};
  setPosition(position);
}

function wrapGpsPosition(pos) {
    var crd = pos.coords;
    var position = {lat: crd.latitude, lng: crd.longitude};
    setPosition(position);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
};

function setPosition(position)
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
