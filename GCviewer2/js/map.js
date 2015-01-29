var map;

require([
	"esri/map",
	"esri/geometry/Extent",
	"esri/layers/ArcGISDynamicMapServiceLayer",

	"esri/dijit/Scalebar",

	"dojo/ready",
	"dojo/parser",
	"dojo/on",

	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane"],

	function(Map, Extent, ArcGISDynamicMapServiceLayer, 
		Scalebar,
		ready, parser, on,
		BorderContainer, ContentPane
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

	lyrCadastral = new ArcGISDynamicMapServiceLayer(
		"http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer",{

		});
	map.addLayer(lyrCadastral);

	Scalebar = new Scalebar({
		map:map,
		scalebarUnit:"dual",
		attachTo:"bottom-left"
	})
	
});
});


