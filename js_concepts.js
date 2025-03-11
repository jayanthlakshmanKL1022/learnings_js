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
console.log(my_car.name)
console.log(my_car.year)
//constructors are functions similar to the name of the class..........
//y this? y not local variable.....
//this.instance <---> //local variables disappear after constructor finish excecution...   
//***** */ 
//concept of spread operator represented by ...
const arr=['buffalo','ox','fish','urchin']
const[animal1,animal2,...animal3]=arr
console.log(animal1)
console.log(animal2)
console.log(animal3)
const pages=10200
const range=pages>1000?"over a thousand":'not less than 1000'
console.log(range)
//?? nullish collasence operator will take place if the first operation is null or undefined......
//.map
var arrays=[1,2,3,4,5,6]
const x=arrays.map(arrays=>arrays*2)
const y=arrays.map(arrays=>arrays*3)
console.log(x)
console.log(y)
//it creates an array with the same number of elements and changes the functionality assosciated with each element that are present .

var numericArray=[10,20,30,40,50,60,70,80,90,100]
const filteredElements=numericArray.filter(checknum)
function checknum(n)
{
    return n>=50;
}
console.log(filteredElements)
//filters the array based on specific condition..........
//filters are very important in javascript
//reduce methhods......
var a=[1,2,3,4,5,6,7,8,9]
const b=a.reduce((acc,a)=>acc+a,0)
console.log(b)
//reduce method is being used.....>
var arrayNumbers1=[1,2,3]
var arrayNumbers2=[4,5,6]
var arrayNumbers3=[...arrayNumbers1,...arrayNumbers2]//spread operator very useful for updation.....
console.log(arrayNumbers3)

//Arrow functions are one of the most important js concepts........
let myFunction=(a,b)=>
{
    return a+b;
}
let d=myFunction(3,4)

console.log(d)
console.log(this)
//strict mode is another important concept with regard to JS,it plays an important role with regard to it,with regard to constructors it behave as instance 
//with regard to function it refers that variable in a function....

//js hoisting is another important concept in js
//a variable can be used,before it has beem declared ,this is  called as hoisting,,
///now let us understand it with the help of the variables
console.log(hostEg)
var hostEg=1
//undefined it occurs......
// console.log(hostEg1)
// let hostEg1='sdwd'

// //SCOPES IN JS
// //the scopes are global scope and block scope

var globalScope=10
{
    console.log(globalScope)
}
console.log(globalScope)
// {
//     let blockScope=100
//     console.log(blockScope)
// }
// console.log(blockScope)//very important it throws out error
//lifetime of js variables//when it is a function the lifetime ends when we close the function...
//lifetime of a global variable ends when we close the window that is present
//precedence of js bdmas(bracket,power,division,multiplication,addition and subtraction)

//regex patterns are very important in js,it checks whether it matches a particular pattern or not....
//pattern.match(e)
//e is a string 
//pattern is the regex pattern that has been defined in the context.
//DESTRUCING IS ANOTHER IMPORTANT CONCEPT ASSOSCIATED WITH JAVASCRIPT
const example={
    name:"jayanth",
    age:"22"
}
const{name,age}=example
console.log(name)
console.log(age)
//*********************************** */

let firstName = "jayanth";
let lastName = "ben";
[firstName, lastName] = [lastName, firstName];

console.log(firstName);  // Output: "ben"
console.log(lastName);   // Output: "jayanth"
//type conversions 
console.log(Number(true))
console.log(Number(false))
let experiment=false.toString()
console.log(typeof experiment)

//hashmap is another important js concept which is assosciated with key value pairs that are present
const fruits=new Map();
fruits.set("bananas",500);
fruits.set("apples",400);
console.log(fruits.get("bananas"))//very important js concept...
//practical examples -->obtaining frequency
console.log(fruits.size)
//delete is a function,which is used to delete a key...
fruits.delete("bananas")
console.log(fruits.size)
console.log(fruits.keys())

//set is another important concept assosciated with js
const mySet=new Set(["a","b","c"])
mySet.add("d")
console.log(mySet)
//no repitions or  duplictates are allowed in set
const mySet1=new Set(["a","b","c","c"])
console.log(mySet1)
console.log(mySet1.has("a"))
//math.random()-->returns a randon number between 0 and 1
//important functions:min and max
console.log(Math.min(2,345,24,1))
console.log(Math.max(2,345,24,1))

//map function in js

const arrNumbers=[1,2,3,4,5,7,8,9,10]
// const filteredNumbers=arrNumbers.map(function(cv,i,a)
// {
//  console.log(a)
//  if(i===3)
//  {
//     return;
//  }
//  return cv=cv+3
// })
// console.log(filteredNumbers+"ghjk")

const num123=arrNumbers.reduce((a,b)=>a+b,0);
console.log(num123)
