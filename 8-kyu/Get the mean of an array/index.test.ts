import { getAverage } from '.';

describe('solution', function () {
  it('Basic Tests', function () {
    expect(getAverage([2, 2, 2, 2])).toBe(2);
    expect(getAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1);
  });
});
