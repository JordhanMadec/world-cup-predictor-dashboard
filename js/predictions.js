function getPredictions(edition) {
    return _.reverse(
        _.sortBy(
            _.filter(predictionsData, { 'edition': edition } ), ['score']
        )
    );
}