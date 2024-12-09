import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', function () {

    // Test case for basic usage with an array
    it('should count occurrences based on an iteratee for an array of objects', function () {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ];

        const result = countBy(users, value => value.active);
        expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    // Test case for basic usage with an array of numbers
    it('should count occurrences of numbers in an array', function () {
        const numbers = [1, 2, 2, 3, 3, 3];
        const result = countBy(numbers, value => value);
        expect(result).to.deep.equal({ '1': 1, '2': 2, '3': 3 });
    });

    // Test case for an empty array
    it('should return an empty object for an empty array', function () {
        const result = countBy([], value => value);
        expect(result).to.deep.equal({});
    });

    // Test case for an empty object
    it('should return an empty object for an empty object', function () {
        const result = countBy({}, value => value);
        expect(result).to.deep.equal({});
    });

    // Test case for handling `null` and `undefined` values
    it('should correctly handle `null` and `undefined` values', function () {
        const values = [null, undefined, null, undefined, 1];
        const result = countBy(values, value => (value === null ? 'null' : value === undefined ? 'undefined' : 'other'));
        expect(result).to.deep.equal({ 'null': 2, 'undefined': 2, 'other': 1 });
    });

    // Test case for counting unique values based on a string iteratee
    it('should count occurrences based on string values', function () {
        const users = [
            { 'user': 'barney', 'status': 'active' },
            { 'user': 'betty', 'status': 'inactive' },
            { 'user': 'fred', 'status': 'active' }
        ];

        const result = countBy(users, value => value.status);
        expect(result).to.deep.equal({ 'active': 2, 'inactive': 1 });
    });

    // Test case for counting based on boolean values
    it('should count occurrences of boolean values in an array', function () {
        const values = [true, false, true, true, false];
        const result = countBy(values, value => value);
        expect(result).to.deep.equal({ 'true': 3, 'false': 2 });
    });

    // Test case for objects as the input collection
    it('should count occurrences based on an object input', function () {
        const input = {
            a: { 'user': 'barney', 'active': true },
            b: { 'user': 'betty', 'active': true },
            c: { 'user': 'fred', 'active': false }
        };

        const result = countBy(input, value => value.active);
        expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
    });

    // Test case for complex iteratees
    it('should count occurrences based on more complex iteratees', function () {
        const users = [
            { 'user': 'barney', 'age': 25 },
            { 'user': 'betty', 'age': 30 },
            { 'user': 'fred', 'age': 25 },
            { 'user': 'bob', 'age': 30 }
        ];

        const result = countBy(users, value => value.age);
        expect(result).to.deep.equal({ '25': 2, '30': 2 });
    });

});
