     var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age in years"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseFloat(floatDays/7).toFixed(2);
     intFortnights= parseFloat(floatDays/14).toFixed(2);
     alert("Age in Months = " + floatMonths);
     alert("Age in Fortnights = " + intFortnights);
     alert("Age in Weeks = " + intWeeks);
     alert("Age in Days = " + floatDays);