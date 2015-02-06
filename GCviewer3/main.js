var map;
var geocoder;

require([
"esri/map",
"esri/dijit/Geocoder",
"esri/dijit/Popup",
"esri/dijit/PopupTemplate",
"esri/dijit/BasemapToggle",
"esri/dijit/Scalebar",
"esri/layers/ArcGISDynamicMapServiceLayer",
"esri/layers/FeatureLayer",

"dojo/ready",
"dojo/on",

  ],
 function(
  Map, Geocoder, Popup, PopupTemplate, BasemapToggle, Scalebar, ArcGISDynamicMapServiceLayer, FeatureLayer, ready, on
  ){

  ready(function(){
  
  //create map  
  map = new Map("map",{
          basemap: "topo",
          showAttribution: false,
          center: [-107.322, 39.547], //long, lat
          zoom: 15
          
        });

   //geocoder
   geocoder = new Geocoder({
          map: map,
          autoComplete: true,
          arcgisGeocoder: {
            name: "Esri World Geocoder",
            //suffix: " Redlands, CA"
          }
        },"search");
        geocoder.startup();

  //popup
  popup = new PopupTemplate({
          title: "<b>Parcel {PARCELNB}</b>",
          description: '<table><tr><b>Parcel Number</b> {PARCELNB}</tr><br> <tr><b>Address</b> {FULLADDRESS}</tr><br><tr>{LOCCITY}</tr> <br><tr><b>Owner</b> {NAME}</tr> <br><tr><b>Mailing Address</b> {ADDRESS2}</tr> <br><tr>{CITY}, {STATE} {ZIPCODE}</tr> </table><br> <a target="_blank" href="http://garfield.valuewest.net/?parcelno={PARCELNB}"><b>Garfield County Treasurer Data</b<</a> <br> <a target="_blank"href="https://act.garfield-county.com/treasurer/treasurerweb/account.jsp?account={ACCOUNTNO}"><b>Garfield County Assessor Data</b<</a>',
    
    });

   //add layers     
  lyrParcels = new FeatureLayer("http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer/3",{
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ["*"],
          infoTemplate: popup
    });
  

  lyrCadastral = new ArcGISDynamicMapServiceLayer("http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer/");
  map.addLayers([lyrParcels, lyrCadastral]);

  //basemap toggle
  toggle = new BasemapToggle({
    map: map,
    basemap: "satellite"
  }, "BasemapToggle");
  toggle.startup();

  //scalebar
   scalebar = new Scalebar({
    map: map,
    scalebarUnit: "dual"
   }); 


  });
});
      
        
        
        


      
