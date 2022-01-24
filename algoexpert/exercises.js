exports.isValidSubsequence = (array, sequence) => {
    const result = array.filter(function(n) {
        return sequence.indexOf(n) > -1;
    });
    return sequence.every((val, index) => val === result[index]);
}

exports.sortedSquaredArray = (arr) => {
    const result = arr.map(x => Math.pow(x, 2));
    return result.sort(function(a, b) { return a - b });
}

exports.tournamentWinner = (competitions, results) => {
    const competitors = {};
    let players = [...new Set(competitions.flat(1))];
    players.forEach( player => { competitors[player] = 0 })
    results.forEach((element, index) => {
        const winnerIndex = Math.abs( element - 1 );
        competitors[competitions[index][winnerIndex]] += 3;
    } )
    return Object.keys(competitors).reduce(function(a, b){ return competitors[a] > competitors[b] ? a : b });
}
