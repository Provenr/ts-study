"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = /** @class */ (function () {
    function Cat(type) {
        this.type = type;
    }
    return Cat;
}());
var cat = new Cat(20);
// const cat = new Cat(20)
function swip(value) {
    return [value[1], value[0]];
}
console.log(swip(['1', 2])); // [2, '1']
var p;
var q;
var numberArr = [1, 2, '2', true, 4];
var foo = 123;
