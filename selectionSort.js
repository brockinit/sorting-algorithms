function selectionSort (array) {
  //looping through the array
  for (var i = 0; i < array.length; i++) {
    var mini = i; //assigning the minimum value to the first number
    //looping through the numbers that come after the first
    for (var j = i + 1; j < array.length; j++) {
      //compare the numbers
      if (array[j] < array[mini]) {
        mini = j; //change the current minimum number position if a smaller value is found
      }
    }
    //if the current minimum number is not equal to the initial minimum
    // exchange the position
    if (mini != i) {
      var temp = array[i];
      array[i] = array[mini];
      array[mini] = temp;
    }
  }
}

//module.exports = selectionSort;