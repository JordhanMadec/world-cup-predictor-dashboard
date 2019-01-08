let test = _.take(
            _.reverse(
              _.sortBy(predictionsData, ["score"])), 10);

console.log(test);

var label = [];
var value = [];
for(i=0;i<test.length;i++){

  label.push(test[i]["team"].concat(' ').concat(test[i]["edition"].toString()));
  value.push(test[i]["score"]);

}

console.log(label);
console.log(value);

var myContext = document.getElementById("myChart");
    var myChartConfig = {
      type: 'bar',
      data: {
        labels: label,
        datasets: [
          {
            label: "Top 10 favorites all time",
            data: value
          }
        ]
      }
    }
  var myChart = new Chart(myContext, myChartConfig);
