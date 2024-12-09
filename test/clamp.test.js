import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {

    it('should clamp number within the lower and upper bounds', () => {
        expect(clamp(0, -5, 5)).to.equal(0)
        expect(clamp(3, -5, 5)).to.equal(3)
        expect(clamp(-3, -5, 5)).to.equal(-3)
    });

    it('should return the lower bound if the number is smaller than the lower bound', () => {
        expect(clamp(-10, -5, 5)).to.equal(-5)
        expect(clamp(-6, -5, 5)).to.equal(-5)
    });

    it('should return the upper bound if the number is greater than the upper bound', () => {
        expect(clamp(10, -5, 5)).to.equal(5)
        expect(clamp(6, -5, 5)).to.equal(5)
    });

    it('should handle non-numeric input by converting them to numbers', () => {
        expect(clamp('3', -5, 5)).to.equal(3)
    });

    it('should handle boundary values correctly', () => {
        expect(clamp(-5, -5, 5)).to.equal(-5)
        expect(clamp(5, -5, 5)).to.equal(5)
        expect(clamp(0, -5, 5)).to.equal(0)
    });

    it('should work with decimal values', () => {
        expect(clamp(2.5, 0, 5)).to.equal(2.5)
        expect(clamp(5.5, 0, 5)).to.equal(5)
        expect(clamp(-2.5, -5, 0)).to.equal(-2.5)
    });
});
