import { iqTest } from '.';

describe('iqTest', function () {
  it('should return 3 when input is "2 4 7 8 10"', () => {
    expect(iqTest('2 4 7 8 10')).toBe(3);
  });

  it('should return 1 when input is "1 2 2"', () => {
    expect(iqTest('1 2 2')).toBe(1);
  });

  it('more test', function () {
    expect(iqTest('1 3 5')).toBe(0);
  });
});
