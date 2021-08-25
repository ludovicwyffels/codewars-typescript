import { firstNonConsecutive } from '.';

describe('a positive example', function () {
  it('returns 6', function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    expect(first).toBe(6);
  });

  it('more test', function () {
    expect(firstNonConsecutive([])).toBe(null);
  });
});
