import { multiply } from '.';

describe('multiply', function () {
  it('should return the product', () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(1, 2)).toBe(2);
  });
});
