var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Outbreaksregions_1 = new ol.format.GeoJSON();
var features_Outbreaksregions_1 = format_Outbreaksregions_1.readFeatures(json_Outbreaksregions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outbreaksregions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outbreaksregions_1.addFeatures(features_Outbreaksregions_1);
var lyr_Outbreaksregions_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outbreaksregions_1, 
                style: style_Outbreaksregions_1,
                interactive: true,
    title: 'Outbreaks regions<br />\
    <img src="styles/legend/Outbreaksregions_1_0.png" /> ARMENIA<br />\
    <img src="styles/legend/Outbreaksregions_1_1.png" /> ASIA MINOR<br />\
    <img src="styles/legend/Outbreaksregions_1_2.png" /> BRITAIN<br />\
    <img src="styles/legend/Outbreaksregions_1_3.png" /> CILICIA<br />\
    <img src="styles/legend/Outbreaksregions_1_4.png" /> EGYPT<br />\
    <img src="styles/legend/Outbreaksregions_1_5.png" /> GAUL<br />\
    <img src="styles/legend/Outbreaksregions_1_6.png" /> GREECE<br />\
    <img src="styles/legend/Outbreaksregions_1_7.png" /> ILLYRICUM<br />\
    <img src="styles/legend/Outbreaksregions_1_8.png" /> IRELAND<br />\
    <img src="styles/legend/Outbreaksregions_1_9.png" /> ISTRIA<br />\
    <img src="styles/legend/Outbreaksregions_1_10.png" /> ITALY<br />\
    <img src="styles/legend/Outbreaksregions_1_11.png" /> MESOPOTAMIA<br />\
    <img src="styles/legend/Outbreaksregions_1_12.png" /> NORTH AFRICA<br />\
    <img src="styles/legend/Outbreaksregions_1_13.png" /> NORTHERN ITALY & LIGURIA<br />\
    <img src="styles/legend/Outbreaksregions_1_14.png" /> PALESTINE<br />\
    <img src="styles/legend/Outbreaksregions_1_15.png" /> SICILY<br />\
    <img src="styles/legend/Outbreaksregions_1_16.png" /> SOUTHERN GAUL & RHONE VALLEY<br />\
    <img src="styles/legend/Outbreaksregions_1_17.png" /> SPAIN<br />\
    <img src="styles/legend/Outbreaksregions_1_18.png" /> SYRIA<br />\
    <img src="styles/legend/Outbreaksregions_1_19.png" /> THRACE<br />\
    <img src="styles/legend/Outbreaksregions_1_20.png" /> <br />'
        });
var format_Outbreakscities_2 = new ol.format.GeoJSON();
var features_Outbreakscities_2 = format_Outbreakscities_2.readFeatures(json_Outbreakscities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outbreakscities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outbreakscities_2.addFeatures(features_Outbreakscities_2);
var lyr_Outbreakscities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outbreakscities_2, 
                style: style_Outbreakscities_2,
                interactive: true,
                title: '<img src="styles/legend/Outbreakscities_2.png" /> Outbreaks cities'
            });
var format_Bavariaprovinces_3 = new ol.format.GeoJSON();
var features_Bavariaprovinces_3 = format_Bavariaprovinces_3.readFeatures(json_Bavariaprovinces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bavariaprovinces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bavariaprovinces_3.addFeatures(features_Bavariaprovinces_3);
var lyr_Bavariaprovinces_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bavariaprovinces_3, 
                style: style_Bavariaprovinces_3,
                interactive: false,
                title: 'Bavaria provinces'
            });
var format_Bavariarivers_4 = new ol.format.GeoJSON();
var features_Bavariarivers_4 = format_Bavariarivers_4.readFeatures(json_Bavariarivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bavariarivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bavariarivers_4.addFeatures(features_Bavariarivers_4);
var lyr_Bavariarivers_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bavariarivers_4, 
                style: style_Bavariarivers_4,
                interactive: false,
                title: 'Bavaria rivers'
            });
var format_Bavariaframe_5 = new ol.format.GeoJSON();
var features_Bavariaframe_5 = format_Bavariaframe_5.readFeatures(json_Bavariaframe_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bavariaframe_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bavariaframe_5.addFeatures(features_Bavariaframe_5);
var lyr_Bavariaframe_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bavariaframe_5, 
                style: style_Bavariaframe_5,
                interactive: false,
                title: '<img src="styles/legend/Bavariaframe_5.png" /> Bavaria frame'
            });
var format_Bavariaroads_6 = new ol.format.GeoJSON();
var features_Bavariaroads_6 = format_Bavariaroads_6.readFeatures(json_Bavariaroads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bavariaroads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bavariaroads_6.addFeatures(features_Bavariaroads_6);
var lyr_Bavariaroads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bavariaroads_6, 
                style: style_Bavariaroads_6,
                interactive: false,
                title: 'Bavaria roads'
            });
