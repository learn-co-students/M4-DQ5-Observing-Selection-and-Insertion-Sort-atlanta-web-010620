function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (i = 0; i < arr.length; i++) {
    let value = smallestValue(arr.slice(i))
    if (value !== arr[i]) {
      arr[arr.findIndex(element => element === value)] = arr[i]
      arr[i] = value
    }
  }
  return arr
}


function smallestValue(array) {
  let value = array[0]
  array.forEach(number => {
    let result = number - value;
    if (result < 0) {
      value = number
    } 
  });
  return value
}