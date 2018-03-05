function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2));
  const secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let merged = [];
  if (!arr1.length) {
    while (index2 < arr2.length) {
      merged.push(arr2[index2]);
      index2++;
    }
  } else if (!arr2.length) {
    while (index1 < arr1.length) {
      merged.push(arr1[index1]);
      index1++;
    }
  } else {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }
  return merged;
}

// function mergeSort(arr1, arr2) {
//   if (!arr2 && !arr.length) {
//
//   }
// }
