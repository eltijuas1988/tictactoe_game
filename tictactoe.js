$(document).ready(function(){
  /* variable for how many turns are left in the game */
  var counter = 9;

  /* Function that checks for a win, lose or stalemate */
  var board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];


/* Function determines if there is a winning combination on the board */

  function winLoseOrStalemate() {
    // winCombo1 = board[0] + board[1] + board[2];
    // winCombo2 = board[3] + board[4] + board[5];
    // winCombo3 = board[6] + board[7] + board[8];
    // winCombo4 = board[0] + board[3] + board[6];
    // winCombo5 = board[1] + board[4] + board[7];
    // winCombo6 = board[2] + board[5] + board[8];
    // winCombo7 = board[0] + board[4] + board[8];
    // winCombo8 = board[2] + board[4] + board[6];

    var allWinningCombinations = [
      winCombo1 = board[0] + board[1] + board[2],
      winCombo2 = board[3] + board[4] + board[5],
      winCombo3 = board[6] + board[7] + board[8],
      winCombo4 = board[0] + board[3] + board[6],
      winCombo5 = board[1] + board[4] + board[7],
      winCombo6 = board[2] + board[5] + board[8],
      winCombo7 = board[0] + board[4] + board[8],
      winCombo8 = board[2] + board[4] + board[6],
    ];

    for(var i = 0; i < allWinningCombinations.length; i++ ){
      if(allWinningCombinations[i] === 3){
        // return alert("player X wins ");
        $("#currentPlayer").html("Player 1 Wins");
        $("#messages").html("Thanks for playing");
        $(".allFields").unbind();
      } else if(allWinningCombinations[i] === -3) {
        // return alert("player O wins ");
        $("#currentPlayer").html("Player 2 Wins");
        $("#messages").html("Thanks for playing");
        $(".allFields").unbind();
      }
    }
  };


  /* Function that tracks how many turns are left. */
  function gameOverCounter () {
    /* If none, tells the user that the game is over */
    if(counter === 0){
      $("#currentPlayer").html("GAME OVER");
      $("#messages").html("Thanks for playing");
    }
    else if (counter > 0 && ("#currentPlayer" === "Player 1's Turn " || "#currentPlayer" === "Player 2's Turn ")) {
      $("#messages").html("There are " + counter + " slots open...");
    }
  }


  function addMark(field, index) {

    if(counter % 2 === 1) {
      $("#currentPlayer").html("Player 1's Turn ");
      $(field).html('<img src="letterX.png" />');
      board[index] = 1
      counter--;
    }

    else if(counter % 2 === 0) {
      $("#currentPlayer").html("Player 2's Turn ");
      $(field).html('<img src="letterO.png" />');
      board[index] = -1
      counter--;
    }
  };
//********************* ALL BUTTONS FOR GRID *************//
// Array index 0
  $("#field1Button").click(function(){
    $("#field1Button").unbind();

    //May not need line below
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field1Button", 0);
    winLoseOrStalemate();
    gameOverCounter();

  });

  // Array index 1
  $("#field2Button").click(function(){
    $("#field2Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field2Button", 1);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 2
  $("#field3Button").click(function(){
    $("#field3Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field3Button", 2);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 3
  $("#field4Button").click(function(){
    $("#field4Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field4Button", 3);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 4
  $("#field5Button").click(function(){
    $("#field5Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field5Button", 4);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 5
  $("#field6Button").click(function(){
    $("#field6Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field6Button", 5);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 6
  $("#field7Button").click(function(){
    $("#field7Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field7Button", 6);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 7
  $("#field8Button").click(function(){
    $("#field8Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field8Button", 7);
    winLoseOrStalemate();
    gameOverCounter();
  });

  // Array index 8
  $("#field9Button").click(function(){
    $("#field9Button").unbind();
    var usable = {clicked:true};
    // $("#field2").addClass("X");
    addMark("#field9Button", 8);
    winLoseOrStalemate();
    gameOverCounter();
  });
});
