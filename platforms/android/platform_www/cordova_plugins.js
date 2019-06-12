cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.lampa.startapp.startapp",
      "file": "plugins/com.lampa.startapp/www/startApp.js",
      "pluginId": "com.lampa.startapp",
      "merges": [
        "startApp"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "com.lampa.startapp": "6.1.6",
    "cordova-plugin-geolocation": "4.0.1"
  };
});