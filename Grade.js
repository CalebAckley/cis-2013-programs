var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

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
    







alert("Your final grade is: " +stringFinalGrade);