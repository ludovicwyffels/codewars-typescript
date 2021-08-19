import { G964 } from '.';

describe('Fixed Tests', function () {
  it('Basic tests race', function () {
    expect(G964.race(720, 850, 70)).toEqual([0, 32, 18]);
    expect(G964.race(80, 91, 37)).toEqual([3, 21, 49]);
    expect(G964.race(80, 100, 40)).toEqual([2, 0, 0]);
    expect(G964.race(720, 850, 37)).toEqual([0, 17, 4]);
  });

  it('v1 >= v2', function () {
    expect(G964.race(50, 30, 4)).toBe(null);
  });

  it('more test', function () {
    expect(G964.race(51, 54, 1)).toEqual([0, 20, 0]);
    expect(G964.race(51, 154, 2)).toEqual([0, 1, 9]);
    expect(G964.race(1, 2, 1)).toEqual([1, 0, 0]);
    expect(new G964()).not.toHaveProperty('race');
    expect(G964).toHaveProperty('race');
  });
});
