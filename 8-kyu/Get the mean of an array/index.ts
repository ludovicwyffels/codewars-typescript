export function getAverage (marks:number[]):number {
  return ~~(marks.reduce((total, value) => total + value, 0) / marks.length);
}
