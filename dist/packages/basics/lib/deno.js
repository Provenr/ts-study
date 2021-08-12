"use strict";
// ===========================  原始数据类型  ===========================
// 布尔值、数值、字符串、null、undefined 以及 ES6的 Symbol
var msg = "hello world";
var isBoolean = true;
var decLiteral = 6;
// void 空值 只能赋值 undefined 或 null
var unusable = undefined;
// undefined 和 null 是所有类型的子类型
var u = undefined;
var n = null;
// any 类型 允许被赋值为任意类型
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
// 在声明的时候，未指定其类型会被识别为任意值类型
var myFavoriteNumber = 'seven';
var anyThing = 'hello';
console.log(anyThing.myName); // undefined
// ===========================  联合类型  ===========================
var unionNumber;
unionNumber = 'seven';
console.log('string', unionNumber);
unionNumber = 7;
console.log('number', unionNumber);
// 只能访问此「联合类型」的「所有类型里共有的属性或方法」：
function getLength(something) {
    // return something.length;
    return something.toString();
}
console.log('联合类型', getLength(unionNumber));
var tom = {
    name: 'Tom',
    age: 15
};
var li = {
    name: 'Li'
};
var lily = {
    id: 1234,
    name: 'lily',
    age: 25,
    gender: 'female',
    job: 'FE'
};
// lily.id = 121;  // 报错 只读的约束存在于第一次给对象赋值的时候，不是第一次给只读属性赋值的时候
console.log(lily);
// =========================== 数组接口 「类型 + 方括号」 ===========================
var fibonacci = [1, 1, 2, 3, 5]; // 不允许出现其他类型 eg: [1, '1', 2, 3, 5]
fibonacci.push(8);
// 数组 泛型定义 https://ts.xcatliu.com/advanced/generics
var fibonacci2 = [1, 1, 2, 3, 5];
var fibonacciByInterface = [1, 1, 2, 3, 5];
// 类数组（Array-like Object）eg: arguments  要使用  interface 定义
// 常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function argsFn() {
    var args = arguments;
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
function Sum(x, y) {
    return x + y;
}
// 函数表达式（Function Expression）
var mySum = function (x, y) {
    return x + y;
};
var mySum2 = function (x, y) {
    return x + y;
};
console.log('函数表达式', mySum2(1, 2));
// XXX: 对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
var mysearch;
mysearch = function (x, y) {
    return x === y;
};
console.log(mysearch('sss', 'sss'));
// TODO: 函数可选参数
// 可选参数后面不允许再出现必需参数了
function completeName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    return firstName;
}
// TODO: 函数参数默认值
// 默认值的参数识别为可选参数
// 不受「可选参数必须接在必需参数后面」的限制了
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var cat = buildName(undefined, 'Cat');
