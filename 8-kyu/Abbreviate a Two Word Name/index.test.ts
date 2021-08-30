import { abbrevName } from '.';

describe('Sample Test Cases', function () {
  it('Should return a proper abbreviate', function () {
    expect(abbrevName('Sam Harris')).toBe('S.H');
    expect(abbrevName('Patrick Feenan')).toBe('P.F');
    expect(abbrevName('R Favuzzi')).toBe('R.F');
  });
});
