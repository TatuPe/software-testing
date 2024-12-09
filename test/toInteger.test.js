import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger function tests', () => {

    describe('Basic Conversion Tests', () => {
        it('should convert positive float to integer', () => {
            const result = toInteger(3.2);
            expect(result).to.equal(3);
        });

        it('should convert negative float to integer', () => {
            const result = toInteger(-3.7);
            expect(result).to.equal(-3);
        });

        it('should convert positive integer without change', () => {
            const result = toInteger(5);
            expect(result).to.equal(5);
        });

        it('should convert negative integer without change', () => {
            const result = toInteger(-5);
            expect(result).to.equal(-5);
        });
    });

    describe('Edge Case Tests', () => {
        it('should convert Infinity to the maximum possible number', () => {
            const result = toInteger(Infinity);
            expect(result).to.equal(Number.MAX_VALUE);
        });

        it('should convert -Infinity to the minimum possible number', () => {
            const result = toInteger(-Infinity);
            expect(result).to.equal(-Number.MAX_VALUE);
        });

        it('should convert NaN to 0', () => {
            const result = toInteger(NaN);
            expect(result).to.equal(0);
        });

        it('should convert Number.MIN_VALUE to 0', () => {
            const result = toInteger(Number.MIN_VALUE);
            expect(result).to.equal(0);
        });
    });

    describe('String Input Tests', () => {
        it('should convert string with a decimal to integer', () => {
            const result = toInteger('3.2');
            expect(result).to.equal(3);
        });

        it('should convert string representing a whole number to integer', () => {
            const result = toInteger('5');
            expect(result).to.equal(5);
        });

        it('should convert negative string with a decimal to integer', () => {
            const result = toInteger('-3.7');
            expect(result).to.equal(-3);
        });

        it('should convert string with non-numeric characters to NaN', () => {
            const result = toInteger('abc');
            expect(result).to.be.NaN;
        });
    });

    describe('Boolean Input Tests', () => {
        it('should convert true to 1', () => {
            const result = toInteger(true);
            expect(result).to.equal(1);
        });

        it('should convert false to 0', () => {
            const result = toInteger(false);
            expect(result).to.equal(0);
        });
    });

    describe('Object Input Tests', () => {
        it('should convert object to NaN', () => {
            const result = toInteger({});
            expect(result).to.be.NaN;
        });

        it('should convert array to NaN', () => {
            const result = toInteger([1, 2, 3]);
            expect(result).to.be.NaN;
        });
    });

});
