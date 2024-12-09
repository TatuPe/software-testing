import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact', function () {

    it('should remove all falsey values', function () {
        const result = compact([0, 1, false, 2, '', 3]);
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should return an empty array for an empty array input', function () {
        const result = compact([]);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array if all values are falsey', function () {
        const result = compact([false, null, 0, "", undefined, NaN]);
        expect(result).to.deep.equal([]);
    });

    it('should return the same array if no falsey values exist', function () {
        const result = compact([1, 2, 3]);
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should remove falsey values but keep truthy ones', function () {
        const result = compact([2, false]);
        expect(result).to.deep.equal([2]);
    });

    it('should filter out falsey values while keeping truthy ones', function () {
        const result = compact([0, 1, 2]);
        expect(result).to.deep.equal([1, 2]);
    });

    it('should keep string values and remove other falsey values', function () {
        const result = compact([0, "hello", null]);
        expect(result).to.deep.equal(["hello"]);
    });

    it('should keep all truthy values in the array', function () {
        const result = compact([true, 1, "string"]);
        expect(result).to.deep.equal([true, 1, "string"]);
    });
});
