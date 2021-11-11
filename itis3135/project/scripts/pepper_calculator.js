var $ = function (id)
{
   return document.getElementById(id);
};

/*
    The calculate function takes user input, calulates a result,
    then prints its value on the webpage.
*/
var calculate = function()
{
    
    // Get input that the user entered
    var sauce = $("sauce").value;
    var batch_size = parseInt($("batch_size").value);

    // Local variables
    var peppers;

    // Validate input
    if(batch_size <= 0)
    {
        window.alert("You can't have a negative or zero amount of bottles in your batch! Try again.");
        $("batch_size").value = clear;
    }
    else if (isNaN(batch_size))
    {
        window.alert("Please enter the size of your batch.");
        return;
    }


    // Create a string based on input
    switch(sauce)
    {
        case "sanguinesti":
            var numRHabaneros = 4;
            var numReapers = 2;
            peppers = numRHabaneros + " red habaneros " + numReapers + " Carolina Reapers";
            break;
        case "hakai":
            var numGhost = 2;
            var numHabaneros = 3;
            var numChilis = 3;
            peppers = numHabaneros + " habaneros " + numGhost + " ghost peppers " + numChilis + " Thai chili peppers";
            break;
        case "stinger":
            var numOHabaneros = 6;
            peppers = numOHabaneros + " orange habaneros";
        default:
            $("result").value = "An error has occurred";
    }

    if(batch_size === 1)
    {
        window.alert("You need " + peppers + " for " + batch_size + " bottle of " + sauce + " sauce.");  
    }
    else
    {
        window.alert("You need " + peppers + " for " + batch_size + " bottles of " + sauce + " sauce."); 
    }
    

}

window.onload = function () 
{
   $("calculate").onclick = calculate;
};