import { Kata } from '.';

describe('spinWords', function () {
  it('should pass a sample test', function () {
    expect(Kata.spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });
});
