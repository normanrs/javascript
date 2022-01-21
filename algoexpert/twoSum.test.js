const twoNumberSum = require('./twoSum')

describe('twoNumberSum', () => {
    test('does the thing', () => {
        const array = [3, 5, -4, 8, 11, 1, -1, 6]
        const target = 10
        const result = twoNumberSum(array, target)
        expect(result).toEqual([-1, 11])
    });
});
