export function bmi (weight: number, height: number): string {
  let value;
  const bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    value = 'Underweight';
  } else if (bmi <= 25) {
    value = 'Normal';
  } else if (bmi <= 30) {
    value = 'Overweight';
  } else {
    value = 'Obese';
  }
  return value;
}
