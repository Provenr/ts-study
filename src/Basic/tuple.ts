// =============  Base ==============
const numberArr: number[] = [1, 2, 3];
const strArr: string[] = ['s', 'b'];
const arr: (number | string)[] = [1, 'a', 3, undefined]
const undefinedArr: number[] = [undefined, undefined]

const ObjArr: {name: string, age: number}[] = [{
    name: 'tom',
    age: 12
}]

// alias type 类型别名

class Teacher {
    name: string;
    age: number;
}

type User = {name: string, age: number}
const Person: User[] = [{name: 'tell', age: 12}]
// 类和对象穿插使用
const teacherArr: Teacher[] = [
    new Teacher(),
    {name: 'tell', age: 12}
]


// ============ Tuple  ==================
// 元组 是 一种更加具体的类型约束

const teacherInfo: [string, string, number] =  ['shely', 'female', 26]

// csv
const teacherList: [string, string, number][] = [
    ['dell', 'male', 19],
    ['shely', 'female', 26]
]



// 取得第一个元素
type TupleHead<T extends any[]> = T[0];

// 去除第一个元素
type TupleTail<T extends any[]> = ((...t: T) => void) extends (x: any, ...t: infer R) => void ? R : never;

// 取得最后一个元素
type TupleLast<T extends any[]> = T[TupleTail<T>['length']];

// 去除最后一个元素
type TupleInit<T extends any[]> = TypeAssert<Overwrite<TupleTail<T>, T>, any[]>;

// 从头部加入一个元素
type TupleUnshift<T extends any[], X> = ((x: X, ...t: T) => void) extends (...t: infer R) => void ? R : never;

// 从末尾加入一个元素
type TuplePush<T extends any[], X> = TypeAssert<Overwrite<TupleUnshift<T, any>, T & { [x: string]: X }>, any[]>;

// 连接两个元组
type TupleConcat<A extends any[], B extends any[]> = {
    1: A,
    0: TupleConcat<TuplePush<A, B[0]>, TupleTail<B>>
}[B extends [] ? 1 : 0];

// 用到的 helper 类型，简化代码和解决某些情况下的类型错误
type TypeAssert<T, A> = T extends A ? T : never;
type Overwrite<T, S extends any[]> = { [P in keyof T]: T[P] };
