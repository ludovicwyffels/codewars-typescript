import { litres } from '.';

describe('Cycling', () => {
  it('Some basic tests', () => {
    expect(litres(2)).toBe(1);
    expect(litres(1.4)).toBe(0);
    expect(litres(12.3)).toBe(6);
    expect(litres(0.82)).toBe(0);
    expect(litres(11.8)).toBe(5);
    expect(litres(1787)).toBe(893);
    expect(litres(0)).toBe(0);
  });
});
