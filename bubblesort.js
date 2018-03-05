function bubbleSort(array) {
  let sorted = array;
  if (sorted.length > 1) {
    for (let i = 0; i < sorted.length - 1; i++) {
      if (toSwap(sorted[i], sorted[i + 1])) {
        swap(sorted, i);
      }
    }
  }
  return sorted;
}

function toSwap(elem1, elem2) {
  if (elem1 > elem2) {
    return true;
  } else {
    return false;
  }
}

function swap(arr, index) {
  let toRight = arr[index];
  let toLeft = arr[index + 1];
  arr[index] = toLeft;
  arr[index + 1] = toRight;
}
