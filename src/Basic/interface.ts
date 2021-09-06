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


interface People1 {
  name: string;
  age?: number;
  say(): String
}

const getPersonName = (person: People1): void => {
  console.log(person.name)
}
let tom1: People1 = { name: 'Tom', age: 25, say(){return 'hello'}};
getPersonName(tom1)
// 直接传入 会对 对象做强校验
// getPersonName({ name: 'Tom', age: 25, gender: 'male', sex: '男' })


// class  使用 接口
class user1 implements People1 {
  name: 'tom';
  say(){return 'ss'}
}


// 继承接口

interface User2 extends People1 {
  active: boolean;
}
let user2: User2 = {
  name: 'tom',
  say(){return 'ss'},
  active: false
}

// 接口定义函数类型
interface sayHi {
  (word: string): string
}

const sayhi: sayHi = (word: string) => {return word}