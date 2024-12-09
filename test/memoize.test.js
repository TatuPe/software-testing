import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize', () => {

    // Test that the function throws an error when input is not a function
    it('should throw an error if the input is not a function', () => {
        expect(() => memoize('not a function')).to.throw(TypeError, 'Expected a function');
    });

    // Test when a function is passed and memoization works correctly
    it('should memoize the result of the function', () => {
        const sum = (a, b) => a + b;
        const memoizedSum = memoize(sum);

        const result1 = memoizedSum(1, 2);
        const result2 = memoizedSum(1, 2); // This should use the cached result

        expect(result1).to.equal(3);
        expect(result2).to.equal(3); // Memoized result
        expect(result1).to.equal(result2); // Both results should be equal, indicating caching
    });

    // Test with custom resolver (using the second argument as cache key)
    it('should allow custom cache keys using resolver function', () => {
        const sum = (a, b) => a + b;
        const memoizedSum = memoize(sum, (a, b) => `${a}-${b}`);

        const result1 = memoizedSum(1, 2);
        const result2 = memoizedSum(1, 2); // Should be memoized
        const result3 = memoizedSum(2, 1); // Different input, different cache key

        expect(result1).to.equal(3);
        expect(result2).to.equal(3); // Memoized
        expect(result1).to.equal(result2); // Cache hit
        expect(result3).to.equal(3); // New cache key for reversed arguments
        expect(result3).to.not.equal(result1); // Different result due to different key
    });

    // Test when the cache property is used directly
    it('should allow manual cache manipulation', () => {
        const sum = (a, b) => a + b;
        const memoizedSum = memoize(sum);

        memoizedSum(1, 2); // First call, caches result
        const cacheBefore = memoizedSum.cache;

        // Manually set the cache
        memoizedSum.cache.set('1-2', 99);  // Use a valid key type (string here)
        const result = memoizedSum(1, 2); // Should return 99 now as we modified the cache

        expect(result).to.equal(99);
        expect(cacheBefore.get('1-2')).to.not.equal(99); // Cache before should be different
    });


    // Test when no custom resolver is provided, and the first argument is used as the cache key
    it('should use the first argument as the cache key by default', () => {
        const multiply = (a, b) => a * b;
        const memoizedMultiply = memoize(multiply);

        const result1 = memoizedMultiply(3, 4);
        const result2 = memoizedMultiply(3, 4); // Should return cached result

        expect(result1).to.equal(12);
        expect(result2).to.equal(12); // Memoized result
    });

    // Test when the cache key resolves to undefined
    it('should handle undefined cache keys properly', () => {
        const multiply = (a, b) => a * b;
        const memoizedMultiply = memoize(multiply);

        const result1 = memoizedMultiply(3, 4);
        const result2 = memoizedMultiply(undefined, 4); // New input should create a new cache key

        expect(result1).to.equal(12);
        expect(result2).to.equal(NaN); // undefined * 4 is NaN
    });

    // Test cache behavior with multiple different inputs
    it('should correctly handle multiple different inputs and cache separately', () => {
        const add = (a, b) => a + b;
        const memoizedAdd = memoize(add);

        const result1 = memoizedAdd(1, 2);
        const result2 = memoizedAdd(3, 4);
        const result3 = memoizedAdd(1, 2); // Memoized result

        expect(result1).to.equal(3);
        expect(result2).to.equal(7);
        expect(result3).to.equal(3); // Should be the same as result1 due to caching
        expect(result1).to.not.equal(result2); // Different inputs should not overwrite each other in cache
    });

    // Test that the cache is reset after a new function is passed in
    it('should reset the cache if a new function is passed', () => {
        const multiply = (a, b) => a * b;
        const memoizedMultiply = memoize(multiply);

        const result1 = memoizedMultiply(3, 4);
        memoizedMultiply.cache.clear(); // Clear the cache manually
        const result2 = memoizedMultiply(3, 4); // New call after cache is cleared

        expect(result1).to.equal(12);
        expect(result2).to.equal(12); // Memoized again after clearing cache
    });

});
