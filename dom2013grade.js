var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function (var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final Mid pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final Fin pts (0-35)"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("Input Grading Option. 1=Pass/Fail or 2=Letter Grade"));



if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "Pass";
    }
    else
    {
        stringFinalGrade = "Fail";
    }
}

    if  (intGradeOption===2)
    {
        if (floatTotalPts >=90)
        {
            stringFinalGrade = "A";
        }
        else if (floatTotalPts >=80 && floatTotalPts <=89)
        {
            stringFinalGrade = "B";
        }
        else if (floatTotalPts >=70 && floatTotalPts <=79) {
            stringFinalGrade = "C";
        }
        else if (floatTotalPts >=60 && floatTotalPts <=69) {
            stringFinalGrade = "D";
        }
        else if (floatTotalPts <=59) {
            StringFinalGrade ="F";
        }
    }
    








{
    var floatHwPts, floatMidPts, floatFinPts, intGradeOption, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value);
floatMidPts = parseFloat($("mid_pts").value);
floatFinPts = parseFloat($("fin_pts").value);
intGradeOption = parseFloat($("grade_option").value);
stringFinalGrade = parseFloat($("final_grade").value);

}

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};