// Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

var surround = function(board) {
  var result = [];
  for (var i = 0; i < board.length; i++) {
      result[i] = [];
    for (var b = 0; b < board[i].length; b++) {
      if (i > 0 && b > 0 && i !== board.length -1 && b !== board[i].length -1) {
      if (board[i][b] === "O") {
        if (checkCol(i, b, board)) {
          result[i].push("X");
        } else {
          result[i].push("O");
        }
      } 
      } else {
          result[i].push(board[i][b])
      }
    }
  } return result;
}
function checkCol(index, row, board) {
  var surrounded = {};
//   console.log("checking", index,row)
  surrounded.top = false;
  surrounded.bottom = false;
  surrounded.left = false;
  surrounded.right = false;
  for (var i = index-1; i >= 0; i--) {
    if (board[i][row] === "X") {
      surrounded.top = true;
    }
  }
  for (var i = index+1; i <= board.length-1; i++){
    if (board[i][row] === "X") {
      surrounded.bottom = true;
    } 
  }
  for (var i = row + 1; i <= board[index].length -1; i++) {
    if (board[index][i] === "X") {
      surrounded.right = true;
    } 
  }
  for (var i = row -1; i >= 0; i--) {
    if (board[index][i] === "X") {
      surrounded.left = true;
    } 
  }
  console.log(surrounded)
  if (surrounded.right && surrounded.left && surrounded.top && surrounded.bottom) {
      return true;
  } else {
      return false
  }
}


////// Work on more optimal solution by checking perimer first and then continously checking perimeter

var surround = function(board) {
  var col = {};
  var row = {};
  var rounds = Math.ceil(board.length / 2);
  var count = 0;
  while(index < rounds) {
    var top = board[index]
    var bottom = board[board.length -1 -count]

    for (var i = 0; i < board[0].length; i++) {
      if(top[i] === "X") {
        if (!col[i].top) {
          col[i].top = true;
        }
      }
      if(bottom[i]) {
        if (!col[i].bottom) {
          col[i].bottom = true;
        }
      }
      if (i === 0) {
        if (!row[i].left) {
          row[i].left = true;
        } 
      }
      if (i === board.length - 1) {
        row[i].right = true;
      }
    }

    for (var b = count + 1; b < board.length - count -1 ; b++) {
      for (var c = 0; c < board.length[b]; b+=) {
        if (board[c] === "O") {
          if (row[c].left && row[c].right && col[c].top && col[c].bottom) {
            board[c] = "X";
          }
        }
      }
    }
    }
  }

  
}
  function colCheck(elem) {
     if (elem) {
        col[i] = false;
        return false
      } else {
        col[i] = true;
        return true;
      }
    }
  }
