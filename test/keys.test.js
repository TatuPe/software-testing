import { expect } from 'chai';
import keys from '../src/keys.js';

function Foo() {
    this.a = 1
    this.b = 2
}

describe('keys', () => {
    describe('Test with function.', () => {
        it('it should return a and b in an array.', (done) => {
            var value = keys(new Foo);
            expect(value).to.have.members(['a', 'b']);
            expect(value).to.have.length(2);
            done();
        });
    });
    describe('Test with array.', () => {
        it('it should return array indices in an array.', (done) => {
            var value = keys(['a', 'b']);
            expect(value).to.have.members(['0', '1']);
            expect(value).to.have.length(2);
            done();
        });
    });
    describe('Test with empty array.', () => {
        it('it should return an empty array.', (done) => {
            var value = keys([]);
            expect(value).to.have.members([]);
            expect(value).to.have.length(0);
            done();
        });
    });
});