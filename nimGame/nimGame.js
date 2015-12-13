var nimGame = function(stones) {
  if (stones % 4) {
    return false
  } else {
    return true;
  }
}

var nimGame = function(stones, round) {
  round = round || 1
  if (stones <= 0) {
    return false;
  } else if (stones <= 3) {
    return round % 2 === 1
  }
    if (round % 2 === 0) {
      return nimGame(stones-1, round+1) && nimGame(stones-2, round+1) && nimGame(stones-2, round+1)
    } else {
      return nimGame(stones-1, round+1) || nimGame(stones-2, round+1) || nimGame(stones-3, round+1)
    }

}