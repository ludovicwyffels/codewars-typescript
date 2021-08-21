import { Kata } from '.';

describe('dnaStrand', function () {
  it('Sample tests', function () {
    expect(Kata.dnaStrand('AAAA')).toBe('TTTT');
    expect(Kata.dnaStrand('ATTGC')).toBe('TAACG');
    expect(Kata.dnaStrand('GTAT')).toBe('CATA');
  });

  it('more test', function () {
    expect(Kata).toHaveProperty('dnaStrand');
    expect(new Kata()).not.toHaveProperty('dnaStrand');
  });
});
