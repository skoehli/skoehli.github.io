var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    $("update_cals").onclick = updateCalories;
    $("avg_cals").onclick = showAverageCalories;
    $("show_max").onmouseover = showMax();
};

var updateCalories = function()
{
    // Variables
    var day;
    var cals = parseInt($("calories").value);

    var radios = document.getElementsByName("days");

    for(var i = 0; i < radios.length; i++)
    {
        if(radios[i].checked)
        {
            day = radios[i].value;
        }
    }

    // Validate input
    if(cals === 0 || isNaN(cals))
    {
        window.alert("Enter a valid number of calories.");
        $("update_cals").value = "";
    }
    // Change value of element in calories array depending on day submitted
    else
    {
        if(day === "Monday")
        {
            calories[0] = cals;
        }
        else if(day === "Tuesday")
        {
            calories[1] = cals;
        }
        else if(day === "Wednesday")
        {
            calories[2] = cals;
        }
        else if(day === "Thursday")
        {
            calories[3] = cals;
        }
        else if(day === "Friday")
        {
            calories[4] = cals;
        }
        else if(day === "Saturday")
        {
            calories[5] = cals;
        }
        else if(day === "Sunday")
        {
            calories[6] = cals;
        }

        // Show updated array
        window.alert("Your updated calories this week: " + "\n" + calories);
    }

};

var showAverageCalories = function()
{
    // Local variables
    var sum = 0;
    var avg = 0;

    // Add all calories
    for(var i = 0; i < calories.length; i++)
    {
        sum += calories[i];
    }

    
    // Take the average
    avg = parseInt(sum / calories.length);

    // Display the average
    $("averageCals").value = avg;
}

var showMax = function()
{
    var max = 0;
    var maxIndex;
    var maxDay;

    // Get the highest value from calories array
    for(var i = 0; i < calories.length; i++)
    {
        if(calories[i] > max)
        {
            maxIndex = i;
            max = calories[i];
        }
    }

    // Get the day that had the highest calories
    maxDay = days[maxIndex];

    // Display highest calories and the day corresponding to it
    $("max").value = "Your maximum consumed calories this week is " + max + " on " + maxDay + ".";
}
