function bubbleSort (items) {
  for (var i = 0; i < items.length; i++) { //Number of passes
    for (var j = 0; j < ((items.length - i) - 1); j++) { //Notice that j < (length - i)
      if (items[j] > items[ j + 1]) {  //Compare the adjacent positions
        //Swap the numbers
        var tmp = items[j];  //Temporary variable to hold the current number

        items[j] = items[j + 1]; //Replace current number with adjacent number

        items[j + 1] = tmp; //Replace adjacent number with current number

        drawLater(time++, items.map(function(d) { return d; }));
      }
    }
  }
  console.log(data);
  return items; //return the sorted array
}