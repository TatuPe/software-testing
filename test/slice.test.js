import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice', () => {

    describe('Basic functionality', () => {
        it('should slice from start index to the end of the array', () => {
            const result = slice([1, 2, 3, 4, 5, 6], 2);
            expect(result).to.have.ordered.members([3, 4, 5, 6]);
        });

        it('should slice from start index to end index (not inclusive)', () => {
            const result = slice([1, 2, 3, 4, 5, 6], 2, 4);
            expect(result).to.have.ordered.members([3, 4]);
        });

        it('should return an empty array if start > end', () => {
            const result = slice([1, 2, 3, 4], 3, 2);
            expect(result).to.have.length(0);
        });

        it('should return the entire array if no start and end are provided', () => {
            const result = slice([1, 2, 3, 4]);
            expect(result).to.have.ordered.members([1, 2, 3, 4]);
        });
    });

    describe('Handling negative indices', () => {
        it('should support negative start index', () => {
            const result = slice([1, 2, 3, 4], -2);
            expect(result).to.have.ordered.members([3, 4]);
        });

        it('should support negative end index', () => {
            const result = slice([1, 2, 3, 4], 0, -1);
            expect(result).to.have.ordered.members([1, 2, 3]);
        });

        it('should handle both negative start and end', () => {
            const result = slice([1, 2, 3, 4, 5, 6], -4, -1);
            expect(result).to.have.ordered.members([3, 4, 5]);
        });
    });

    describe('Handling null, undefined, and invalid inputs', () => {
        it('should return an empty array if input is null', () => {
            const result = slice(null);
            expect(result).to.have.length(0);
        });

        it('should return an empty array if input is undefined', () => {
            const result = slice(undefined);
            expect(result).to.have.length(0);
        });

        it('should handle start as 0 if start is null or undefined', () => {
            const result1 = slice([1, 2, 3], null);
            const result2 = slice([1, 2, 3], undefined);
            expect(result1).to.have.ordered.members([1, 2, 3]);
            expect(result2).to.have.ordered.members([1, 2, 3]);
        });
    });

    describe('Handling non-array inputs', () => {
        it('should treat a string as an array of characters', () => {
            const result = slice('abcdef', 2, 4);
            expect(result).to.have.ordered.members(['c', 'd']);
        });

        it('should return an empty array for non-array, non-string inputs', () => {
            const result1 = slice(42, 2, 4);
            const result2 = slice(true, 2, 4);
            expect(result1).to.have.length(0);
            expect(result2).to.have.length(0);
        });
    });

    describe('Edge cases', () => {
        it('should return an empty array if start and end are both 0', () => {
            const result = slice([], 0, 0);
            expect(result).to.have.length(0);
        });

        it('should return an empty array if start exceeds array length', () => {
            const result = slice([1, 2, 3], 10);
            expect(result).to.have.length(0);
        });

        it('should handle a negative start index larger than array length', () => {
            const result = slice([1, 2, 3], -10);
            expect(result).to.have.ordered.members([1, 2, 3]);
        });
    });

});
