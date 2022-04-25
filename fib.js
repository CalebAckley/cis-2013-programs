//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validates user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

    //sets conditions and main loop
    if (isNaN(intCount) || intCount <2 || intCount > 100)
    
    {
        alert("Invalid number");
    }
    else
    {
    while (intCount > 2)
    {
     k = j + i;
     stringOutput=stringOutput + k +" ";
     
     i = j;
 
    j = k;
    intCount --;
    }
	 

 

// Push solution back to Output through DOM
$("output").value = stringOutput
    }
    };
window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  