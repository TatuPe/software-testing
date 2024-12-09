import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray', () => {

    it('should return the same array if the value is already an array', () => {
        const array = [1, 2, 3];
        expect(castArray(array)).to.equal(array); // Covers the "true" path of Array.isArray()
    });

    it('should cast a single primitive value into an array', () => {
        expect(castArray(1)).to.deep.equal([1]); // Use .deep.equal for array comparison
        expect(castArray('abc')).to.deep.equal(['abc']);
        expect(castArray(true)).to.deep.equal([true]);
        expect(castArray(null)).to.deep.equal([null]);
        expect(castArray(undefined)).to.deep.equal([undefined]);
    });


    it('should cast an object into an array with one element', () => {
        const object = { a: 1 };
        expect(castArray(object)).to.deep.equal([object]); // Covers the "false" path of Array.isArray()
    });

    it('should return an empty array when no arguments are passed', () => {
        expect(castArray()).to.deep.equal([]);
    });

    it('should return an array with a single element when the value is a function', () => {
        const func = () => { };
        expect(castArray(func)).to.deep.equal([func]);
    });

    it('should return an array with a single element when the value is a date', () => {
        const date = new Date();
        expect(castArray(date)).to.deep.equal([date]);
    });

    it('should cast falsy values correctly', () => {
        expect(castArray(false)).to.deep.equal([false]);
        expect(castArray(0)).to.deep.equal([0]);
        expect(castArray(NaN)).to.deep.equal([NaN]);
    });

    it('should handle multiple arguments and only use the first', () => {
        expect(castArray(1, 2, 3)).to.deep.equal([1]); // Tests multiple argument behavior
    });

    it('should cast array-like objects into arrays', () => {
        const args = (function () { return arguments; })(1, 2, 3);
        expect(castArray(args)).to.deep.equal([args]);

        const uint8Array = new Uint8Array([1, 2, 3]);
        expect(castArray(uint8Array)).to.deep.equal([uint8Array]);
    });
});
