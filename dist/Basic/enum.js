"use strict";
// 枚举成员未赋值时，默认值从 0 开始递增， 可以自定义初始值
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
var r = Color.RED;
var b = Color.BLUE;
var g = Color.GREEN;
console.log(r, b, g);
// ==========================================
// 初始化 赋值
var Flag;
(function (Flag) {
    Flag[Flag["SUCCESS"] = 1] = "SUCCESS";
    Flag[Flag["ERROR"] = -1] = "ERROR";
})(Flag || (Flag = {}));
var error = Flag.ERROR;
console.log(error);
(function (Color) {
    Color[Color["DarkRed"] = 3] = "DarkRed";
    Color[Color["DarkGreen"] = 4] = "DarkGreen";
    Color[Color["DarkBlue"] = 5] = "DarkBlue";
})(Color || (Color = {}));
var NoYes;
(function (NoYes) {
    NoYes["No"] = "no";
    NoYes["Yes"] = "yes";
})(NoYes || (NoYes = {}));
function toChinese(value) {
    switch (value) {
        case NoYes.No:
            return '否';
        case NoYes.Yes:
            return '是';
    }
}
console.log(toChinese(NoYes.No), '否');
console.log(toChinese(NoYes.Yes), '是');
// ==========================================
// 使用 enum + namespace 的声明的方式向枚举类型添加静态方法
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
var mon = Weekday.Monday;
var sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));
