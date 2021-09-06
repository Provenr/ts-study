"use strict";
// =============  Base ==============
var numberArr = [1, 2, 3];
var strArr = ['s', 'b'];
var arr = [1, 'a', 3, undefined];
var undefinedArr = [undefined, undefined];
var ObjArr = [{
        name: 'tom',
        age: 12
    }];
// alias type 类型别名
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var Person = [{ name: 'tell', age: 12 }];
// 类和对象穿插使用
var teacherArr = [
    new Teacher(),
    { name: 'tell', age: 12 }
];
// ============ Tuple  ==================
// 元组 是 一种更加具体的类型约束
var teacherInfo = ['shely', 'female', 26];
// csv
var teacherList = [
    ['dell', 'male', 19],
    ['shely', 'female', 26]
];
