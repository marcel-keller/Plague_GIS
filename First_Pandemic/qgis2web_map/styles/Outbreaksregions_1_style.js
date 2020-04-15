var size = 0;
var placement = 'point';
function categories_Outbreaksregions_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ARMENIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ASIA MINOR':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BRITAIN':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CILICIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EGYPT':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GAUL':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GREECE':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ILLYRICUM':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'IRELAND':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ISTRIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ITALY':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MESOPOTAMIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NORTH AFRICA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NORTHERN ITALY & LIGURIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PALESTINE':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SICILY':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SOUTHERN GAUL & RHONE VALLEY':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPAIN':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SYRIA':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'THRACE':
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        
        fill: fill_Outbreaksregions_1,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

    var fill_Outbreaksregions_1 = new ol.style.Fill();
var style_Outbreaksregions_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Name");
    var labelText = "";
    size = 0;
    var labelFont = "19.5px \'.AppleSystemUIFont\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
var style = categories_Outbreaksregions_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};

    fill_Outbreaksregions_1.setColor(stripe(0.6, 2.0, 315.0, '#658beb'));