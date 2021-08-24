import { bmi } from '.';

describe('Kata.bmi', function () {
  it('should pass a sample test according to the specifications provided', function () {
    expect(bmi(80, 1.80)).toBe('Normal');
  });

  it('more tests', function () {
    expect(bmi(50, 1.80)).toBe('Underweight');
    expect(bmi(80, 1.80)).toBe('Normal');
    expect(bmi(90, 1.80)).toBe('Overweight');
    expect(bmi(100, 1.80)).toBe('Obese');
  });
});
