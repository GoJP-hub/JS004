"use strict";
const str = "Hello";
const num = 1;
const isB = true;
const arr = [1, 2, 3];
const tup = [1, "hello"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
const red = Color.Red;
const obj = { key: "value" };
const obj2 = { 1: "1" };
let lit = 'str is ${str}';
let assmpt = "hello";
let newAssmpt = assmpt;
let add;
add = (x, y) => {
    return x + y;
};
class Animal {
    constructor(name) {
        // インターフェイス対応
        this.myAge = 1;
        this._name = name;
    }
    age() { this.myAge++; }
    ;
    ;
    move(distanceInMeter = 0) {
        console.log("Animal moved ${distanceInMeter} meter.");
    }
    get name() { return this._name; }
    ;
    set name(name) { this._name = name; }
    ;
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
        console.log('My name is ' + this.name);
    }
}
const dog = new Dog("Taro");
dog.bark;
dog.move(10);
// console.log(dog._name); 変数を呼び出している
console.log(dog.name); // ゲッターを呼び出している
