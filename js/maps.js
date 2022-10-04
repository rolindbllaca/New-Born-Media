// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // disable UI
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(42.650989, 21.175599), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#282828" }
                ]
            },{
                "featureType": "road",
                "stylers": [
                    { "color": "#4e4e4e" }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    { "color": "#808080" },
                    { "visibility": "off" }
                ]
            },{
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "simplified" },
                    { "color": "#282828" }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "visibility": "simplified" },
                    { "color": "#162534" }
                ]
            },{
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    { "color": "#d59563" }
                ]
            },{
                "featureType": "administrative.province",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "transit",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative.land_parcel",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "road.local",
                "stylers": [
                    { "color": "#393939" }
                ]
            },{
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "visibility": "on" },
                    { "color": "#a4a4a4" }
                ]
            },{
            }

        ]
    };

// Get the HTML DOM element that will contain your map
// We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

// Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(42.650989, 21.175599),
        map: map,
        title: 'Snazzy!'
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.3250291, 19.814679),
        map: map,
        title: 'Snazzy!'
    });
}