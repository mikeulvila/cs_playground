var unsorted = [3,6,7,2,1,5,8,4];

function swap (items, item1, item2) {
  var temp = items[item1];
  items[item1] = items[item2];
  items[item2] = temp;
};

function selectionSort(array) {
  var length = array.length;
  var i, j, min;

  for (i = 0; i < length; i++) {
    min = i;
    for (j = i+1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return array;
};

function bubbleSort(array) {
  var length = array.length;
  var i, j;

  for (i = 0; i < length; i++) {
    for (j = 0; j < length - i; j++) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  return array;
}


console.log(selectionSort(unsorted));
console.log(bubbleSort(unsorted));
