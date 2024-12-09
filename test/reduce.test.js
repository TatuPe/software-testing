import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {

    it('should reduce an array to a single value using an accumulator', () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
        expect(result).to.equal(6); // sum of 1 + 2 + 3
    });

    it('should return the initial accumulator if collection is empty', () => {
        const result = reduce([], (sum, n) => sum + n, 0);
        expect(result).to.equal(0); // No elements, so accumulator remains 0
    });

    it('should reduce an object to a single value using an accumulator', () => {
        const result = reduce(
            { 'a': 1, 'b': 2, 'c': 1 },
            (result, value, key) => {
                (result[value] || (result[value] = [])).push(key);
                return result;
            },
            {}
        );
        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    });

    it('should return the first element of the array if no accumulator is provided', () => {
        const result = reduce([5, 6, 7], (sum, n) => sum + n);
        expect(result).to.equal(18); // Accumulator starts with 5, then 5 + 6 + 7
    });

    it('should work with an empty object', () => {
        const result = reduce({}, (sum, n) => sum + n, 0);
        expect(result).to.equal(0); // Empty object should return 0
    });

    it('should accumulate object values correctly without an initial accumulator', () => {
        const result = reduce(
            { 'a': 1, 'b': 2 },
            (sum, value) => sum + value
        );
        expect(result).to.equal(3); // 1 + 2
    });

    it('should handle objects with non-numeric values correctly', () => {
        const result = reduce(
            { 'a': 'apple', 'b': 'banana' },
            (concat, value) => concat + value,
            ''
        );
        expect(result).to.equal('applebanana'); // Concatenate the values 'apple' and 'banana'
    });

    it('should call the iteratee for each element in the collection', () => {
        let count = 0;
        reduce([1, 2, 3], () => { count++; }, 0);
        expect(count).to.equal(3); // The iteratee should be called 3 times for the 3 elements
    });

    it('should correctly reduce an array of strings', () => {
        const result = reduce(['a', 'b', 'c'], (concat, str) => concat + str, '');
        expect(result).to.equal('abc'); // Concatenate the strings 'a', 'b', and 'c'
    });

});
