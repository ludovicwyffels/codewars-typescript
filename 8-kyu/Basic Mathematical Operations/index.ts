interface Operation {
  [key: string]: {
    func(l: number, r: number): number;
  };
}

const ops: Operation = {
  '+': { func: (l:number, r:number): number => { return l + r; } },
  '-': { func: (l:number, r:number): number => { return l - r; } },
  '*': { func: (l:number, r:number): number => { return l * r; } },
  '/': { func: (l:number, r:number): number => { return l / r; } }
};

export function basicOp (operation: string, value1: number, value2: number): number {
  return ops[operation].func(value1, value2);
}
