interface position {
    x: number;
    y: number;
}

export class G964 {
    public static lenCurve = (n: number): number => {
      const curve = (x: number): number => {
        return x * x;
      };
      const distance = (posA: position, posB: position): number => {
        return Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
      };

      const points = Array
        .from(
          { length: n + 1 },
          (_, i) => i * (1 / n))
        .map(point => ({ x: point, y: curve(point) }));
      return Math.round(points.reduce(
        (acc, cur, i, arr) => {
          if (i + 1 < arr.length) {
            return acc + distance(cur, arr[i + 1]);
          }
          return acc;
        }
        , 0) * 1000000000) / 1000000000;
    }
}
