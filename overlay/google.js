

window.initMap = function() {
    // this is called when google maps js is loaded
    var map = (window.map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 16,
            center: { lat: 32.718841, lng: -117.162027 },
            mapTypeId: "satellite"
        }
    ));

    var overlay = (window.overlay = new MapboxGoogleOverlay({
        style: DEFAULTS.style,
        availableZooms: DEFAULTS.availableZooms,
        mousemoveSources: Object.keys(DEFAULTS.availableZooms)
    }));

    overlay.addToMap(map);

    var infoEl = document.getElementById("info");

    overlay.on(
        "mousemove",
        info => (infoEl.textContent = JSON.stringify(info, null, 2))
    );
};