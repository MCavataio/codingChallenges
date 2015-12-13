var addDigits = function (n) {
  n = n.toString();
  var result = 0;
  if (n.length > 1) {
    for (var i = 0; i < n.length; i++ ) {
      result = result + Number(n[i]);
    }
  } if (n.toString().length === 1) {
    return n
  } return addDigits(result);
}


console.log(addDigits(1592569))