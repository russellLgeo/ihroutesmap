/*global $*/
/*global require*/
/*global console*/
/*global document*/

//ESRI modules used
require(["esri/Graphic","esri/config","esri/WebMap","esri/views/MapView","esri/widgets/Search", "esri/layers/RouteLayer","esri/rest/support/PolygonBarrier","esri/rest/support/FeatureSet","esri/rest/support/PointBarrier","esri/rest/support/RouteParameters","esri/rest/route","esri/layers/FeatureLayer","esri/rest/support/Query","esri/rest/support/Stop","esri/rest/support/RouteInfo","esri/core/Collection","esri/rest/support/TravelMode","esri/rest/networkService","esri/rest/support/DirectionPoint","esri/PopupTemplate","esri/widgets/LayerList","esri/widgets/Legend","esri/widgets/Locate","esri/widgets/Track","esri/widgets/Expand","esri/core/watchUtils","esri/geometry/Point","./config.js"]
, function (Graphic,esriConfig,WebMap,MapView,Search,RouteLayer,PolygonBarrier,FeatureSet,PointBarrier,RouteParameters,route,FeatureLayer,Query,Stop,RouteInfo,Collection,TravelMode,networkService,DirectionPoint,PopupTemplate,LayerList,Legend,Locate,Track,Expand,watchUtils,Point,config) {

	//API key and portal URL 
    esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurBsWhH_7CMZdbIHG4U1Lc__ohsJyE7rLZgvS4CjZQ2WV5iNfVF2daFQcyi2wO9Ej99IKv3VNTFvNvtgkncF8jhEl4tbOgeOhuVW70cmOi4fGokmeDdG1g32Dn_DKTy19l0x_LFUWWMI4HqgonMsLLQeEAHCI3IwnFPiNLtMrCPUR71_l_oxwEO0e14kPxsTtm5GZIELl6zgZMtg3j-nEG10.AT1_wQWC9Eha";
	esriConfig.portalUrl = "https://lickergeo.maps.arcgis.com";

	//Default basemap 
	var webmap = new WebMap({

        portalItem: {
          id: basemapPortalID
        }
     });

	////Adds the basemap and the routing / crosswalk layers
	var view = new MapView({
        map: webmap,
        container: "viewDiv",
    });


});
