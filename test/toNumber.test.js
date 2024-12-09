import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('Test toNumber function.', () => {

    // Test with null value
    describe('Test with null value.', () => {
        it('it should return NaN.', () => {
            var value = toNumber(null);
            expect(value).to.be.NaN;
        });
    });

    // Test with a non-numeric string
    describe('Test with non numeric value.', () => {
        it('it should return NaN.', () => {
            var value = toNumber('a');
            expect(value).to.be.NaN;
        });
    });

    // Test with a numeric string
    describe('Test with numeric string.', () => {
        it('it should return number.', () => {
            var value = toNumber('10');
            expect(value).to.equal(10);
        });
    });

    // Test with Infinity
    describe('Test with Infinity.', () => {
        it('it should return Infinity.', () => {
            var value = toNumber(Infinity);
            expect(value).to.equal(Infinity);
        });
    });

    // Test with Min value
    describe('Test with Min value.', () => {
        it('it should return 5e-324.', () => {
            var value = toNumber(Number.MIN_VALUE);
            expect(value).to.equal(5e-324);
        });
    });

    // Test with a numeric value
    describe('Test with numeric value.', () => {
        it('it should return unmodified number.', () => {
            var value = toNumber(15);
            expect(value).to.equal(15);
        });
    });

    // Test with binary string
    describe('Test with binary string.', () => {
        it('it should return number parsed as binary.', () => {
            var value = toNumber('0b101');
            expect(value).to.equal(5);
        });
    });

    // Test with octal string
    describe('Test with octal string.', () => {
        it('it should return number parsed as octal.', () => {
            var value = toNumber('0o12');
            expect(value).to.equal(10);
        });
    });

    // Test with a signed hexadecimal string
    describe('Test with signed hexadecimal string.', () => {
        it('it should return NaN for bad hexadecimal string.', () => {
            var value = toNumber('-0x1a');
            expect(value).to.be.NaN;
        });
    });

    // Test with a Symbol
    describe('Test with Symbol.', () => {
        it('it should return NaN for Symbol input.', () => {
            var symbol = Symbol('symbol');
            var value = toNumber(symbol);
            expect(value).to.be.NaN;
        });
    });

    // Test with an object that has a valueOf method
    describe('Test with object having valueOf method.', () => {
        it('it should use valueOf method to convert object to number.', () => {
            const obj = {
                valueOf: function () {
                    return '5';
                }
            };
            var value = toNumber(obj);
            expect(value).to.equal(5);
        });
    });

});
