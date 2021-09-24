// Declare variables
var companyName = "Stygian Dingo";
var date = 0;


// Script notification
function popup()
{
    window.alert("Hey my script is working");
}

function greet()
{
    // Get user inputs
    var userName = prompt("What's your name?");

    var greet = prompt("How are you doing?");

    // Create new date instance
    let currentDate = new Date();

    // Get the current date
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();


    // Store variables into a string that greets a user
    greeting = "Today is " + cMonth + "/" + cDay + "/" + cYear + ", and the time is:" + " " + currentDate.getHours() + ":" + 
    currentDate.getMinutes() + ". The " + companyName + " welcomes you, " +  userName + "! We're glad you are doing " + greet +"!";

    // Write the greeting onto the webpage
    document.write(greeting);

    return;
}




// Calculate the sales tax of a bill or item (NC rate)
function salesTax()
{
    // Declare variables
    // Convert input
    var number = prompt("Enter the value you want to find the sales tax of.");
    number = parseFloat(number);

    const RATE = 0.0675;
    
    // Calculate sales tax and write it onto the webpage
    window.alert("The sales tax of " + number + " is " + (number * RATE) + ".");

    return 0;
}

// Function that subtracts
function subtract()
{
    // Convert input and store them in variables
    var n1 = prompt("Enter a number.");
    n1 = parseInt(n1);
    var n2 = prompt("Enter another number.");
    n2 = parseInt(n2);

    if (n1 > n2)
    {
        // Calculate the difference and write it onto the webpage
        window.alert("The difference between " + n1 + " and " + n2 + " is " + (n1 - n2) + ".");   
    }
    else
    {   
        // Calculate the difference and write it onto the webpage
        window.alert("The difference between " + n1 + " and " + n2 + " is " + (n2 - n1) + ".");  
    }
}

// Function that returns the square of a number
function square()
{
    // Convert input
    var num = prompt("Enter a number");
    num = parseInt(num);

    // Calculate the square and write it onto the webpage
    window.alert("The square of " + num + " is " + (num * num) + ".");
}

// Function that finds the area of a triangle
function areaTriangle()
{
    // Convert input
    var b = prompt("Enter the base");
    var h = prompt("Enter the height");
    
    // Calculate area and write it onto webpage
    window.alert("The area of the triangle is " + ((1/2) * b * h) + ".") ; 
}

// Function that finds the perimeter of a square
function perimSquare()
{
    // Convert input
    var l = prompt("Enter the length");
    var w = prompt("Enter the width");

    // Calculate perimeter and write it onto webpage
    window.alert("The perimeter of your webpage is " + (2 * (l + w)) + " pixels.");
}




