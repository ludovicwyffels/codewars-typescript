import { removeChar } from '.';

describe('removeChar', () => {
  it('basic tests', () => {
    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
  });
});
