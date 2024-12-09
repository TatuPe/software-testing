import { expect } from 'chai';
import slice from '../src/slice.js';


describe('Test slice function.', () => {
    describe('Test with only start value.', () => {
        it('it should return an array.', (done) => {
            var value = slice([1,2,3,4,5,6], 2);
            expect(value).to.have.ordered.members([3,4,5,6]);
            expect(value).to.have.length(4);
            done();
        });
    });
    describe('Test with start and end values.', () => {
        it('it should return an array.', (done) => {
            var value = slice([1,2,3,4,5,6], 2, 4);
            expect(value).to.have.ordered.members([3,4]);
            expect(value).to.have.length(2);
            done();
        });
    });
    describe('Test with empty array.', () => {
        it('it should return an empty array.', (done) => {
            var value = slice([], 2);
            expect(value).to.have.length(0);
            done();
        });
    });
    describe('Test with string.', () => {
        //TODO: Document feature
        it('it returns an array of characters. (Undocumented!)', (done) => {
            var value = slice("abcdefg", 2);
            expect(value).to.have.ordered.members("cdefg");
            expect(value).to.have.length(5);
            done();
        });
    });
});