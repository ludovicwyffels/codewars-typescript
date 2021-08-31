import { descendingOrder } from '.';

describe('descendingOrder', function () {
  it('should return some sample numbers in descending order', function () {
    expect(descendingOrder(0)).toBe(0);
    expect(descendingOrder(1)).toBe(1);
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});
