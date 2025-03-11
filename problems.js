//well i remember our naming conventions,will work on that
const _ = require('lodash');
var items=[
    { _id: 0, name: "Pepperoni", size: "small", price: 19, quantity: 10,},
    { _id: 1, name: "Pepperoni", size: "medium", price: 20,quantity: 20,},
    { _id: 2, name: "Pepperoni", size: "large", price: 21,quantity: 30,},
    { _id: 3, name: "Cheese", size: "small", price: 12,quantity: 15,},
    { _id: 4, name: "Cheese", size: "medium", price: 13,quantity:50,},
    { _id: 5, name: "Cheese", size: "large", price: 14,quantity: 10,},
    { _id: 6, name: "Vegan", size: "small", price: 17,quantity: 10,},
    { _id: 7, name: "Vegan", size: "medium", price: 18,quantity: 10,}
];
//creating objects
function createObj(p1,p2)
{
    return{
        name:p1,
        quantity:p2
    }
}
const objArray=items.filter(num=>num.size==='medium').map(function(cv,_index,_array)
{
   return createObj(cv.name,cv.quantity)
})
console.log(objArray)

//well there is an inbuilt groupBy function ,but it just does grouping
const price=items.filter(num=>num.price>15)
const groupedByName = _.groupBy(price, 'name');
console.log(groupedByName)

//reduce method
const result=items.reduce((prev,cur)=>{
    if(!prev[cur.name])
    {
        prev[cur.name]=cur.quantity
    }
    else
    {
    prev[cur.name]+=cur.quantity
    }
    return  prev
},{})
console.log(result)

const solution=items.reduce((previous,current)=>
   {
    if(current.price>15)
    {
        if(!previous[current.name])
        {
            previous[current.name]=current.quantity
        }
         else{
            previous[current.name]+=current.quantity
        }
    }
        return previous
},{})
console.log(solution)


  

