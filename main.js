var map;
var panorama
var dataUrl = 'line.json'
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.718841, lng: -117.162027 },
    zoom: 14
  });

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: { lat: 32.718841, lng: -117.162027 },
      pov: {
        heading: 34,
        pitch: 10
      }
    }
  );

  map.setStreetView(panorama);

  map.data.loadGeoJson(dataUrl);

  map.data.setStyle({
    strokeColor:"#ff0000",
    strokeWeight:3,
    strokeOpacity:0.9,
    clickable:true
  });

  map.data.addListener('mouseover', function(event) {
    console.log(event.feature.getProperty('letter'));
  });

  map.data.addListener('click', function(event) {
    console.log(event.feature.getProperty('letter'));
  });
  
  fetch(dataUrl)
    .then(res=> res.json())
    .then(data => getCenters(data))
    .catch(error => console.log(error));

}

// add labels
function  getCenters(data) {
    data.features.forEach(element => {
        console.log(element);
        var fc = turf.featureCollection([element]);
        var center = turf.center(fc);

        console.log(center);
        var coords = element.geometry.coordinates;
        var coordLength = coords.length;

        console.log(coords);
        console.log(coords[0][0]);
        console.log(coords[0][coordLength-1]);
        var startPoint = turf.point(coords[0][0]);
        var endPoint = turf.point(coords[0][coordLength-1])

        var bearing = turf.bearing(startPoint, endPoint);
        console.log(bearing);

        var latLng = {lat:center.geometry.coordinates[1], lng:center.geometry.coordinates[0]}
        // Create markers
        var marker = new google.maps.Marker({
          position: latLng,
          map:map,
          label: {
            text: 'My Place',
            color: '#000',
            fontSize: '14px',
            fontWeight: 'bold',
            labelOrigin:[-2,-2]
          }
        });

        // console.log(center);
    });
}


// Call to init
// initMap();