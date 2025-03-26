
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


var Newuser = { name: "Alice", age: 25, city: "New York" }
delete(Newuser.name)
console.log(Newuser)

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

//grouping based on the category that is present in it.
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
function greet(message1,message2)
{
    console.log(`${message1}`+" "+message2)
}
greet.call(null,"hi","How are you?")//no object is being used

person1={name:'jayanth'}
function greet2(message1,message2)
{
    console.log(`${message1}`+" "+message2)
    console.log(this.name)
}
greet2.apply(person1,["hi","How are you?"])
//this is the main usage of appy ,apply and call are similar to each other apply is used in passing arguments as array,where call is just used in pasing args 
//bind borrowing or fnction reusabilty
var myName={
firstName:'jay',
lastName:'anth',
fullName:function()
{
    return this.firstName+this.lastName
}
}
var member={
firstName:'jasxsy',
lastName:'anth',
}
var solution=myName.fullName.bind(member)
//bind return a new function and accesing it by () is correct otherwise reference will be printed in it....
console.log(solution())
//THIS IS THE RESULT THAT IS PRESENT.
const obj = { name: "Alice", age: 30 };
const newObj={}
var i=0
for(let[key,value] of Object.entries(obj))
{
    const swapObj={[value]:key}
    newObj[i]=swapObj
    i++
}
var solution=Object.values(newObj)
console.log(solution)

const settingsArray = [["theme", "dark"], ["notifications", false], ["language", "English"]];
console.log(Object.fromEntries(settingsArray))

const bankConfig = { maxWithdrawal: 5000, currency: "USD", interestRate: 3.5 };
Object.freeze(bankConfig)
console.log(Object.isFrozen(bankConfig))

function calculateTax(rate) {
    return this.salary * rate;
  }
  
  const employee1 = { name: "Alice", salary: 50000 };
  const employee2 = { name: "Bob", salary: 70000 };

  const totalAmount1=calculateTax.apply(employee1,[12])
  console.log(totalAmount1)

  const totalAmount2=calculateTax.apply(employee2,[12])
  console.log(totalAmount2)
  //using apply function and calculating the tax.
  const chatbot = {
    name: "SupportBot",
    reply(message) {
      console.log(`${this.name}: ${message}`);
    }
  };
  
  var person1={name:"jayanth"}

  const fullMessage=chatbot.reply.bind(person1,"How can i assist you?")
fullMessage()

function calculateBill(tax, tip) {
    return `Total bill for ${this.name}: $${this.amount + tax + tip}`;
  }
  
  const customer1 = { name: "Alice", amount: 50 };
  const customer2 = { name: "Bob", amount: 80 };
  
var totalBill1=calculateBill.call(customer1,12,12)
var totalBill2=calculateBill.call(customer2,12,12)
console.log(totalBill1)
console.log(totalBill2)
//totalBill of 1 and 2 are present.
const myUser = { username: "johndoe", email: "john@example.com" };
arr=["username","email","password"]
var flag=0

console.log(arr)

for(let properties of arr)
{
    if(!myUser.hasOwnProperty(properties))
    {
        console.log("No proper authentication status")
        flag=1
    }
}
if(flag===0)
{
    console.log("Proper authentication status has been ensured and it is present!")
}

const students123 = {
    Alice: { marks: 85 },
    Bob: { marks: 35 },
    Charlie: { marks: 50 },
    David: { marks: 20 },
    Eve: { marks: 75 }
  };
  const passedStudents = Object.fromEntries(
    Object.entries(students123).filter(([name, details]) => details.marks > 50)
  );
  console.log(passedStudents);
  

