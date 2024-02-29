var a=10;
var b=20;
var c=30;
console.log(a>b && a>c);
// 10>20 10> 30
// f       f   ---> f

console.log(b>a && b>c);
// 20>10   20>30
//  t        f  ----->f

console.log(c>a && c>b);
// 30>10 30>20
//  t     t ----> t

//not
var a=50;
var b=100;
console.log(a<b);
// 50<100--->t
console.log(!(a<b));
// !(50<100)----> f



//string operator
var a="hello";
var b="hii";
console.log(a);
console.log(b);