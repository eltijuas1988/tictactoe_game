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
    $("#field1Button").unbind();
    //May not need line below
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field1Button");
    gameOverCounter();
  });


  $("#field2Button").click(function(){
    $("#field2Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field2Button");
    gameOverCounter();
  });


  $("#field3Button").click(function(){
    $("#field3Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field3Button");
    gameOverCounter();
  });


  $("#field4Button").click(function(){
    $("#field4Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field4Button");
    gameOverCounter();
  });


  $("#field5Button").click(function(){
    $("#field5Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field5Button");
    gameOverCounter();
  });


  $("#field6Button").click(function(){
    $("#field6Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field6Button");
    gameOverCounter();
  });


  $("#field7Button").click(function(){
    $("#field7Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field7Button");
    gameOverCounter();
  });


  $("#field8Button").click(function(){
    $("#field8Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field8Button");
    gameOverCounter();
  });


  $("#field9Button").click(function(){
    $("#field9Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field9Button");
    gameOverCounter();
  });

  /* if don't want to go square by square then need to experiment with wrapping grid in div and applying logic of disabling boxes w/ X or O in it to whole grid */

  /* if counter % 2 = 0, then it's an X
  if counter % 2 = 1, then it's an O */

  //unbind fuction will remove the funtion from the click
});
