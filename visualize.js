var data = (function () {
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
})();

//Create button to initiate sorting process
var sortButton = document.createElement('button');
sortButton.appendChild(document.createTextNode('Sort'));
sortButton.addEventListener('click', function () {
  insertionSort(data);
});
document.body.appendChild(sortButton);

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
  }, delay * 10 );
}

function insertionSort (items) {
  //looping through the total length of the unsorted array
  for (var i = 0; i < itemsd.length; i++) {
    //setting the current iteration of the unsorted array to a variable
    var check = items[i];
    //checking through the sorted area of the items
    for (var j = i - 1; j >= 0 && (items[j] > check); j--) {
      //shift the number over
      items[j + 1] = items[j];
    }
    //insert the copied position from up top into the correct position
    items[j + 1] = check;
    drawLater(time++, items.map(function(d) { return d; }));
  }
  //return the sorted items
  return items;
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