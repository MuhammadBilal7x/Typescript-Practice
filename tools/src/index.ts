import { sum } from "./calc";

let printMessage = (msg:string) : void=> console.log(`Message = ${msg}`)

let message = ("Hello, Typescript");
printMessage(message);

let data = new Map();
data.set("Alice", "Los Angeles");
data.set("Edward", "California");
data.forEach((val,key) => console.log(`${key} lives in ${val}`));

let total = sum(100,200,300);
console.log(`Sum = ${total}`)
