export function removeChar (str: string): string {
  return str
    .split('')
    .slice(1, str.length - 1)
    .join('');
}
