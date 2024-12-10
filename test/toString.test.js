import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
    describe('Test with null value.', () => {
        it('it should return empty string.', (done) => {
            var value = toString(null);
            expect(value).to.equal('');
            done();
        });
    });
    describe('Test with negative number.', () => {
        it('it should return a string.', (done) => {
            var value = toString(-0);
            expect(value).to.equal('-0');
            done();
        });
    });
    describe('Test with array.', () => {
        it('it should return a string.', (done) => {
            var value = toString([1, 2, 3]);
            expect(value).to.equal('1,2,3');
            done();
        });
    });
    describe('Test with string.', () => {
        it('it should return an unmodified string.', (done) => {
            var value = toString("Test string!");
            expect(value).to.equal("Test string!");
            done();
        });
    });
});