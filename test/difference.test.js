import { expect } from 'chai';
import difference from '../src/difference.js';

describe('difference', function () {

    // Test case for basic functionality with two arrays
    it('should return the difference between two arrays', function () {
        const result = difference([2, 1], [2, 3]);
        expect(result).to.deep.equal([1]);
    });

    // Test case for multiple arrays
    it('should return the difference between the first array and multiple arrays', function () {
        const result = difference([2, 1, 4, 5], [2, 3], [4]);
        expect(result).to.deep.equal([1, 5]);
    });

    // Test case for an empty array as input
    it('should return an empty array if the first array is empty', function () {
        const result = difference([], [2, 3]);
        expect(result).to.deep.equal([]);
    });

    // Test case for when the second array is empty
    it('should return the original array if the second array is empty', function () {
        const result = difference([2, 1], []);
        expect(result).to.deep.equal([2, 1]);
    });

    // Test case for arrays with duplicate values
    it('should remove values from the result based on the second array, ignoring duplicates', function () {
        const result = difference([2, 1, 2, 3], [2, 3]);
        expect(result).to.deep.equal([1]);
    });

    // Test case for when no arrays are passed after the first one
    it('should return the original array if no second array is provided', function () {
        const result = difference([2, 1, 3]);
        expect(result).to.deep.equal([2, 1, 3]);
    });

    // Test case for non-array input
    it('should return an empty array if the first argument is not an array', function () {
        const result = difference({}, [2, 3]);
        expect(result).to.deep.equal([]);
    });

    // Test case for array-like objects (e.g., arguments)
    it('should return the difference when the first argument is an array-like object', function () {
        function test() {
            const result = difference(arguments, [2]);
            expect(result).to.deep.equal([1, 3]);
        }
        test(1, 2, 3);
    });

    // Test case for empty arrays as values to exclude
    it('should return the original array if all values to exclude are empty arrays', function () {
        const result = difference([2, 1, 3], [], []);
        expect(result).to.deep.equal([2, 1, 3]);
    });

});
