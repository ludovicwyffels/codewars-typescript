import { makeNegative } from '.';

describe('makeNegative', function () {
  it('Sample tests', function () {
    expect(makeNegative(42)).toBe(-42);
  });

  it('more test', function () {
    expect(makeNegative(1)).toBe(-1);
    expect(makeNegative(-5)).toBe(-5);
    expect(makeNegative(0)).toBe(0);
    expect(makeNegative(0.12)).toBe(-0.12);
  });
});
