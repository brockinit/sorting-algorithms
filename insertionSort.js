function insertionSort (array) {
  //looping through the total length of the unsorted array
  for (var i = 0; i < array.length; i++) {
    //setting the current iteration of the unsorted array to a variable
    var check = array[i];
    //checking through the sorted area of the array
    for (var j = i - 1; j >= 0 && (array[j] > check); j--) {
      //shift the number over
      array[j + 1] = array[j];
    }
    //insert the copied position from up top into the correct position
    array[j + 1] = check;
  }
  //return the sorted array
  return array;
}

//module.exports = insertionSort;