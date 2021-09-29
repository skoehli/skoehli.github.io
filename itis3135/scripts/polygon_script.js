function polygon ()
{   
    // Get input
    var numSides = parseFloat(prompt("The Stygian Dingo would like a number between 0 and 10, inclusive."));

    // If the input is negative, take the absolute value of it
    if(numSides < 0)
    {
        numSides = Math.abs(numSides);
    }

    // Validate input
    while(numSides > 10)
    {
        // Prompt user to enter valid data
        numSides = parseFloat(prompt("Input cannot be greater than 10 or less than -10. Please enter a number between 0 and 10, inclusive."));
    }

    // Round the decimal accordingly
    // Truncate the input and convert it back to decimal
    truncNum = parseInt(numSides);
    truncNum = parseFloat(truncNum);

    if((numSides - truncNum) != 0)
    {
        // Round the decimal up
        if((numSides - truncNum) >= 0.5)
        {
            numSides = parseInt(numSides) + 1;
        }
        // Round the decimal down
        else if ((numSides - truncNum < 0.5))
        {
            numSides = parseInt(numSides) - 1;
        }
    }

    // shape variable stores the name of the polygon
    var shape = "";


    // Switch that returns the name of the polygon
    switch(numSides)
    {
        case 0.0:
            return window.alert("There is no polygon with zero sides.");
            break;
        case 1.0:
            shape = "henagon";
            break;
        case 2.0:
            shape = "digon";
            break;
        case 3.0:
            shape = "trigon";
            break;
        case 4.0:
            shape = "tetragon";
            break;
        case 5.0:
            shape = "pentagon";
            break;
        case 6.0:
            shape = "hexagon";
            break;
        case 7.0:
            shape = "heptagon";
            break;
        case 8.0:
            shape = "octagon";
            break;
        case 9.0:
            shape = "enneagon";
            break;
        case 10.0:
            shape = "decagon";
            break;    
    }

    return window.alert("The name of a polygon with " + numSides + " side(s) is " + shape + ".");
}