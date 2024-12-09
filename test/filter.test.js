import { expect } from 'chai';
import filter from '../src/filter.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'barley', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'george', 'active': false },
    { 'user': 'samename', 'active': true },
    { 'user': 'samename', 'active': false }
];

describe('filter', () => {
    describe('Test with user value.', () => {
        it('it should return users with specified name.', (done) => {
            var value = filter(users, ({ user }) => user == 'samename');
            expect(value).to.have.members([users[4], users[5]]);
            expect(value).to.have.length(2);
            done();
        });
    });
    describe('Test with active value.', () => {
        it('it should return users that are active.', (done) => {
            var value = filter(users, ({ active }) => active);
            expect(value).to.have.members([users[0], users[1], users[4]]);
            expect(value).to.have.length(3);
            done();
        });
        it('it should return users that are inactive.', (done) => {
            var value = filter(users, ({ active }) => !active);
            expect(value).to.have.members([users[2], users[3], users[5]]);
            expect(value).to.have.length(3);
            done();
        });
    });

    describe('Edge cases for array input', () => {

        it('should return an empty array when input is null', (done) => {
            const value = filter(null, () => true);
            expect(value).to.be.an('array').that.is.empty;
            done();
        });

        it('should return an empty array when input is undefined', (done) => {
            const value = filter(undefined, () => true);
            expect(value).to.be.an('array').that.is.empty;
            done();
        });

        it('should return an empty array when input is not an array', (done) => {
            const value = filter(42, () => true); // Non-array input
            expect(value).to.be.an('array').that.is.empty;
            done();
        });

        it('should return an empty array when input is an empty array', (done) => {
            const value = filter([], () => true);
            expect(value).to.be.an('array').that.is.empty;
            done();
        });
    });

    // **Test for predicate handling**
    describe('Predicate tests', () => {

        it('should return an empty array if no elements match the predicate', (done) => {
            const value = filter(users, () => false); // No users will match this
            expect(value).to.be.an('array').that.is.empty;
            done();
        });

        it('should return the entire array if all elements match the predicate', (done) => {
            const value = filter(users, () => true); // All elements should be included
            expect(value).to.have.members(users);
            expect(value).to.have.length(users.length);
            done();
        });

        it('should handle predicates that use the index', (done) => {
            const value = filter(users, (_, index) => index % 2 === 0); // Even indices
            expect(value).to.have.members([users[0], users[2], users[4]]);
            expect(value).to.have.length(3);
            done();
        });

        it('should handle predicates that access the entire array', (done) => {
            const value = filter(users, (user, index, array) => array.length > 5);
            expect(value).to.have.members(users);
            expect(value).to.have.length(users.length);
            done();
        });
    });
});