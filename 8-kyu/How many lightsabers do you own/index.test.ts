import { howManyLightsabersDoYouOwn } from '.';

describe('How many light sabers?', function () {
  it('Basic tests', function () {
    expect(howManyLightsabersDoYouOwn('Zach')).toBe(18);
    expect(howManyLightsabersDoYouOwn('Adam')).toBe(0);
  });
});
