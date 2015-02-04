var map;

require([
	"esri/map",
	"esri/geometry/Extent",
	"esri/layers/ArcGISDynamicMapServiceLayer",
	"esri/layers/FeatureLayer",

	"esri/dijit/Scalebar",
	"esri/dijit/Popup",
	"esri/dijit/PopupTemplate",

	"dojo/ready",
	"dojo/parser",
	"dojo/on",

	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane"],

	function(Map, Extent, ArcGISDynamicMapServiceLayer, FeatureLayer,
		Scalebar, Popup, PopupTemplate, 
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

	/*lyrCadastral = new ArcGISDynamicMapServiceLayer(
		"http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer",{

		});*/

	template = new PopupTemplate({
          title: "<b>Parcel {PARCELNB}</b>",
          description: '<table><tr><b>Parcel Number</b> {PARCELNB}</tr><br> <tr><b>Address</b> {FULLADDRESS}</tr><br><tr>{LOCCITY}</tr> <br><tr><b>Owner</b> {NAME}</tr> <br><tr><b>Mailing Address</b> {ADDRESS2}</tr> <br><tr>{CITY}, {STATE} {ZIPCODE}</tr> </table><br> <a target="_blank" href="http://garfield.valuewest.net/?parcelno={PARCELNB}"><b>Garfield County Treasurer Data</b<</a> <br> <a target="_blank" href="https://act.garfield-county.com/treasurer/treasurerweb/account.jsp?account={ACCOUNTNO}"><b>Garfield County Assessor Data</b<</a>',
    
    });

	lyrParcels = new FeatureLayer("http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer/3",{
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          infoTemplate: template
        });
	map.addLayer(lyrParcels);
	

	

	Scalebar = new Scalebar({
		map:map,
		scalebarUnit:"dual",
		attachTo:"bottom-left"
	})
	
});
});


