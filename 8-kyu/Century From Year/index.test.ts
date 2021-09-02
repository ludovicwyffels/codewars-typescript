import { centuryFromYear } from '.';

describe('centuryFromYear', () => {
  it('should return 18 when input is 1705', () => {
    const expected = 18;
    const actual = centuryFromYear(1705);

    expect(actual).toBe(expected);
  });

  it('should return 19 when input is 1900', () => {
    const expected = 19;
    const actual = centuryFromYear(1900);

    expect(actual).toBe(expected);
  });
});
