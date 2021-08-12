// ==========================================
// boolean

let isTrue: boolean = true;

// ==========================================
// number
let infinityNumber: number = Infinity;
let notANumber: number = NaN


// ==========================================
// string

let MyName: string = 'Tom';
let MyAge: number = 25;
let desc: string = `My Name is ${MyName}, I'm ${MyAge} years old.`;

// ==========================================
// undefined & null

let u: undefined = undefined;
let n: null = null;
let year: string = '2021';
let month: number = 7;
u = n
year = n;
month = u;


// ==========================================
// Array

let arr1: number[] = [1,2,3]
let arr2: Array<number> = [3,4,5]

// ==============================
// Tuple 元组
type oneTuple = [string, number, boolean]

let list: oneTuple[] = [
  ["ts", 15.2, false]
];

// 不定长元组
type tup = [string, ...number[], string]
let list2 = ['tom', 1, 2, 3, 'hello']


// ==========================================
// void 表示没有任何类型，通常表示没有返回值的函数

let v: void
v = u
v = n

function alertName(): void { 
    alert('My name is Tom');
}

// ==============================
// any & unknown


// ==========================================
// never
//拥有 never 返回值类型的函数
//无法正常返回、无法终止、抛出异常

function errorFn(message: string): never {
  throw new Error(message)
}

function infinityLoop(): never{
  while (true) {

  }
}

// ==========================================
// 联合类型 Union
// 只能访问此联合类型的所有类型里共有的属性或方法：

let union: number | string;
union.toString()