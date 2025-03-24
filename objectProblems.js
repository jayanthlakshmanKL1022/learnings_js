
const _ = require('lodash');
const prompt = require('prompt-sync')();
const obj1 = { name: "Jayanth", age: 25 };
const obj2 = { profession: "Developer", location: "India" };
const obj3 = { age: 26, skills: ["React", "Node.js"] };

//1.combining via object.assign
const newObject=Object.assign({},obj1,obj2)
console.log(newObject)

//2.Merging all the objects that are present...
var mergeAllObjects=Object.assign(obj1,obj2,obj3)
console.log(mergeAllObjects)

const userProfile = {  
    name: "Jayanth",  
    age: 25,  
    profession: "Developer",  
    location: "India"  
  };
  
  const updates = {  
    age: 26,  
    skills: ["React", "Node.js"],  
    location: "Remote"  
  };
console.log(Object.assign(userProfile,updates))  
const employee = { id: 101, name: "Jayanth", department: "Engineering" };  
const additionalDetails = { position: "Software Engineer", location: "India", department: "Development" };  

console.log(Object.assign(employee,additionalDetails))  
//if we dont want to modify things we can do it in a {}
const product = { id: 1, name: "Laptop", price: 1000, stock: 50 };
const saleUpdate = { price: 900, stock: 30, discount: "10%" };
const updatedProduct=Object.assign({},product,saleUpdate)
//done without modifying the product
console.log(updatedProduct)
//problems solved are based on object.assign and merging objects and cloning the objects.

//creating them via key value pair
const user = { name: "Jayanth", age: 25, profession: "Developer", location: "India" };
const pairs=Object.entries(user)
console.log(pairs)

const salaries = { Alice: 50000, Bob: 60000, Charlie: 70000 };
for(let [key,value] of Object.entries(salaries))
{
    console.log(`${key}`+" "+"earns"+" "+`${value}`+" "+"per year")
}

const products = { Laptop: "Available", Phone: "Out of Stock", Tablet: "Available", Monitor: "Out of Stock" };
//filtering an object based on the status of availability
var availableProducts={}
var myMap=new Map()
for(let[key,value] of Object.entries(products))
{
    if(value==='Available')
    {

        myMap.set(key,value)
    }
    else{
        continue;
    }
}
console.log(myMap)
availableProducts=Object.fromEntries(myMap)
console.log(availableProducts)

const queryParams = { search: "laptop", category: "electronics", sort: "price" };
var objectToString=""
for(let [key,value] of Object.entries(queryParams))
{
    objectToString=objectToString+key+value
}
console.log(objectToString)

const sentence = "apple banana apple orange banana apple orange orange";
var amap=new Map();
var k=1
mySentence=sentence.split(" ")
for(var i=0;i<mySentence.length;i++)
{
    console.log(mySentence[i])
    if(amap.has(mySentence[i]))
    {
        var k=amap.get(mySentence[i])
        amap.delete(mySentence[i])
        amap.set(mySentence[i],k+1)
    }
    else{
        amap.set(mySentence[i],k)
        
    }
}
console.log(amap)

const leaderboard = {  
    Alice: 120,  
    Bob: 150,  
    Charlie: 90,  
    David: 200  
  };

const leaders=(Object.entries(leaderboard).sort((a,b)=>b[1]-a[1]))
console.log(leaders)

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
car.year=2024;
car.color="blue"

console.log(car)

let students = [
    { name: "John", grade: 85 },
    { name: "Emma", grade: 92 },
    { name: "Liam", grade: 78 }
];

markAbove80=[]
for(let student of students)
{
    if(student.grade>80)
    {
        console.log(student.name)
        console.log(student.grade)
        obj={name:student.name,grade:student.grade}
        markAbove80.push(obj)
    }
}
console.log(markAbove80)

var Newuser = { name: "Alice", age: 25, city: "New York" }
delete(Newuser.name)
console.log(Newuser)

// var question=prompt("Enter a property to check for its existence:")
// if(Newuser.hasOwnProperty(question))
// {
//     console.log("The property exists there!")
// }
// else{
//     console.log("The property do not exist!")
// }

//convert an array into an object
let arr = [["name", "Alice"], ["age", 25], ["city", "New York"]];
const result=Object.fromEntries(arr)
console.log(result)

let map1 = new Map([
    ["id", 101],
    ["title", "JavaScript Basics"],
    ["price", 30]
]);
resObj={}
var i=0
for(let[key,value]of map1)
{
   const keyValue={[key]:value}
   resObj[i]={[key]:value}
   i++
}
console.log(Object.values(resObj))
//us
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using the groupBy in js
var evenOrOdd=Object.groupBy(numbers,(numbers)=>numbers*2)
console.log(evenOrOdd)

let orders = [
    { orderId: 101, status: "pending" },
    { orderId: 102, status: "shipped" },
    { orderId: 103, status: "delivered" },
    { orderId: 104, status: "pending" },
    { orderId: 105, status: "shipped" }
];
var groupByStatus=Object.groupBy(orders,({status})=>status)
console.log(groupByStatus)

let words = ["apple", "banana", "cat", "dog", "elephant"];
var myGroup=Object.groupBy(words,(words)=>words.length)
console.log(myGroup)

let products1 = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 30 },
    { name: "Keyboard", price: 80 },
    { name: "Monitor", price: 250 }
];

var i=0
for(let[key,value] of Object.entries(products1))
{
    console.log(key)
    console.log(value)
    if(value.price>500)
    {
        value.category="expensive"
    }
    else if(value.price<50)
    {
          value.category="cheap"
    }
    else{
          value.category="Affordable"
    }

}
console.log(products1)

const groupByCategory=_.groupBy(products1,item=>item.category)
console.log(groupByCategory)
const finalResult=_.mapValues(groupByCategory, group => group.map(item =>{
    return{
        name:item.name,
        price:item.price
    }
}))
console.log(finalResult)

//the difference between frozen and sealed is that in frozen nothing cannot be modified or updated ,but in sealed modifications are done
//but deletions are not possible