let top10 = _.take( _.reverse( _.sortBy( predictionsData, ['score'] ) ), 10 );
top10 = _.sortBy(top10, ['edition', 'team']);

var label = [];
var value = [];
var colors = [];

top10.forEach(function (favorite) {
  label.push(favorite.team + ' - ' + favorite.edition);
  value.push((favorite.score * 100).toPrecision(6));
  colors.push(getColor(favorite.team));
})

function getColor(team) {
  switch (team.toLowerCase()) {
    case 'argentina': return 'rgba(123, 181, 196, .8)';
    case 'france': return 'rgba(21, 62, 92, .8)';
    case 'germany': return 'rgba(242, 190, 84, .8)';
    case 'brazil': return 'rgba(107, 185, 131, .8)';
    case 'england': return 'rgba(255, 82, 82, .8)';
    default: return 'rgba(0, 0, 0, .2)';
  }
}


var optionsTop10 = {
  legend: false,
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        min: 97,
        max: 100
      },
      gridLines: {
        display: false
      }
    }]
  }
};




    var top10Elem = document.getElementById("top10_chart");

var top10Chart = new Chart(top10Elem, {
  type: 'bar',
  data: {
    labels: label,
    datasets: [{
        label: "Score",
        data: value,
        backgroundColor: colors,
    }]
  },
  options: optionsTop10
});
