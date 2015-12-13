// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state.

// Follow up: 
// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
function deadOrAlive(board, index, position) {
  var cells = 0;
  var isAlive = board[index][position]
  index = index - 1;
  
  for (var i = 0; i <= 2; i++) {
    if (board[index + i]) {
      for(var b = 0; b < board[index + i].length; b++) {
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

var gameOfLife = function(board) {
  
  var result = [];
  for (var i = 0; i < board.length; i++) {
    result.push([])
    for (var b = 0; b < board[i].length; b++) {
      var isAlive = deadOrAlive(board, i, b)
      result[i].push(isAlive);
    }
  }return result;
}



var board = [[1,0,1,0],[0,1,1,1],[0,0,0,1],[1,1,1,0]]

