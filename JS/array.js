//array--->
//--->array are heterogenious in js ie can store any datatype elements
//--> array are group of elements with different datatype

 var arr=[24,"hi",true,50,"hello"]
//index  0    1   2   3     4
//elemwnt1    2   3   4     5
console.log(arr);

//length--> helps to find size of the array
var arr=[24,"hi",true,50,"hello"]
console.log(arr.length);

//push--> add element to end of the array
var arr=[24,"hi",true,50,"hello"]
console.log(arr.push(300));
console.log(arr);

//pop---> helps to remove the elements present at the end of the array
var arr=[24,"hi",true,50,"hello"]
console.log(arr.pop());
console.log(arr);

//unshift-->helps to shift the elements to the starting of the array
var arr=[24,"hi",true,50,"hello"]
console.log(arr.unshift());
console.log(arr);


//shift--> helps to remove elements from end of array
var arr=[24,"hi",true,50,"hello"]
console.log(arr.shift());
console.log(arr);


//reverse--> helps to reverse the elements
var arr=[24,"hi",true,50,"hello"]
console.log(arr.reverse());

//splice
var arr=[24,"hi",true,50,"hello"]
//       0   1    2   3    4
console.log(arr.splice(2,3,39099,"hey","bye"))
console.log(arr);

//slice
var arr=[24,"hi",true,50,"hello",34,"hiiii"]
//        0   1   2    3    4    5    6
console.log(arr.slice(1,3));
console.log(arr.slice(3,6));



//sort
var array=[12,34,5,23,5,76,875,8,32,15,36,45]
var check=array.sort(function(a,b){

return a-b;   //assending
//return b-a;  //decending
})
console .log(array);