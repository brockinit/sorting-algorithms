function bottomUpMergeSort(items) {
  var array = [];

  if ( items ) {
    drawLater(time++, items.map(function(d) { return d; }));
    array = items.map(function(item) { return item; });
  }

  bottomUpSort(array, array.length);

  return array;
}

function bottomUpSort(items, n) {
  var width,
      i;

  for ( width = 1; width < n; width = width * 2 ) {
    drawLater(time++, items.map(function(d) { return d; }));
    for ( i = 0; i < n; i = i + 2 * width ) {
      bottomUpMerge(items, i, Math.min(i + width, n), Math.min(i + 2 * width, n));
    }
  }
}

function bottomUpMerge(items, left, right, end) {
  var n = left,
      m = right,
      currentSort = [],
      j;

  for ( j = left; j < end; j++ ) {
    if ( n < right && ( m >= end || items[n] < items[m] )) {
      currentSort.push(items[n]);
      n++;
    }
    else {
      currentSort.push(items[m]);
      m++;
    }
  }

  currentSort.map(function(item,i) { items[left + i] = item; });
  drawLater(time++, items.map(function(d) { return d; }));
}


