var map;

require([
	"esri/map",
	"esri/Color",  //measure
	"esri/config", //measure
	"esri/sniff", //measure
	"esri/SnappingManager", //measure
	"esri/geometry/Extent",
	"esri/layers/ArcGISDynamicMapServiceLayer",
	"esri/layers/FeatureLayer",
	"esri/renderers/SimpleRenderer", //measure
	"esri/tasks/GeometryService", //measure

	"esri/dijit/Scalebar",
	"esri/dijit/Popup",
	"esri/dijit/PopupTemplate",
	"esri/dijit/Measurement", //measure

	"dojo/ready",
	"dojo/parser",
	"dojo/on",
	"dojo/dom",
	"dojo/keys", //measure

	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/CheckBox", //measure
	"dojo/domReady!"
	],  

	function(Map, Color, esriConfig, has, SnappingManager, Extent, ArcGISDynamicMapServiceLayer, FeatureLayer, SimpleRenderer, GeometryService,
		Scalebar, Popup, PopupTemplate, Measurement,
		ready, parser, on, dom, keys,
		BorderContainer, ContentPane
	){
	
	ready(function(){
	parser.parse();
	

	//Geometry service
	esriConfig.defaults.geometryService = new GeometryService("http://vgis8app:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer");

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

	/*lyrCadastral = new ArcGISDynamicMapServiceLayer(
		"http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer",{

		});*/

	


	
	template = new PopupTemplate({
          title: "<b>Parcel {PARCELNB}</b>",
          description: '<table><tr><b>Parcel Number</b> {PARCELNB}</tr><br> <tr><b>Address</b> {FULLADDRESS}</tr><br><tr>{LOCCITY}</tr> <br><tr><b>Owner</b> {NAME}</tr> <br><tr><b>Mailing Address</b> {ADDRESS2}</tr> <br><tr>{CITY}, {STATE} {ZIPCODE}</tr> </table><br> <a target="_blank" href="http://garfield.valuewest.net/?parcelno={PARCELNB}"><b>Garfield County Treasurer Data</b<</a> <br> <a target="_blank"href="https://act.garfield-county.com/treasurer/treasurerweb/account.jsp?account={ACCOUNTNO}"><b>Garfield County Assessor Data</b<</a>',
    
    });

	lyrParcels = new FeatureLayer("http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer/3",{
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          infoTemplate: template
        });
	map.addLayer(lyrParcels);
	
	//Measure
	var snapManager = map.enableSnapping({
          snapKey: has("mac") ? keys.META : keys.CTRL
        });
        var layerInfos = [{
          layer: lyrParcels
        }];
        snapManager.setLayerInfos(layerInfos);

        var measurement = new Measurement({
          //TODO focus mouse on just measurement tool so infoTemplate is not active
          map: map
        }, dom.byId("measurementDiv"));
        measurement.startup();
      
	

	Scalebar = new Scalebar({
		map:map,
		scalebarUnit:"dual",
		attachTo:"bottom-left"
	})
	
	});
});