const students = {
    Alice: { marks: 85 },
    Bob: { marks: 35 },
    Charlie: { marks: 50 },
    David: { marks: 20 },
    Eve: { marks: 75 }
  };
  myObj={}
  for(let[key,value] of Object.entries(students))
  {
    if(value.marks>50)
    {
        myObj[key]=value
    }
  }
  console.log(myObj)
  const students5= {
    Alice: { marks: 85 },
    Bob: { marks: 35 },
    Charlie: { marks: 50 },
    David: { marks: 20 },
    Eve: { marks: 75 }
  };
  var highest=0;
  var high={}
  for(let[key,value] of Object.entries(students5))
  {
    if(value.marks>highest)
    {
        highest=value.marks
        high={name:key,marks:value.marks}
    }
  }
  console.log(high)
  
  const students45 = {
    Alice: { grade: "A" },
    Bob: { grade: "B" },
    Charlie: { grade: "A" },
    David: { grade: "C" },
    Eve: { grade: "B" },
    Frank: { grade: "A" }
  };
   
  gradeMap=new Map();
  var i=1
  for(let[key,value] of Object.entries(students45))
  {
    if(gradeMap.has(value.grade))
    {
        var i=gradeMap.get(value.grade)
        gradeMap.delete(value.grade)
        gradeMap.set(value.grade,i+1)
    }
    else{
        gradeMap.set(value.grade,i)
    }
}
var newObj1={}
for(let[key,value] of gradeMap)
{
   newObj1[key]=value
}
console.log(newObj1)
  

const students34 = {
    Alice: { marks: 85 },
    Bob: { marks: 92 },
    Charlie: { marks: 78 },
    David: { marks: 88 }
  };
  
  // Convert object to array and sort based on marks
  const sortedStudents = Object.entries(students34)
    .sort((a, b) => b[1].marks - a[1].marks);
  console.log(sortedStudents);

newArr=[]
for(let[key,value] of Object.entries(students34))
{
    newArr.push(value.marks)
}
console.log(newArr)
const uniqueAndSorted=new Set(newArr)
const sorted=[...uniqueAndSorted].sort().reverse()
console.log(sorted)
var high=sorted[0]
var secondhigh=0;
for(var i=0;i<sorted.length;i++)
{
    if(sorted[i]===high)
    {
        continue;
    }
    else{
        secondhigh=sorted[i]   
        break
    }
}
console.log(secondhigh)
for(let[key,val] of Object.entries(students34))
{
    if(val.marks===secondhigh)
    {
        console.log(key)
    }
}

const students1 = {
    Alice: { marks: 85 },
    Bob: { marks: 92 },
    Charlie: { marks: 78 }
  };

  const students2 = {
    Bob: { marks: 88 },
    David: { marks: 80 },
    Eve: { marks: 90 }
  };

  for(let[key,value] of Object.entries(students1))
  {
    console.log(value)
    if(students2.hasOwnProperty(key))
    {
        if(value.marks>Object.entries(students2[key].marks))
        {
            students2[key].marks=value.marks
        }
    }
   }
   console.log(students2)
   const mynewObj=Object.assign({},students1,students2)
   console.log(mynewObj)


   const students9 = {
    Alice: { marks: 85 },
    Bob: { marks: 35 },
    Charlie: { marks: 50 },
    David: { marks: 20 },
    Eve: { marks: 75 }
  };

  failedStudents=[]
  for(let[key,val] of Object.entries(students9))
  {
    if(val.marks<40)
    {
        failedStudents.push(key)
    }
  }
  console.log(failedStudents)
  //the students who are failed in the given test.....
  const students43 = {
    Alice: { marks: 85 },
    Bob: { marks: 92 },
    Charlie: { marks: 78 },
    David: { marks: 88 },
    Eve: { marks: 190 },
    Frank: { marks: 70 }
  };
studentMarks=[]
for(let[key,value] of Object.entries(students43))
{
    studentMarks.push(Number(value.marks))
}
studentMarks.sort((x,y)=>y-x)
console.log(studentMarks)
var top3Marks=[]
var k=0
for(var i=0;i<studentMarks.length;i++)
{
    if(k===3)
    {
        break;
    }
    if(!top3Marks.includes(studentMarks[i]))
    {
        top3Marks.push(studentMarks[i])
        k++;
    }
}
console.log(top3Marks)

