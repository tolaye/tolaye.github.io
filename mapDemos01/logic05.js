/*
    City
Latitude
Longitude
population

New York
40.7128
-74.0059
population: 8804190

Los Angeles
34.0522
-118.2437
population: 2746388

Houston
29.7604
-95.3698
population: 2304580

Omaha
41.2524
-95.9980
population: 3898747

Chicago
41.8781
-87.6298
population: 486051
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

/*
    make an array
*/

var cities = [
    {
        name: "New York",
        location: [40.7128,-74.0059],
        population: 8804190
    },
    {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3898747
    },
    {
        name: "Houston",
        location: [29.7604,-95.3698],
        population: 2304580
    },
    {
        name: "Omaha",
        location: [41.2524, -95.9980],
        population: 486051
    },
    {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2746388
    }
];

// function that will calculate the the size of each circle radius
// by taking the square root of the population and multiplying times 40
function markerSize(pop)
{
    return Math.sqrt(pop) * 40;
}

// loop through each city in the array of cities and extract the necessary attributes
// to build a circle marker and then add a popup to the map
for(var i = 0; i < cities.length; i++)
{
    L.circle(
        cities[i].location,
        {
            fillOpacity: 0.75,
            color: "black",
            fillColor: "blue",
            // set the radius property - call on the markerSize to calculate radius
            radius: markerSize(cities[i].population)
        }
    )
    .bindPopup(
        `<center><h1>${cities[i].name}</h1><hr><h3>Population: ${cities[i].population}</h3><center>`
    )
    .addTo(myMap)
    ;
}