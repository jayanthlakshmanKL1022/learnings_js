const prompt = require('prompt-sync')();
console.log("WELCOME TO TODO-APP HERE IS THE LIST OF OPERATIONS YOU CAN PERFORM")
console.log("HERE ARE THE OPERATIONS YOU CAN PERFORM")
console.log("1. CREATE\n2. DISPLAY TASKS\n3. UPDATE\n4. DELETE\n5. CHANGE TASK STATUS\n6. EXIT");
var i=1
var toDo=new Map();
var flag;
while(true)
{
const option = prompt('Select an option:');
if(option>=1&&option<=6)
{
if(option==='1')
{
flag=0;
const myRemainder=prompt("Enter your Remainder to put in todo list:")
if(myRemainder==="")
{
    console.log("Remainder cannot be empty!")
}
else
{
for(var i=1;i<=toDo.size;i++)
{
    flag=0;
    const values=Array.from(toDo.get(i))
    if(myRemainder===values[0])
    {
        console.log("Task already exists and existed task cannot be added again")
        flag=1;
        break;
    }
}
if(flag==0)
{
console.log(typeof i)
toDo.set(i,[myRemainder,"Not completed"])
console.log("Task has been added successfully ! you can view them!")
i++
}
}}
else if(option==='2')
{
    console.log("Total Tasks Present:"+toDo.size)
    if(toDo.size===0)
    {
        console.log("There are no tasks currently available to display add a task first")
    }
    else{
    console.log("key"+"   "+"Name of the Task")
    for(var i=1;i<=toDo.size;i++)
    {
        if(toDo.has(i))
        {
        const values=Array.from(toDo.get(i))
        console.log((i)+"     "+values[0]+"   "+" "+"status:"+values[1])
        }
        else
        {
            console.log("Undefined Value is present ! Check Properly!")
            break;
        }
    }
}}
else if(option==='3')
{
    var updateId=prompt("Enter the id number to proceed with the updation of the task:")
    var id=Number(updateId);
    if(id>toDo.size&&id>0)
    {
        console.log("Enter the id within range")
    }
    else
    {
    var values=toDo.get(id);
    console.log(values)
    var updatedTask=prompt("Enter the task that you need to update:")
    values[0]=updatedTask
    console.log("Task has been updated in a successful manner!!!")
    }}
else if(option==='4')
{
    if(toDo.size===0)
    {
        console.log("No tasks are there to delete!!!")
    }
    else
    {
    //blocker........
    const delId=prompt("Enter the key number inorder to delete the task:")
    console.log(typeof delId)
    var deleteId=Number(delId)
    var action=toDo.delete(deleteId)
    console.log(action)
    console.log("Task has beend deleted successfully")
    var newToDo=new Map();
    var newKey=1;
    for(let[key,value] of toDo)
    {
        newToDo.set(newKey,value)
        newKey++;
    }
    toDo=newToDo
    console.log("Tasks has been rearranged successfully!!!")
}}
else if(option==='5'){
    
    if(toDo.size==0)
    {
        console.log("There are no tasks,that are currently present!")
    }
    else
    {
    var toggleId=prompt("Enter the id to change the visibility of the task:")
    var toggleIdNumber=Number(toggleId);
    var values=toDo.get(toggleIdNumber)
    var myStatus=prompt('change the status of the task:(For completed c and for not completed n:')
    if(myStatus==='c')
    {
        if(values[1]==='completed')
        {
            console.log("you have entered the same status ! please enter a different one,inorder to change the visibility that is present")
        }
        else{
            values[1]='completed';
            console.log("The status has been updated to completed successfully")
        }
    }
    else if(myStatus==='n')
    {
        if(values[1]==='Not completed')
        {
            console.log("you have entered the same status ! please enter a differebt one,inorder to change the visibility that is present")
        }
        else{
            values[1]='Not completed';
            console.log("The status has been updated to not completed successfully")
        }
    }
    else
    {
        console.log("Please presss either n or c ! dont press other options ! then the status wont change!")
    }
    }}
   else 
    {
   console.log("Application has been exited Successfully!!!!")
   break;
    }
    }
    else{
    console.log('Enter a correct range from 1 to 6 !Read the instructions carefully and enter the number')
 }
}