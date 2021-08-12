import { type } from "node:os";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt?: number;
  [property: string]: string | boolean | number;
}
type TodoPreview = Omit<Todo, "title">;
let a: Todo = { title: "", description: "", completed: false, createdAt: 1, price: 22 }

interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number;
}
let tom: Person = { name: 'Tom', age: 25, gender: 'male' };

interface result {
  code: number;
  data: object;
}

interface Point {
  x: number;
  y: number;
  z: number;
}

class MyPoint implements Point{
  x: number;
  y: number;
  z: number;
}


enum HttpRequestKeyEnum {
  'Accept',
  'Accept-Charset',
  'Accept-Datetime',
  'Accept-Encoding',
  'Accept-Language',
}

type HttpRequestKey = keyof HttpRequestKeyEnum;
  // = 'Accept' | 'Accept-Charset' | 'Accept-Datetime' |
  //   'Accept-Encoding' | 'Accept-Language'
// console.log(HttpRequestKey)
// function getRequestHeaderValue(request: Request, key: HttpRequestKey) {
//   // ···
// }


const data = {
  value: 123,
  text: 'text',
  subData: {
    value: Promise.resolve()
  }
};

type Data = typeof data;

// type DateOptional = DeepPar<Data>
type par<T> = {
  [P in keyof T]?: T[P]
}
type DateOptional = par<Data>
// type Data = {
//   value: number;
//   text: string;
//   subData: {
//     value: boolean;
//   };
// }
