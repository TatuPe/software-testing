import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {

    describe('Symbol Primitive Tests', () => {
        it('should return true for Symbol.iterator', () => {
            const result = isSymbol(Symbol.iterator);
            expect(result).to.equal(true);
        });

        it('should return true for a unique symbol', () => {
            const result = isSymbol(Symbol('test'));
            expect(result).to.equal(true);
        });

        it('should return false for string value', () => {
            const result = isSymbol('symbol');
            expect(result).to.equal(false);
        });

        it('should return false for number value', () => {
            const result = isSymbol(123);
            expect(result).to.equal(false);
        });

        it('should return false for boolean value', () => {
            const result = isSymbol(true);
            expect(result).to.equal(false);
        });

        it('should return false for null value', () => {
            const result = isSymbol(null);
            expect(result).to.equal(false);
        });

        it('should return false for undefined value', () => {
            const result = isSymbol(undefined);
            expect(result).to.equal(false);
        });
    });

    describe('Object Type Tests', () => {
        it('should return true for a symbol object', () => {
            const symbolObj = Object(Symbol('symbol'));
            const result = isSymbol(symbolObj);
            expect(result).to.equal(true);
        });

        it('should return false for plain object', () => {
            const result = isSymbol({});
            expect(result).to.equal(false);
        });

        it('should return false for array object', () => {
            const result = isSymbol([]);
            expect(result).to.equal(false);
        });

        it('should return false for function object', () => {
            const result = isSymbol(function () { });
            expect(result).to.equal(false);
        });
    });

    describe('Edge Case Tests', () => {
        it('should return false for NaN', () => {
            const result = isSymbol(NaN);
            expect(result).to.equal(false);
        });

        it('should return false for Infinity', () => {
            const result = isSymbol(Infinity);
            expect(result).to.equal(false);
        });

        it('should return false for an empty object', () => {
            const result = isSymbol(new Object());
            expect(result).to.equal(false);
        });

        it('should return false for an object that has a symbol key', () => {
            const obj = {};
            const sym = Symbol('key');
            obj[sym] = 123;
            const result = isSymbol(obj);
            expect(result).to.equal(false); // object itself is not a symbol
        });
    });
});
