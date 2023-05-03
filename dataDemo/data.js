/*
    JS is loose-Typed like Python

    python declaration
        num = 1         - num is an integer
        letter = 'A'    - letter is a string / char

    JS declaration
        variables:

        var num = 1
        -or-            - num is an integer
        let num = 1

        var letter = 'A'
        -or-            - num is a char
        let letter = 'A'

        constants:

        const NUM2 = 10;    - num2 is an interger that cannot change value
*/

// declare a variable to hold a name
let name = 'Pac-Man';

// display the value of the variable
console.log(`${name} evades ghosts on boards of dots and fruit`);

// JS objects - store values in value / key pairs
let inky = {
    name: 'Inky',
    color: 'Blue'
};

let pinky = {
    name: 'Pinky',
    color: 'Pink'
};

let blinky = {
    name: 'Blinky',
    color: 'Red'
};

let clyde = {
    name: 'Clyde',
    color: 'Orange'
};

// display key values from an object
console.log(`${inky.name} is ${inky.color}`);

// array in JS can be made in two ways:
//1. initialization list
// 2. empty array where values are pushed
let values = [1, 2, 3, 4, 5];

let group2Teams = [];

// use the .push()  command to add data to an array
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');

// display the info
console.log(values);
console.log(group2Teams);

/*
    use relational operator to implement decision

    > - greater than
    < - less than
    >= - greater than or equal
    <= - less than or equal
    == - is equal (loose comparison) 1 == '1' - true
    === - is equal to (strict comparison does not include the data type)
            1 === '1' - false
    != - is not equal
    ! - logical not (flips the value of a boolean)
    && - logical and (inclusion comparison -  both parts must be true)
    || - logical or (optional comparison - one part must be true)

    single alternative
    if (condition)
    {
        statement(s);
    }

    dual alternative
    if (condition)
    {
        statement(s);
    }
    else
    {
        statement(s);
    }

    multiple alternatives
    if (condition)
    {
        statement(s);
    }
    else if
    {
        statement(s);
    }
    else
    {
        statement(s);
    }

    switch(variable)
    {
        case value:
            statement(s);
            break;
        case anotherValue:
            statement(s);
            break;
        default:
            statement(s);
            break;
    }
*/

/*
    //looping

    //pretest and posttest loops

    //while - pretest

    while (condition)
    {
        statement(s);
    }

    //for - pretest

    for (start, condition, amount to change)
    {
        statement(s):
    }

    //do-while - posttest

    do
    {
        statement(s);
    }while(condition);
*/

// use a for loop to access and display the contents of the arrays one-by-one
for(var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}