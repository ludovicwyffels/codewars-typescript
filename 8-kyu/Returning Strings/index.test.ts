import { greet } from '.';

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?');
    expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?');
  });
});
