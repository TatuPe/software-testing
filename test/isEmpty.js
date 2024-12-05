import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';


describe('Test isEmpty function.', () => {
    describe('Test with null value.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty(null);
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with boolean value.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty(false);
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with number.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty(1234);
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with empty array.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty([]);
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with empty object.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty({});
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with empty string.', () => {
        it('it should return true.', (done) => {
            var value = isEmpty("");
            expect(value).to.equal(true);
            done();
        });
    });
    describe('Test with array.', () => {
        it('it should return false.', (done) => {
            var value = isEmpty([1]);
            expect(value).to.equal(false);
            done();
        });
    });
    describe('Test with object.', () => {
        it('it should return false.', (done) => {
            var value = isEmpty({a: 1});
            expect(value).to.equal(false);
            done();
        });
    });
    describe('Test with string.', () => {
        it('it should return false.', (done) => {
            var value = isEmpty("abcd");
            expect(value).to.equal(false);
            done();
        });
    });
});
