import { solution } from '.';

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    expect(solution('world')).toBe('dlrow');
    expect(solution('hello')).toBe('olleh');
    expect(solution('')).toBe('');
    expect(solution('h')).toBe('h');
  });
});
