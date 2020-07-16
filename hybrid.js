var panorama;
var marker;
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

    let content = document.createElement('div');
    content.innerHTML = '<img src="person.svg" alt="">';
    marker = new mapboxgl.Marker({
      element:content,
      draggable: true
      })
      .setLngLat(map.getCenter())
      .addTo(map);

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
          heading: 270,
          pitch: 0
        },
        visible: true
      }
    );
  
    panorama.addListener("pano_changed", function() {
      // do something
    });
  
     
    panorama.addListener("position_changed", function() {
      let position  = panorama.getPosition().toJSON();
      var markerPosition;

      if(!marker) {
        return;
      } else {
        markerPosition = marker.getLngLat();
      }

       // compare the position of the two
      if(position.lat == markerPosition.lat && position.lng == markerPosition.lng){
        return;
      } else {
        marker.setLngLat(position);
      }
    });

  }