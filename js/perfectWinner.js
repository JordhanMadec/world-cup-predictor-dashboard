var options = {
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
}




var winnerGamesElem = document.getElementById("winner_games").getContext('2d');

var winnerGamesChart = new Chart(winnerGamesElem, {
    type: 'doughnut',
    data: {
        labels: ["Win", "Draw", "Loss"],
        datasets: [{
            data: [24.65, 9.4, 7.55],
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
            data: [83.95, 40.7],
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


var winnerFinalsElem = document.getElementById("winner_finals").getContext('2d');

var winnerFinalsChart = new Chart(winnerFinalsElem, {
    type: 'bar',
    data: {
        labels: ["Played", "Won"],
        datasets: [{
            data: [2.65, 1.5],
            backgroundColor: [
                'rgba(0, 0, 0, .2)',
                'rgba(242, 190, 84, .8)'
            ],
        }]
    },
    options: options
});