var format_Francerivers_7 = new ol.format.GeoJSON();
var features_Francerivers_7 = format_Francerivers_7.readFeatures(json_Francerivers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Francerivers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Francerivers_7.addFeatures(features_Francerivers_7);
var lyr_Francerivers_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Francerivers_7, 
                style: style_Francerivers_7,
                interactive: false,
                title: 'France rivers'
            });
var format_Franceframe_8 = new ol.format.GeoJSON();
var features_Franceframe_8 = format_Franceframe_8.readFeatures(json_Franceframe_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Franceframe_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Franceframe_8.addFeatures(features_Franceframe_8);
var lyr_Franceframe_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Franceframe_8, 
                style: style_Franceframe_8,
                interactive: false,
                title: '<img src="styles/legend/Franceframe_8.png" /> France frame'
            });
var format_FirstPandemicnegativesites_9 = new ol.format.GeoJSON();
var features_FirstPandemicnegativesites_9 = format_FirstPandemicnegativesites_9.readFeatures(json_FirstPandemicnegativesites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FirstPandemicnegativesites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FirstPandemicnegativesites_9.addFeatures(features_FirstPandemicnegativesites_9);
var lyr_FirstPandemicnegativesites_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FirstPandemicnegativesites_9, 
                style: style_FirstPandemicnegativesites_9,
                interactive: true,
                title: 'First Pandemic negative sites'
            });
var format_FirstPandemicpositivesites_10 = new ol.format.GeoJSON();
var features_FirstPandemicpositivesites_10 = format_FirstPandemicpositivesites_10.readFeatures(json_FirstPandemicpositivesites_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FirstPandemicpositivesites_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FirstPandemicpositivesites_10.addFeatures(features_FirstPandemicpositivesites_10);
var lyr_FirstPandemicpositivesites_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FirstPandemicpositivesites_10, 
                style: style_FirstPandemicpositivesites_10,
                interactive: true,
                title: '<img src="styles/legend/FirstPandemicpositivesites_10.png" /> First Pandemic positive sites'
            });

