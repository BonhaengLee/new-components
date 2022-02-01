// 객체 리터럴
// const ob = {
//   _name: "foo",
//   setName(name) {
//     this._name = name;
//   },
//   getName() {
//     return this._name;
//   },
// };

// export const { getName } = ob;

// 생성자 함수
export function ob() {
  this._name = "foo";
}

ob.prototype.getName = function () {
  return this._name;
};

// 클래스
// export default class ob {
//   #name;

//   constructor() {
//     this.#name = "foo";
//   }

//   getName() {
//     return this.#name;
//   }
// }
