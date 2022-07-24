let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/graylydia/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});