
var combinationSum = function(array, target) {
  var options = {};
  var solutions = [];
  var num = 1;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] <= target) {
      var start = {
        value: 0,
        combo: [],
      }
    }
      checkSolution(start, array.length - num)
      num ++;
    }

  function checkSolution(item, index) {
    if (item.value === target) {
        console.log(item.combo, 'pushing')
        solutions.push(item.combo)
        return;
    }
    if (item.value < target) {
        item.value += array[index];
        item.combo.push(array[index]);
        var tempIndex = index -1
        var newItem = {
          value: item.value,
          combo: item.combo
        }
        
      checkSolution(item, index)
      
        if (item.value + array[index] >= target) {
            if (tempIndex >= 0) {
            newItem.combo.splice(newItem.length-1, 1)
            newItem.value -= array[index]
            checkSolution(newItem, tempIndex)
        }
       } 
    
     }

  }
  return solutions
}
combinationSum([25,50], 200)
