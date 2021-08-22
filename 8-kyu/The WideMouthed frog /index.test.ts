import { mouthSize } from '.';

describe('Basic tests', () => {
  it('Basic tests should pass', () => {
    expect(mouthSize('toucan')).toBe('wide');
    expect(mouthSize('ant bear')).toBe('wide');
    expect(mouthSize('alligator')).toBe('small');
  });
});
