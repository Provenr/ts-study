"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aa(x) {
    console.log(x);
}
aa([1, 2]);
var a = {
    x: 1,
    y: 2,
    z: {
        z1: 3
    }
};
var tom = { name: 'Tom', age: 25, gender: 'male' };
var getPersonName = function (person) {
    console.log(person.name);
};
var tom1 = { name: 'Tom', age: 25, say: function () { return 'hello'; } };
getPersonName(tom1);
// 直接传入 会对 对象做强校验
// getPersonName({ name: 'Tom', age: 25, gender: 'male', sex: '男' })
// class  使用 接口
var user1 = /** @class */ (function () {
    function user1() {
    }
    user1.prototype.say = function () { return 'ss'; };
    return user1;
}());
var user2 = {
    name: 'tom',
    say: function () { return 'ss'; },
    active: false
};
var sayhi = function (word) { return word; };
