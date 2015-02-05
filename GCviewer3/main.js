var map;

require([
	"esri/map",
	"esri/geometry/Extent",

	"dojo/ready",
	"dojo/on"
],

function(
	Map, Extent,
	ready, on

){

ready(function(){

//create map
map = new Map("Map", {
    basemap: "topo",
    showAttribution: false,
    zoom: 15,
    extent: new Extent ({
    "xmin":-11949053.31109845,
        "ymin":4799551.289959352,
        "xmax":-11945709.191110885,
        "ymax":4801939.947093327,
        "spatialReference":{"wkid":102100,"latestWkid":3857}
        })
    });



});
});