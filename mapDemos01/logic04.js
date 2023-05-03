

// can also use setview to chain the initialization together
var myMap = L.map("map").setView([33.7488, -84.3877], 10); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello From Atlanta, GA, USA!"
    }
).addTo(myMap);

marker.bindPopup("Hello From Atlanta, GA")

// draw a circle around GA Tech 33.7756, -84.3963 
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 500,
        fillOpacity: .8
    }
).bindPopup("Hello From GA Tech")
.addTo(myMap);

// draw a rectangle - 33.7728, -84.3656
L.rectangle(
    [
        // specify the start and end of the rectangle
        [33.7728, -84.3656],
        [33.7718, -84.3646]
    ],
    {
        color: "black",
        fillColor: "red",
        stroke: true,
        weight: 2
    }
).bindPopup("Rectangle near Ponce City Marker")
.addTo(myMap)

// draw a line
L.polyline(
    [
        // specify the start and end of the line
        [33.7573, -84.3963],
        [33.7553, -84.4006]
    ],
    {
        color: "red",
        fillColor: "red",
        stroke: true,
        weight: 5
    }
).addTo(myMap)

// draw a polygon around Chateau Elan
L.polygon(
    [
        [34.1018, -83.8177],
        [34.1008, -83.8177],
        [34.1008, -83.8157]
    ],
    {
        color: "red",
        fillColor: "red",
        fillOpacity: "yellow",
    }
).bindPopup("Triangle near-ish Chateau Elan")
.addTo(myMap)