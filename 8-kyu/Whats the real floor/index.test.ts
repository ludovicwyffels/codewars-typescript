import { getRealFloor } from '.';

describe('example', function () {
  it('test', function () {
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(15)).toBe(13);
  });

  it('more test', function () {
    expect(getRealFloor(0)).toBe(0);
    expect(getRealFloor(-3)).toBe(-3);
  });
});
