import { expect } from 'chai';
import isBoolean from '../src/isBoolean.js';

describe('isBoolean', function () {

    it('should return true for the boolean primitive `true`', function () {
        expect(isBoolean(true)).to.be.true;
    });

    it('should return true for the boolean primitive `false`', function () {
        expect(isBoolean(false)).to.be.true;
    });

    it('should return false for the boolean object `new Boolean(true)`', function () {
        expect(isBoolean(new Boolean(true))).to.be.false;
    });

    it('should return false for the boolean object `new Boolean(false)`', function () {
        expect(isBoolean(new Boolean(false))).to.be.false;
    });

    it('should return false for `null`', function () {
        expect(isBoolean(null)).to.be.false;
    });

    it('should return false for `undefined`', function () {
        expect(isBoolean(undefined)).to.be.false;
    });

    it('should return false for a string value', function () {
        expect(isBoolean('true')).to.be.false;
        expect(isBoolean('false')).to.be.false;
    });

    it('should return false for a number value', function () {
        expect(isBoolean(0)).to.be.false;
        expect(isBoolean(1)).to.be.false;
    });

    it('should return false for an object', function () {
        expect(isBoolean({})).to.be.false;
    });

    it('should return false for an array', function () {
        expect(isBoolean([])).to.be.false;
    });

    it('should return false for a function', function () {
        expect(isBoolean(function () { })).to.be.false;
    });

    it('should return false for a regular object-like value (not a Boolean object)', function () {
        const obj = { foo: 'bar' };
        expect(isBoolean(obj)).to.be.false;
    });

    it('should return false for an empty string', function () {
        expect(isBoolean('')).to.be.false;
    });

    it('should return false for `NaN`', function () {
        expect(isBoolean(NaN)).to.be.false;
    });

    it('should return false for `Infinity`', function () {
        expect(isBoolean(Infinity)).to.be.false;
    });
});
