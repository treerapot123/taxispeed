var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_flowspeed5kmtaxi_1 = new ol.format.GeoJSON();
var features_flowspeed5kmtaxi_1 = format_flowspeed5kmtaxi_1.readFeatures(json_flowspeed5kmtaxi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flowspeed5kmtaxi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flowspeed5kmtaxi_1.addFeatures(features_flowspeed5kmtaxi_1);
var lyr_flowspeed5kmtaxi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flowspeed5kmtaxi_1, 
                style: style_flowspeed5kmtaxi_1,
                interactive: true,
    title: 'flowspeed5kmtaxi<br />\
    <img src="styles/legend/flowspeed5kmtaxi_1_0.png" /> 0 - 20.5<br />\
    <img src="styles/legend/flowspeed5kmtaxi_1_1.png" /> 20.5 - 29.8<br />\
    <img src="styles/legend/flowspeed5kmtaxi_1_2.png" /> 29.8 - 40.2<br />\
    <img src="styles/legend/flowspeed5kmtaxi_1_3.png" /> 40.2 - 53.2<br />\
    <img src="styles/legend/flowspeed5kmtaxi_1_4.png" /> 53.2 - 107.3<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_flowspeed5kmtaxi_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_flowspeed5kmtaxi_1];
lyr_flowspeed5kmtaxi_1.set('fieldAliases', {'LINK1': 'LINK1', 'DATE1': 'DATE1', 'TRIPS': 'TRIPS', 'SPEED': 'SPEED', 'NAME': 'NAME', 'REF': 'REF', 'TYPE': 'TYPE', });
lyr_flowspeed5kmtaxi_1.set('fieldImages', {'LINK1': 'TextEdit', 'DATE1': 'DateTime', 'TRIPS': 'TextEdit', 'SPEED': 'TextEdit', 'NAME': 'TextEdit', 'REF': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_flowspeed5kmtaxi_1.set('fieldLabels', {'LINK1': 'no label', 'DATE1': 'no label', 'TRIPS': 'no label', 'SPEED': 'no label', 'NAME': 'no label', 'REF': 'no label', 'TYPE': 'no label', });
lyr_flowspeed5kmtaxi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});