require([
        "esri/layers/WebTileLayer",
        "esri/Map",
        "esri/views/SceneView"
      ], function(WebTileLayer, Map, SceneView) {
        var map = new Map({
          basemap: 'streets',
          ground: "world-elevation"
        });

        var view = new SceneView({
          container: "viewDiv",
          map: map,
          scale: 40345678,
          center: [-96,45]
        });


        var weatherLayer = new WebTileLayer({
          urlTemplate: "http://maps{subDomain}.aerisapi.com/q2ZG1wIYyW5jz2qMVs4XV_T15iEonob1d2H8kUPkbqlfk4gE2MvYQwiFbNfCVA/satellite-geocolor,cities-dk/{level}/{col}/{row}/current.png",
          subDomains: ["1", "2", "3", "4"],
          copyright:
            'Weather Layers by <a href="http://aerisweather.com/">AerisWeather.com</a>, '
        });
        map.add(weatherLayer);
      });
