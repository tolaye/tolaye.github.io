// map variable that points to san fran
var myMap = L.map("map",{
    center: [37.7749, -122.4194],
    zoom: 12
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// make a call to d3.json and get the data from the URL
var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";

// use d3.json to make a marker cluster
d3.json(dataURL).then(
    function(data)
    {
        // make a marker cluster group to hold the clusters of points
        var markers = L.markerClusterGroup();

        // loop through the array of data points
        for(var i = 0; i < data.length; i++)
        {
            // extract the location
            var location = data[i].location;

            // set up a variable to hold date option
            var dateOptions = {
                weekday: 'long',
                year: 'numeric',
                month:'long',
                day: 'numeric'
            }

            // push the coordinates as an array to the marker Clusters and 
            markers.addLayer(
                L.marker(
                    [
                        location.coordinates[1],
                        location.coordinates[0]
                    ]
                ).bindPopup( `${new Date(data[i].date).toLocaleDateString("en-US", dateOptions)}
                    <hr>
                    <b>Address: </b>${data[i].address} <br>
                    <b>Description: </b>${data[i].descript}<br>
                    <b>Time: </b>${data[i].time}`
                )
            );
        }
        // use .addLayer to add the markers
        myMap.addLayer(markers);
    }
);