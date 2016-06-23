var unsorted = [3,6,7,2,1,5,8,4];

function merge (left, right) {
  var results = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log("mergeSort: ", mergeSort(unsorted));

//*************************************
function swap (items, item1, item2) {
  var temp = items[item1];
  items[item1] = items[item2];
  items[item2] = temp;
};
//*************************************
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
//console.log(selectionSort(unsorted));
//**************************************
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
//console.log(bubbleSort(unsorted));
//**************************************
// implement forEach function that takes a callback
function forEach (array, cb) {
  var length = array.length;
  var i;

  for (i = 0; i < length; i++) {
    cb(array[i]);
  }
};

forEach(unsorted, function (el) {
   console.log(el);
});
//**************************************
// implement map function
function map (array, cb) {
  var mappedArray = [];
  var length = array.length;
  var i;

  for (i = 0; i < length; i++) {
    mappedArray.push(cb(array[i]));
  }
  return mappedArray;
};

console.log(map(unsorted, function(el) {
  return el * 2;
}))










