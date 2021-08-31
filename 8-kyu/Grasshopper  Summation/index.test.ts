import { summation } from '.';

describe('summation', () => {
  it('basic tests', () => {
    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);
  });
});
