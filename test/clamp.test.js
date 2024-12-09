import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {
    it('should clamp number within the lower and upper bounds', () => {
        // Test numbers within bounds
        expect(clamp(0, -5, 5)).toBe(0)
        expect(clamp(3, -5, 5)).toBe(3)
        expect(clamp(-3, -5, 5)).toBe(-3)
    })

    it('should return the lower bound if the number is smaller than the lower bound', () => {
        expect(clamp(-10, -5, 5)).toBe(-5)
        expect(clamp(-6, -5, 5)).toBe(-5)
    })

    it('should return the upper bound if the number is greater than the upper bound', () => {
        expect(clamp(10, -5, 5)).toBe(5)
        expect(clamp(6, -5, 5)).toBe(5)
    })

    it('should handle non-numeric input by converting them to numbers', () => {
        expect(clamp('3', -5, 5)).toBe(3)
        expect(clamp('6.5', -5, 5)).toBe(5)
        expect(clamp('a', -5, 5)).toBe(0)
    })

    it('should return 0 if the lower or upper bound is NaN', () => {
        expect(clamp(10, NaN, 5)).toBe(5)
        expect(clamp(10, -5, NaN)).toBe(-5)
        expect(clamp(10, NaN, NaN)).toBe(0)
    })

    it('should handle boundary values correctly', () => {
        expect(clamp(-5, -5, 5)).toBe(-5)
        expect(clamp(5, -5, 5)).toBe(5)
        expect(clamp(0, -5, 5)).toBe(0)
    })

    it('should work with decimal values', () => {
        expect(clamp(2.5, 0, 5)).toBe(2.5)
        expect(clamp(5.5, 0, 5)).toBe(5)
        expect(clamp(-2.5, -5, 0)).toBe(-2.5)
    })
})
