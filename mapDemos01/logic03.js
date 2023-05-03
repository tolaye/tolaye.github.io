/*
    City
Latitude
Longitude

New York
40.7128
-74.0059

Los Angeles
34.0522
-118.2437

Houston
29.7604
-95.3698

Omaha
41.2524
-95.9980

Chicago
41.8781
-87.6298
*/


// can also use setview to chain the initialization together
//var myMap = L.map("map").setView([33.7488, -84.3877], 10); 

var myMap = L.map("map", 
    {
        center: [37.0902, -95.7129],
        zoom: 5 
    }
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var nyc = L.marker(
    [40.7128,-74.0059],
    {
        title: "Hello From New York!"
    }
).addTo(myMap);

nyc.bindPopup("Hello From New York")

var los = L.marker(
    [34.0522, -118.2437],
    {
        title: "Hello From Los Angeles!"
    }
).addTo(myMap);

los.bindPopup("Hello From Los Angeles")


var hos = L.marker(
    [29.7604,-95.3698],
    {
        title: "Hello From Houston!"
    }
).addTo(myMap);

hos.bindPopup("Hello From Houston")

var oma = L.marker(
    [41.2524, -95.9980],
    {
        title: "Hello From Omaha!"
    }
).addTo(myMap);

oma.bindPopup("Hello From Omaha")

var chi = L.marker(
    [41.8781, -87.6298],
    {
        title: "Hello From Chicago!"
    }
).addTo(myMap);

chi.bindPopup("Hello From Chicago")

var atl = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello From Atlanta, GA!"
    }
).addTo(myMap);

atl.bindPopup("Hello From Atlanta, GA")

