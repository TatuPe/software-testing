import { expect } from 'chai';
import words from '../src/words.js';


describe('Test words function.', () => {
    describe('Test with only words.', () => {
        it('it should return an array of words.', (done) => {
            var value = words('fred, barney, & pebbles');
            expect(value).to.have.ordered.members(['fred', 'barney', 'pebbles']);
            expect(value).to.have.length(3);
            done();
        });
    });
    describe('Test with pattern.', () => {
        it('it should return an array of words.', (done) => {
            var value = words('fred, barney, & pebbles', /[^, ]+/g);
            expect(value).to.have.ordered.members(['fred', 'barney', '&', 'pebbles']);
            expect(value).to.have.length(4);
            done();
        });
    });
    describe('Test with empty string.', () => {
        it('it should return an empty array.', (done) => {
            var value = words('');
            expect(value).to.have.ordered.members([]);
            expect(value).to.have.length(0);
            done();
        });
    });
});