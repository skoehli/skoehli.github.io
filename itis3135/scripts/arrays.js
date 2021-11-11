// Declare two empty arrays, one for people and another for salaries
let people = [];
let salaries = [];

// $ is a variable that retrieves the id of an element in the webpage
var $ = function (id)
{
   return document.getElementById(id);
};


/* 
   The displayResults function finds the average and highest salaries.
   It then displays the results in the div element that has an id attribute
   of "results"
*/ 
var displayResults = function()
{
   // Initialize a variable called sum that is used to find the average
   var sum = 0.0;

   // Find the average salary

   // Add all salaries together
   for(var i = 0; i < salaries.length; i++)
   {
      sum += salaries[i];
   }

   // Divide sum by number of elements in salary array 
   var average = sum / parseFloat((salaries.length));

   // Get the maximum salary
   
   // Initialize a variable that will contain the max salary
   var max = 0.0;

   // Find the maximum value of all elements in salary array
   for(var i = 0; i < salaries.length; i++)
   {
      // Compare the value in salaries to current max
      if(salaries[i] > max)
      {
         // New max found, store in max variable
         max = salaries[i];
      }
   }

   // Change the value of the element with "results" as its id
   $("results").innerHTML = "Highest salary: $" + max + "\nAverage salary: $" + average;

};


/* 
   The displayResults function gets the names and values from the arrays and displays them 
   as rows in the HTML table element with “results_table” as its id
*/ 
var displaySalary = function()
{
   // Get all the names of the employees from the people array
   for(var i = 0; i > people.length; i++)
   {
      // Add name to list
      employeeString += people[i] + "\n";
   }

   // Get all the salaries from the salaries array
   for(var i = 0; i > salaries.length; i++)
   {
      // Add salary to list
      salaryString += salaries[i] + "\n";
   }

   // Display both lists
   document.write(employeeString + " " + salaryString);


};


/* 
   The addSalary function adds a person and salary to the arrays
*/ 
var addSalary = function()
{
   // Get salary from webpage
   var salary = parseFloat($("salary").value);

   // Get employee from webpage
   var employee = $("employee").value;

   // Validate salary
   if(isNaN(salary))
   {
      alert("This field must be numeric.");
   }

   // Ensure both employee and salary fields are not empty
   if(employee === "" || salary === "")
   {
      alert("This field cannot be empty.");
   }

   else
   {
      // Add salary and employee to respective arrays
      salaries.push(salary);
      people.push(employee);
      

      // Let the user know that the entries were added to the respective arrays
      alert("Employee and salary have been added.");
   }

};

// Event handlers that attach to onclick events of each function
window.onload = function () 
{
   $("displayResults").onclick = displayResults;
   $("addSalary").onclick = addSalary;
   $("displaySalary").onclick = displaySalary;
};
