export function abbrevName (name: string): string {
  return name
    .split(' ')
    .map((x) => x.substr(0, 1).toUpperCase())
    .join('.');
}
