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
