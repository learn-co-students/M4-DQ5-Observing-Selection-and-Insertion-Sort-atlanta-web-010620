function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  const arrayLength = arr.length-1; 
  const newArray = [];
  for (let i = 0; i < arrayLength;i++){
    let smallest = [];
    const remainingArray = arr.slice(i+1,arrayLength); 
    remainingArray.forEach(item => {
      if (item < arr[i] && item < smallest[0]){
        if (smallest.length > 0){
          smallest.push(item); 
        }
      }
    })
    if (smallest.length > 0){
      newArray.push(smallest[0]); 
    }
  }
  console.log(newArray)
  return newArray
}
