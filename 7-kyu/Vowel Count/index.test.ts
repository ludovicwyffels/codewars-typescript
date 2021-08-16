import { Kata } from '.';

describe('getCount', function () {
  it('should pass a sample test', function () {
    expect(Kata.getCount('abracadabra')).toBe(5);
  });

  it('more test', () => {
    expect(Kata.getCount('pear tree')).toBe(4);
    expect(Kata.getCount('o a kak ushakov lil vo kashu kakao')).toBe(13);
    expect(Kata.getCount('my pyx')).toBe(0);

    expect(new Kata()).not.toBe(undefined);
  });
});
