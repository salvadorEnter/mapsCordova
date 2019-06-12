var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
        
        document.getElementById("abrir_app").onclick=abrir_sugar;
    }

};

function abrir_sugar(){
        
    var sApp = startApp.set({
    "application":"com.testunifinclean.crm",
    "uri":"sugarcrm://?page=Accounts/a53af60c-3af2-11e9-bcb7-00155da06f04",

    }).start(function(success) {
            console.log(success);
        }, function(error) {
            console.error(error);
        });
    
}

app.initialize();

var onMapSuccess = function (position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    crear_mapa(latitude,longitude);
}

function crear_mapa(latitude,longitude){

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());


}

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
