import { Kata } from '.';

describe('squareDigits', function () {
  it('should pass a sample test', function () {
    expect(Kata.squareDigits(9119)).toBe(811181);
    expect(Kata.squareDigits(0)).toBe(0);
  });

  it('more test', () => {
    expect(Kata).toHaveProperty('squareDigits');
    expect(Kata.squareDigits(3212)).toBe(9414);
    expect(Kata.squareDigits(2112)).toBe(4114);

    const kata = new Kata();
    expect(kata).not.toBe(undefined);
  });
});
