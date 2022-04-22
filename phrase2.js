var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
{
    var stringEntry = $("phrase").value;
    stringEntry = stringEntry.toUpperCase();
    if (stringEntry === " ")
    {
        alert("You need to add a phrase!");
        
    }
    else
    {
        var intVowels = 0;
        for (intCount = 0; intCount < stringEntry.length; intCount++)
        {
            if (stringEntry.charAt(intCount) ==="A" || stringEntry.charAt(intCount)==="E"|| stringEntry.charAt(intCount)==="I" || stringEntry.charAt(intCount)==="O" || stringEntry.charAt(intCount)==="U")
            {
             intVowels++; 
            }
        }
        $("output").value = "There are" + intVowels + "vowels in the above phrase";
    }
    
};


var consonants = function () 

{
    var stringEntry = $("phrase").value;
    stringEntry = stringEntry.toLowerCase();
    if (stringEntry === "")
    {
        alert ("Please enter something!");
        
    }
    else
    {
        var intConsonants = 0;
        for (intCount = 0; intCount < stringEntry.length; intCount ++)
             {
            switch (stringEntry.charAt(intCount))
            {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    break;
                default:
                    instConsonants++;
                    break;
            }
        }
    
    $("output").value = "There are" + intConsonants + "consonants in the above phase";
}


var reverse = function () 

{}


var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  