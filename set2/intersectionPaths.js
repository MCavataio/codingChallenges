var intersectionPaths = function(headA, headB) {
  var a = {};
  var b = {};
  function checkList (headA, headB) {
    a[headA.value] = headA.value;
    b[headB.value] = headB.value;
    if (b[headA.value]) {
      return headB;
    }
    if (a[headB.value]) {
      return headA;
    }
    if (headA.next) {
      if (headB.next) {
        return checkList (headA.next, headB.next);
      } else {
        return checkList (headA.next, headB);
      }
    } else if (headB.next) {
      return checkList (headA, headB.next);
    } else {
      return null;
    }
    checkList (headA.next,)
  }
} 

var intersectionPaths = function(headA, headB) {
  function getLength(list, length) {
    if(list.next === null) {
      return length
    } else {
      length++
      getLength(list.next, length);
    }
  }

  var headALength = getLength(headA, 1)
  var headBLength = getLength(headB, 1)

  if ()
}