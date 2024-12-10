import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', () => {

    describe('Test with valid Date objects', () => {
        it('should return true for a Date object created with new Date()', (done) => {
            const value = new Date();
            expect(isDate(value)).to.equal(true);
            done();
        });

        it('should return true for a Date object created with Date.parse()', (done) => {
            const value = new Date('Mon April 23 2012');
            expect(isDate(value)).to.equal(true);
            done();
        });

        it('should return true for a Date object created with Date.now()', (done) => {
            const value = new Date(Date.now());
            expect(isDate(value)).to.equal(true);
            done();
        });
    });

    describe('Test with invalid Date values', () => {
        it('should return false for a string representing a date "Mon April 23 2012"', (done) => {
            const value = 'Mon April 23 2012';
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for a number', (done) => {
            const value = 12345;
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for an object', (done) => {
            const value = { date: 'Mon April 23 2012' };
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for an array', (done) => {
            const value = ['Mon April 23 2012'];
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for null', (done) => {
            const value = null;
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for undefined', (done) => {
            const value = undefined;
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for a function', (done) => {
            const value = function () { };
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for NaN', (done) => {
            const value = NaN;
            expect(isDate(value)).to.equal(false);
            done();
        });
    });

    describe('Test with edge cases', () => {
        it('should return false for an empty object', (done) => {
            const value = {};
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for an empty string', (done) => {
            const value = '';
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for a boolean true', (done) => {
            const value = true;
            expect(isDate(value)).to.equal(false);
            done();
        });

        it('should return false for a boolean false', (done) => {
            const value = false;
            expect(isDate(value)).to.equal(false);
            done();
        });
    });
});
