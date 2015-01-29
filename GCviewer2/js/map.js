var map;

require([
	"esri/map",
	"esri/geometry/Extent",

	"dojo/ready",
	"dojo/parser",
	"dojo/on",

	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane"],

	function(Map, Extent, ready, parser, on, BorderContainer, ContentPane
	){
	
	ready(function(){
	parser.parse();

	//Create map
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


