//js strings
let a="I love dogs and cats in my neighborhood"
// to find the length
console.log(a.length)
//Template strings are used such that single quotes and double quotes are being used in js
let text=`hi i am "superman" and 'batman'`
console.log(text)
//  /n stands for nextLine
let text1="hi i am \n jai"
console.log(text1)

//the difference between == and ===
//== specifies whether the data is equal and === specifies data and its types are equal or not
let text3="john"
let text4=new String("john")
//typeof is used to specify the data type being used
console.log(typeof text3)
console.log(typeof text4)

console.log(text3==text4)
console.log(text3===text4)

//string methods charAt and charCodeAt
let text5="hello i am jayanth from dharmapuri "
console.log(text5.charAt(0))
console.log(text5.charCodeAt(0))

//uppercase,lowercase and concat
let text6="hello this is boogey man!"
text7="the boogeyman is unknown"
console.log(text6.toUpperCase())
console.log(text6.toLowerCase())
console.log(text6.concat(text7))
//for text7 we do not specify the data type,js do not throw an error it treats it as global varialble.
//in strict mode,treating it as global variable is not possible and it throws an error

//the difference between slice and substring are -->in slice negative values are present,but in substring -ve values are treated as 0

console.log(text6.slice(3,5))
console.log(text6.slice(-5,-1))
console.log(text6.substring(1,4))
console.log(text6.substring(-1,4)) //values in -ve are treated as 0

//trim is a method which is used to remove the leading as well as the trailing spaces that are present
let text9="         hi this is to remove leading and trailing spaces            "
let text10=text9.trim();
console.log(text10)
//trimStart() and trimEnd()-->is used to remove space at the start and end in individual manner

//replace is another important function in js
let text11="This is microsoft and microsoft is good";
text11=text11.replace("microsoft","google") //replaces the first instance or the first one that is present
let text12="This is microsoft and microsoft is good";
text12=text12.replaceAll("microsoft","google")
console.log(text11)
console.log(text12)

//split is used to split a string based on the gap or the thing you specify inside
let text16=text12.split(" ")//important in javascript.
console.log(text16)
console.log(text16[0])

//repeat is a function in js,which repeats the string itself
let text13="hello"
text14=text13.repeat(6)
console.log(text14)


//string search methods
let text21="Please locate the string find and locate it"
let index=text21.indexOf("locate")
let index1=text21.lastIndexOf("locate")
let index3=text21.search("locate")
console.log(index)
console.log(index1)
console.log(index3)

//however indexOf and searchOf are not considered to be equal,indexOf cannot take regex pattern,where search cannot take 2nd positional argument.

//now let us learn about ,match, it is used to find the match that is present.
let text30 = "Hi i am an engineer who is motivated to solve real time problems in engineer";
let my_arr = text30.match(/engineer/g).length;
console.log("engineer is present in:"+ my_arr+"places");// /g returns all the matches and it takes in the regex pattern,else it will retun the firstmatch that occurs and not more than that.


let text31="Hi this is jayanth"
console.log(text31.includes("this"))
console.log(text31.includes("bn"))
console.log(text31.includes("n"))
//it checks whether the particular character or string exists.....
console.log(text31.startsWith("Hi"))
console.log(text31.startsWith("jayanth"))//startsWith and endsWith are also important properties

//Interpolation another important concept in js
//``
let ip=`hi i am mr beast and i am the biggest youtuber`
let ip1="money"
let ip3=`welcome ${ip},${ip1}`;
console.log(ip3)
var apps1=1; 
var apps3=3;
console.log(apps1+apps3)