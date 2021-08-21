export function accum (s: string): string {
  return s
    .split('')
    .map((char, index) => {
      const charRepeated = char.repeat(index + 1);
      return (
        charRepeated.charAt(0).toUpperCase() +
        charRepeated.slice(1).toLowerCase()
      );
    })
    .join('-');
}
