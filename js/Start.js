
//Khai báo các hàm khởi tạo
function init() {
    bounds = new esri.geometry.Extent({
        "xmin": 271926.83,
        "ymin": 1022861.94,
        "xmax": 568918.06,
        "ymax": 1165376.34,
        "spatialReference": { "wkid": 3405 } //VN_2000_UTM_Zone_48N - 3405; GCS_VN_2000 WKID: 4756 Authority: EPSG
 
    });

    esri.config.defaults.map.panDuration = 1; // time in milliseconds, default panDuration: 350
    esri.config.defaults.map.panRate = 1; // default panRate: 25
    esri.config.defaults.map.zoomDuration = 10; // default zoomDuration: 500
    esri.config.defaults.map.zoomRate = 1; // default zoomRate: 25});

    map = new esri.Map("mapdiv", {
        basemap: "gray",
        //Bản đồ nền của ESRI: streets,satellite,hybrid,topo,gray,dark-gray,oceans,national-geographic,
        //terrain,osm,dark-gray-vector,gray-vector,streets-vector,streets-night-vector,streets-relief-vector,
        //streets-navigation-vector,topo-vector.
        //extent: bounds,
        center: [109, 13],
        zoom: 5, //không chấp nhận số lẻ - no map, die
        minZoom: 4,
        maxZoom: 15,
        logo: false,
        showLabels: true,
        sliderPosition: "bottom-right",
        //maxScale: 50000,
        sliderStyle: "small"
    });

   //Nút home cho map
    var home = new esri.dijit.HomeButton({
        map: map
    }, "HomeButton");
    home.startup();

    //Xóa layer1
    var layerDefault = map.getLayer("layer1");
    layerDefault.setVisibility(false);
    map.removeLayer(layerDefault);

    //Nap thanh công cụ tìm kiếm từ Search.js
    searchnhanh();

    // load các lớp bản đồ từ LoadMap
    Load_BMAP();
    Load_SEAS();

    listLegend(map); //từ LayerManager

    listLayer(map); //từ LayerManager
    }
        dojo.ready(init);
