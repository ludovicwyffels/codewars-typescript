export class G964 {
    public static race = (v1: number, v2: number, g: number): number[] | null => {
      if (v1 >= v2) return null;

      const timeInSecond : number = g / (v2 - v1) * 3600;
      const hour = Math.floor(timeInSecond / 3600);
      const minute = Math.floor((timeInSecond / 60) % 60);
      const second = Math.floor(timeInSecond % 60);

      return [hour, minute, second];
    }
}
