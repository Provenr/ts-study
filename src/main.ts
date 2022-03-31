// import { type } from "node:os"



// class Cat<T>{
//   private type: T
//   constructor(type: T) {
//     this.type = type
//   }
// }
// const cat: Cat<number> = new Cat<number>(20)
// // const cat = new Cat(20)

// function swip<T, U>(value: [T, U]): [U, T] {
//   return [value[1], value[0]]
// }
// console.log(swip(['1', 2])) // [2, '1']

// interface P {
//   name: string
//   age: number
// }
// interface X {
//   c: string
//   d: string
// }
// type Flatten<T> = T extends any[] ? T[number] : T
// type Str = Flatten<string[]>
// type Num = Flatten<Array<number>>
// // type Num = number

// interface Y {
//   c: number
//   e: string
// }
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

// type aar = ReturnType<Y>

// type XY = X & Y
// type YX = Y & X

// type unions = {
//   [p in keyof YX]: YX[p]
// }


// let p: XY
// let q: YX

// let numberArr = [1, 2, '2', true, 4]
// const foo = 123
import { add } from './Basic/func'

const APP = document.getElementById('root') as HTMLDivElement

APP.innerHTML = `${add([1, 2, 3])}`
console.log(add(['lin', '18']))
console.log(add([1, 2, 3], [1, 2, 3]))
console.log(add(['lin', '18'], ['man', 'handsome']))


