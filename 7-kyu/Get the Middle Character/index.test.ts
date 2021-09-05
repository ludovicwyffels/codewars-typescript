import { Challenge } from '.';

describe('solution', function () {
  it('should handle basic tests', function () {
    expect(Challenge.getMiddle('test')).toBe('es');
    expect(Challenge.getMiddle('testing')).toBe('t');
  });
});
