var ALL_EDITIONS = [ 1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018 ];
var EDITIONS_WITH_RANK = [ 1994, 1998, 2002, 2006, 2010, 2014, 2018 ];

function getPredictionRank(team, predictions) {
    return _.findIndex(predictions, {'team': team});
}

function fillPredictionsTables(predictions, edition) {
    i = 1;
    var threshold = 95;

    var allPredictions = getPredictions(edition);
    var highestScore = allPredictions[0].score;

    predictions.forEach( function (prediction) {

        var icon = document.createElement('span');
        icon.className = 'text-center mdl-list__item-icon';
        if (prediction.score === highestScore) {
            icon.className += ' material-icons';
            icon.appendChild(document.createTextNode('star'));
        } else if(prediction.score * 100 > threshold) {
            icon.className += ' material-icons';
            icon.appendChild(document.createTextNode('whatshot'));
        } else {
            icon.appendChild(document.createTextNode(getPredictionRank(prediction.team, allPredictions) + ''));
        }

        var span1 = document.createElement('span');
        span1.className = 'mdl-list__item-primary-content';
        span1.appendChild(icon);
        var text = document.createElement('span');
        if (prediction.score === highestScore) {
            var text = document.createElement('b');
            text.className = "red-text";
        } else if(prediction.score * 100 > threshold) {
            var text = document.createElement('b');
        }
        text.appendChild(document.createTextNode(prediction.team));
        // + "(" + getRealResults(edition, prediction.team) + ") "
        span1.appendChild(text);

        var span3 = document.createElement('span');
        span3.className = 'mdl-list__item-sub-title';
        span3.appendChild(document.createTextNode(getRealResults(edition, prediction.team)));
        span1.appendChild(span3);

        var score = document.createElement('span');
        score.className = 'mdl-list__item-secondary-info';
        score.appendChild(document.createTextNode((prediction.score * 100).toPrecision(6)));

        var span2 = document.createElement('span');
        span2.className = 'mdl-list__item-secondary-content';
        span2.appendChild(score);

        var li = document.createElement('li');
        li.className = 'mdl-list__item mdl-list__item--two-line';
        li.appendChild(span1);
        li.appendChild(span2);




        $('#panel-' + edition + ' .predictions-list')[0].appendChild(li);

        i++;
    });
}

$(document).ready(function () {
    EDITIONS_WITH_RANK.forEach(function (edition) {
        fillPredictionsTables(getPredictions(edition), edition);
    });
});