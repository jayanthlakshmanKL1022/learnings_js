var a='{"employeename":"jayanth"}'
const obj=JSON.parse(a)
console.log(obj)
//it is used to convert strings into objects 
//<modules-->declare using export and then import them.........>
class car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
}
const my_car=new car("jayanth",2002)
console.log(my_car.name1)
//constructors are functions similar to the name of the class..........

//y this? y not local variable.....
//this.instance <---> //local variables disappear after constructor finish excecution...    