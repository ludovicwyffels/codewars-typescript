import { isDivisible } from '.';

describe('example', function () {
  it('tests', function () {
    expect(isDivisible(3, 3, 4)).toBe(false);
    expect(isDivisible(12, 3, 4)).toBe(true);
    expect(isDivisible(8, 3, 4)).toBe(false);
    expect(isDivisible(48, 3, 4)).toBe(true);
  });
});
