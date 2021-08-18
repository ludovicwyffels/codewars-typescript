import { quarterOf } from '.';

describe('Basic tests', () => {
  it('Should pass basic tests', () => {
    expect(quarterOf(3)).toBe(1);
    expect(quarterOf(8)).toBe(3);
    expect(quarterOf(11)).toBe(4);
  });
});
