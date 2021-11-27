require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/Graphic",
    "esri/layers/GraphicsLayer"

    ], function(esriConfig,Map, MapView, Graphic, GraphicsLayer) {

  esriConfig.apiKey = "AAPKc198b9c956e244c8bab8537e0efd4d52_Nvze1hoto2am5LKNE7SC_xrI5smT4v49XwKegyM3QHnKeOWyXmax50f8aGtBHsD";

  const map = new Map({
    basemap: "arcgis-topographic" 
  });

  const view = new MapView({
    map: map,
    center: [-88.49, 52.807], 
    zoom: 14,
    container: "viewDiv"
 });

 const graphicsLayer = new GraphicsLayer();
 map.add(graphicsLayer);

 const point = { 
    type: "point",
    longitude: -88.4618,
    latitude: 52.7987
 };
 const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  
    outline: {
        color: [255, 255, 255], 
        width: 1
    }
 };

 const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
 });
 graphicsLayer.add(pointGraphic);

    // Create a line geometry
 const polyline = {
    type: "polyline",
    paths: [
        [-88.4, 52.8], //Longitude, latitude
        [-88.5, 52.7], //Longitude, latitude
				[-88.4, 52.6], //Longitude, latitude
				[-88.5, 52.5] //Longitude, latitude
    ]
 };
 const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 0
 };

 const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol
 });
 graphicsLayer.add(polylineGraphic);

 // Create a polygon geometry
 const polygon = {
    type: "polygon",
    rings: [
        [-88.43, 52.83], //Longitude, latitude
        [-88.43, 52.77], //Longitude, latitude
				[-88.46, 52.77], //Longitude, latitude
				[-88.46, 52.83] //Longitude, latitude
    ]
 };


  const overhead = {
    type: "polygon",
    rings: [
        [-88.43, 52.845], //Longitude, latitude
        [-88.43, 52.83], //Longitude, latitude
				[-88.57, 52.83], //Longitude, latitude
				[-88.57, 52.845] //Longitude, latitude
    ]
 };

 const blue = {
    type: "polygon",
    rings: [
        [-88.5, 52.75], //Longitude, latitude
        [-88.56, 52.75], //Longitude, latitude
				[-88.57, 52.80], //Longitude, latitude
				[-88.5, 52.8] //Longitude, latitude
    ]
 };

  const summerbeaver = {
    type: "polygon",
    rings: [
        [-88.53, 52.83], //Longitude, latitude
        [-88.53, 52.8], //Longitude, latitude
				[-88.50, 52.8], //Longitude, latitude
				[-88.50, 52.83] //Longitude, latitude
    ]
 };

  const ayy = {
    type: "polygon",
    rings: [
        [-88.56, 52.83], //Longitude, latitude
        [-88.57, 52.8], //Longitude, latitude
				[-88.53, 52.8], //Longitude, latitude
				[-88.53, 52.83] //Longitude, latitude
    ]
 };

   const central = {
    type: "polygon",
    rings: [
        [-88.50, 52.8], //Longitude, latitude
        [-88.50, 52.765], //Longitude, latitude
				[-88.46, 52.767], //Longitude, latitude
				[-88.46, 52.801] //Longitude, latitude
    ]
 };

    const giblin = {
    type: "polygon",
    rings: [
        [-88.50, 52.83], //Longitude, latitude
        [-88.50, 52.8], //Longitude, latitude
				[-88.46, 52.801], //Longitude, latitude
				[-88.46, 52.83] //Longitude, latitude
    ]
 };

 const polygonFill = {
    type: "simple-fill",
    color: [200, 200, 200, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

 const ayyFill = {
    type: "simple-fill",
    color: [200, 200, 200, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

  const overheadFill = {
    type: "simple-fill",
    color: [100, 100, 100, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

  const giblinFill = {
    type: "simple-fill",
    color: [227, 139, 79, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };
  const summerbeaverFill = {
    type: "simple-fill",
    color: [105, 98, 109, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

  const centralFill = {
    type: "simple-fill",
    color: [105, 98, 109, 0.8],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

 const blueFill = {
    type: "simple-fill",
    color: [0, 0, 0, 0.75],  // Orange, opacity 80%
    outline: {
        color: [255, 255, 255],
        width: 1
    }
 };

 const popupTemplate = {
    title: "{Name}",
    content: "{Description}"
 }
 const polygonattributes = {
    Name: "polygon",
    Description: "I am a polygon"
 }
  const overheadattributes = {
    Name: "overhead",
    Description: "I am a polygon"
 }
   const ayyattributes = {
    Name: "ayy",
    Description: "I am a polygon"
 }
 const giblinattributes = {
    Name: "giblin",
    Description: "I am a polygon"
 }
  const centralattributes = {
    Name: "central",
    Description: "I am a polygon"
 }
 const blueattributes = {
    Name: "notblue",
    Description: "I am NOT a polygon"
 }
 const summerbeaverattributes = {
    Name: "summer",
    Description: "Summer Beaver"
 }

 const polygonGraphic = new Graphic({
    geometry: polygon,
    symbol: polygonFill,
    attributes: polygonattributes,
    popupTemplate: popupTemplate

 });
  const overheadGraphic = new Graphic({
    geometry: overhead,
    symbol: overheadFill,
    attributes: overheadattributes,
    popupTemplate: popupTemplate

 });
  const ayyGraphic = new Graphic({
    geometry: ayy,
    symbol: ayyFill,
    attributes: ayyattributes,
    popupTemplate: popupTemplate

 });
  const giblinGraphic = new Graphic({
    geometry: giblin,
    symbol: giblinFill,
    attributes: giblinattributes,
    popupTemplate: popupTemplate

 });
  const blueGraphic = new Graphic({
    geometry: blue,
    symbol: blueFill,
    attributes: blueattributes,
    popupTemplate: popupTemplate

 });

const summerbeaverGraphic = new Graphic({
    geometry: summerbeaver,
    symbol: summerbeaverFill,
    attributes: summerbeaverattributes,
    popupTemplate: popupTemplate

 });

 const centralGraphic = new Graphic({
    geometry: central,
    symbol: centralFill,
    attributes: centralattributes,
    popupTemplate: popupTemplate

 });

 graphicsLayer.add(polygonGraphic);
  graphicsLayer.add(blueGraphic);
	graphicsLayer.add(summerbeaverGraphic);
	graphicsLayer.add(centralGraphic);
	graphicsLayer.add(giblinGraphic);
	graphicsLayer.add(overheadGraphic);
	graphicsLayer.add(ayyGraphic);

 });
