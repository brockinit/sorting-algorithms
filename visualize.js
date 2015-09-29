var data = (function () {
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
})();

//Create buttons to initiate sorting process
var bubbleButton = document.createElement('button');
bubbleButton.appendChild(document.createTextNode('Bubble Sort'));
bubbleButton.addEventListener('click', function () {
  bubbleSort(data);
});
document.body.appendChild(bubbleButton);

var insertionButton = document.createElement('button');
insertionButton.appendChild(document.createTextNode('Insertion Sort'));
insertionButton.addEventListener('click', function () {
  insertionSort(data);
});
document.body.appendChild(insertionButton);

var selectionButton = document.createElement('button');
selectionButton.appendChild(document.createTextNode('Selection Sort'));
selectionButton.addEventListener('click', function () {
  selectionSort(data);
});
document.body.appendChild(selectionButton);

var mergeButton = document.createElement('button');
mergeButton.appendChild(document.createTextNode('Merge Sort'));
mergeButton.addEventListener('click', function () {
  mergeSort(data);
});
document.body.appendChild(mergeButton);

var quickButton = document.createElement('button');
quickButton.appendChild(document.createTextNode('Quick Sort'));
quickButton.addEventListener('click', function () {
  quickSort(data);
});
document.body.appendChild(quickButton);

//declaring function that draws the bar chart
function drawChart (dataStep) {
  var x = d3.scale.linear()
      .domain([0, d3.max(dataStep)])
      .range([0, 420]);

  d3.select('.chart')
    .selectAll('div')
      .data(dataStep)
    .enter().append('div')
      .style('width', function(d) { return x(d) + 'px'; })
      .text(function(d) { return d; });
}

drawChart(data);

//declaring the function that clears the bar chart
function clearChart() {
  d3.select('.chart').html('');
}

var time = 0;

//this function is used within the for loop to animate the sorting
function drawLater(delay, newArrayState) {
  setTimeout(function() {
    clearChart();
    drawChart(newArrayState);
  }, delay * 25 );
}

function quickSort(items) {
  //if array is empty
  if (items.length === 0) {
    return [];
  }
  //Initialize the variables responsible for holding the left/right arrays and pivot point
  var left = [];console.log(left);
  var right = [];console.log(right);
  var pivot = items[0];
  var combined = left.concat(right);
  //go through each element in itemsay
  for (var i = 1; i < items.length; i++) {
    if (items[i] < pivot) {
      left.push(items[i]); //push smaller elements to the left
      //drawLater(time++, items.map(function(d) { return d; }));
    } else {
      right.push(items[i]); //push larger elements to the right
      //drawLater(time++, items.map(function(d) { return d; }));
    }
    //drawLater(time++, items.map(function(d) { return d; }));
  }
  //use recursion to repeat the quick sort process until the smallest items are pushed to the left
  //connect the left array with the pivot and right array
  drawLater(time++, items.map(function(d) { return d; }));
  console.log(items);
  return quickSort(left).concat(pivot, quickSort(right));
}


/*
(function() {
  var data = (function () {
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
    return randomArray;
  })();
  body = d3.select("body");

  function reSort() {
    body.selectAll("div.data").sort(function(a, b) {
      return d3.ascending(Math.random(), Math.random());
    })
    .transition().duration(500)
    .style({
      top: function(d, i) {
        return 60 + ((i*30)) + "px";
      }
    })
  }

  d3.select(".resort").on("click", reSort);

  div = body.selectAll("div.data")
                .data(data)
              .enter().append("div")
                .attr({
                  "class": "data"
                })
                .style({
                  top: function(d, i) {
                    return 60 + ((i*30)) + "px";
                  }
                })
                .html(function(d, i) { return d; });


}()); */