var map;

// @formatter:off
require([
  "esri/map", 
  "esri/geometry/Extent", 
  "esri/layers/ArcGISDynamicMapServiceLayer", 
  "esri/layers/FeatureLayer", 
  "esri/dijit/Scalebar", 
  "esri/dijit/Legend", 
  "esri/dijit/BasemapToggle",


  "dojo/ready", 
  "dojo/parser", 
  "dojo/on", 
  
  "dijit/layout/BorderContainer", 
  "dijit/layout/ContentPane"], 
  function(
    Map, Extent, ArcGISDynamicMapServiceLayer, FeatureLayer, Scalebar, Legend, BasemapToggle, 
    ready, parser, on,
    BorderContainer, ContentPane
    ) {
// @formatter:on

  // Wait until DOM is ready *and* all outstanding require() calls have been resolved
  ready(function() {

    // Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();

    /*
     * Step: Specify the initial extent
     * Note: Exact coordinates may vary slightly from snippet/solution
     */
    

    // Create the map
    map = new Map("divMap", {
      basemap : "topo",
      showAttribution: false,
      extent: new
          Extent ({"xmin":-11949053.31109845,
            "ymin":4799551.289959352,
            "xmax":-11945709.191110885,
            "ymax":4801939.947093327,
            "spatialReference":{"wkid":102100,"latestWkid":3857}
          }),
     });    
    

    var lyrCadastral = new ArcGISDynamicMapServiceLayer("http://vgis8app:6080/arcgis/rest/services/Development/GC_Cadastral/MapServer", {
     
    });
    map.addLayer(lyrCadastral);

    /*
     * Step: Add the earthquakes layer to the map
     */
    //var lyrQuakes = new FeatureLayer("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Earthquakes/EarthquakesFromLastSevenDays/MapServer/0");
    //lyrQuakes.setDefinitionExpression("magnitude >= 2.0");
    //map.addLayer(lyrQuakes);
    //map.addLayers([lyrUSA, lyrQuakes]);


    var toggle = new BasemapToggle({
      map: map,
      theme: "basemapToggle",
      visible: true,
      alternateBasemap: "satellite"
      /*"satellite":{
        basemap: "satellite",
        label: "Imagery",
        url: "http://js.arcgis.com/3.11/esri/dijit/images/basemaps/satellite.jpg"
      },
       "topo":{
        basemap: "topo",
        label: "Topo",
        url: "http://js.arcgis.com/3.11/esri/dijit/images/basemaps/topo.jpg"
       } 
       */
    }, "BasemapToggle");
    toggle.startup(); 
    
    
    var dijitScalebar = new Scalebar({
      map : map,
      scalebarUnit : "dual",
      attachTo : "bottom-left"
    });

    
    map.on("layers-add-result", function() {
      var dijitLegend = new Legend({
        map : map,
        arrangement : Legend.ALIGN_RIGHT
      }, "divLegend");
      dijitLegend.startup();
    }); // stub)
  });

});
