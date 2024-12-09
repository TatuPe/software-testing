import { expect } from 'chai';
import isBuffer from '../src/isBuffer.js';

describe('isBuffer', function () {

    // Test for valid buffer
    it('should return true for a Buffer', function () {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isBuffer(buffer)).to.be.true;
    });

    // Test for non-buffer values
    it('should return false for a number', function () {
        expect(isBuffer(123)).to.be.false;
    });

    it('should return false for a string', function () {
        expect(isBuffer('hello')).to.be.false;
    });

    it('should return false for an object', function () {
        expect(isBuffer({})).to.be.false;
    });

    it('should return false for a boolean', function () {
        expect(isBuffer(true)).to.be.false;
    });

    it('should return false for null', function () {
        expect(isBuffer(null)).to.be.false;
    });

    it('should return false for undefined', function () {
        expect(isBuffer(undefined)).to.be.false;
    });

    // Test for array-like objects
    it('should return false for a Uint8Array', function () {
        const uint8Array = new Uint8Array(2);
        expect(isBuffer(uint8Array)).to.be.false;
    });

    it('should return false for an array', function () {
        expect(isBuffer([1, 2, 3])).to.be.false;
    });

    // Edge case: Buffer in different environments (testing for mock)
    it('should return false when Buffer is not available', function () {
        // Mocking a situation where Buffer is undefined (e.g., browser environment)
        const originalBuffer = global.Buffer;
        global.Buffer = undefined;

        const result = isBuffer([1, 2, 3]); // Should return false, as Buffer is undefined
        expect(result).to.be.false;

        // Restore original Buffer
        global.Buffer = originalBuffer;
    });

    // Check for the Buffer-like behavior (in case Buffer is undefined)
    it('should return false when Buffer is not present (no native support)', function () {
        // If `Buffer` is undefined, it falls back to the `() => false` implementation
        global.Buffer = undefined;
        expect(isBuffer('any string')).to.be.false;
        expect(isBuffer([])).to.be.false;
    });
});
