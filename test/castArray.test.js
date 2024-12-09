import castArray from '../src/castArray.js';

describe('castArray', () => {
    it('should return the same array if the value is already an array', () => {
        const array = [1, 2, 3];
        expect(castArray(array)).toBe(array);
    });

    it('should cast a single primitive value into an array', () => {
        expect(castArray(1)).toEqual([1]);
        expect(castArray('abc')).toEqual(['abc']);
        expect(castArray(true)).toEqual([true]);
        expect(castArray(null)).toEqual([null]);
        expect(castArray(undefined)).toEqual([undefined]);
    });

    it('should cast an object into an array with one element', () => {
        const object = { a: 1 };
        expect(castArray(object)).toEqual([object]);
    });

    it('should return an empty array when no arguments are passed', () => {
        expect(castArray()).toEqual([]);
    });

    it('should return an array with a single element when the value is a function', () => {
        const func = () => { };
        expect(castArray(func)).toEqual([func]);
    });

    it('should return an array with a single element when the value is a date', () => {
        const date = new Date();
        expect(castArray(date)).toEqual([date]);
    });

    it('should cast array-like objects into arrays', () => {
        const args = (function () { return arguments; })(1, 2, 3);
        expect(castArray(args)).toEqual([1, 2, 3]);

        const nodeList = document.querySelectorAll('div');
        expect(castArray(nodeList)).toEqual(Array.from(nodeList));

        const uint8Array = new Uint8Array([1, 2, 3]);
        expect(castArray(uint8Array)).toEqual([1, 2, 3]);
    });

    it('should cast falsy values correctly', () => {
        expect(castArray(false)).toEqual([false]);
        expect(castArray(0)).toEqual([0]);
        expect(castArray(NaN)).toEqual([NaN]);
    });

    it('should not flatten nested arrays', () => {
        const nestedArray = [[1, 2], [3, 4]];
        expect(castArray(nestedArray)).toEqual([nestedArray]);
    });
});
