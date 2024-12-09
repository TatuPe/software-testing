import { expect } from 'chai';
import get from '../src/get.js';

describe('Test get function', () => {

    describe('Test with standard object and valid paths', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };

        it('should return the value at the path "a[0].b.c"', () => {
            const value = get(object, 'a[0].b.c');
            expect(value).to.equal(3);
        });

        it('should return the value at the path ["a", "0", "b", "c"]', () => {
            const value = get(object, ['a', '0', 'b', 'c']);
            expect(value).to.equal(3);
        });

        it('should return the value at the path "a[0].b"', () => {
            const value = get(object, 'a[0].b');
            expect(value).to.deep.equal({ 'c': 3 });
        });

        it('should return the value at the path "a[0]"', () => {
            const value = get(object, 'a[0]');
            expect(value).to.deep.equal({ 'b': { 'c': 3 } });
        });
    });

    describe('Test with missing or undefined values', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };

        it('should return undefined if the path is not found', () => {
            const value = get(object, 'a[1].b.c');
            expect(value).to.equal(undefined);
        });

        it('should return the default value if the path is not found', () => {
            const value = get(object, 'a[1].b.c', 'default');
            expect(value).to.equal('default');
        });

        it('should return the default value if the object is null', () => {
            const value = get(null, 'a[0].b.c', 'default');
            expect(value).to.equal('default');
        });

        it('should return the default value if the object is undefined', () => {
            const value = get(undefined, 'a[0].b.c', 'default');
            expect(value).to.equal('default');
        });
    });

    describe('Test with different types of paths', () => {
        const object = { 'a': { 'b': { 'c': 3 } }, 'x': 'hello' };

        it('should return the correct value for a string path', () => {
            const value = get(object, 'a.b.c');
            expect(value).to.equal(3);
        });

        it('should return the correct value for an array path', () => {
            const value = get(object, ['a', 'b', 'c']);
            expect(value).to.equal(3);
        });

        it('should return undefined for a non-existent path', () => {
            const value = get(object, 'a.d.e');
            expect(value).to.equal(undefined);
        });
    });

    describe('Test with non-object inputs', () => {
        it('should return undefined when the input is a number', () => {
            const value = get(123, 'a.b.c');
            expect(value).to.equal(undefined);
        });

        it('should return undefined when the input is a string', () => {
            const value = get('hello', 'a.b.c');
            expect(value).to.equal(undefined);
        });

        it('should return undefined when the input is a boolean', () => {
            const value = get(true, 'a.b.c');
            expect(value).to.equal(undefined);
        });

        it('should return undefined when the input is an array', () => {
            const value = get([1, 2, 3], 'a.b.c');
            expect(value).to.equal(undefined);
        });
    });

    describe('Test with default value', () => {
        const object = { 'a': { 'b': 1 } };

        it('should return the default value when the path is not found', () => {
            const value = get(object, 'a.c', 'default');
            expect(value).to.equal('default');
        });

        it('should return the actual value when the path exists', () => {
            const value = get(object, 'a.b', 'default');
            expect(value).to.equal(1);
        });
    });

});
