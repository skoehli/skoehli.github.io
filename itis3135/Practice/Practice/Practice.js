var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	$("espresso").onclick = addEsp;
   $("capuccino").onclick = addCap;

   var total = 0.0;
   var espresso = "";
   var capuccino = "";

	// for click event add item to order and update total
	var esp = function addEsp()
	{
		var price_espresso = 1.95;

		// Update total
		total += price_espresso;

		espresso = price_espresso + " - Espresso - Delicious espresso. Wanna try it?";

	}

	var cap = function addCap()
	{
		var price_capuccino = 3.45;

		// Update total
		total += price_capuccino;

		capuccino = price_capuccino + " - Capuccino - Delicious Capuccino!";

	}

	// display order and total
	$("order").innerHTML = espresso + "\n" + capuccino;
	$("total").innerHTML = "Total: " + total;
	
		
}; // end onload