interface UserInfo {
  name: string,
  age: number,
  tel: string,
  address: {
    city: string,
    street: string
  }
}
// 定义函数的参数类型
type paramType<T> = T extends (...args: infer P) => void ? P : T
type returnType1<T> = T extends (...args: any[]) => infer R ? R : never

type GetAge = (user: UserInfo) => number

const getAge: GetAge = (user) => { return user.age }

type Age = returnType1<typeof getAge>
const age: Age = 20
type tel = paramType<number>

// Partial 定义参数可选
type DeepPartial<T> = T extends Function ? T : (T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T)
type DeepPartialTwo<T> = {
  [K in keyof T]?: T[K] extends Object ? DeepPartialTwo<T[K]> : T[K]
}
type UserInfoOptions = DeepPartial<UserInfo>

// Required 定义参数必须
type UserInfo2 = Required<UserInfoOptions>

// Record 定义对象
type UserInfo3 = Record<'name' | 'tel', string>

// Pick 从前面的提取指定的属性
type UserInfo4 = Pick<UserInfo, 'name' | 'age'>

// Omit 从前面的删除指定的属性
type UserInfo5 = Omit<UserInfo, 'name' | 'age'>

// Exclude 过滤出前面独有的属性
type UserInfo6 = Exclude<'name' | 'tel', 'name' | 'age'>

// Extract 提取两边相交的属性
type UserInfo7 = Extract<'name' | 'tel', 'name' | 'age'>


type SumFun = (a: number, b: number) => number
const sum: SumFun = (a, b) => a + b
type SumParamType = paramType<SumFun> // [a: number, b:number]
type SumParamType2 = Parameters<SumFun>

type SumReturnType = ReturnType<typeof sum> // number
interface Animal {
  eat(): void
}

interface Dog extends Animal {
  bite(): void
}
const dog: Dog = {
  eat() { },
  bite() { }
}
const animal: Animal = dog


// distributive conditional types
type A2 = 'x' | 'y' extends 'x' ? string : number // number
type A3<T> = T extends 'x' ? string : number
