/*
    goal is to make a clustered column chart
        grab all greek names - store in an array
        grab all roman names - store in an array
        grab all greek search results - store in an array
        grab all roman search results - store in an array
*/

// declare the arrays to hold each set of data
/*
let greekNames = [];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];


// use for loop to populate the arrays
// data.js and all if its information (searchResults array is available)
for(var i = 0; i < greekSearchResults.length; i++)
{
    // access each entry of data
    result = searchResults[i];

    // with each entry, push the information into the necessary array
    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
}

let pairs = searchResults.map(function(result) {
    return searchResults.pair;
});
*/


//
//let pairs = searchResults.map(result => result.pair);

// to plot data, first we need to have our trace info
let greekTrace = {
    x: searchResults.map(result => result.pair),
    y: searchResults.map(result => result.greekSearchResults),
    text: searchResults.map(result => result.greekName),
    name: "Greek",
    type: "bar"
};

let romanTrace = {
    x: searchResults.map(result => result.pair),
    y: searchResults.map(result => result.romanSearchResults),
    text: searchResults.map(result => result.romanName),
    name: "Roman",
    type: "bar"
};

// create the array for our trace to be plotted together
let data = [greekTrace, romanTrace];

// add the layout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

// render the plot to the tag with id "plot"

Plotly.newPlot("plot2", data, layout);