var happyNumber = function(n) {
  n = n.toString();
  n = n.split("");
  var result;
  for (var i = 0; i < n.length; i++) {
    var number = Number(n[i]);
    if (i === 0) {
      result = number * number
    } else {
      result = result + (number * number)
    }
  }
  if (result == 1) {
    return true;
  } else if(result < 10) {
    return false;
  } else {
    return happyNumber(result)
  }
}