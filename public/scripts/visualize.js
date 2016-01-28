var data = (function () {
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
})();

//create buttons to initiate sorting process
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
  bottomUpMergeSort(data);
});
document.body.appendChild(mergeButton);

var quickButton = document.createElement('button');
quickButton.appendChild(document.createTextNode('Quick Sort'));
quickButton.addEventListener('click', function () {
  quickSort(data);
});
document.body.appendChild(quickButton);

//created reset button that generates a new, unsorted chart
var resetButton = document.createElement('button');
resetButton.appendChild(document.createTextNode('Reset'));
resetButton.addEventListener('click', function () {
  location.reload();
});
document.body.appendChild(resetButton);

//declaring function that draws the bar chart
function drawChart (dataStep) {
  var x = d3.scale.linear()
      .domain([0, d3.max(dataStep)])
      .range([0, 320]);

  d3.select('.chart')
    .selectAll('div')
      .data(dataStep)
    .enter().append('div')
      .style('width', function(d) { return x(d) + 'px'; })
      .style('height', 1 + 'px')
     // .text(function(d) { return d; });
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
  }, delay * 100 );
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