function mergeSort (arr) {
  //return the array if it is shorter than 2 in length, meaning it is already sorted
  if (arr.length < 2) return arr;
  //set the middle point where the array will be separated into two halves
  var mid = Math.floor(arr.length / 2);
  var subLeft = mergeSort(arr.slice(0, mid));
  var subRight = mergeSort(arr.slice(mid));
  //call the merge function, which is delcared down below
  return merge(subLeft, subRight);
}
//merge function that sorts the two arrays while combining them
function merge (a, b) {
  //initialize the result placeholder
  var result = [];
  //set the loop that continues to fire while each half still contains elements
  while (a.length > 0 && b.length > 0)
      //push the first element in each array to the combined array
      result.push(a[0] < b[0]? a.shift() : b.shift());
  return result.concat(a.length? a : b);
}

//var test = [5,7,1,2,8,3,4,9];
//console.log(mergeSort(test));

//module.exports = mergeSort;