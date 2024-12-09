import { expect } from 'chai';
import memoize from '../src/memoize.js';

describe('memoize', () => {

    it('should memoize the result of a function', () => {
        const spy = jest.fn(x => x * 2);
        const memoized = memoize(spy);

        expect(memoized(2)).toBe(4);
        expect(memoized(2)).toBe(4); // Cached result
        expect(memoized(3)).toBe(6);

        expect(spy).toHaveBeenCalledTimes(2); // 2, 3
    });

    it('should update memoized.cache when cache.set returns undefined', () => {
        // Custom Cache where set() returns undefined
        class CustomCache {
            constructor() {
                this.store = new Map();
            }
            has(key) {
                return this.store.has(key);
            }
            get(key) {
                return this.store.get(key);
            }
            set(key, value) {
                this.store.set(key, value);
                return undefined; // This is crucial to hit the || cache path
            }
        }

        memoize.Cache = CustomCache;
        const spy = jest.fn(x => x * 2);
        const memoized = memoize(spy);

        expect(memoized(2)).toBe(4);
        expect(memoized.cache).toBeInstanceOf(CustomCache);
        expect(memoized.cache.get(2)).toBe(4);
    });

    it('should update memoized.cache when cache.set returns a reference to the cache (Map-like behavior)', () => {
        const spy = jest.fn(x => x * 2);
        memoize.Cache = Map; // Restore to default
        const memoized = memoize(spy);

        expect(memoized(2)).toBe(4);
        expect(memoized.cache).toBeInstanceOf(Map);
        expect(memoized.cache.get(2)).toBe(4);
    });

    it('should support manual updates to memoized.cache', () => {
        const spy = jest.fn(x => x * 2);
        const memoized = memoize(spy);

        memoized(2);
        expect(memoized.cache.get(2)).toBe(4);

        // Manually override cache value
        memoized.cache.set(2, 10);
        expect(memoized(2)).toBe(10);
    });

    it('should handle custom cache classes that do not return the cache itself', () => {
        class CustomCache {
            constructor() {
                this.map = new Map();
            }
            has(key) {
                return this.map.has(key);
            }
            get(key) {
                return this.map.get(key);
            }
            set(key, value) {
                this.map.set(key, value);
                return undefined; // Custom behavior where set() does NOT return cache
            }
        }

        memoize.Cache = CustomCache;
        const spy = jest.fn(x => x * 2);
        const memoized = memoize(spy);

        expect(memoized(2)).toBe(4);
        expect(memoized.cache).toBeInstanceOf(CustomCache);
        expect(memoized.cache.get(2)).toBe(4);
    });

    it('should handle multiple arguments and custom resolver', () => {
        const spy = jest.fn((a, b) => a + b);
        const resolver = (a, b) => `${a}-${b}`;
        const memoized = memoize(spy, resolver);

        expect(memoized(1, 2)).toBe(3);
        expect(memoized(1, 2)).toBe(3); // Cached result
        expect(memoized(2, 1)).toBe(3); // Different cache key
        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should allow customization of memoize.Cache', () => {
        class CustomCache {
            constructor() {
                this.data = {};
            }
            has(key) {
                return Object.prototype.hasOwnProperty.call(this.data, key);
            }
            get(key) {
                return this.data[key];
            }
            set(key, value) {
                this.data[key] = value;
                return this; // Custom behavior like Map
            }
        }

        memoize.Cache = CustomCache;
        const spy = jest.fn(x => x * 2);
        const memoized = memoize(spy);

        expect(memoized(2)).toBe(4);
        expect(memoized.cache).toBeInstanceOf(CustomCache);
        expect(memoized.cache.get(2)).toBe(4);
    });

});
