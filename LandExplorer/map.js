require([
"esri/map",
"dojo/domReady!"

], function(
Map){

var map;

map = new Map("map", {
	basemap: "gray",
	center: [-107.536, 39.573],
    zoom: 16
  });
  		
})