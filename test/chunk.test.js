import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk', () => {
    it('splits array into chunks of specified size', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']])
        expect(chunk([1, 2, 3, 4, 5], 2)).to.deep.equal([[1, 2], [3, 4], [5]])
    })

    it('splits array into chunks of size 1 by default', () => {
        expect(chunk(['a', 'b', 'c'])).to.deep.equal([['a'], ['b'], ['c']])
        expect(chunk([1, 2, 3])).to.deep.equal([[1], [2], [3]])
    })

    it('returns empty array when input is empty', () => {
        expect(chunk([], 2)).to.deep.equal([])
        expect(chunk([], 3)).to.deep.equal([])
    })

    it('returns empty array if size is less than 1', () => {
        expect(chunk([1, 2, 3], 0)).to.deep.equal([])
        expect(chunk([1, 2, 3], -1)).to.deep.equal([])
    })

    it('handles large arrays efficiently', () => {
        const largeArray = Array(1000).fill('test')
        expect(chunk(largeArray, 50).length).to.deep.equal(20)
        expect(chunk(largeArray, 100).length).to.deep.equal(10)
    })

    it('handles non-integer size by converting to integer', () => {
        expect(chunk([1, 2, 3, 4], '2')).to.deep.equal([[1, 2], [3, 4]])
        expect(chunk([1, 2, 3, 4], 3.5)).to.deep.equal([[1, 2, 3], [4]])
    })

    it('returns empty array when array is null or undefined', () => {
        expect(chunk(null, 2)).to.deep.equal([])
        expect(chunk(undefined, 2)).to.deep.equal([])
    })
})
