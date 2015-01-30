//var map;

//require([
	dojo.require("esri.map"); //"esri.map",
	dojo.require("esri.geometry.Extent"); //"esri/geometry/Extent",
	dojo.require("esri.layers.agsdynamic"); //"esri/layers/ArcGISDynamicMapServiceLayer",

	dojo.require("esri.dijit.Scalebar"); //"esri/dijit/Scalebar",
	dojo.require("esri.dijit.Popup"); //"esri/dijit/Popup",
	dojo.require("esri.dijit.popup");  //"esri/dijit/PopupTemplate",

	//"dojo/ready",
	//"dojo/parser",
	"dojo/on",

	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane"],

	/*function(Map, Extent, ArcGISDynamicMapServiceLayer, 
		Scalebar, Popup, PopupTemplate,
		ready, parser, on,
		BorderContainer, ContentPane
	)*/
	
	//ready(function(){
	//parser.parse();

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

	info = newPopup
	
});
});


