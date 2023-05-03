

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
