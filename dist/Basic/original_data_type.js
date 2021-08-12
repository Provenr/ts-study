"use strict";
// ==========================================
// boolean
var isTrue = true;
// ==========================================
// number
var infinityNumber = Infinity;
var notANumber = NaN;
// ==========================================
// string
var MyName = 'Tom';
var MyAge = 25;
var desc = "My Name is " + MyName + ", I'm " + MyAge + " years old.";
// ==========================================
// undefined & null
var u = undefined;
var n = null;
var year = '2021';
var month = 7;
u = n;
year = n;
month = u;
// ==========================================
// Array
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];
var list = [
    ["ts", 15.2, false]
];
var list2 = ['tom', 1, 2, 3, 'hello'];
// ==========================================
// void 表示没有任何类型，通常表示没有返回值的函数
var v;
v = u;
v = n;
function alertName() {
    alert('My name is Tom');
}
// ==============================
// any & unknown
// ==========================================
// never
//拥有 never 返回值类型的函数
//无法正常返回、无法终止、抛出异常
function errorFn(message) {
    throw new Error(message);
}
function infinityLoop() {
    while (true) {
    }
}
// ==========================================
// 联合类型 Union
// 只能访问此联合类型的所有类型里共有的属性或方法：
var union;
union.toString();
