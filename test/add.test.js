import { expect } from 'chai';
import add from '../src/add.js';


describe('Test add function.', () => {
    describe('Test with numeric values.', () => {
        it('it should return a number.', (done) => {
            var value = add(2, 2);
            expect(value).to.equal(4);
            done();
        });
    });
    describe('Test with non numeric values.', () => {
        //TODO: Document feature
        it('it returns a string. (Not Documented)', (done) => {
            var value = add('a', 'b');
            expect(value).to.equal('ab');
            done();
        });
    });
});