const students23= {
    Alice: { marks: 85 },
    Bob: { marks: 92 },
    Charlie: { marks: 78 },
    David: { marks: 45 },
    Eve: { marks: 50 },
    Frank: { marks: 95 }
  };
  
  gradeMap2=new Map()
  var k=0,z=0;
  for(let[key,value] of Object.entries(students23))
  {
    if(value.marks>90)
    {
        if(gradeMap2.has("A"))
        {
            var l=gradeMap2.get("A")
            gradeMap2.delete("A")
            gradeMap2.set("A",l+1)
        }
        else{
        gradeMap2.set("A",1)}
    }
    else if(value.marks<=89&&value.marks>=75)
    {
        if(gradeMap2.has("B"))
        {
            var m=gradeMap2.get("B")
            gradeMap2.delete("B")
            gradeMap2.set("B",m+1)
        }
        else
        {
        gradeMap2.set("B",1)
        }
    }
    else if(value.marks<=74&&value.marks>=50)
        {
            if(gradeMap2.has("C"))
            {
                var n=gradeMap2.get("C")
                gradeMap2.delete("C")
                gradeMap2.set("C",n+1)
            }
            else{
            gradeMap2.set("C",1)}
        }
        else{
            if(gradeMap2.has("D"))
                {
                    var o=gradeMap2.get("D")
                    gradeMap2.delete("D")
                    gradeMap2.set("D",o+1)
                }else{
                gradeMap2.set("D",1)
                }
        }
  }
  console.log(gradeMap2)

  //Problems for Objects.
  const people = [
    { name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Eve", age: 25 }
  ];
  const groupByAges=Object.groupBy(people,item=>item.age)
  console.log(groupByAges)

  cleanObject={ a: 1, b: "", c: null, d: "Hello" };
  for(let[key,value] of Object.entries(cleanObject))
  {
    if(value===""||value===null)
    {
      const ap=[key]
      console.log(ap)
    
    }
  }
  console.log(cleanObject)

  //changing the key to camelCases that are present.
  const obj12 = { "first_name": "Alice", "last_name": "Smith" };
  var newObj1={}
  for(let[key,value] of Object.entries(obj12))
  {
    arr=key.split("_")
    var partOfString=arr[1]
    var secondHalf=partOfString[0].toUpperCase()+partOfString.slice(1,4)
    console.log(secondHalf)
    var n=arr[0]+secondHalf
    newObj1[n]=value
  }
  console.log(newObj1)
  //this is very important...
  const obj654= {
    name: "Alice",
    profession: "Engineer",
    location: "New York City",
    experienceYears: 5
  };
  var high=0;
  for(let[key,val]of Object.entries(obj654))
  {
   a=[key.length]
    if(a>high)
    {
        high=key.length
    }
  }
console.log(high)

//ADDING THE VALUES IF THEY ARE FOUND TO BE COMMON.
const obj122 = {
    apples: 3,
    bananas: 2,
    oranges: 5
  };
  
  const obj22= {
    bananas: 4,
    oranges: 3,
    grapes: 7
  };

  for(let[key,val]of Object.entries(obj22))
  {
    if(obj22.hasOwnProperty([key]))
    {
        obj22[key]=val+obj22[key]
    }
  }
  console.log(obj22)
Object.assign(obj122,obj22)
console.log(obj122)
//done it ....if they are found common addition is done in it,otherwise it is left as it is.
//very useful 
getKeysAndValues=
{ name: "Alice", age: 25, city: "Wonderland" };
keys=[]
values=[]

for(let[key,value]of Object.entries(getKeysAndValues))
{
    keys.push(key)
    values.push(value)
}
console.log(keys)
console.log(values)

