/* eslint-disable camelcase */
import { even_or_odd } from '.';

describe('solution', function () {
  it('basicTests', function () {
    expect(even_or_odd(2)).toBe('Even');
    expect(even_or_odd(0)).toBe('Even');
    expect(even_or_odd(7)).toBe('Odd');
    expect(even_or_odd(1)).toBe('Odd');
  });
});
