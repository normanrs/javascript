function twoNumberSum(array_in, targetSum) {
    const result = []
    array_in.forEach((x, index, array) => {
        const clone = array.slice();
        clone.splice(index, 1);
        const factor = targetSum - x;
        const found = clone.find(element => element === factor)
        if (found) result.push(x, found);
    })
    return [...new Set(result)];
}

module.exports = twoNumberSum

