import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('Test camelCase function', () => {

    describe('Test with standard inputs', () => {
        it('should convert "Foo Bar" to "fooBar"', (done) => {
            const value = camelCase('Foo Bar');
            expect(value).to.equal('fooBar');
            done();
        });

        it('should convert "--foo-bar--" to "fooBar"', (done) => {
            const value = camelCase('--foo-bar--');
            expect(value).to.equal('fooBar');
            done();
        });

        it('should convert "__FOO_BAR__" to "fooBar"', (done) => {
            const value = camelCase('__FOO_BAR__');
            expect(value).to.equal('fooBar');
            done();
        });

        it('should convert "foo bar baz" to "fooBarBaz"', (done) => {
            const value = camelCase('foo bar baz');
            expect(value).to.equal('fooBarBaz');
            done();
        });

        it('should convert "fooBarBaz" to "fooBarBaz" (already camelCase)', (done) => {
            const value = camelCase('fooBarBaz');
            expect(value).to.equal('fooBarBaz');
            done();
        });

        it('should convert "FOO BAR BAZ" to "fooBarBaz"', (done) => {
            const value = camelCase('FOO BAR BAZ');
            expect(value).to.equal('fooBarBaz');
            done();
        });
    });

    describe('Test with non-alphabetic characters', () => {
        it('should convert "foo-bar123baz" to "fooBar123Baz"', (done) => {
            const value = camelCase('foo-bar123baz');
            expect(value).to.equal('fooBar123Baz');
            done();
        });

        it('should convert "123fooBar" to "123fooBar" (digits should not be altered)', (done) => {
            const value = camelCase('123fooBar');
            expect(value).to.equal('123fooBar');
            done();
        });

        it('should convert "foo123bar" to "foo123Bar"', (done) => {
            const value = camelCase('foo123bar');
            expect(value).to.equal('foo123Bar');
            done();
        });

        it('should convert "foo!@#bar" to "fooBar"', (done) => {
            const value = camelCase('foo!@#bar');
            expect(value).to.equal('fooBar');
            done();
        });
    });

    describe('Test with edge cases', () => {
        it('should convert an empty string "" to an empty string ""', (done) => {
            const value = camelCase('');
            expect(value).to.equal('');
            done();
        });

        it('should convert null to an empty string ""', (done) => {
            const value = camelCase(null);
            expect(value).to.equal('');
            done();
        });

        it('should convert undefined to an empty string ""', (done) => {
            const value = camelCase(undefined);
            expect(value).to.equal('');
            done();
        });

        it('should convert a string with only symbols "!@#$%^&*" to an empty string ""', (done) => {
            const value = camelCase('!@#$%^&*');
            expect(value).to.equal('');
            done();
        });

        it('should convert a single-word string "hello" to "hello" (no change)', (done) => {
            const value = camelCase('hello');
            expect(value).to.equal('hello');
            done();
        });

        it('should convert "FOO" to "foo"', (done) => {
            const value = camelCase('FOO');
            expect(value).to.equal('foo');
            done();
        });

        it('should convert a string with multiple spaces "  hello   world  " to "helloWorld"', (done) => {
            const value = camelCase('  hello   world  ');
            expect(value).to.equal('helloWorld');
            done();
        });
    });

    describe('Test with special Unicode characters', () => {
        it('should remove apostrophes from the string "foo’s bar" to get "foosBar"', (done) => {
            const value = camelCase('foo’s bar');
            expect(value).to.equal('foosBar');
            done();
        });

        it('should convert "FOO’BAR" to "fooBar" (removing the apostrophe)', (done) => {
            const value = camelCase('FOO’BAR');
            expect(value).to.equal('fooBar');
            done();
        });

        it('should convert "café bar" to "caféBar"', (done) => {
            const value = camelCase('café bar');
            expect(value).to.equal('caféBar');
            done();
        });
    });

});
