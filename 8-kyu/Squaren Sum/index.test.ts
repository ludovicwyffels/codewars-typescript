import { squareSum } from '.';

describe('Sample Test Cases', function () {
  it('Should return a number', function () {
    expect(squareSum([1, 2])).toBe(5);
    expect(squareSum([0, 3, 4, 5])).toBe(50);
  });
});
