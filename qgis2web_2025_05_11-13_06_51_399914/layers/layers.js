var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RgHuyenHaTinhrg_huyen_1 = new ol.format.GeoJSON();
var features_RgHuyenHaTinhrg_huyen_1 = format_RgHuyenHaTinhrg_huyen_1.readFeatures(json_RgHuyenHaTinhrg_huyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RgHuyenHaTinhrg_huyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RgHuyenHaTinhrg_huyen_1.addFeatures(features_RgHuyenHaTinhrg_huyen_1);
var lyr_RgHuyenHaTinhrg_huyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RgHuyenHaTinhrg_huyen_1, 
                style: style_RgHuyenHaTinhrg_huyen_1,
                popuplayertitle: 'Rg Huyen Ha Tinh — rg_huyen',
                interactive: false,
    title: 'Rg Huyen Ha Tinh — rg_huyen<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_0.png" /> Can Lộc<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_1.png" /> Cẩm Xuyên<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_2.png" /> Đức Thọ<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_3.png" /> Hà Tĩnh<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_4.png" /> Hồng Lĩnh<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_5.png" /> Hương Khê<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_6.png" /> Hương Sơn<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_7.png" /> Kỳ Anh<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_8.png" /> Kỳ Anh (Thị xã)<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_9.png" /> Lộc Hà<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_10.png" /> Nghi Xuân<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_11.png" /> Thạch Hà<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_12.png" /> Vũ Quang<br />\
    <img src="styles/legend/RgHuyenHaTinhrg_huyen_1_13.png" /> <br />' });
var format_Khohng_2 = new ol.format.GeoJSON();
var features_Khohng_2 = format_Khohng_2.readFeatures(json_Khohng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khohng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khohng_2.addFeatures(features_Khohng_2);
var lyr_Khohng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Khohng_2, 
                style: style_Khohng_2,
                popuplayertitle: 'Kho hàng',
                interactive: true,
                title: '<img src="styles/legend/Khohng_2.png" /> Kho hàng'
            });
var format_il_3 = new ol.format.GeoJSON();
var features_il_3 = format_il_3.readFeatures(json_il_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_il_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_il_3.addFeatures(features_il_3);
var lyr_il_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_il_3, 
                style: style_il_3,
                popuplayertitle: 'Đại lí',
                interactive: true,
                title: '<img src="styles/legend/il_3.png" /> Đại lí'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_RgHuyenHaTinhrg_huyen_1.setVisible(true);lyr_Khohng_2.setVisible(true);lyr_il_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_RgHuyenHaTinhrg_huyen_1,lyr_Khohng_2,lyr_il_3];
lyr_RgHuyenHaTinhrg_huyen_1.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Khohng_2.set('fieldAliases', {'id': 'id', 'Tên kho': 'Tên kho', 'Địa ch�': 'Địa ch�', 'Quy mô': 'Quy mô', 'Nhân viê': 'Nhân viê', 'Số đt': 'Số đt', 'Xuất T4': 'Xuất T4', 'Hàng tồ': 'Hàng tồ', 'Phường,': 'Phường,', 'Quận,huy': 'Quận,huy', 'Tỉnh': 'Tỉnh', 'X': 'X', 'Y': 'Y', });
lyr_il_3.set('fieldAliases', {'id': 'id', 'Tên': 'Tên', 'Địa ch�': 'Địa ch�', 'SĐT': 'SĐT', 'Chủ đ��': 'Chủ đ��', 'Phường,': 'Phường,', 'Quận,huy': 'Quận,huy', 'Tỉnh': 'Tỉnh', 'Kho pp': 'Kho pp', 'Doanhso T4': 'Doanhso T4', 'X': 'X', 'Y': 'Y', });
lyr_RgHuyenHaTinhrg_huyen_1.set('fieldImages', {'fid': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Khohng_2.set('fieldImages', {'id': 'TextEdit', 'Tên kho': 'TextEdit', 'Địa ch�': 'TextEdit', 'Quy mô': 'TextEdit', 'Nhân viê': 'TextEdit', 'Số đt': 'TextEdit', 'Xuất T4': 'TextEdit', 'Hàng tồ': 'TextEdit', 'Phường,': 'TextEdit', 'Quận,huy': 'TextEdit', 'Tỉnh': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_il_3.set('fieldImages', {'id': 'TextEdit', 'Tên': 'TextEdit', 'Địa ch�': 'TextEdit', 'SĐT': 'TextEdit', 'Chủ đ��': 'TextEdit', 'Phường,': 'TextEdit', 'Quận,huy': 'TextEdit', 'Tỉnh': 'TextEdit', 'Kho pp': 'TextEdit', 'Doanhso T4': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RgHuyenHaTinhrg_huyen_1.set('fieldLabels', {'fid': 'inline label - always visible', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Khohng_2.set('fieldLabels', {'id': 'inline label - always visible', 'Tên kho': 'inline label - always visible', 'Địa ch�': 'inline label - always visible', 'Quy mô': 'inline label - always visible', 'Nhân viê': 'inline label - always visible', 'Số đt': 'inline label - always visible', 'Xuất T4': 'inline label - always visible', 'Hàng tồ': 'inline label - always visible', 'Phường,': 'inline label - always visible', 'Quận,huy': 'inline label - always visible', 'Tỉnh': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_il_3.set('fieldLabels', {'id': 'inline label - always visible', 'Tên': 'inline label - always visible', 'Địa ch�': 'inline label - always visible', 'SĐT': 'inline label - always visible', 'Chủ đ��': 'inline label - always visible', 'Phường,': 'inline label - always visible', 'Quận,huy': 'inline label - always visible', 'Tỉnh': 'inline label - always visible', 'Kho pp': 'inline label - always visible', 'Doanhso T4': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_il_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});