//Task 1
var arrayNames = new Array("John", "Paul", "George", "Ringo");
var arrayInstruments = [];
arrayInstruments [0] = "vocals";
arrayInstruments [1] = "bass";
arrayInstruments [2] = "guitar";
arrayInstruments [3] = "drums";
var stringMessage = "";
var intCount;

for (intCount = 0; intCount < arrayNames.length; intCount ++)
{
    stringMessage = stringMessage + arrayNames[intCount]+ " plays "+ arrayInstruments[intCount] + "\n";
    //code
}
alert(stringMessage);






//task 2
var stringTimesTable = "";

for (var x = 1; x <=12; x++)
{
for (var y = 1;y <=12; y++)
{
    stringTimesTable = stringTimesTable + " " + x*y + " ";
}
stringTimesTable += "\n";
}
alert (stringTimesTable);








