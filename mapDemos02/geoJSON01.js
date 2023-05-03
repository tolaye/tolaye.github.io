// NYC Coords. 40.7128, -74.0060

var myMap = L.map("map", {
    center: [40.7128, -74.0060],
    zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

/*
// get the GeoJSON data - use D3!
d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geojson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        L.geoJson(data).addTo(myMap);
    }
);
*/

/*
// specify the properties inside of variable to be used with the style of L.geoJSON
var styling = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.75,
    weight: 1.5
};

// we can change the colors of the outlines
// get the GeoJSON data - use D3!
d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geojson file has polygon coordinates,
        // it plots the outlines of the neighborhoods
        // add a style property to change the coloring of the neighborhoods
        L.geoJson(data,
            {
                style: styling
            }).addTo(myMap);
    }
);
*/

// function that colors the borough
function boroughColor(borough)
{
    if (borough == "Brooklyn")
        return "yellow";
    else if (borough == "Bronx")
        return "red";
    else if (borough == "Manhattan")
        return "orange";
    else if (borough == "Queens")
        return "green";
    else
        return "blue";
};

// color the borough on the map based on the name of the borough
d3.json("nyc.geojson").then(
    function(data)
    {
        // because this nyc.geojson file has polygon coordinates,
        // it plots the outlines of the neighborhoods

        // can access the boroughs by going to features.properties.borough
        L.geoJson(data,{
            style: function (feature) {
                return {
                color: "white",
                fillOpacity: 0.5,
                weight: 1.5,
                fillColor: // call a function and pass in the value
                            boroughColor(feature.properties.borough)
                };
            },
            // this property allow for actions and other attributes to be mapped
            // to each neighborhood
            onEachFeature: function(feature, layer)
            {
                // bind a popup when the neighborhood is clicked
                layer.bindPopup(`<center><h2>${feature.properties.neighborhood}</h2><hr><h3>${feature.properties.borough}</h3></center>`);

                // use layer.on() to add events to the map based on the mouse
                layer.on({
                    // hover over the neighborhood with the mouse
                    mouseover: function(event){
                        // tell what triggered the event - store the ref in a variable
                        layer = event.target;
                        // use the setStyle() property to change the fillOpacity
                        layer.setStyle({
                            fillOpacity: 0.9
                        });
                    },
                    mouseout: function(event){
                        // tell what triggered the event - store the ref in a variable
                        layer = event.target;
                        // use the setStyle() property to change the fillOpacity
                        layer.setStyle({
                            fillOpacity: 0.5
                        });
                    },
                    // add a click property to zoom
                    click: function(event)
                    {
                        // use a map function, fitBounds to zoom in
                        myMap.fitBounds(event.target.getBounds());
                    }
                });
            }
        }).addTo(myMap);
    }
);