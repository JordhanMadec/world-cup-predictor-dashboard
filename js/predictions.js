function getPredictions(edition) {
    return _.reverse(
        _.sortBy(
            _.filter(predictionsData, { 'edition': edition } ), ['score']
        )
    );
}


function getRealResults(edition, team){

  var edition =  _.filter(
      realResults[edition], {'country' : team}
    );

  return edition.length > 0 ? edition[0]["position"] : 'Not qualified';

}
