
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input.
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

    alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));

};
//calculates the rectangle area 
	var calcRectArea = function()
    {
        var floatRectWidth = parseFloat ($("rect_width").value);
        var floatRectHeight = parseFloat($("rect_height").value);
        alert ("The rectangle area is " + rectArea(floatRectWidth, floatRectHeight));
    };
    function rectArea(floatRectWidth_par, floatRectHeight_par)
    {
        var floatRectArea = floatRectWidth_par * floatRectHeight_par;
        return floatRectArea.toFixed(2);
    
    }
    //calculates rectangle perimeter
    var calcRectPerim = function ()
    {
        var floatRectWidth = parseFloat ($("rect_width").value);
        var floatRectHeight = parseFloat($("rect_height").value);
        alert ("The rectangle perimeter is " + rectPerim(floatRectWidth, floatRectHeight));
    };
    function rectPerim(floatRectWidth_par, floatRectHeight_par)
    {
    var floatRectPerim = floatRectWidth_par * 2 + floatRectHeight_par * 2;
    return floatRectPerim.toFixed(2);
    }
	

//calculates the triangle area 
var calcTriArea = function()
{
    var floatTriSide1 = parseFloat ($("tri_side1").value);
    var floatTriSide2 = parseFloat ($("tri_side2").value);
    var floatTriSide3 = parseFloat ($("tri_side3").value);
    alert ("The tri Area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
};



function triArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatS = (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par) / 2;
    var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));
    return floatTriangleArea.toFixed(2);
}


//calculates triangle perimeter
var calcTrianglePerim = function()
{
    var floatTriSide1 = parseFloat ($("tri_side1").value);
    var floatTriSide2 = parseFloat ($("tri_side2").value);
    var floatTriSide3 = parseFloat ($("tri_side3").value);
    alert ("The triangle perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
};
function triPerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
  var floatTrianglePerim =  floatTriSide1_par + floatTriSide2_par+ floatTriSide3_par;
  return floatTrianglePerim.toFixed(2);

}


//calculates circle area
var calcCircleArea = function ()
{
	var floatRadius = parseFloat ($("radius").value);
	alert ("The circle area is " + circleArea(floatRadius));
}
function circleArea(floatRadius_par)
{
    var floatCircleArea = parseFloat(Math.PI * Math.pow(floatRadius_par,2));
		return floatCircleArea.toFixed(2);

	

}


// runs circle circumference function
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};


function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}


window.onload = function () 
{
// runs functions on click
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTrianglePerim;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    
};
