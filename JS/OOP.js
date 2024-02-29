//OOP
//Object --> entity which has state and behaviour

var Person={
    name:"pranoti",
    age:21,
    gender:"female",
    qualification:"BE"
}
console.log(Person.name);
console.log(Person.age);
console.log(Person.gender);
console.log(Person.qualification);



//class in javascript
class User{
    constructor(firstname,lastname,rollno)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.rollno=rollno;
    }
    
    getFullName()
    {
        return `${this.FirstName} ${this.LastName} is my full name`
    }
}
var res=new User("Pranoti","Wagh",20)
console.log(res);
console.log(res.getFullName());



//Template String
function x()
{
    return `hello ${user}`
}
var user="JSP"
console.log(x());
