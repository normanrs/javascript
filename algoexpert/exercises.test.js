const ex = require('./exercises')
const twoNumberSum = require('./twoSum')

describe('test exercises', () => {
    test('isValidSequence does the thing', () => {
        const array = [5, 1, 22, 25, 6, -1, 8, 10]
        const target = [1, 6, -1, 10]
        const result = ex.isValidSubsequence(array, target)
        expect(result).toBeTruthy()
    });

    test('twoNumberSum does the thing', () => {
        const array = [3, 5, -4, 8, 11, 1, -1, 6]
        const target = 10
        const result = twoNumberSum(array, target)
        expect(result.sort()).toEqual([-1, 11].sort())
    });

    test('sortedSquaredArray does the thing', () => {
        const array = [1, 2, 3, 5, 6, 8, 9]
        const result = ex.sortedSquaredArray(array)
        expect(result);
    });

});

