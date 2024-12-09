import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide', function () {

    // Basic functionality test
    it('should return the correct quotient when dividing two numbers', function () {
        const result = divide(6, 4);
        expect(result).to.equal(1.5);
    });

    // Test dividing 0 by any number
    it('should return 0 when dividing 0 by a non-zero number', function () {
        const result = divide(0, 5);
        expect(result).to.equal(0);
    });

    // Test negative numbers
    it('should return a negative result when dividing a positive number by a negative number', function () {
        const result = divide(6, -2);
        expect(result).to.equal(-3);
    });

    it('should return a positive result when dividing a negative number by a negative number', function () {
        const result = divide(-6, -2);
        expect(result).to.equal(3);
    });

    // Test dividing two negative numbers
    it('should return a positive result when dividing two negative numbers', function () {
        const result = divide(-6, -3);
        expect(result).to.equal(2);
    });

    // Edge case: division of large numbers
    it('should return the correct quotient for large numbers', function () {
        const result = divide(1e6, 2e3);
        expect(result).to.equal(500);
    });

});
