import { digitize } from '.';

describe('digitize', function () {
  it('Sample test', function () {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });
});
