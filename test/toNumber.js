import { expect } from 'chai';
import toNumber from '../src/toNumber.js';


describe('Test toNumber function.', () => {
    describe('Test with null value.', () => {
        it('it should return NaN.', (done) => {
            var value = toNumber(null);
            expect(value).to.be.NaN;
            done();
        });
    });
    describe('Test with non numeric value.', () => {
        it('it should return NaN.', (done) => {
            var value = toNumber('a');
            expect(value).to.be.NaN;
            done();
        });
    });
    describe('Test with numeric string.', () => {
        it('it should return number.', (done) => {
            var value = toNumber('10');
            expect(value).to.equal(10);
            done();
        });
    });
    describe('Test with Infinity.', () => {
        it('it should return Infinity.', (done) => {
            var value = toNumber(Infinity);
            expect(value).to.equal(Infinity);
            done();
        });
    });
    describe('Test with Min value.', () => {
        it('it should return 5e-324.', (done) => {
            var value = toNumber(Number.MIN_VALUE);
            expect(value).to.equal(5e-324);
            done();
        });
    });
    describe('Test with numeric value.', () => {
        it('it should return unmodified number.', (done) => {
            var value = toNumber(15);
            expect(value).to.equal(15);
            done();
        });
    });
});