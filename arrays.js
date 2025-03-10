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