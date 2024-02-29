//ECMA SCRIPT-->European computer manufactures association
//Difference between var,let and const

//var-->function scope
if(true)
{
    var a=10;
    console.log(a);
}
console.log(a);


//let -->block scope
if(true)
{
    let a=50;
    console.log(a);
}
//console.log(a); a of first if is printed

//const--> block scope
if(true)
{
    const a=30;
    console.log(a);
}
//console.log(a); a of first if is printed

//difference between let and const

//let-->redeclaratio is not possible reinitilization is possible
//let a=50;
  //  a=100;
//console.log(a);

//const--->redeclaration and redirection both are not possible
const b=40;
    //  b=90;
console.log(b);

//var-->redeclaration and reinitilization both are possible
var c=40;
var c=23;
console.log(c);

