let array = [1, 2, 3, 4, 5,9];
function sumElements(arr) {
    return arr.reduce((acc, val) => acc - val, 0);
}
// console.log(sumElements(array)); // Output: 15

const maxElement=array.reduce((prev,curr)=>
{
    if(curr>prev)
    {
        return curr;
    }
    else{
        return prev;
    }
},0)
console.log(maxElement)


var i=0;
const minElement=array.reduce((prev,curr)=>    
{
        if(curr<prev)
        {
            return curr;
        }
        else{
            return prev;
        }
 },)
console.log(minElement)

