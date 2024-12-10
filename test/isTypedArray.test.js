import { expect } from 'chai';
import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {

    // Test with valid typed arrays
    describe('Test with valid typed arrays.', () => {
        it('should return true for Uint8Array', () => {
            var value = new Uint8Array();
            expect(isTypedArray(value)).to.be.true;
        });

        it('should return true for Int8Array', () => {
            var value = new Int8Array();
            expect(isTypedArray(value)).to.be.true;
        });

        it('should return true for Float32Array', () => {
            var value = new Float32Array();
            expect(isTypedArray(value)).to.be.true;
        });

        it('should return true for Int32Array', () => {
            var value = new Int32Array();
            expect(isTypedArray(value)).to.be.true;
        });

        it('should return true for Uint32Array', () => {
            var value = new Uint32Array();
            expect(isTypedArray(value)).to.be.true;
        });

        it('should return true for Uint8ClampedArray', () => {
            var value = new Uint8ClampedArray();
            expect(isTypedArray(value)).to.be.true;
        });
    });

    // Test with non-typed arrays (plain arrays)
    describe('Test with plain arrays.', () => {
        it('should return false for regular array', () => {
            var value = [];
            expect(isTypedArray(value)).to.be.false;
        });
    });

    // Test with non-typed objects
    describe('Test with non-typed objects.', () => {
        it('should return false for object', () => {
            var value = {};
            expect(isTypedArray(value)).to.be.false;
        });

        it('should return false for string', () => {
            var value = "hello";
            expect(isTypedArray(value)).to.be.false;
        });

        it('should return false for number', () => {
            var value = 123;
            expect(isTypedArray(value)).to.be.false;
        });

        it('should return false for boolean', () => {
            var value = true;
            expect(isTypedArray(value)).to.be.false;
        });
    });

    // Test with null and undefined
    describe('Test with null and undefined.', () => {
        it('should return false for null', () => {
            var value = null;
            expect(isTypedArray(value)).to.be.false;
        });

        it('should return false for undefined', () => {
            var value = undefined;
            expect(isTypedArray(value)).to.be.false;
        });
    });

    // Test with custom objects
    describe('Test with custom objects.', () => {
        it('should return false for a custom object with same tag as typed array', () => {
            var value = { toString: () => '[object Uint8Array]' };
            expect(isTypedArray(value)).to.be.false;
        });
    });

    // Test with Node.js environment (if applicable)
    describe('Test with Node.js environment.', () => {
        it('should use nodeIsTypedArray in Node.js', () => {
            if (typeof nodeTypes !== 'undefined' && nodeTypes.isTypedArray) {
                var value = new Uint8Array();
                expect(isTypedArray(value)).to.be.true;
            }
        });
    });

});
