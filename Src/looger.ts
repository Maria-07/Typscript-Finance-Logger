const myName = "Mario";
console.log(myName);

const values = document.querySelectorAll("input");
console.log(values);

values.forEach((input) => console.log(input));

const circ = (diameter: number) => {
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
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 20;

//arrays
let ninjam: string[];
ninjam = [];
ninjam.push("maria");

//union type
let mixed2: (string | number)[] = [];
mixed.push("hula");
mixed.push(123);

let uid: string | number;

uid = "23";
uid = 125;

//any type

let roll: any = 25;
roll = true;
roll = "efd";
roll = { name: "yan" };

let anyArray: any[] = [];
let person: { name: string; year: number; id: any };

//function

let sweet: Function;
sweet = () => {
  console.log("hi");
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(5, 6);

//Type Aliases

type num = number;
type str = string;
type numStr = number | string;
type objStd = { name: str; uid: numStr };

const greet = (a: num, b: num) => {
  console.log(a - b);
};

//////function  Signature

// let lina: Function;

// ex:1
let lina: (a: str, b: str) => void;

lina = (name: str, greeting: str): void => {
  console.log(`${name} says that ${greeting}`);
};

// ex:2
