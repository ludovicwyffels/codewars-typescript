export const digitize = (n: number): number[] => {
  return (n + '').split('').map(Number).reverse();
};
