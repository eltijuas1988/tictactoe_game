$(document).ready(function(){

  //Player 1 will always be X and player 2 always O
  //place buttons for each player

  /* TASK 1: click in any box in board and changes square to X */


  /* TASK 1: click in any box in board and changes square to X */

  //Depending on which player clicks on the squre that square will be assigned either X or an O

  //turn each box into a button. A counter will be applied that disables the button once the counter increments to 1

  //FIELD 2: add a counter that will disable the box once it reaches 1
  var counter = 9;

  function gameOverCounter () {
    if(counter === 0){
      $("#currentPlayer").html("GAME OVER, Thanks for playing");
    }
    else if (counter > 0) {
      $("#currentPlayer").html("There are " + counter + " slots open...");
    }
  }

  function addMark(field) {

    if(counter % 2 === 0) {
      $(field).html('<img src="/Users/crimsondex/Desktop/Challenges/tictactoegame/letterO.png" />');
      counter--;
    }

    else if(counter % 2 === 1) {
      $(field).html('<img src="/Users/crimsondex/Desktop/Challenges/tictactoegame/letterX.png" />');
      counter--;
    }
  };


  $("#field1Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field1");
    gameOverCounter();
  });

  $("#field2Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field2");
    gameOverCounter();
  });

  $("#field3Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field3");
    gameOverCounter();
  });

  $("#field4Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field4");
    gameOverCounter();
  });

  $("#field5Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field5");
    gameOverCounter();
  });

  $("#field6Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field6");
    gameOverCounter();
  });

  $("#field7Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field7");
    gameOverCounter();
  });

  $("#field8Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field8");
    gameOverCounter();
  });

  $("#field9Button").click(function(){
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field9");
    gameOverCounter();
  });


  /* if don't want to go square by square then need to experiment with wrapping grid in div and applying logic of disabling boxes w/ X or O in it to whole grid */

  /* if counter % 2 = 0, then it's an X
  if counter % 2 = 1, then it's an O */



  //unbind fuction will remove the funtion from the click
});
