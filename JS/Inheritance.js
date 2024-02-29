//inheritance
//one class inherits the properties of another class is called as inheritance
//Super class : A class from which properties are inherited 
//Sub class : A class which inherits the poperties of another class
// extends is the keyword used to achieve inheritance


class Vehicle
{
    setName(name,speed)
    {
        this.name=name;
        this.speed=speed;
    }

    startEngine()
    {
        console.log("engine is started"+this.name);
    }
    stopEngine()
    {
        console.log("engine is stopped"+this.name);
    }
}
class car extends Vehicle
{
    
    topSpeed()
    {
        console.log("top speed for "+this.name +"is"+this.speed);
    }

}
var myCar=new car();
myCar.setName("kia,123");
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed();