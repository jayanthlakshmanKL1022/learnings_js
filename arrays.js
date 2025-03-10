//Arrays are other important concepts in js,the elements inside array can be changed....
const cars=['volvo','bmw','audi']
console.log(cars.length)
//new Array can also be used ,but literally it is unnecessary
console.log(cars[0])
cars[0]="mercedes"
console.log(cars[0])
const car_str=cars.toString();//methods to convert array into string..
console.log(car_str)

console.log(cars) //accessing the full array can be done

console.log(typeof cars+"cars")//fact!!!-->the typeof arrays is an object
const cars1=new Array("mercedes","bmw","audi")
console.log(typeof cars1+'cars1')
console.log(cars)
console.log(cars1)
console.log(cars==cars1)// returns always
//  false,because their references are not the same 
//array elements can also be objects
console.log(cars.length)
console.log(cars.sort())
const lang=["java","c","python"]
console.log(Array.isArray(lang))
lang.push("c++")
console.log(lang)
const fruit=["banana","orange","apple","mango"]
var fruit1=fruit.join("*")
console.log(fruit.join("*"))
console.log(fruit1)
fruit.shift()//shifts the array left by one position
console.log(fruit)
fruit.unshift("papaya")
console.log(fruit)
//flatmap maps all the elements of the array and creates a new array
const adf=[1,2,3,4,6]
const new_one=adf.flatMap(x=>[x,x*10])
console.log(new_one)
//maps all the elements and create an arrray by flattening it.......
//reduce dont forget
const arr23=['coco','benz']
if(arr23.includes('coco'))
{
    console.log("true")
}
temp=[1,2,3,4,66,7]
let high = temp.findLast(x => x > 40);
//returns the element and findLastIndex returns the lastIndex.........
//***** important array operations..... */
var numerics=[1,2,1234,4,5]
numerics=numerics.sort()//!!!!! when yoou check output it is not sorted becausse js sorts it taking it as string 
//sorting based on unicode values ..... which is one property to be considered
console.log(numerics.sort())
console.log(numerics)
//do the sort by comparison
numerics.sort((a,b)=>a-b);
console.log(numerics)
//int32.sort() can also be used...

//toSorted() it does not sort the original array//
const bikes=['kawaski','hayaboosa','tvs','royalenfield']
const sorted=bikes.toSorted();
console.log(sorted)
console.log(bikes)

//.toReversed()-->reversed without changing the original thing

//max and min in arrays in js
const numerics_1=[1,8,2,3,8]
console.log(Math.max(...numerics_1))
console.log(Math.min(...numerics_1))//spread operator is used,since it cannot be directly used 

//switch statement
day="sunday"
switch(day)
{
    case "sunday":
        day="sunday"
}
console.log(day)

//note: dont use new keyword,it is not advisabe,do not use -->var for declarations also use === for comaprison ``for interpoilation etc.....


//js naming conventions....
//dont use camelcase its for c
//pascalcase for js
//firstName ,name etc,..
//spaces around +,- etc....
//spacings 2 spaces after a function
//accessing html elements and reducing the length of the line if it exceeds greater than 80
//dont start with $ it might conflict js libraries