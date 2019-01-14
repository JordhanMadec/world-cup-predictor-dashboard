function getPredictions(edition) {
    return _.reverse(
        _.sortBy(
            _.filter(predictionsData, { 'edition': edition } ), ['score']
        )
    );
}


function getRealResults(edition, team){
  var edition = _.filter(worldcups_results_data[edition], {'country' : team});

  return edition.length > 0 ? edition[0]["position"] : 'Not qualified';
}
