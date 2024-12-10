import { expect } from 'chai';
import capitalize from '../src/capitalize.js';


describe('capitalize', () => {
    describe('Test with null value.', () => {
        //TODO: Document feature
        it('it returns Null. (undocumented!)', (done) => {
            var value = capitalize(null);
            expect(value).to.equal('Null');
            done();
        });
    });
    describe('Test with empty string.', () => {
        it('it should return "".', (done) => {
            var value = capitalize('');
            expect(value).to.equal('');
            done();
        });
    });
    describe('Test with all UPPERCASE.', () => {
        it('it should return Uppercase.', (done) => {
            var value = capitalize('UPPERCASE');
            expect(value).to.equal('Uppercase');
            done();
        });
    });
    describe('Test with all lowercase.', () => {
        it('it should return Lowercase.', (done) => {
            var value = capitalize('lowercase');
            expect(value).to.equal('Lowercase');
            done();
        });
    });
});