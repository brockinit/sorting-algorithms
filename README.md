# Sorting-Algorithms
_______
Javascript examples of the different types of sorting methods typically used on arrays.

## Insertion Sort
1. To demonstrate insertion sort, this algorithm will start off by taking an array beginning at the zero index position.
2. Next, the for loop will check the current numer and compare it to the number one place in front of it.
3. If the number at the zero position belongs in front of the next, then leave it along.
4. If not, then remove the item in the next position and shift the zero position to its new spot.
5. Continue this pattern, moving each item into its appropriate position until the entire array is sorted.

## Selection Sort
1. We begin by setting the first value in the array as the smallest.
2. Looping through the array, the algorithm checks to see if there are any values smaller than the first.
3. If there is a number smaller than the first, we will set the minimum position to the index of the smaller number.
4. The algorithm then checks to see if there are any numbers smaller than the new smallest value.
5. If not, this number switches with the original smallest figure, at position zero.
6. This process now continues starting with the number at the third position.
7. It switches with the next value that is smaller than itself.
8. By the time the end of the array is reached, all of the numbers will be sorted.

## Merge Sort
1. Merge sort works by taking an unordered list and breaking it to to two equal or near equal lists.
2. Once this has been accomplished, the elements from each list are compared against one another.
3. The smaller of the two being compared is pushed to a 'results' array.
4. As new values enter the 'results' array, they are compared with the smallest figures in the 'results' array to  determine their position.
5. At the completion of this process, both arrays have been merged, and the resulting array is sorted.

## Quick Sort
1. Quick sort is the sorting method using the native Javascript function, 'sort()'.
2. It sorts by first checking to make sure that we aren't dealing with an empty array.
3. Once this possibility has been eliminated, quick sort will create a left and right array. The left will be smaller than the pivot and the right will be larger.
4. The first number is assigned to the role of 'pivot' while the rest of the array is scanned.
5. If the number of the array we're looping through is larger than or equal to the pivot, we send it to the right. If it's smaller, we send it to the left.
6. The left array then goes through its own quick sort once this is finished, which pushes the lowest numbers all the way to the far left.
7. At the end of this process, the empty array that is returned will allow us to go back up the chain until we get to the initial instance of quick sort.
8. At this point, a sorted left array will be merged with the pivot and sorted right array.