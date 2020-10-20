// ===========================  原始数据类型  ===========================
// 布尔值、数值、字符串、null、undefined 以及 ES6的 Symbol
let msg: string = "hello world";
let isBoolean: boolean = true;
let decLiteral: number = 6;
// void 空值 只能赋值 undefined 或 null
let unusable: void = undefined;

// undefined 和 null 是所有类型的子类型
let u: undefined = undefined;
let n: null = null;

// any 类型 允许被赋值为任意类型
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
// 在声明的时候，未指定其类型会被识别为任意值类型
let myFavoriteNumber: any = 'seven';
let anyThing: any = 'hello';
console.log(anyThing.myName); // undefined

// ===========================  联合类型  ===========================
let unionNumber: string | number;
unionNumber = 'seven';
console.log('string', unionNumber);
unionNumber = 7;
console.log('number', unionNumber);

// 只能访问此「联合类型」的「所有类型里共有的属性或方法」：
function getLength(something: string | number): string {
    // return something.length;
    return something.toString();
}

console.log('联合类型', getLength(unionNumber));


// ===========================  对象接口（interface）  ===========================
// 接口一般首字母大写
// 「对象的形状（Shape）」进行描述
// ⚠️⚠️⚠️️赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 15
};

// ⚠️定义的变量比接口少了一些属性是不允许
// let tom: Person = {
//     name: 'Tom',
// };

// 定义可选属性 不完全匹配一个形状 （只能少）
interface Person2 {
    name: string;
    age?: number; // 可选属性
}

let li: Person2 = {
    name: 'Li'
};

// 任意属性
// 定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// 一个接口中只能定义一个任意属性, 接口中有多个类型的属性, 任意属性中使用联合类型
interface Person3 {
    readonly id: number; // 只读属性 只读的约束存在于第一次给对象赋值的时候
    name: string;
    age?: number; // 可选属性
    [propName: string]: any; // 任意属性 可以 使用 联合类型 string | number
}
let lily: Person3 = {
    id: 1234,
    name: 'lily',
    age: 25,
    gender: 'female',
    job: 'FE'
};
// lily.id = 121;  // 报错 只读的约束存在于第一次给对象赋值的时候，不是第一次给只读属性赋值的时候
console.log(lily);


// =========================== 数组接口 「类型 + 方括号」 ===========================

let fibonacci: number[] = [1, 1, 2, 3, 5]; // 不允许出现其他类型 eg: [1, '1', 2, 3, 5]
fibonacci.push(8);

// 数组 泛型定义 https://ts.xcatliu.com/advanced/generics
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];


// interface 表示
interface NumberArray {
    [index: number]: number;
}
let fibonacciByInterface: NumberArray = [1, 1, 2, 3, 5];


// 类数组（Array-like Object）eg: arguments  要使用  interface 定义
// 常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function argsFn() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
// IArguments 是 TypeScript 中定义好了的类型
// FIXME: 报错
// interface IArguments {
//     [index: number]: any; //  TS2375 [ERROR]: Duplicate number index signature.
//     length: number;
//     callee: Function;
// }


// =========================== 函数 ===========================
// 函数声明（Function Declaration）和 函数表达式（Function Expression）

// 函数声明（Function Declaration）
// 输入和输出被约束
// 输入多余的（或者少于要求的）参数，是不被允许
function Sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function(x: number, y: number): number {
    return x + y;
};

let mySum2: (x: number, y:number) => number = function(x: number, y: number){
    return x + y;
};
console.log('函数表达式', mySum2(1,2));

// 接口定义函数的形状
interface Mysearch {
    (x: string, y: string): boolean
}
// XXX: 对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
let mysearch: Mysearch;
mysearch = function (x: string, y: string) {
    return x === y;
};

console.log(mysearch('sss', 'sss'));

// TODO: 函数可选参数
// 可选参数后面不允许再出现必需参数了
function completeName(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + lastName
    }
    return firstName;
}

// TODO: 函数参数默认值
// 默认值的参数识别为可选参数
// 不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');