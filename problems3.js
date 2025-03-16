const { includes, set } = require("lodash")

const users = [
    {
        name: "Ashwin J",
        age: 24,
        gender: "male",
        location: "Chennai",
        id: "1"
    },
    {
        name: "Test",
        age: 24,
        gender: "male",
        location: "Goa",
        id: "2"
    },
    {
        name: "Ash",
        age: 14,
        gender: "male",
        location: "Madurai",
        id: "3"
    },
]
const movies = [
    {
        id: "11",
        name: "Gladiator",
        rating: 5,
        releaseDate: '2000-10-19T00:00:00.000Z',
        isBlockBuster: true
    },
    {
        id: "12",
        name: "Inception",
        rating: 3,
        releaseDate: '2010-11-15T00:00:00.000Z',
        isBlockBuster: true
    },
    {
        id: "13",
        name: "Smile",
        rating: 4,
        releaseDate: '2029-10-09T00:00:00.000Z',
        isBlockBuster: false
    },
]
const comments = [
    {
        userId: "1",
        text: "Gladiator for the Oscar",
        movieId: "11",
    },
    {
        userId: "1",
        text: "Overall it's a scary movie",
        movieId: "13",
    },
    {
        userId: "3",
        text: "Flop Movie",
        movieId: "13",
    },
    {
        userId: "1",
        text: "Gladiator...",
        movieId: "11",
    },
]

//MOVIES WHICH RECEIVED  NO COMMENTS...
var commentId=comments.map(num=>num.movieId)
console.log(commentId)
var noCommentId=movies.filter(num=>{
    if(!(commentId.includes(num.id)))
    {
        return num.id;
    }
}
)
console.log(noCommentId)

//MOVIES WHICH RECEIVED COMMENTS.
var commentId=comments.map(num=>num.movieId)
console.log(commentId)
var noCommentId=comments.filter(num=>{
    if((commentId.includes(num.id)))
    {
        return num.id;
    }
}
)
console.log(noCommentId)


