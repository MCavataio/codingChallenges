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
    cells = cells -1
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





gameOfLife(board)