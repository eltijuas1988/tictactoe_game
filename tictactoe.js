$(document).ready(function(){

  var counter = 9;


  function gameOverCounter () {
    if(counter === 0){
      $("#currentPlayer").html("GAME OVER");
      $("#messages").html("Thanks for playing");
    }
    else if (counter > 0) {
      $("#messages").html("There are " + counter + " slots open...");
    }
  }


  function addMark(field) {

    if(counter % 2 === 1) {
      $("#currentPlayer").html("Player 1's Turn ");
      $(field).html('<img src="/Users/crimsondex/Desktop/Challenges/tictactoegame/letterX.png" />');
      counter--;
    }

    else if(counter % 2 === 0) {
      $("#currentPlayer").html("Player 2's Turn ");
      $(field).html('<img src="/Users/crimsondex/Desktop/Challenges/tictactoegame/letterO.png" />');
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
