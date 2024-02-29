//value and varible
var hello="hi"
console.log(hello);

//reules of creating variable

//var 6$_hello="hi"
//console.log(6$_hello);

var ha_$_hello="hello"
console.log(ha_$_hello);

var myname="jsp"
console.log(myname);

var hiiiiiiiiiiiiiiiiiiiiiiiiiii="bye"
console.log(hiiiiiiiiiiiiiiiiiiiiiiiiiii);

//var var="hi"
//console.log(var);

var _1my_Name="b"
console.log(_1my_Name);


//var 1myName="pranoti"
//console.log(1myName);

//var $myName="pranoti"
//console.lof($myName);

var _myName="rohan"
console.log(_myName);

var _1my_Name="b"
console.log(_1my_Name);


//Datatype
//1.undefine
//difference between null and undefine______________________________________________________________________
var a;
console.log(a);

var n=null;
console.log(n);

//boolean
var b=false;
console.log(b);

//number
var hi=20;
console.log(hi);

//string
var c="hiii";
var d='hello';
console.log(c);
console.log(d);

//BigInt
var as=82746875603650928738648756834983n;
console.log(as);


// Nan--> Not a number

console.log(NaN);
console.log("Banglore"/100);

//isNan---> chect whether output is NaN or not NaN
//if output is NaN isNaN result is true
// if output is proper number isnaN result is false
console.log(isNaN(200/5));   //false
console.log(isNaN("Banglore"/100));  //true


//Arithmetic operator
var a=20;
var b=40;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Increment operator
//it will increase the value by one unit

var w=10;
//pre increment--> increase and do operation
console.log(++a);

//post increment--> operation and then increase
console.log(a++);
console.log(a);

//Decrement Operator

//pre increment -->
console.log(--w);
//post increment
console.log(w--);

//console.log(-------------------------------------------------------------);

//comparision operator

var n1=20;
var n2=30;

console.log(n1<n2);
console.log(n2>n1);
console.log(n1<=n2);
console.log(n2>=n1);
console.log(n1!=n2);

//== -> check only the value not the datatype
var a=true;
var b=1;
console.log(a==b);

//=== -> check value along with datatype

console.log(a===b);




//logical operator
//AND(&&) , OR(||), NOT(!)

//AND(&&) --> multiplication
 
//a b a * b
//0 0  0
//0 1  0
//1 0 0
//a 1 1


//or(||)--> addition
//a b a + b
//0 0  0
//0 1  1
//1 0 1
//1 1 1

//not (!)-->opposite
// a-->1
// 1-->0

//And(&&)
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
