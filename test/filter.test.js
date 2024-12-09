import { expect } from 'chai';
import filter from '../src/filter.js';

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'barley', 'active': true },
    { 'user': 'fred',   'active': false },
    { 'user': 'george',   'active': false },
    { 'user': 'samename',   'active': true },
    { 'user': 'samename',   'active': false }
];

describe('Test filter function.', () => {
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
});