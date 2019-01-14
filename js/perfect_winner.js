var numberPrecision = 1;

var perfectWinner = {
    goalsFor: _.meanBy(winnersData, 'goalsFor').toFixed(numberPrecision),
    goalsAgainst: _.meanBy(winnersData, 'goalsAgainst').toFixed(numberPrecision),
    win: _.meanBy(winnersData, 'win').toFixed(numberPrecision),
    draw: _.meanBy(winnersData, 'draw').toFixed(numberPrecision),
    loss: _.meanBy(winnersData, 'loss').toFixed(numberPrecision),
    rankAverage: _.meanBy(winnersData, 'rankAverage').toFixed(numberPrecision),
    rankEvolution: _.meanBy(winnersData, 'rankEvolution').toFixed(numberPrecision),
    semiFinals: _.meanBy(winnersData, 'semiFinals').toFixed(numberPrecision),
    finals: _.meanBy(winnersData, 'finals').toFixed(numberPrecision),
    victories: _.meanBy(winnersData, 'victories').toFixed(numberPrecision)
}


var optionsPerfectWinner = {
    legend: false,
    scaleShowLabels: false,
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero:true
            },
            gridLines: {
                display: false
            },
        }],
        yAxes: [{
            display: false,
            ticks: {
                beginAtZero:true
            }
        }]
    }
};



$('#rankAverage').text(perfectWinner.rankAverage);
$('#rankEvolution').text(perfectWinner.rankEvolution);



var winnerGamesElem = document.getElementById("winner_games").getContext('2d');

var winnerGamesChart = new Chart(winnerGamesElem, {
    type: 'doughnut',
    data: {
        labels: ["Win", "Draw", "Loss"],
        datasets: [{
            data: [perfectWinner.win, perfectWinner.draw, perfectWinner.loss],
            backgroundColor: [
                'rgba(107, 185, 131, .8)',
                'rgba(0, 0, 0, .2)',
                'rgba(255, 82, 82, .8)'
            ],
        }]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});


var winnerGoalsElem = document.getElementById("winner_goals").getContext('2d');

var winnerGoalsChart = new Chart(winnerGoalsElem, {
    type: 'pie',
    data: {
        labels: ["For", "Against"],
        datasets: [{
            data: [perfectWinner.goalsFor, perfectWinner.goalsAgainst],
            backgroundColor: [
                'rgba(123, 181, 196, .8)',
                'rgba(255, 82, 82, .8)'
            ],
        }]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});


var winnerHistoryElem = document.getElementById("winner_history").getContext('2d');

var winnerHistoryChart = new Chart(winnerHistoryElem, {
    type: 'bar',
    data: {
        labels: ["Semi-Finals", "Finals", "Victories"],
        datasets: [{
            data: [perfectWinner.semiFinals, perfectWinner.finals, perfectWinner.victories],
            backgroundColor: [
                'rgba(0, 0, 0, .2)',
                'rgba(123, 181, 196, .8)',
                'rgba(242, 190, 84, .8)'
            ],
        }]
    },
    options: optionsPerfectWinner
});