var uniquePaths = function(board) {
  var width = board[0].length - 1;
  var height = board.length - 1;
  var total = 0;
  var findSolution = function(row, col) {
    console.log(row, col)
    if (row > height || col > width) {
      return 0;
    }
    if (board[row][col] === 1) {
      return 0;
    }
    if (row === height && col === width) {
      return 1
    }
    return findSolution(row,col+1) + findSolution(row+1, col)
  }

  return findSolution(0,0)

}

uniquePaths([
  [0,0,0],
  [0,1,0],
  [0,0,0]
])