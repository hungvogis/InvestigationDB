
//khai báo thư viện API
dojo.require("esri.map");
dojo.require("esri.arcgis.utils");
dojo.require("esri.domUtils");
dojo.require("esri.graphic");
dojo.require("esri.lang");
dojo.require("esri.Color");
dojo.require("esri.InfoTemplate");
dojo.require("esri.renderers.SimpleRenderer");
dojo.require("esri.SnappingManager");
dojo.require("esri.toolbars.draw");
dojo.require("esri.config");
dojo.require("esri.request");
dojo.require("esri.SpatialReference");
dojo.require("esri.urlUtils");
dojo.require("esri/IdentityManager");
dojo.require("esri/arcgis/OAuthInfo");

dojo.require("esri.layers.FeatureLayer");
dojo.require("esri.layers.ArcGISDynamicMapServiceLayer");
dojo.require("esri.layers.LabelClass");
dojo.require("esri.layers.GraphicsLayer");


dojo.require("esri.symbols.SimpleFillSymbol");
dojo.require("esri.symbols.SimpleLineSymbol");
dojo.require("esri.symbols.PictureFillSymbol");
dojo.require("esri.symbols.TextSymbol");
dojo.require("esri.symbols.Font");
dojo.require("esri.symbols.CartographicLineSymbol");
dojo.require("esri.symbols.SimpleMarkerSymbol");

dojo.require("esri.geometry.Extent");
dojo.require("esri.geometry.Circle");
dojo.require("esri.geometry.Geometry");
dojo.require("esri.geometry.scaleUtils");
dojo.require("esri.geometry.ScreenPoint");
dojo.require("esri.geometry.Point");
dojo.require("esri.geometry.webMercatorUtils");

dojo.require("esri.tasks.query");
dojo.require("esri.tasks.QueryTask");
dojo.require("esri.tasks.GeometryService");
dojo.require("esri.tasks.Geoprocessor");
dojo.require("esri.tasks.FeatureSet");
dojo.require("esri.tasks.RelationParameters");
dojo.require("esri.tasks.RelationshipQuery");

dojo.require("dijit.TooltipDialog");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.AccordionContainer");
dojo.require("dijit.registry");
dojo.require("dijit.form.TextBox");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.CheckBox");
dojo.require("dijit.Toolbar");
dojo.require("dijit.form.Form");
dojo.require("dijit.Dialog");

dojo.require("esri.dijit.Directions");
dojo.require("esri.dijit.AttributeInspector");
dojo.require("esri.dijit.Popup");
dojo.require("esri/dijit/PopupMobile");
dojo.require("esri.dijit.PopupTemplate");
dojo.require("esri.dijit.LayerList");
dojo.require("esri.dijit.editing.AttachmentEditor");
dojo.require("esri.dijit.editing.Editor");
dojo.require("esri.dijit.editing.Util");
dojo.require("esri.dijit.editing.TemplatePicker");
dojo.require("esri.dijit.editing.Editor-all");
dojo.require("esri.dijit.InfoWindow");
dojo.require("esri.dijit.FeatureTable");
dojo.require("esri.dijit.Legend");
dojo.require("esri.dijit.HomeButton");
dojo.require("esri.dijit.LocateButton");
dojo.require("esri.dijit.Search");
dojo.require("esri.dijit.FeatureTable");
dojo.require("esri.dijit.OverviewMap");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.dijit.Bookmarks");
dojo.require("esri/dijit/BasemapGallery");

dojo.require("dojo.dom");
dojo.require("dojo.keys");
dojo.require("dojo.dom-style");
dojo.require("dojo.parser");
dojo.require("dojo.number");
dojo.require("dojo._base.connect");
dojo.require("dojo._base.array");
dojo.require("dojo.on");
dojo.require("dojo.domReady!");
dojo.require("dojo.dom-construct");
dojo.require("dojo.i18n!esri.nls.jsapi");
dojo.require("dojo.string");
dojo.require("dojo._base.html");
dojo.require("dojo.json");
dojo.require("dojo.sniff");
dojo.require("dojo.cache");
dojo.require("dojo.text!");

dojo.require("dgrid/OnDemandGrid");
dojo.require("dgrid/Grid");
dojo.require("dgrid/Selection");
dojo.require("dgrid/extensions/Pagination");
dojo.require("dgrid/editor");
dojo.require("dgrid/Keyboard");

dojo.require("dstore/RequestMemory");


//Khai báo biến

