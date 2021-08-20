import { G964 } from '.';

describe('Fixed Tests', function () {
  it('Basic tests tankvol', function () {
    expect(G964.tankvol(5, 7, 3848)).toBe(2940);
    expect(G964.tankvol(2, 7, 3848)).toBe(907);
    expect(G964.tankvol(2, 8, 5026)).toBe(982);
    expect(G964.tankvol(4, 9, 6361)).toBe(2731);
  });

  it('more tests', function () {
    expect(G964).toHaveProperty('tankvol');
    expect(new G964()).not.toHaveProperty('tankvol');
  });
});
