"use strict";(self.webpackChunkmaps_test_angst_frei_ch=self.webpackChunkmaps_test_angst_frei_ch||[]).push([[179],{138:(o,e,n)=>{n(978),n(732),n(652),n(817),n(687),n(408),n(292),n(820),n(920),n(504),n(681),n(905),n(278),n(385),n(13),n(981),n(931),n(979),n(207);var r=n(243),a=n(755),s=n(460),d="https://docs.google.com/spreadsheets/d/1PlSNgGsLZvsWsolrGFnJEiKY8wJV1jw0-fTEjz0G3UE/edit#gid=0",g="AIzaSyA5IUHNyPZvWuCMTqvI4DJ2ygqDO5_t5Is",u=r.map("map",{preferCanvas:!0,fullscreenControl:{pseudoFullscreen:!1,position:"bottomleft"},attributionControl:!1,zoomControl:!1,scrollWheelZoom:!0,tap:!1}).setView([41.76,-72.69],11);function m(o,e){var n=r.DomUtil.create("button","",e);return n.setAttribute("type","button"),n.innerHTML=o,n}var f={notesSheetName:"Notes",optionsSheetName:"Options",pointsSheetName:"Points",polygonsSheetName:"Polygons",polylinesSheetName:"Polylines",_mapTitle:"Map Title",_mapSubtitle:"Map Subtitle",_mapTitleDisplay:"Display Title",_authorName:"Author Name",_authorURL:"Author Email or Website",_codeCredit:"Author Code Credit",_githubRepo:"Author Code Repo",_googleAnalytics:"Google Analytics Tracking ID",_tileProvider:"Basemap Tiles",_markercluster:"Cluster Markers",_introPopupText:"Intro Popup Text",_initZoom:"Initial Zoom",_initLat:"Initial Center Latitude",_initLon:"Initial Center Longitude",_mapSearch:"Search Button",_mapSearchCircleRadius:"Search Radius",_mapSearchZoom:"Search Results Zoom Level",_mapZoom:"Zoom Controls",_mapMyLocation:"Show My Location",_mapAttribution:"Credits and Attribution",_pointsLegendTitle:"Point Legend Title",_pointsLegendPos:"Point Legend Position",_pointsLegendIcon:"Point Legend Icon",_displayTable:"Display Table",_tableHeight:"Table Height",_tableColumns:"Table Columns",_tableHeaderColor:"Table Header Color",_polylinesLegendTitle:"Polyline Legend Title",_polylinesLegendPos:"Polyline Legend Position",_polylinesLegendIcon:"Polyline Legend Icon",_polylinesWeight:"Polyline Thickness",_polygonsLegendTitle:"Polygon Legend Title",_polygonsLegendPosition:"Polygon Legend Position",_polygonsLegendIcon:"Polygon Legend Icon",_polygonsGeojsonURL:"Polygon GeoJSON URL",_popupProp:"Property Popups, Labels",_polygonLayers:"Polygon Properties, Labels",_bucketDivisors:"Property Ranges",_colorScheme:"Property Range Color Palette",_colorOpacity:"Polygon Color Opacity",_outlineColor:"Polygon Outline Color",_bucketColors:"Property Range Manual Colors",_polygonDisplayImages:"Show Images When Available",_polygonLabel:"Show Polygon Labels",_polygonLabelZoomLevel:"Show Polygon Labels at Zoom Level",_polygonShowOnStart:"Show Polygon Data on Start"};a(window).on("load",(function(){var o,e={},n={},h=[],y=!1,v=!1,_=!1,L=0,b=0,P=[],C=[],T=[],k=[],S=[],w=[],O=[],I=[],x=[];function N(e){if(e<h.length&&J(e,"_polygonsGeojsonURL").trim()){L=e;var n=J(e,"_popupProp").split(";");for(i in n)n[i]=n[i].split(",");O.push(n),a.getJSON(J(e,"_polygonsGeojsonURL").trim(),(function(o){geoJsonLayer=r.geoJson(o,{onEachFeature:M,pointToLayer:function(o,e){return r.circleMarker(e,{className:"geojson-point-marker"})}}),k.push(geoJsonLayer),N(e+1)}))}else!function(){for(var e=0;e<h.length&&J(e,"_polygonsGeojsonURL").trim();){for(i in isNumerical=[],divisors=[],colors=[],polygonLayers=J(e,"_polygonLayers").split(";"),polygonLayers)polygonLayers[i]=polygonLayers[i].split(",");if(divisors=J(e,"_bucketDivisors").split(";"),divisors.length!=polygonLayers.length)return void alert("Error in Polygons: The number of sets of divisors has to match the number of properties");for(colors=J(e,"_bucketColors").split(";"),i=0;i<divisors.length;i++){for(divisors[i]=divisors[i].split(","),j=0;j<divisors[i].length;j++)divisors[i][j]=divisors[i][j].trim();colors[i]?colors[i]=colors[i].split(","):colors[i]=[]}for(i=0;i<divisors.length;i++){if(0==divisors[i].length)return void alert("Error in Polygons: The number of divisors should be > 0");if(0==colors[i].length)for(colors[i]=palette(W(e,"_colorScheme","tol-sq"),divisors[i].length),j=0;j<colors[i].length;j++)colors[i][j]="#"+colors[i][j].trim();else if(divisors[i].length!=colors[i].length)return void alert("Error in Polygons: The number of divisors should match the number of colors")}for(i=0;i<divisors.length;i++)if(isNaN(parseFloat(divisors[i][0].trim())))isNumerical[i]=!1;else for(isNumerical[i]=!0,j=0;j<divisors[i].length;j++)divisors[i][j]=parseFloat(divisors[i][j].trim());P.push(divisors),C.push(colors),T.push(isNumerical),w.push(polygonLayers);var n=W(e,"_polygonsLegendPosition","off");(o=r.control({position:"off"==n?"topleft":n})).onAdd=function(o){var n='<h6 class="pointer">'+J(e,"_polygonsLegendTitle")+"</h6>";for(i in n+="<form>",polygonLayers){var t=polygonLayers[i][1]?polygonLayers[i][1].trim():polygonLayers[i][0].trim();n+='<label><input type="radio" name="prop" value="'+e+";"+i+'"> ',n+=(t=""==t?"On":t)+"</label><br>"}n+='<label><input type="radio" name="prop" value="'+e+';-1"> Off</label></form><div class="polygons-legend-scale">';var l=r.DomUtil.create("div","leaflet-control leaflet-control-custom leaflet-bar ladder polygons-legend"+e);return l.innerHTML=n,l.innerHTML+="</div>",l},o.addTo(u),"off"==J(e,"_polygonsLegendPosition")&&a(".polygons-legend"+e).css("display","none"),S.push(o),e++}for(var i in x){var l=r.featureGroup(x[i]);I.push(l)}for(a('.ladder input:radio[name="prop"]').change((function(){L=parseInt(a(this).val().split(";")[0]),-1==(b=parseInt(a(this).val().split(";")[1]))?(a(".polygons-legend"+L).find(".polygons-legend-scale").hide(),u.hasLayer(k[L])&&(u.removeLayer(k[L]),u.hasLayer(I[L])&&u.removeLayer(I[L]))):D()})),t=0;t<e;t++)"on"==J(t,"_polygonShowOnStart")?a('.ladder input:radio[name="prop"][value="'+t+';0"]').click():a('.ladder input:radio[name="prop"][value="'+t+';-1"]').click();a(".polygons-legend-merged h6").eq(0).click().click(),v=!0}()}function D(){if(p=L,z=b,k[p].setStyle(G),u.hasLayer(k[p])||(u.addLayer(k[p]),!u.hasLayer(I[p])&&I[p]&&u.addLayer(I[p])),a("#polylines-legend form label input").each((function(o){a(this).click().click()})),""!=P[p][z]){a(".polygons-legend"+p+" .polygons-legend-scale").html("");for(var o=[],e=0;e<P[p][z].length;e++){var n=T[p][z],t=P[p][z][e],i=P[p][z][e+1],r=A(t);t=t?B(t):t,i=i?B(i):i,o.push('<i style="background:'+r+"; opacity: "+W(p,"_colorOpacity","0.7")+'"></i> '+t+(i&&n?"&ndash;"+i:n?"+":""))}a(".polygons-legend"+p+" .polygons-legend-scale").html(o.join("<br>")),a(".polygons-legend"+p+" .polygons-legend-scale").show(),Z()}else a(".polygons-legend"+p).find(".polygons-legend-scale").css({margin:"0px",padding:"0px",border:"0px solid"})}function G(o){var e=o.properties[w[L][b][0].trim()];return"Point"==o.geometry.type?{radius:4,weight:1,opacity:1,color:A(e),fillOpacity:W(L,"_colorOpacity","0.7"),fillColor:"white"}:{weight:2,opacity:1,color:W(L,"_outlineColor","white"),dashArray:"3",fillOpacity:W(L,"_colorOpacity","0.7"),fillColor:A(e)}}function A(o){var e,n=T[L][b],t=C[L][b],i=P[L][b];if(n)for(e=t.length-1;o<i[e];)e-=1;else for(e=0;e<t.length-1&&o!=i[e];e++);return t[e]||(e=0),t[e]}function M(o,e){if(""!=J(L,"_popupProp")||"off"!=J(L,"_polygonDisplayImages")){var n="";for(i in props=O[L],props)if(""!=props[i]){n+=props[i][1]?props[i][1].trim():props[i][0].trim();var t=o.properties[props[i][0].trim()];n+=": <b>"+(t?B(t):t)+"</b><br>"}if("on"==J(L,"_polygonDisplayImages")&&o.properties.img&&(n+='<img src="'+o.properties.img+'">'),e.bindPopup(n),x[L]||x.push([]),""!==J(L,"_polygonLabel")){var l=r.marker(polylabel(e.feature.geometry.coordinates,1).reverse(),{icon:r.divIcon({className:"polygon-label"+L+" polygon-label",html:o.properties[J(L,"_polygonLabel")]})});x[L].push(l)}}}function R(o,t,s){var p,d;!function(o){for(var n in o){var t=o[n];e[t.Setting]=t.Customize}}(o),document.title=U("_mapTitle"),p=E("_tileProvider","CartoDB.Positron"),r.tileLayer.provider(p,{maxZoom:19}).addTo(u),r.control.attribution({position:E("_mapAttribution","bottomright")}).addTo(u);var g="";if(t&&t.length>0?(d=function(o){var e=[],t={};for(var i in o){var l=o[i].Group;l&&-1===e.indexOf(l)&&(e.push(l),n[l]=o[i]["Marker Icon"].indexOf(".")>0?o[i]["Marker Icon"]:o[i]["Marker Color"])}if(0===e.length)t=void 0;else for(var i in e){var a=e[i];t[a]=r.layerGroup(),t[a].addTo(u)}return t}(t),g=function(o,e){var n=[];for(var t in o){var i=o[t],l=i["Custom Size"],s=l.indexOf("x")>0?[parseInt(l.split("x")[0]),parseInt(l.split("x")[1])]:[32,32],p=[s[0]/2,s[1]],c=i["Marker Icon"].indexOf(".")>0?r.icon({iconUrl:i["Marker Icon"],iconSize:s,iconAnchor:p}):r.icon({iconUrl:"/img/angst-frei-marker-pin.png",iconSize:s,iconAnchor:p});if(""!==i.Latitude&&""!==i.Longitude){var d=r.marker([i.Latitude,i.Longitude],{icon:c}).bindPopup("<b>"+i.Name+"</b><br>"+(i.Image?'<img src="'+i.Image+'"><br>':"")+i.Description);void 0!==e&&1!==e.length&&d.addTo(e[i.Group]),n.push(d)}}var g=r.featureGroup(n),m="on"===U("_markercluster");if(void 0===e||0===e.length)u.addLayer(m?r.markerClusterGroup({chunkedLoading:!0}).addLayer(g).addTo(u):g);else{if(m){var f=r.markerClusterGroup.layerSupport();for(t in f.addTo(u),e)f.checkIn(e[t]),e[t].addTo(u)}var h="off"==U("_pointsLegendPos")?"topleft":U("_pointsLegendPos"),v=r.control.layers(null,e,{collapsed:!1,position:h});"off"!==U("_pointsLegendPos")&&(v.addTo(u),v._container.id="points-legend",v._container.className+=" ladder")}a("#points-legend").prepend('<h6 class="pointer">'+U("_pointsLegendTitle")+"</h6>"),""!=U("_pointsLegendIcon")&&a("#points-legend h6").prepend('<span class="legend-icon"><i class="fas '+U("_pointsLegendIcon")+'"></i></span>');var _="on"==U("_displayTable"),L=U("_tableColumns").split(",").map(Function.prototype.call,String.prototype.trim);if(_&&L.length>1){var b=E("_tableHeight",40);(b<10||b>90)&&(b=40),a("#map").css("height",100-b+"vh"),u.invalidateSize();var P=U("_tableHeaderColor").split(",");function n(){var n=[];for(t in o)u.hasLayer(e[o[t].Group])&&u.getBounds().contains(r.latLng(o[t].Latitude,o[t].Longitude))&&n.push(o[t]);var l=i(n);C.clear(),C.rows.add(l),C.draw()}function i(o){var e=[];for(var n in o){var t=[];for(var i in L)t.push(o[n][L[i]]);e.push(t)}return e}function l(){var o=[];for(var e in L)o.push({title:L[e]});return o}""!=P[0]&&(a("table.display").css("background-color",P[0]),P.length>=2&&a("table.display").css("color",P[1])),u.on("moveend",n),u.on("layeradd",n),u.on("layerremove",n);var C=a("#maptable").DataTable({paging:!1,scrollCollapse:!0,scrollY:"calc("+b+"vh - 40px)",info:!1,searching:!1,columns:l()})}return y=!0,g}(t,d)):y=!0,function(o){var e,n=u.getCenter().lat,t=!1,i=u.getCenter().lng,l=!1,a=12,s=!1;""!==U("_initLat")&&(n=U("_initLat"),t=!0),""!==U("_initLon")&&(i=U("_initLon"),l=!0),""!==U("_initZoom")&&(a=parseInt(U("_initZoom")),s=!0),e=t&&l||!o?r.latLng(n,i):o.getBounds().getCenter(),!s&&o&&(a=u.getBoundsZoom(o.getBounds())),u.setView(e,a)}(g),s&&s.length>0?function(o){if(o&&0!=o.length){var e="off"==U("_polylinesLegendPos")?"topleft":U("_polylinesLegendPos"),n=r.control.layers(null,null,{position:e,collapsed:!1});for(i=0;i<o.length;i++)a.getJSON(o[i]["GeoJSON URL"],function(e){return function(t){for(l in latlng=[],t.features)latlng.push(t.features[l].geometry.coordinates);for(l in latlng)for(c in latlng[l])latlng[l][c].reverse(),3==latlng[l][c].length&&latlng[l][c].shift();if(line=r.polyline(latlng,{color:""==o[e].Color?"grey":o[e].Color,weight:E("_polylinesWeight",2),pane:"shadowPane"}).addTo(u),o[e].Description&&""!=o[e].Description&&line.bindPopup(o[e].Description),n.addOverlay(line,'<i class="color-line" style="background-color:'+o[e].Color+'"></i> '+o[e]["Display Name"]),0==e&&(n._container&&(n._container.id="polylines-legend",n._container.className+=" ladder"),""!=U("_polylinesLegendTitle")&&(a("#polylines-legend").prepend('<h6 class="pointer">'+U("_polylinesLegendTitle")+"</h6>"),""!=U("_polylinesLegendIcon")&&a("#polylines-legend h6").prepend('<span class="legend-icon"><i class="fas '+U("_polylinesLegendIcon")+'"></i></span>'),"in polylines legend"==U("_mapTitleDisplay")))){var i="<h3>"+U("_mapTitle")+"</h3>",s="<h6>"+U("_mapSubtitle")+"</h6>";a("#polylines-legend").prepend(i+s)}o.length==e+1&&(_=!0)}}(i));"off"!==U("_polylinesLegendPos")&&n.addTo(u)}}(s):_=!0,J(0,"_polygonsGeojsonURL")&&J(0,"_polygonsGeojsonURL").trim()?N(0):v=!0,"off"!==U("_mapSearch")){var f=r.Control.geocoder({expand:"click",position:U("_mapSearch"),geocoder:r.Control.Geocoder.nominatim({geocodingQueryParams:{viewbox:"",bounded:1}})}).addTo(u);function o(){var o=u.getBounds();f.options.geocoder.options.geocodingQueryParams.viewbox=[o._southWest.lng,o._southWest.lat,o._northEast.lng,o._northEast.lat].join(",")}u.on("moveend",o)}"off"!==U("_mapMyLocation")&&r.control.locate({keepCurrentZoomLevel:!0,returnToPrevBounds:!0,position:U("_mapMyLocation")}).addTo(u);var h,L,b=r.Routing.control({waypoints:[{latLng:void 0,latLng:void 0}],routeWhileDragging:!0,reverseWaypoints:!0,showAlternatives:!1,router:new r.Routing.osrmv1({language:"de",profile:"car"}),geocoder:r.Control.Geocoder.nominatim({}),collapsible:!0,show:!1,position:"bottomright"}).addTo(u);u.on("click",(function(o){var e=r.DomUtil.create("div"),n=m("Start from this location",e),t=m("Go to this location",e);r.popup().setContent(e).setLatLng(o.latlng).openOn(u),r.DomEvent.on(n,"click",(function(){b.spliceWaypoints(0,1,o.latlng),u.closePopup()})),r.DomEvent.on(t,"click",(function(){b.spliceWaypoints(b.getWaypoints().length-1,1,o.latlng),u.closePopup()}))})),"off"!==U("_mapZoom")&&r.control.zoom({position:U("_mapZoom")}).addTo(u),u.on("zoomend",(function(){Z()})),function(){var o=U("_mapTitleDisplay");if("off"!==o){var e='<h3 class="pointer">'+U("_mapTitle")+"</h3>",n="<h5>"+U("_mapSubtitle")+"</h5>";"topleft"==o?a("div.leaflet-top").prepend('<div class="map-title leaflet-bar leaflet-control leaflet-control-custom">'+e+n+"</div>"):"topcenter"==o&&(a("#map").append('<div class="div-center"></div>'),a(".div-center").append('<div class="map-title leaflet-bar leaflet-control leaflet-control-custom">'+e+n+"</div>")),a(".map-title h3").click((function(){location.reload()}))}}(),h=a(".leaflet-control-attribution")[0].innerHTML,U("_authorName"),U("_authorURL"),L="Code",U("_codeCredit")&&(L+=" by "+U("_codeCredit")),L+=" with ",a(".leaflet-control-attribution")[0].innerHTML=L+h,a("#points-legend label span").each((function(o){var e=a(this).text().trim(),t=n[e].indexOf(".")>0?'<img src="'+n[e]+'" class="markers-legend-icon">':'&nbsp;<i class="fas fa-map-marker" style="color: '+n[e]+'"></i>';a(this).prepend(t)})),function o(){if(y&&_&&v){for(i in a(".ladder h6").append('<span class="legend-arrow"><i class="fas fa-chevron-down"></i></span>'),a(".ladder h6").addClass("minimize"),S)""!=J(i,"_polygonsLegendIcon")&&a(".polygons-legend"+i+" h6").prepend('<span class="legend-icon"><i class="fas '+J(i,"_polygonsLegendIcon")+'"></i></span>');a(".ladder h6").click((function(){a(this).hasClass("minimize")?(a(".ladder h6").addClass("minimize"),a(".legend-arrow i").removeClass("fa-chevron-up").addClass("fa-chevron-down"),a(this).removeClass("minimize").parent().find(".legend-arrow i").removeClass("fa-chevron-down").addClass("fa-chevron-up")):(a(this).addClass("minimize"),a(this).parent().find(".legend-arrow i").removeClass("fa-chevron-up").addClass("fa-chevron-down"))})),a(".ladder h6").first().click(),a("#map").css("visibility","visible"),a(".loader").hide(),""!=U("_introPopupText")&&(e=U("_introPopupText"),n=u.getCenter(),r.popup({className:"intro-popup",offset:[0,80]}).setLatLng(n).setContent(e).openOn(u)),Z()}else setTimeout(o,50);var e,n}();var P=U("_googleAnalytics");if(P&&P.length>=10){var C=document.createElement("script");function o(){dataLayer.push(arguments)}C.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+P),document.head.appendChild(C),window.dataLayer=window.dataLayer||[],o("js",new Date),o("config",P)}}function Z(){for(i in x)u.getZoom()<=W(i,"_polygonLabelZoomLevel",9)?a(".polygon-label"+i).hide():"-1"!=a(".polygons-legend"+i+" input[name=prop]:checked").val()&&a(".polygon-label"+i).show()}function U(o){return e[f[o]]}function J(o,e){return!!h[o]&&h[o][f[e]]}function E(o,e){return(o=U(o))&&""!==o.trim()?o:e}function W(o,e,n){return(e=J(o,e))&&""!==e.trim()?e:n}function H(o){var e={};for(var n in o){var t=o[n];e[t.Setting]=t.Customize}h.push(e)}function B(o){for(;/(\d+)(\d{3})/.test(o.toString());)o=o.toString().replace(/(\d+)(\d{3})/,"$1,$2");return o}a.ajax({url:"./csv/Options.csv",type:"HEAD",error:function(){var o=function(o){return s.parse(s.unparse(o[0].values),{header:!0}).data},e="https://sheets.googleapis.com/v4/spreadsheets/",n=d.indexOf("/d/")>0?d.split("/d/")[1].split("/")[0]:d;a.getJSON(e+n+"?key="+g).then((function(t){var i=t.sheets.map((function(o){return o.properties.title}));0===i.length||i.includes("Options"),a.when(a.getJSON(e+n+"/values/Options?key="+g),a.getJSON(e+n+"/values/Points?key="+g),a.getJSON(e+n+"/values/Polylines?key="+g)).done((function(t,r,l){var s=i.filter((function(o){return 0===o.indexOf("Polygons")})),p=function(i){0===i.length?R(o(t),o(r),o(l)):a.getJSON(e+n+"/values/"+i.shift()+"?key="+g,(function(e){H(o([e])),p(i)}))};p(s)}))}))},success:function(){var o=function(o){return s.parse(o[0],{header:!0}).data};a.when(a.get("./csv/Options.csv"),a.get("./csv/Points.csv"),a.get("./csv/Polylines.csv")).done((function(e,n,t){!function i(r){a.get("./csv/Polygons"+(0===r?"":r)+".csv",(function(e){H(o([e])),i(r+1)})).fail((function(){R(o(e),o(n),o(t))}))}(0)}))}})}))},905:(o,e,n)=>{o.exports=n.p+"img/angst-frei-marker-pin.png"},681:(o,e,n)=>{o.exports=n.p+"img/angst-frei.png"},385:(o,e,n)=>{o.exports=n.p+"img/animap-marker-pin.png"},278:(o,e,n)=>{o.exports=n.p+"img/animap.png"},981:(o,e,n)=>{o.exports=n.p+"img/mettagstesch-marker-pin-blue.png"},931:(o,e,n)=>{o.exports=n.p+"img/mettagstesch-marker-pin-gold.png"},13:(o,e,n)=>{o.exports=n.p+"img/mettagstesch.png"},207:(o,e,n)=>{o.exports=n.p+"img/sonja-marker-pin.png"},979:(o,e,n)=>{o.exports=n.p+"img/sonja.png"}},o=>{o.O(0,[494],(()=>(138,o(o.s=138)))),o.O()}]);