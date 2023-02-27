var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_googlemap_1 = new ol.layer.Tile({
            'title': 'google map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_companies_3 = new ol.format.GeoJSON();
var features_companies_3 = format_companies_3.readFeatures(json_companies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_companies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_companies_3.addFeatures(features_companies_3);
var lyr_companies_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_companies_3, 
                style: style_companies_3,
                interactive: true,
                title: '<img src="styles/legend/companies_3.png" /> companies'
            });
var format_compound_4 = new ol.format.GeoJSON();
var features_compound_4 = format_compound_4.readFeatures(json_compound_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_compound_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_compound_4.addFeatures(features_compound_4);
var lyr_compound_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_compound_4, 
                style: style_compound_4,
                interactive: true,
                title: '<img src="styles/legend/compound_4.png" /> compound'
            });
var format_sevice_5 = new ol.format.GeoJSON();
var features_sevice_5 = format_sevice_5.readFeatures(json_sevice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sevice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sevice_5.addFeatures(features_sevice_5);
var lyr_sevice_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sevice_5, 
                style: style_sevice_5,
                interactive: true,
                title: '<img src="styles/legend/sevice_5.png" /> sevice'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_googlemap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_companies_3.setVisible(true);lyr_compound_4.setVisible(true);lyr_sevice_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_googlemap_1,lyr_OpenStreetMap_2,lyr_companies_3,lyr_compound_4,lyr_sevice_5];
lyr_companies_3.set('fieldAliases', {'Company_Na': 'Company_Na', 'Company_Ad': 'Company_Ad', 'Hot_Line': 'Hot_Line', });
lyr_compound_4.set('fieldAliases', {'Land_Name': 'Land_Name', 'Area_Name': 'Area_Name', 'Company_Na': 'Company_Na', 'Compound_N': 'Compound_N', 'Arae': 'Arae', 'Area_Unit': 'Area_Unit', 'Land_Ava': 'Land_Ava', });
lyr_sevice_5.set('fieldAliases', {'Mall_Name': 'Mall_Name', 'Company_Na': 'Company_Na', 'Land_Use': 'Land_Use', 'Building_N': 'Building_N', });
lyr_companies_3.set('fieldImages', {'Company_Na': 'TextEdit', 'Company_Ad': 'TextEdit', 'Hot_Line': 'TextEdit', });
lyr_compound_4.set('fieldImages', {'Land_Name': '', 'Area_Name': '', 'Company_Na': '', 'Compound_N': '', 'Arae': '', 'Area_Unit': '', 'Land_Ava': '', });
lyr_sevice_5.set('fieldImages', {'Mall_Name': '', 'Company_Na': '', 'Land_Use': '', 'Building_N': '', });
lyr_companies_3.set('fieldLabels', {'Company_Na': 'inline label', 'Company_Ad': 'inline label', 'Hot_Line': 'inline label', });
lyr_compound_4.set('fieldLabels', {'Land_Name': 'inline label', 'Area_Name': 'inline label', 'Company_Na': 'inline label', 'Compound_N': 'inline label', 'Arae': 'inline label', 'Area_Unit': 'inline label', 'Land_Ava': 'inline label', });
lyr_sevice_5.set('fieldLabels', {'Mall_Name': 'no label', 'Company_Na': 'inline label', 'Land_Use': 'inline label', 'Building_N': 'inline label', });
lyr_sevice_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});