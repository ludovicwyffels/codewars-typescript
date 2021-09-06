export function findNeedle (haystack: Array<string|number|boolean|null|undefined>):string {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
