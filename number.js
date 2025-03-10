//in js there is no specific kind of number ,everything is 64 bit numbers
let x=3.14
let y=3

console.log(x+y)
console.log(10+20)
console.log("10"+20)
console.log(10+"20")

//well if both of them are numbers they are added,if either one of them are strings ,they are just concatenated 
//but in case of other arithmetic operations ,string is converted into number and the operations are being performed.

let p=5/"gbhnkl"
console.log(p)
console.log(isNaN(p))
if(isNaN(p)===true)
{
    console.log("NOT A NUMBER IS TRUE")
}

//infinity is an number ,that is typeOf infinity is a number 
console.log(typeof Infinity)


//fact:two js objects containing the same values returns false,because they have the references different.
const a=new String("hj")
const b=new String("hj")
console.log(a==b)
console.log(a===b)

//js integers are accurate upto 15 digits
let xi=9999999999999;
let yi=9999999999999n;
console.log(typeof xi)
console.log(typeof yi)
//appending n to a number makes it bigInt.......
//precision has a greater accuracy
console.log(9007199254740992123457890 === 9007199254740992123457890)
console.log(9007199254740992 == 9007199254740992)
let qx = Number.MAX_SAFE_INTEGER;
let wx = Number.MIN_SAFE_INTEGER;

console.log(typeof wx)
console.log(qx)
console.log(wx)

//max and min properties of the num object 

const ai=1234
const bi=ai.toString()
console.log(bi)
console.log(typeof bi)

//exponential  -->rounds off to a particular digit
const ap=1
console.log(Number.isInteger(ap))
console.log(Number.isSafeInteger(ap))
const gh=Number.parseInt("23")
console.log(gh)