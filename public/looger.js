"use strict";
const myName = "Mario";
console.log(myName);
const values = document.querySelectorAll("input");
console.log(values);
values.forEach((input) => console.log(input));
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(256));
//Array
let names = ["lungi", "mario", "yan"];
names.push("rio");
// names.push(45);
console.log(names);
let numbers = [12, 343, 55, 342];
// numbers.push("sddsfd");
numbers.push(33);
let mixed = ["mario", 343, 565, "hiu"];
mixed.push("dio");
mixed.push(23);
mixed[0] = 3;
//objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
ninja.age = 40;
ninja.name = "ryan";
// ninja.age = "re";
//explicit types
let character;
let age;
let isLoggedIn;
age = 20;
//arrays
let ninjam;
ninjam = [];
ninjam.push("maria");
//union type
let mixed2 = [];
mixed.push("hula");
mixed.push(123);
let uid;
uid = "23";
uid = 125;
//any type
let roll = 25;
roll = true;
roll = "efd";
roll = { name: "yan" };
let anyArray = [];
let person;
