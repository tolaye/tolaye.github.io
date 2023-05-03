/*
    add event listeners to different items
*/

// use d3.select() and reference an id
let button = d3.select("#clickme"); // use the .css id reference syntax

// associate a function with the button being clicked

function handleClick()
{
    console.log("You clicked the button!");

    console.log(d3.event.target);
}

button.on("click", handleClick);

