import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil', () => {
    it('should round a number up to the nearest integer when precision is not specified', () => {
        expect(ceil(4.006)).toBe(5)
        expect(ceil(6.004)).toBe(7)
        expect(ceil(0.1)).toBe(1)
        expect(ceil(-1.8)).toBe(-1)
        expect(ceil(-0.1)).toBe(0)
    })

    it('should round a number up to the specified precision', () => {
        expect(ceil(6.004, 2)).toBe(6.01)
        expect(ceil(4.006, 2)).toBe(4.01)
        expect(ceil(2.3456, 3)).toBe(2.346)
        expect(ceil(2.341, 2)).toBe(2.35)
    })

    it('should round a number up when the precision is negative', () => {
        expect(ceil(6040, -2)).toBe(6100)
        expect(ceil(5357, -3)).toBe(6000)
        expect(ceil(2345, -1)).toBe(2350)
    })

    it('should handle zero values correctly', () => {
        expect(ceil(0)).toBe(0)
        expect(ceil(0, 2)).toBe(0)
        expect(ceil(0, -2)).toBe(0)
    })

    it('should handle very large numbers correctly', () => {
        expect(ceil(1234567890.123456789, 6)).toBe(1234567890.123457)
        expect(ceil(1234567890.123456789, 3)).toBe(1234567890.124)
    })

    it('should handle small numbers correctly', () => {
        expect(ceil(0.000001, 6)).toBe(0.000001)
        expect(ceil(0.00001, 5)).toBe(0.00002)
    })
})
