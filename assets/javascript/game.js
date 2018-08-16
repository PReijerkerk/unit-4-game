//document ready function
$(document).ready(function () {
    //Variables
    var userWins = 0;
    var userLosses = 0;
    var userTotalScore = 0;
    var blue = 0;
    var yellow = 0;
    var green = 0;
    var red = 0;
    var computerNum = 0;

    //displays initial score to 0
    $("#score").html(userTotalScore);

    //Generate a random # for the user
    const generateRandomNum = function(){
        var randomScore = Math.floor(Math.random() * 100) + 19;
        computerNum = randomScore;
        console.log(randomScore);
    }

    //display random number to html
    //BUG // Calls the generateRandomNum function, but does not change the html of the span id randomNumber
    $("#randomNumber").html(generateRandomNum());

    //base function for generating a value for crystals
    const generateCrystalNum = function() {
        var randomCrystal = Math.floor(Math.random() * 12) + 1;
        return randomCrystal;
    }

    //Generates the random numbers for the crystals, and assigns the values to the variables
    const initialCrystalNums = function() {
        blue = generateCrystalNum();
        yellow = generateCrystalNum();
        green = generateCrystalNum();
        red = generateCrystalNum();
    }

    //Calls the crystalNum function that assigns values to the color variables
    //logs the color variables for testing purposes
    initialCrystalNums();
    console.log(blue);
    console.log(yellow);
    console.log(green);
    console.log(red);
    });


    //Connects the buttons to the value of the color IDs
    $("button").on("click"), function() {
        if (this.id === "blue") {
            userTotalScore += blue;
        } 
        if (this.id === "yellow") {
            userTotalScore += yellow;
        }
        if (this.id === "green") {
            userTotalScore += green;
        }
        else if (this.id === "red") {
            userTotalScore += red;
        }
        console.log(userTotalScore);
    //sets userTotalScore to be displayed in the html
    //BUG// does not appear to be working
    $("#score").html(userTotalScore);

    //function to determine if user has won or lost the game
    winLose = function() {
        if (userTotalScore === computerNum) {
            userWins++;
            $("#wins").html(userWins);
            alert("You've Won!");
            reset();
        }
        else if (userTotalScore > computerNum) {
            userLosses++;
            $("#losses").html(userLosses);
            alert("You've Lost!")
            reset();
        }
    }

    //function to reset the game upon a win or loss
    reset = function() {
        userTotalScore = 0;
        $("#score").html(userTotalScore);
        blue = 0;
        yellow = 0;
        green = 0;
        red = 0;
        computerNum = 0;
        initialCrystalNums();
        $("#randomNumber").html(computerNum = generateRandomNum());
}

};