lyr_ESRIOcean_0.setVisible(true);lyr_Outbreaksregions_1.setVisible(true);lyr_Outbreakscities_2.setVisible(true);lyr_Bavariaprovinces_3.setVisible(true);lyr_Bavariarivers_4.setVisible(true);lyr_Bavariaframe_5.setVisible(true);lyr_Bavariaroads_6.setVisible(true);lyr_Francerivers_7.setVisible(true);lyr_Franceframe_8.setVisible(true);lyr_FirstPandemicnegativesites_9.setVisible(true);lyr_FirstPandemicpositivesites_10.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_Outbreaksregions_1,lyr_Outbreakscities_2,lyr_Bavariaprovinces_3,lyr_Bavariarivers_4,lyr_Bavariaframe_5,lyr_Bavariaroads_6,lyr_Francerivers_7,lyr_Franceframe_8,lyr_FirstPandemicnegativesites_9,lyr_FirstPandemicpositivesites_10];
lyr_Outbreaksregions_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Year start': 'Year start', 'Year end': 'Year end', 'Sources': 'Sources', 'Year start TM': 'Year start TM', 'Year end TM': 'Year end TM', });
lyr_Outbreakscities_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Year start': 'Year start', 'Year end': 'Year end', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sources': 'Sources', 'Year start TM': 'Year start TM', 'Year end TM': 'Year end TM', });
lyr_Bavariaprovinces_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Province': 'Province', 'Id_2': 'Id_2', });
lyr_Bavariarivers_4.set('fieldAliases', {'fid': 'fid', 'dissolve': 'dissolve', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'rivernum': 'rivernum', 'note': 'note', 'min_zoom': 'min_zoom', 'name_en': 'name_en', 'min_label': 'min_label', });
lyr_Bavariaframe_5.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_Bavariaroads_6.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_2': 'Id_2', });
lyr_Francerivers_7.set('fieldAliases', {'fid': 'fid', 'dissolve': 'dissolve', 'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'name_alt': 'name_alt', 'rivernum': 'rivernum', 'note': 'note', 'min_zoom': 'min_zoom', 'name_en': 'name_en', 'min_label': 'min_label', });
lyr_Franceframe_8.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', });
lyr_FirstPandemicnegativesites_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Alt. site name': 'Alt. site name', 'Number of tested indiv.': 'Number of tested indiv.', 'Arch. date lower': 'Arch. date lower', 'Arch. date upper': 'Arch. date upper', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Publication': 'Publication', 'Link': 'Link', });
lyr_FirstPandemicpositivesites_10.set('fieldAliases', {'fid': 'fid', 'Site name': 'Site name', 'Alt. site name': 'Alt. site name', 'Number of pos. indiv.': 'Number of pos. indiv.', 'Number of tested indiv.': 'Number of tested indiv.', 'Lab indiv. IDs.': 'Lab indiv. IDs.', 'Arch indiv. IDs': 'Arch indiv. IDs', 'RC uncal.': 'RC uncal.', 'RC std. dev.': 'RC std. dev.', 'RC date 2sigma lower': 'RC date 2sigma lower', 'RC date 2sigma upper': 'RC date 2sigma upper', 'Arch. date lower': 'Arch. date lower', 'Arch. date upper': 'Arch. date upper', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Publication': 'Publication', 'Link': 'Link', 'Comment': 'Comment', 'Year start TM': 'Year start TM', 'Tear end TM': 'Tear end TM', });
lyr_Outbreaksregions_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Year start': 'Range', 'Year end': 'Range', 'Sources': 'TextEdit', 'Year start TM': 'TextEdit', 'Year end TM': 'TextEdit', });
lyr_Outbreakscities_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Year start': 'Range', 'Year end': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sources': 'TextEdit', 'Year start TM': 'TextEdit', 'Year end TM': 'TextEdit', });
lyr_Bavariaprovinces_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Province': 'TextEdit', 'Id_2': 'Range', });
lyr_Bavariarivers_4.set('fieldImages', {'fid': 'TextEdit', 'dissolve': 'TextEdit', 'scalerank': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'rivernum': 'TextEdit', 'note': 'TextEdit', 'min_zoom': 'TextEdit', 'name_en': 'TextEdit', 'min_label': 'TextEdit', });
lyr_Bavariaframe_5.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', });
lyr_Bavariaroads_6.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Id_2': 'Range', });
lyr_Francerivers_7.set('fieldImages', {'fid': 'TextEdit', 'dissolve': 'TextEdit', 'scalerank': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'name_alt': 'TextEdit', 'rivernum': 'TextEdit', 'note': 'TextEdit', 'min_zoom': 'TextEdit', 'name_en': 'TextEdit', 'min_label': 'TextEdit', });
lyr_Franceframe_8.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', });
lyr_FirstPandemicnegativesites_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Alt. site name': 'TextEdit', 'Number of tested indiv.': 'Range', 'Arch. date lower': 'Range', 'Arch. date upper': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Publication': 'TextEdit', 'Link': 'TextEdit', });
lyr_FirstPandemicpositivesites_10.set('fieldImages', {'fid': 'TextEdit', 'Site name': 'TextEdit', 'Alt. site name': 'TextEdit', 'Number of pos. indiv.': 'Range', 'Number of tested indiv.': 'Range', 'Lab indiv. IDs.': 'TextEdit', 'Arch indiv. IDs': 'TextEdit', 'RC uncal.': 'Range', 'RC std. dev.': 'Range', 'RC date 2sigma lower': 'Range', 'RC date 2sigma upper': 'Range', 'Arch. date lower': 'Range', 'Arch. date upper': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Publication': 'TextEdit', 'Link': 'TextEdit', 'Comment': 'TextEdit', 'Year start TM': 'TextEdit', 'Tear end TM': 'TextEdit', });
lyr_Outbreaksregions_1.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'Year start': 'inline label', 'Year end': 'inline label', 'Sources': 'inline label', 'Year start TM': 'inline label', 'Year end TM': 'inline label', });
lyr_Outbreakscities_2.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'Year start': 'inline label', 'Year end': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Sources': 'inline label', 'Year start TM': 'inline label', 'Year end TM': 'inline label', });
lyr_Bavariaprovinces_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Province': 'no label', 'Id_2': 'no label', });
lyr_Bavariarivers_4.set('fieldLabels', {'fid': 'no label', 'dissolve': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'rivernum': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_en': 'no label', 'min_label': 'no label', });
lyr_Bavariaframe_5.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', });
lyr_Bavariaroads_6.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Id_2': 'no label', });
lyr_Francerivers_7.set('fieldLabels', {'fid': 'no label', 'dissolve': 'no label', 'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'name_alt': 'no label', 'rivernum': 'no label', 'note': 'no label', 'min_zoom': 'no label', 'name_en': 'no label', 'min_label': 'no label', });
lyr_Franceframe_8.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', });
lyr_FirstPandemicnegativesites_9.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'Alt. site name': 'inline label', 'Number of tested indiv.': 'inline label', 'Arch. date lower': 'inline label', 'Arch. date upper': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Publication': 'inline label', 'Link': 'inline label', });
lyr_FirstPandemicpositivesites_10.set('fieldLabels', {'fid': 'no label', 'Site name': 'inline label', 'Alt. site name': 'inline label', 'Number of pos. indiv.': 'inline label', 'Number of tested indiv.': 'inline label', 'Lab indiv. IDs.': 'inline label', 'Arch indiv. IDs': 'inline label', 'RC uncal.': 'inline label', 'RC std. dev.': 'inline label', 'RC date 2sigma lower': 'inline label', 'RC date 2sigma upper': 'inline label', 'Arch. date lower': 'inline label', 'Arch. date upper': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Publication': 'inline label', 'Link': 'inline label', 'Comment': 'inline label', 'Year start TM': 'inline label', 'Tear end TM': 'inline label', });
lyr_FirstPandemicpositivesites_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});