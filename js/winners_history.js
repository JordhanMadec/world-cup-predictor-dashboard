var labels = _.map(winnersData, 'edition');
var wins = _.map(winnersData, 'win');
var draws = _.map(winnersData, 'draw');
var losses = _.map(winnersData, 'loss');
var goalsFor = _.map(winnersData, 'goalsFor');
var goalsAgainst = _.map(winnersData, 'goalsAgainst');
var semiFinals = _.map(winnersData, 'semiFinals');
var finals = _.map(winnersData, 'finals');
var victories = _.map(winnersData, 'victories');
var rankAverage = _.map(winnersData, 'rankAverage');
var rankEvolution = _.map(winnersData, 'rankEvolution');



var optionsGamesHistory = {
    legend: {
        position: 'bottom'
    },
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
            ticks: {
                beginAtZero:true
            },
            gridLines: {
                display: false
            },
        }]
    }
};



var winnerGamesHistoryElem = document.getElementById("winners_games_history_chart").getContext('2d');

var winnerGamesHistoryChart = new Chart(winnerGamesHistoryElem, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: "Win",
                data: wins,
                borderColor: 'rgba(107, 185, 131, .8)',
                backgroundColor: 'transparent'
            },
            {
                label: "Draw",
                data: draws,
                borderColor: 'rgba(0, 0, 0, .2)',
                backgroundColor: 'transparent'
            },
            {
                label: "Loss",
                data: losses,
                borderColor: 'rgba(255, 82, 82, .8)',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: optionsGamesHistory
});



var winnerGoalsHistoryElem = document.getElementById("winners_goals_history_chart").getContext('2d');

var winnerGoalsHistoryChart = new Chart(winnerGoalsHistoryElem, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: "For",
                data: goalsFor,
                borderColor: 'rgba(123, 181, 196, .8)',
                backgroundColor: 'transparent'
            },
            {
                label: "Against",
                data: goalsAgainst,
                borderColor: 'rgba(255, 82, 82, .8)',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: optionsGamesHistory
});



var winnerFinalsHistoryElem = document.getElementById("winners_finals_history_chart").getContext('2d');

var winnerFinalsHistoryChart = new Chart(winnerFinalsHistoryElem, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: "Semi-Finals",
                data: semiFinals,
                borderColor: 'rgba(0, 0, 0, .2)',
                backgroundColor: 'transparent'
            },
            {
                label: "Finals",
                data: finals,
                borderColor: 'rgba(123, 181, 196, .8)',
                backgroundColor: 'transparent'
            },
            {
                label: "Victoryies",
                data: victories,
                borderColor: 'rgba(242, 190, 84, .8)',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: optionsGamesHistory
});



var winnerRankHistoryElem = document.getElementById("winners_rank_history_chart").getContext('2d');

var winnerRankHistoryChart = new Chart(winnerRankHistoryElem, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: "Average",
                data: rankAverage,
                borderColor: 'rgba(0, 0, 0, .2)',
                backgroundColor: 'transparent'
            },
            {
                label: "Evolution",
                data: rankEvolution,
                borderColor: 'rgba(123, 181, 196, .8)',
                backgroundColor: 'transparent'
            }
        ]
    },
    options: optionsGamesHistory
});