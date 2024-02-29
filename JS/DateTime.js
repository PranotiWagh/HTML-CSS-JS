//date method

var date=new Date();

//get method----> we can only get the value but can't update the value

var month=date.getMonth();
var year=date.getFullYear();
var date1=date.getDate();
var day=date.getDay();
//var time=date.getTime();

console.log(month,year,date1,day);


//set method---> to update the value

var d=new Date();
d.setDate(20);
d.setFullYear(2023);
d.setMonth(4);
console.log(d);