function selectionSort (items) {
  //looping through the items
  for (var i = 0; i < items.length; i++) {
    var mini = i; //assigning the minimum value to the first number
    //looping through the numbers that come after the first
    for (var j = i + 1; j < items.length; j++) {
      //compare the numbers
      if (items[j] < items[mini]) {
        mini = j; //change the current minimum number position if a smaller value is found
      }
    }
    //if the current minimum number is not equal to the initial minimum
    // exchange the position
    if (mini != i) {
      var temp = items[i];
      items[i] = items[mini];
      items[mini] = temp;
      drawLater(time++, items.map(function(d) { return d; }));
    }
  }
  console.log(data);
}