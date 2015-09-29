function insertionSort (items) {
  //looping through the total length of the unsorted items
  for (var i = 0; i < items.length; i++) {
    //setting the current iteration of the unsorted items to a variable
    var check = items[i];
    //checking through the sorted area of the items
    for (var j = i - 1; j >= 0 && (items[j] > check); j--) {
      //shift the number over
      items[j + 1] = items[j];
    }
    //insert the copied position from up top into the correct position
    items[j + 1] = check;
    drawLater(time++, items.map(function(d) { return d; }));
  }
  //return the sorted items
  console.log(data);
  return items;
}