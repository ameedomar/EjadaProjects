function sortGivenArray(array) {
  var i = 0,
    j;

  while (i < array.length) {
    j = i + 1;
    while (j < array.length) {
      if (array[j] < array[i]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
    i++;
  }
}

// Original Array
var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// Print Before sorting array
console.log("Original Array was: ");
console.log(numbers);

// Function call
sortGivenArray(numbers);

console.log("Sorted Array is :");
// Print sorted Numeric array
console.log(numbers);
