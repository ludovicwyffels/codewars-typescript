import { G964 } from '.';

describe('Fixed Tests', function () {
  it('Basic tests lenCurve', function () {
    expect(G964.lenCurve(1)).toBe(1.414213562);
    expect(G964.lenCurve(10)).toBe(1.478197397);
  });

  it('more tests', function () {
    expect(G964).toHaveProperty('lenCurve');
    expect(new G964()).not.toHaveProperty('lenCurve');
  });
});
