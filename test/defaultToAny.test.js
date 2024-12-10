import { expect } from 'chai';
import defaultToAny from '../src/defaultToAny.js';


describe('defaultToAny', () => {
    describe('Test with all null values.', () => {
        it('it should return NaN.', (done) => {
            var value = defaultToAny(undefined, null, NaN);
            expect(value).to.be.NaN;
            done();
        });
    });
    describe('Test with valid values with null values.', () => {
        it('it should return 10.', (done) => {
            var value = defaultToAny(undefined, 10, NaN);
            expect(value).to.equal(10);
            done();
        });
    });
    describe('Test with valid values only.', () => {
        it('it should return 1.', (done) => {
            var value = defaultToAny(1, 10, 100);
            expect(value).to.equal(1);
            done();
        });
    });
});