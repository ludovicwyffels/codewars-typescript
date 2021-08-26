import { Kata } from '.';

describe('disemvowel', function () {
  it('should pass a sample test', function () {
    expect(Kata.disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
  });
});
