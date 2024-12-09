import { expect } from 'chai';
import map from '../src/map.js';

describe('Test map function', () => {

    describe('Test with basic array operations', () => {

        it('should return an array of squared values when given a square function', () => {
            const result = map([2, 3, 4], (n) => n * n);
            expect(result).to.deep.equal([4, 9, 16]);
        });

        it('should return an array of doubled values when given a double function', () => {
            const result = map([1, 2, 3], (n) => n * 2);
            expect(result).to.deep.equal([2, 4, 6]);
        });

        it('should apply iteratee to each element and return the same array length', () => {
            const result = map([10, 20, 30], (n) => n - 5);
            expect(result).to.deep.equal([5, 15, 25]);
        });
    });

    describe('Test with different iteratee functions', () => {

        it('should return an array of strings by converting numbers to strings', () => {
            const result = map([1, 2, 3], (n) => `Number ${n}`);
            expect(result).to.deep.equal(['Number 1', 'Number 2', 'Number 3']);
        });

        it('should return an array of elements concatenated with their index', () => {
            const result = map(['a', 'b', 'c'], (value, index) => `${value}${index}`);
            expect(result).to.deep.equal(['a0', 'b1', 'c2']);
        });

        it('should return an array with values transformed by a function with multiple arguments', () => {
            const result = map([10, 20, 30], (value, index) => value + index);
            expect(result).to.deep.equal([10, 21, 32]);
        });
    });

    describe('Test with empty array or no array input', () => {

        it('should return an empty array when given an empty array', () => {
            const result = map([], (n) => n * 2);
            expect(result).to.deep.equal([]);
        });

        it('should return an empty array when given null', () => {
            const result = map(null, (n) => n * 2);
            expect(result).to.deep.equal([]);
        });

        it('should return an empty array when given undefined', () => {
            const result = map(undefined, (n) => n * 2);
            expect(result).to.deep.equal([]);
        });
    });

    describe('Test with arrays of different types', () => {

        it('should handle arrays with mixed data types', () => {
            const result = map([1, 'two', true, null], (value) => typeof value);
            expect(result).to.deep.equal(['number', 'string', 'boolean', 'object']);
        });

        it('should handle arrays with nested objects', () => {
            const result = map([{ a: 1 }, { b: 2 }], (obj) => Object.keys(obj)[0]);
            expect(result).to.deep.equal(['a', 'b']);
        });

    });

    describe('Test with large arrays', () => {

        it('should handle large arrays correctly', () => {
            const largeArray = new Array(1000).fill(1);
            const result = map(largeArray, (n) => n * 2);
            expect(result).to.deep.equal(new Array(1000).fill(2));
        });
    });

});
