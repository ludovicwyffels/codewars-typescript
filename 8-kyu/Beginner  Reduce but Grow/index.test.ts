import { grow } from '.';

describe('Basic tests', function () {
  it('Testing for [1, 2, 3]', () => expect(grow([1, 2, 3])).toBe(6));
  it('Testing for [4, 1, 1, 1, 4]', () => expect(grow([4, 1, 1, 1, 4])).toBe(16));
  it('Testing for [2, 2, 2, 2, 2, 2]', () => expect(grow([2, 2, 2, 2, 2, 2])).toBe(64));
});
