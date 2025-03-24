const { groupBy } = require("lodash")

//Object.assign is a method used in js,which is used to copy multiple source values to a target-value that is present
const a={b:'3'}
const b={b:'1'}
const c={c:'1'}
const target=Object.assign({},c,b)
console.log(target)


//creating an object for personal Details.
const personalDetails={
    name:'jayanth',
    email:'jayanth@gmail.com'
}
//creating a copy of the personalDetails that are present.
const copyPersonalDetails=Object.assign({},personalDetails)
console.log(copyPersonalDetails)


//Inorder to access the properties we can access use them using .operator and then could possibly print or change
copyPersonalDetails.name="king"
console.log(copyPersonalDetails)

//Accessing via dot operator and then printing it.
console.log(copyPersonalDetails.email)
//merging objects
var object1={a:'1',b:'2'}
var object2={b:'3'}
var object3={c:'3'}
var object4=Object.assign(object1,object2,object3)
console.log(object4)

const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

const obj12 = Object.create(
    // foo is on obj's prototype chain.
    { foo: 1 },
    {
      bar: {
        value: 2, // bar is a non-enumerable property.
      },
      baz: {
        value: 3,
        enumerable: true, // baz is an own enumerable property.
      },
    },
  );
  
  const copy = Object.assign({}, obj12);
  console.log(copy); // { baz: 3 }
  
  const original = { 
    name: "Mike", 
    address: { city: "New York", zip: "10001" }
  };
  
  const copy1 = Object.assign({}, original);
  copy1.address.city = "Los Angeles";
  
console.log(original.address.city); 
const ab= Symbol('foo');
const cd= Symbol('foo');
console.log(ab==cd)

//object.entries-->we have entries in objects where each key is assosciated with  a value that is present
//This is used inorder to iterate through it..........
const obj2={
  name:'jai',age:'24',
}
const my_obj={}
for(const[key,value] of Object.entries(obj2))
{
 console.log(key)

}
console.log(my_obj)
//well we can convert an object into map by using object.entries
const abc={
  one:'jai',
  two:'kl'
}
const result=new Map(Object.entries(abc))
console.log(result)
//can be used if conversions are necessary
//object.fromEntries creates a list of key,value pairs that are present.
//object.fromEntries is used to get or extract the key,valuepairs from the map in js

const testMap=new Map();
testMap.set(1,"apple")
console.log(testMap)
const objFromMap=Object.fromEntries(testMap)

//object.groupBy is used for grouping based on the particular attribute
var markSheet=[
  {
    name:'jayanth',
    marks:100
  },
  {
    name:'vikash',
    marks:100
  },
  {
  name:'prya',
  marks:'49'
  }
]
//conditions can be rendered and can be used in the groupby method that is present.
var passOrFail=Object.groupBy(markSheet,({marks})=>{
  if(marks>50)
  {
    return 'pass';
  }
  else{
    return 'fail';
  }
})
console.log(passOrFail)
//null Prototype check what it does and how it works
//object.isFrozen when it is said to true all the data propertjes are non configurable and non written.
var example={name:'jayanth',age:22}
Object.freeze(example)
console.log(Object.isFrozen(example))
example.name="jndjnc"
console.log(example)

console.log(example)
//very important it can make the data resistant to change.
//OBJECT.seal allows modification of existing properties that are present,but does not allow addition or modification of any other properties that are present.
var sealExample={name:'jai',age:'22'}
Object.seal(example)
sealExample.name="jayanth"
console.log(sealExample)

//apply helps in passing arrays in a dynamic manner
//can write a method that works with regard to different objects that are present.

function addArray(p,...args)
{
  var sum=0;
  for(var i=0;i<args.length;i++)
  {
    sum=sum+args[i];
  }
  console.log(sum)
}
number=[1,2,3,4,5]
addArray.apply(null,number)//can do it......//very useful method that is present.

const person={
 fullname:function()
  {
    return this.firstName;
  }
}
const person1={
  firstName:'jayanth'
}

var fullname=person.fullname.apply(person1)
console.log(fullname)

//the basic syntax assosciated with it is apply(args,[argsarray])

function greet(message)
{
   return message+" "+this.name
}
const person21={
  name:'john'
};
const msg=greet.apply(person21,['hello'])
console.log(msg)

//object.hasOwnProperty()-->to check whether the property exists or not.
const testProperty={one:1,two:2}
if(testProperty.hasOwnProperty("one")){
  console.log("the following exists")
}
//if it is created with null operator then it is null {uncaught reference error is there}
//the difference between apply and call is that apply passes  array as arguments and call passes args

//bind borrowing a method from other object that is present........
const personDetails = {
  firstName:"John",
  lastName: "Doe",
  fullNam: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = personDetails.fullNam.bind(member);
console.log(fullName())