var bounds,
    map,

    //Các biến quản lý layer goup
    listlayerManager, // quản lý toàn bộ các lớp

    listlayerManager_basemap, // quản lý các lớp nền
    listlayerManager_seas,

    listlayerManager_dcks, // quản lý các lớp tài nguyên khoáng sản
    listlayerManager_kttv, // quản lý các lớp tài nguyên khí hậu
    listlayerManager_dhdb, // quản lý các lớp địa hình
    listlayerManager_sinhvat, // quản lý các lớp tài nguyên sinh vật
    listlayerManager_sinhthai, // quản lý các lớp tài nguyên các hệ sinh thái
    listlayerManager_nuoc, // quản lý các lớp tài nguyên nước
    listlayerManager_dat, // quản lý các lớp tài nguyên đất
    listlayerManager_vithe, // quản lý các lớp tài nguyên vị thế
    listlayerManager_haidao, // quản lý các lớp tài nguyên biển và hải đảo 
    listlayerManager_dulich, // quản lý các lớp tài nguyên du lịch, nhân văn
    listlayerManager_mt, // quản lý các lớp dữ liệu môi trường
    listlayerManager_ktxh, // quản lý các lớp hoạt động kt-xh trên biển

    //các biến quản lý nhóm layer
    layers_basemap, // quản lý các lớp nền
    layers_seas,
    layers_dcks, // quản lý các lớp tài nguyên khoáng sản
    layers_kttv, // quản lý các lớp tài nguyên khí hậu
    layers_dhdb, // quản lý các lớp địa hình
    layers_sinhvat, // quản lý các lớp tài nguyên sinh vật
    layers_sinhthai, // quản lý các lớp tài nguyên các hệ sinh thái
    layers_nuoc, // quản lý các lớp tài nguyên nước
    layers_dat, // quản lý các lớp tài nguyên đất
    layers_vithe, // quản lý các lớp tài nguyên vị thế
    layers_haidao, // quản lý các lớp tài nguyên biển và hải đảo 
    layers_dulich, // quản lý các lớp tài nguyên du lịch, nhân văn
    layers_mt, // quản lý các lớp dữ liệu môi trường
    layers_ktxh, // quản lý các lớp hoạt động kt-xh trên biển


    legendDijit, //cho bảng chú giải
    severIp,
    path_BMAP,
    path_SEAS,

    DMLayer, //mảng all layer của server
    phamvi,
    tb,
    dtve,
    dataTable,
    myFeatureTable,
    tempPicker,
    myEditor,
    reloadFeature,
    OverviewLayer,
    xLocaton,
    yLocation
;
//oooooooooooooooooooooooooo CLICK TRÊN MENU CHÍNH ooooooooooooooooooooooooooooooo//
$(document).ready(function () {
    $("#layer").click(function () {
        $("#mainMenu").hide(100);
        $("#LayerMenu").show(100);
    });
    $("#LayerBack").click(function () {
        $("#LayerMenu").hide(100);
        $("#mainMenu").show(100);
    });
    $("#legend").click(function () {
        $("#mainMenu").hide(100);
        $("#LegendMenu").show(100);
    });
    $("#LegendBack").click(function () {
        $("#LegendMenu").hide(100);
        $("#mainMenu").show(100);
    });
    $("#searchPlus").click(function () {
        $("#mainMenu").hide(100);
        $("#SearchMenu").show(100);
    });
    $("#SearchBack").click(function () {
        $("#SearchMenu").hide(100);
        $("#mainMenu").show(100);
    });
    /*about và aboutMenu*/
    $("#about").click(function () {
        $("#mainMenu").hide(100);
        $("#aboutMenu").show(100);
                  //$("#about").load("about.html");
                  //$("#about").show(100);
    });
    $("#aboutBack").click(function () {
        $("#aboutMenu").hide(100);
        $("#mainMenu").show(100);
    });
    /*Cho menu Edit Attribute*/
    $("#editAttri").click(function () {
        $("#mainMenu").hide(100);
        $("#editAttriMenu").show(100);
    });
    $("#editAttriBack").click(function () {
        $("#editAttriMenu").hide(100);
        $("#mainMenu").show(100);
        huyEditAttri();
    });
    /*Cho menu Edit Map*/
    $("#editMap").click(function () {
        $("#mainMenu").hide(100);
        $("#editMapMenu").show(100);
    });
    $("#editMapBack").click(function () {
        $("#editMapMenu").hide(100);
        $("#mainMenu").show(100);
        huyEditMap();
    });
    /*Cho queryMap menu*/
    $("#queryMap").click(function () {
        $("#mainMenu").hide(100);
        $("#queryMenu").show(100);
    });
    $("#queryMapBack").click(function () {
        $("#queryMenu").hide(100);
        $("#mainMenu").show(100);
    });
    //Cho menu setting, 
    $("#setting").click(function () {
        $("#mainMenu").hide(100);
        $("#settingMenu").show(100);
    });
    $("#settingBack").click(function () {
        $("#settingMenu").hide(100);
        $("#mainMenu").show(100);
    });
});
//HẾT oooooooooooooooooooooooooo CLICK TRÊN MENU CHÍNH ooooooooooooooooooooooooooooooo//

    
