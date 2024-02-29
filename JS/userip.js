//user input

"use strict";

const ps=require("promt-sync");
const promt=ps();

let var1=promt("enter value of a: ");
let var2=promt("enter value of b: ");
let res=var1*var2;
console.log(res);