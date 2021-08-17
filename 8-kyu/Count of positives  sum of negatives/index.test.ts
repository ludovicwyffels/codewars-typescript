import { countPositivesSumNegatives } from '.';

describe('countPositivesSumNegatives', () => {
  it('basic tests', () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    expect(actual).toEqual(expected);
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    expect(actual).toEqual(expected);
  });

  it('more test', () => {
    expect(countPositivesSumNegatives([])).toEqual([]);
    expect(countPositivesSumNegatives(undefined)).toEqual([]);
  });
});
