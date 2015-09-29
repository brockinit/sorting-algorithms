var data = (function () {
  var randomArray = [];
  for (var i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
})();

function drawChart () {
  var x = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

  d3.select('.chart')
    .selectAll('div')
      .data(data)
    .enter().append('div')
      .style('width', function(d) { return x(d) + 'px'; })
      .text(function(d) { return d; });
}
drawChart();
var sortButton = document.createElement('button');
sortButton.appendChild(document.createTextNode('Sort'));
sortButton.addEventListener('click', function () {
  bubbleSort(data);
});
document.body.appendChild(sortButton);

function bubbleSort (items) {

  for (var i = 0; i < items.length; i++) { //Number of passes

    for (var j = 0; j < ((items.length - i) - 1); j++) { //Notice that j < (length - i)

      if (items[j] > items[ j + 1]) {  //Compare the adjacent positions
        //Swap the numbers
        var tmp = items[j];  //Temporary variable to hold the current number

        items[j] = items[j + 1]; //Replace current number with adjacent number

        items[j + 1] = tmp; //Replace adjacent number with current number

      }
    }
  }
  console.log(data);
  drawChart();
  return items; //return the sorted array
}
