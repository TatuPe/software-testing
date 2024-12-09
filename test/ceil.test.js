import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('ceil', () => {
    it('should round a number up to the nearest integer when precision is not specified', () => {
        expect(ceil(4.006)).to.equal(5)
        expect(ceil(6.004)).to.equal(7)
        expect(ceil(0.1)).to.equal(1)
        expect(ceil(-1.8)).to.equal(-1)
        expect(ceil(-0.1)).to.equal(0)
    })

    it('should round a number up to the specified precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
        expect(ceil(4.006, 2)).to.equal(4.01)
        expect(ceil(2.3456, 3)).to.equal(2.346)
        expect(ceil(2.341, 2)).to.equal(2.35)
    })

    it('should round a number up when the precision is negative', () => {
        expect(ceil(6040, -2)).to.equal(6100)
        expect(ceil(5357, -3)).to.equal(6000)
        expect(ceil(2345, -1)).to.equal(2350)
    })

    it('should handle zero values correctly', () => {
        expect(ceil(0)).to.equal(0)
        expect(ceil(0, 2)).to.equal(0)
        expect(ceil(0, -2)).to.equal(0)
    })

    it('should handle very large numbers correctly', () => {
        expect(ceil(1234567890.123456789, 6)).to.equal(1234567890.123457)
        expect(ceil(1234567890.123456789, 3)).to.equal(1234567890.124)
    })

    it('should handle small numbers correctly', () => {
        expect(ceil(0.000001, 6)).to.equal(0.000001)
        expect(ceil(0.00001, 5)).to.equal(0.00001)
    })
})
