// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
var example = [1,5,2,3,8,10]
var gameOfLife = function() {
  var result = [];
  for (var i = 0; i < board.length; i++) {
    for (var b = 0; b < board[i].length; b++) {
      if (i === 0) {
        result[i] = [];
      }
      result[i].push(board[i][b]);
    }
  }
}

var deadOrAlive = function(board, index, position) {
  var cells = 0;
  index = index - 1;
  var isAlive = board[index][position]
  for (var i = 0; i <= 2; i++) {
    if (board[index+ i]) {
      for(var b = 0; b < board[index + i].length; b++) {
        //   console.log('bo
        if (b === position + 1 || b === position -1 || b === position) {
          if (board[index + i][b]){
            cells++;
          }
        }
      }
    }
  }
  if (isAlive) {
    if (cells<2) {
      return 0;
    }
    if (cells===2 || cells ===3){
      return 1;
    } else {
      return 0;
    }
  } else if (cells === 3) {
    return 1;
  } else {
    return 0;
  }

}