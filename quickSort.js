function quickSort(arr) {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }
  //Initialize the variables responsible for holding the left/right arrays and pivot point
  var left = [];
  var right = [];
  var pivot = arr[0];
  //go through each element in array
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); //push smaller elements to the left
    } else {
      right.push(arr[i]); //push larger elements to the right
    }
  }
  //use recursion to repeat the quick sort process until the smallest items are pushed to the left
  //connect the left array with the pivot and right array
  return quicksort(left).concat(pivot, quicksort(right));
}


//module.exports = quickSort;