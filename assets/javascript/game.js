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

    //displays initial wins/losses
    $("#wins").html(userWins);
    $("#losses").html(userLosses);

    //Generate a random # for the user
    const generateRandomNum = function(){
        var randomScore = Math.floor(Math.random() * 100) + 19;
        computerNum = randomScore;
        console.log(randomScore + " Score to Match");
        return computerNum;
    }

    //display random number to html
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
    console.log(blue + " blue crystal value");
    console.log(yellow + " yellow crystal value");
    console.log(green + " green crystal value");
    console.log(red + " red crystal value");

    //Connects the buttons to the value of the color IDs
    $(":button").click(function() {
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
        $("#score").html(userTotalScore);
        console.log(userTotalScore);
        winLose();
    })
    //sets userTotalScore to be displayed in the html
    

    //function to determine if user has won or lost the game
    winLose = function() {
        if (userTotalScore === computerNum) {
            userWins++;
            $("#wins").html(userWins);
            alert("You've Won!");
            reset();
        }
        // If userTotalScore is greater then computerNum increase losses by 1, show the new loss amount in the html and alert the user that you've lost.
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
});





