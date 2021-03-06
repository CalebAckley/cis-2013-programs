/* declares varibles. 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Enter low number of guess"));
while (intMin < 0 || isNaN (intMin))
{
    intMin = parseInt(prompt("Bad number, please try"));
}


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/


intMax = parseInt(prompt("Enter high number of guess"));
while (intMax < intMin + 2 || isNaN (intMax))
{
    intMax = parseInt(prompt("Bad number, please try"));
}






/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// loop counter

intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/


intGuess = parseInt(prompt("Enter your guess"));
while (intGuess > intMax  || isNaN (intMax) || intGuess < intMin)


{
    intGuess = parseInt(prompt("Guess not in range"));
}



/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 while (intGuess != intRandom)
 {
    if (intGuess > intRandom)
    {
        alert("Guess is too high");
    }
    else
    {
        alert("Guess is too low");
    }
    intCount++;
    
    intGuess = parseInt(prompt("Enter your guess"));
while (intGuess > intMax  || isNaN (intMax) || intGuess < intMin)


{
    intGuess = parseInt(prompt("Guess not in range"));
}
 }
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
