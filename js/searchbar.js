function filterPredictions(input, edition) {
    // Declare variables
    var filterValue = input.value.toLowerCase();

    var filteredList = _.filter(getPredictions(edition), function(prediction) {
        return prediction.team.toLowerCase().includes(filterValue);
    });

    var elements = $('#panel-' + edition + ' .predictions-list li');
    for(var i=0; li = elements[i]; i++) {
        li.parentNode.removeChild(li);
    }

    fillPredictionsTables(filteredList, edition);
}