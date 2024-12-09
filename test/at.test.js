import { expect } from 'chai';
import at from '../src/at.js';

describe('Test at function', () => {

    describe('Test with valid property paths', () => {

        it('should pick values from an object using paths', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
            const result = at(object, 'a[0].b.c', 'a[1]');
            expect(result).to.deep.equal([3, 4]);
        });

        it('should pick values from an object using an array of paths', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, 4], 'd': 5 };
            const result = at(object, ['a[0].b.c', 'a[1]', 'd']);
            expect(result).to.deep.equal([3, 4, 5]);
        });

        it('should return undefined for non-existent paths', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
            const result = at(object, 'a[0].b.d', 'a[1]');
            expect(result).to.deep.equal([undefined, 4]);
        });

        it('should handle paths with nested properties correctly', () => {
            const object = { 'a': { 'b': { 'c': 10 } }, 'd': 15 };
            const result = at(object, 'a.b.c', 'd');
            expect(result).to.deep.equal([10, 15]);
        });

        it('should return undefined for a non-existent path in a flat object', () => {
            const object = { 'x': 10, 'y': 20 };
            const result = at(object, 'z');
            expect(result).to.deep.equal([undefined]);
        });

    });

    describe('Test with mixed property types and invalid paths', () => {

        it('should return undefined for invalid paths', () => {
            const object = { 'a': { 'b': 1 }, 'c': 2 };
            const result = at(object, 'a.b.c');
            expect(result).to.deep.equal([undefined]);
        });

        it('should handle array elements using string paths', () => {
            const object = { 'a': [1, 2, 3] };
            const result = at(object, 'a[1]');
            expect(result).to.deep.equal([2]);
        });

        it('should handle array elements using a mix of string and array paths', () => {
            const object = { 'a': [1, 2, 3] };
            const result = at(object, 'a[0]', 'a[2]');
            expect(result).to.deep.equal([1, 3]);
        });

    });

    describe('Test with edge cases', () => {

        it('should return an empty array when no paths are provided', () => {
            const object = { 'a': 1, 'b': 2 };
            const result = at(object);
            expect(result).to.deep.equal([]);
        });

        it('should return undefined for non-existent paths when the object is null or undefined', () => {
            const object = null;
            const result = at(object, 'a.b');
            expect(result).to.deep.equal([undefined]);

            const object2 = undefined;
            const result2 = at(object2, 'a.b');
            expect(result2).to.deep.equal([undefined]);
        });

        it('should return undefined for an invalid path on an empty object', () => {
            const object = {};
            const result = at(object, 'a.b');
            expect(result).to.deep.equal([undefined]);
        });

        it('should correctly handle nested arrays and objects in paths', () => {
            const object = { 'a': [{ 'b': { 'c': 5 } }] };
            const result = at(object, 'a[0].b.c');
            expect(result).to.deep.equal([5]);
        });

    });

    describe('Test with flattening paths', () => {

        it('should flatten nested paths correctly', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }, 4], 'd': 5 };
            const result = at(object, ['a[0].b.c', 'a[1]', 'd']);
            expect(result).to.deep.equal([3, 4, 5]);
        });

        it('should handle paths with complex object structures', () => {
            const object = { 'a': { 'b': { 'c': { 'd': 10 } } }, 'e': 20 };
            const result = at(object, 'a.b.c.d', 'e');
            expect(result).to.deep.equal([10, 20]);
        });

    });

});
