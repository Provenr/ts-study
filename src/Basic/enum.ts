// 枚举成员未赋值时，默认值从 0 开始递增， 可以自定义初始值
enum Color {
  RED, BLUE, GREEN
}
let r: Color = Color.RED
let b: Color = Color.BLUE
let g: Color = Color.GREEN
console.log(r,b,g);

// ==========================================
// 初始化 赋值
enum Flag {
  SUCCESS = 1,
  ERROR = -1
}
let error =  Flag.ERROR
console.log(error);


enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}

enum NoYes {
  No = 'no',
  Yes = 'yes',
}
function toChinese(value: NoYes) {
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
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));