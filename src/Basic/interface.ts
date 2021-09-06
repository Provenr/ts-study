import { type } from "node:os";

interface Point {
  x: number;
  y: number;
  z: {
    z1: number;
    z2: string
  }
}

type PointType = Partial<Point>

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Object ? DeepPartial<T[P]> : T[P]
}
// type DeepPartial<T> = T extends Object ? { [P in keyof T]?: DeepPartial<T[P]>; } : T;
type deepPointType = DeepPartial<Point>

type aty = [start: number, end: number];

function aa(x: aty){
  console.log(x)
}
aa([1, 2])
type a = keyof Point

let a: deepPointType = {
  x: 1,
  y: 2,
  z: {
    z1: 3
  }
}

// ==============================
// 可选属性

interface Book {
  name: string;
  price?: number;
  desc?: string;
}

// ==============================
//

interface People {
  name: string;
  age?: number;
  [propName: string]: string | number;
}
let tom: People = { name: 'Tom', age: 25, gender: 'male' };