"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = { title: "", description: "", completed: false, createdAt: 1, price: 22 };
var tom = { name: 'Tom', age: 25, gender: 'male' };
var MyPoint = /** @class */ (function () {
    function MyPoint() {
    }
    return MyPoint;
}());
var HttpRequestKeyEnum;
(function (HttpRequestKeyEnum) {
    HttpRequestKeyEnum[HttpRequestKeyEnum["Accept"] = 0] = "Accept";
    HttpRequestKeyEnum[HttpRequestKeyEnum["Accept-Charset"] = 1] = "Accept-Charset";
    HttpRequestKeyEnum[HttpRequestKeyEnum["Accept-Datetime"] = 2] = "Accept-Datetime";
    HttpRequestKeyEnum[HttpRequestKeyEnum["Accept-Encoding"] = 3] = "Accept-Encoding";
    HttpRequestKeyEnum[HttpRequestKeyEnum["Accept-Language"] = 4] = "Accept-Language";
})(HttpRequestKeyEnum || (HttpRequestKeyEnum = {}));
// = 'Accept' | 'Accept-Charset' | 'Accept-Datetime' |
//   'Accept-Encoding' | 'Accept-Language'
// console.log(HttpRequestKey)
// function getRequestHeaderValue(request: Request, key: HttpRequestKey) {
//   // ···
// }
var data = {
    value: 123,
    text: 'text',
    subData: {
        value: Promise.resolve()
    }
};
// type Data = {
//   value: number;
//   text: string;
//   subData: {
//     value: boolean;
//   };
// }
