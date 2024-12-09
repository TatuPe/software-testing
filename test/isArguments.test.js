import { expect } from 'chai';
import isArguments from '../src/isArguments.js';

describe('isArguments', () => {

    it('should return true for an actual arguments object', () => {
        const fn = function () { return arguments; };
        const args = fn(1, 2, 3);
        expect(isArguments(args)).to.be.true;
    });

    it('should return false for an array', () => {
        expect(isArguments([1, 2, 3])).to.be.false;
    });

    it('should return false for a plain object', () => {
        expect(isArguments({ a: 1, b: 2 })).to.be.false;
    });

    it('should return false for a string', () => {
        expect(isArguments('hello')).to.be.false;
    });

    it('should return false for a number', () => {
        expect(isArguments(123)).to.be.false;
    });

    it('should return false for a boolean', () => {
        expect(isArguments(true)).to.be.false;
        expect(isArguments(false)).to.be.false;
    });

    it('should return false for null', () => {
        expect(isArguments(null)).to.be.false;
    });

    it('should return false for undefined', () => {
        expect(isArguments(undefined)).to.be.false;
    });

    it('should return false for an object with a similar structure but not an arguments object', () => {
        const fakeArguments = { 0: 'a', 1: 'b', length: 2 };
        expect(isArguments(fakeArguments)).to.be.false;
    });

});
