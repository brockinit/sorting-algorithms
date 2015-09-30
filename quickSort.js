function quickSort(items) {
  //if array is empty
  if (items.length === 0) {
    return [];
  }
  //Initialize the variables responsible for holding the left/right arrays and pivot point
  var left = [];console.log(left);
  var right = [];console.log(right);
  var pivot = items[0];
  var combined = left.concat(right);
  //go through each element in itemsay
  for (var i = 1; i < items.length; i++) {
    if (items[i] < pivot) {
      left.push(items[i]); //push smaller elements to the left
      //drawLater(time++, items.map(function(d) { return d; }));
    } else {
      right.push(items[i]); //push larger elements to the right
      //drawLater(time++, items.map(function(d) { return d; }));
    }
    //drawLater(time++, items.map(function(d) { return d; }));
  }
  //use recursion to repeat the quick sort process until the smallest items are pushed to the left
  //connect the left array with the pivot and right array
  drawLater(time++, items.map(function(d) { return d; }));
  console.log(items);
  quickSort(left).concat(pivot, quickSort(right));
}