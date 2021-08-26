import { boolToWord } from '.';

describe('boolToWord', function () {
  it('Sample tests', function () {
    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(false)).toBe('No');
  });
});
