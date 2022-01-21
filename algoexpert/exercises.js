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
