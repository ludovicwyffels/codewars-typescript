export const fakeBin = (x:string):string => {
  return x
    .split('')
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join('');
};
