
const _ = require("lodash");

const question=[
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
      },
      "isActive": true
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 25,
      "email": "jane.smith@example.com",
      "address": {
        "street": "456 Oak St",
        "city": "Othertown",
        "zipcode": "67890"
      },
      "isActive": false
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "age": 35,
      "email": "alice.johnson@example.com",
      "address": {
        "street": "789 Pine St",
        "city": "Differenttown",
        "zipcode": "11223"
      },
      "isActive": true
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "age": 40,
      "email": "bob.brown@example.com",
      "address": {
        "street": "101 Maple St",
        "city": "Sampletown",
        "zipcode": "44556"
      },
      "isActive": true
    }
  ]
//name of the active users
  var activeUsers=question.filter(users=>users.isActive===true)
  console.log(activeUsers)

  //zipcode with name and id
  var groupingProperties=question.map(users=>{
    return{
        id:users.id,
        name:users.name,
        zipcode:users.address.zipcode
    }
  })
  console.log(groupingProperties)

  //oldest user who is Active

  var ageOfActiveUsers=activeUsers.map(users=>{
    return users.age
  })
  console.log(ageOfActiveUsers)
  ageOfActiveUsers.sort();
  console.log(ageOfActiveUsers)
  oldestAge=ageOfActiveUsers[ageOfActiveUsers.length-1]
  console.log(oldestAge)
  var oldestUserWhoIsActive=activeUsers.filter(users=>users.age===oldestAge)
  console.log(oldestUserWhoIsActive)

//   //group ages  Write a JavaScript function that generates a report of age groups based on the following ranges:
// "18-25"
// "26-35"
// "36-45"
// "46+"

var ageRanges=question.map(users=>
{
    if(users.age>=18&&users.age<=25)
    {
        return{
            name:users.name,
            id:users.id,
            email:users.email,
            agerange:"18-25"
        }
    }
    else if(users.age>=26&&users.age<=35)
    {
        return{
            name:users.name,
            id:users.id,
            email:users.email,
            agerange:"26-35"
        }
    }
    else if(users.age>=36&&users.age<=45)
    {
            return{
                name:users.name,
                id:users.id,
                email:users.email,
                agerange:"36-45"
            }
    }
    else{
        return{
            name:users.name,
            id:users.id,
            email:users.email,
            agerange:"45+"
        }
    }
}
)
console.log(ageRanges)
var groupbyAges=_.groupBy(ageRanges,'agerange')
  const finalResult = _.mapValues(groupbyAges, group => group.map(item => {
    return{
        name:item.name,
        id:item.id,
        email:item.email
        }
    }
  ))
console.log(finalResult)

const sortedQuestion=question.toSorted((a,b)=>a.age-b.age)


console.log("People who are active:")

var activePeople=sortedQuestion.filter(people=>people.isActive===true).map(people=>people.name)
console.log(activePeople)

var townWithPeople=question.map(item=>
{
  return{
    name:item.name,
    town:item.address.city
  }
}
)
console.log(townWithPeople)
var groupBasedOnTown=_.groupBy(townWithPeople,item=>item.town)
console.log(groupBasedOnTown)
const transformedObject = _.mapValues(groupBasedOnTown, (users) =>{
  return users.map(user=>
  {
    return user.name
  })})
console.log(transformedObject)

var totalPeople=question.length;
var activePeople=question.filter(people=>people.isActive===true).length
var inactivePeople=totalPeople-activePeople
const obj1={active:activePeople,inactive:inactivePeople}
console.log("People who are active and inactive:")
console.log(obj1)