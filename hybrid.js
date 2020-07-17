var panorama;
var marker;
var content = document.createElement('div');
var peman;
content.innerHTML = '<img src="person.svg" alt="">';
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/daudi97/ckcouhqzd0l1f1io3zw42a9s7', // stylesheet location
    center: [-117.15897, 32.719356], // starting position [lng, lat]
    zoom: 15,// starting zoom
    hash:true
});


map.on('load', function(e){
    map.addSource('roads', {
        type: 'vector',
        url: 'mapbox://daudi97.8uettfce',
        buffer: 500     
    });

    map.addLayer({
        'id':'roads',
        'type': 'line',
        'source':'roads',
        'source-layer':'line-74rqn2',
        paint:{

        },
        layout:{

        }
    });

    content.innerHTML = '<img src="north.svg" alt="" id="pegman">';
    marker = new mapboxgl.Marker({
      element:content,
      draggable: true,
      rotation:0
      })
      .setLngLat(map.getCenter())
      .addTo(map);

      peman = document.getElementById('pegman');

      marker.on('dragend', onDragEnd);
      
      function onDragEnd(e) {
        var lngLat = marker.getLngLat();

        console.log(lngLat);

        // update the panorama view
        panorama.setPosition(lngLat);
      }
});



function initMap() {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: { lat: 32.719356, lng: -117.15897 },
        pov: {
          heading: 0,
          pitch: 0
        },
        visible: true
      }
    );
  
    panorama.addListener("pano_changed", function() {
      // do something
      // var pov = panorama.getPov();

      // console.log(pov);
      // if(marker) {
      //   marker.setRotation(pov.heading);
      // }
      
    });

    panorama.addListener("pov_changed", function() {
      // do something
      var pov = panorama.getPov();
      updatePengMan(pov.heading);

      // if(marker) {
      //   marker.setRotation(pov.heading);
      // }
      
    });
  
     
    panorama.addListener("position_changed", function() {
      let position  = panorama.getPosition().toJSON();
      var markerPosition;
    });

  }

function updatePengMan(heading) {
  switch (true) {
    case heading < 22.5:
      peman.setAttribute('src', 'north.svg');
      break;
    case heading > 22.5 && heading < 45:
      peman.setAttribute('src', 'nne.svg');
      break;
    case heading > 45.5 && heading < 67.5:
      peman.setAttribute('src', 'ne.svg');
      break;
    case heading > 67.5 && heading < 90:
      peman.setAttribute('src', 'ene.svg');
      break;
    case heading > 90 && heading < 112.5:
      peman.setAttribute('src', 'east.svg');
      break;
    case heading > 112.5 && heading < 135:
      peman.setAttribute('src', 'ese.svg');
      break;
    case heading > 135 && heading < 157.5:
      peman.setAttribute('src', 'se.svg');
      break;
    case heading > 157.5 && heading < 180:
      peman.setAttribute('src', 'sse.svg');
      break;
    case heading > 180 && heading < 202.5:
      peman.setAttribute('src', 'south.svg');
      break;
    case heading > 202.5 && heading < 225:
      peman.setAttribute('src', 'ssw.svg');
      break;
    case heading > 225 && heading < 247.5:
      peman.setAttribute('src', 'sw.svg');
      break;
    case heading > 247.5 && heading < 270:
      peman.setAttribute('src', 'wsw.svg');
      break;
    case heading > 270 && heading < 292.5:
      peman.setAttribute('src', 'w.svg');
      break;
    case heading > 292.5 && heading < 315:
      peman.setAttribute('src', 'wnw.svg');
      break;
    case heading > 315 && heading < 337.5:
      peman.setAttribute('src', 'nw.svg');
      break;
    case heading > 337.5 && heading < 360:
      peman.setAttribute('src', 'nnw.svg');
      break;
    default:
      peman.setAttribute('src', 'north.svg');
      break;
  }
  
}