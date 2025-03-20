const moment = require("moment")
const _ = require('lodash');
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
        releaseDate: '2000-10-19',
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
var movieIdFromComments=comments.map(num=>num.movieId)
console.log(movieIdFromComments)
var moviesDetailsWithNoComments=movies.filter(num=>{
    if(!(movieIdFromComments.includes(num.id)))
    {
        return num.id;
    }
}
)
console.log(moviesDetailsWithNoComments)

//MOVIES WHICH RECEIVED COMMENTS.
var movieIdFromComments=comments.map(num=>num.movieId)
console.log(movieIdFromComments)
var movieDetailsWithComments=movies.filter(num=>{
    if((movieIdFromComments.includes(num.id)))
    {
        return num.id;
    }
}
)
console.log(movieDetailsWithComments)


//GETTING THE USER ID AND THE MOVIE ID
var moviesCommentedByUsers=comments.map(comments=>{
    var myusers = users.filter(user => user.id === comments.userId);
 
    console.log(myusers)
    var mymovies=movies.filter(movie=> movie.id === comments.movieId)

    return{
        name:myusers[0].name, 
        movies:mymovies[0].name
    }
}).reduce((prev,cur)=>{
     if(!prev[cur.name])
       {
             prev[cur.name]=cur.movies
         }
         else{       
            prev[cur.name]=prev[cur.name]+" "+cur.movies;   
         }
         return prev
 },{})
console.log(moviesCommentedByUsers)

//question number 3//
var UserId=comments.map((comment)=>comment.userId);
console.log(UserId)
var uniqueUserId=[...new Set(UserId)]
console.log(uniqueUserId)

var movieId=comments.map((comment)=>comment.movieId)
console.log(movieId)
var uniqueMovieId=[...new Set(movieId)]
console.log(uniqueMovieId)

var userMap={}
users.forEach(user=>{
    if((uniqueUserId).includes(user.id))
    {
        userMap[user.id]={name:user.name}
    }
})
console.log(userMap)

var movieMap={}
movies.forEach(movies=>{
    if((uniqueMovieId).includes(movies.id))
    {
        movieMap[movies.id]={name:movies.name}
    }
})
console.log(movieMap)

var usersWhoCommented=comments.map(comments=>{
var userNames=userMap[comments.userId].name
var movieNames=movieMap[comments.movieId].name
return{
    names:userNames,
    userId:comments.userId,
    movies:movieNames
}
})
 .reduce((prev,curr)=>{
     if(!prev[curr.names])
     {
         prev[curr.names]={name:curr.names,movies:[]}
     }
     if(!prev[curr.names].movies.includes(curr.movies))
     {
         prev[curr.names].movies.push(curr.movies)
     }
    return prev;
 },{})//will work
 console.log(usersWhoCommented)
console.log(Object.values(usersWhoCommented))
//qno-4<->
var moviesWithReleaseYear=movies.filter((movies)=>
    {
        const movieReleaseDate=new Date(movies.releaseDate)
        const year=movieReleaseDate.getFullYear();
        if(year>2005)
        {
            return movies;
        }
    })
    console.log(moviesWithReleaseYear)
//qno 4

var moviesWithComments=comments.map(comments=>
//moviesWithComments where release year greater than 2005
{
    var moviesdetails=movies.find(movies=>movies.id===comments.movieId)
    return{
        name:moviesdetails.name,
        releaseDate:moviesdetails.releaseDate,
        comments:comments.text
    }
}).filter((movies)=>
    {
        const movieReleaseDate=new Date(movies.releaseDate)//getting the release date and then filtering them.
        const year=movieReleaseDate.getFullYear();
        if(year>2005)
        {
            return movies;
        }
    }
).map(movies=>{
    return{
    name:movies.name,
    comment:movies.comments
    }
 })
  .reduce((prev,cur)=>
 {
     if(!prev[cur.name])
     {
         prev[cur.name]={name:cur.name,movies:[]}
     }
         prev[cur.name].movies.push(cur.comment)

     return prev;
 },{})
var moviesWithComents=(Object.values(moviesWithComments))




var filterMoviesId=movies.filter((movies)=>
    {
        const date=new Date(movies.releaseDate)
        const year=moment(date,"DD/MM/YYYY").format("YYYY");
        if(year>2005)
        {
            return movies;
        }
    }).map(movies=>
    {
        return movies.id;
    }
    )
    console.log(filterMoviesId)//getting the movies where release date greater than 2005


    var moviesWithComments=comments.map((comments)=>
    {
        var movieDetails=filterMoviesId.find(movies=>movies.id===comments.movieId)
        {
            if(movieDetails)
            return{
                moviename:movieDetails.name,
                movieid:movieDetails.id,
                comments:comments.text
            }
            else{
                return null;
            }
        }
     }).filter(movies=>movies!==null).reduce((prev,cur)=>{
        if(!prev[cur.movieid])
         {
            prev[cur.movieid]={name:cur.moviename,comments:[]}
         }
         prev[cur.movieid].comments.push(cur.comments)
         return prev;

     },{})
    console.log("Movies with comments where release year greater than 2005")
    console.log(Object.values(moviesWithComments))

//qon5


var filterMoviesId=movies.filter((movies)=>
    {
  
        const year=moment(new Date(movies.releaseDate),"DD/MM/YYYY").format("YYYY");
        if(year>2005)
        {
            return movies;
        }
    }).map(movies=>
    {

        return movies.id
    }
    )
    console.log(filterMoviesId)//getting the movies where release date greater than 2005

    var movieNameWithComments = {}
    var movieDetailsWithUserComments=comments.filter(comments=>filterMoviesId.includes(comments.movieId))
    console.log("LatestDetails:")
    console.log(movieDetailsWithUserComments)

    movieDetailsWithUserComments.forEach(comment=>
    {
        var movieName=movieMap[comment.movieId].name
        console.log(movieName)
        console.log(!movieNameWithComments)
        if(!movieNameWithComments.hasOwnProperty( movieName ))
            {   
                movieNameWithComments[movieName]=[]
            }
            movieNameWithComments[movieName].push(comment.text)
            console.log(movieNameWithComments[movieName])
 
        
    })
   console.log(movieNameWithComments)
     


//https://www.naukri.com/code360/library/lodash-groupby-method
    // console.log("results are:")
    // console.log({mappedResults})
    // const finalResult = _.mapValues(mappedResults, group => group.map(item => item.comments));




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myUsers=comments.map(comment=>
{
    var user=users.find(users=>users.id===comment.userId)
    var movie=movies.find(movies=>movies.id===comment.movieId)
    return{
        username:user.name,
        id:user.id,
        moviename:movie.name
    }
    }
).reduce((prev,cur)=>{
    if( !prev[cur.username])
    {
        prev[cur.username]={name:cur.username,movies:[]}
    }
    if (!prev[cur.username].movies.includes(cur.moviename)) {
        prev[cur.username].movies.push(cur.moviename);
      }
    
      return prev;
    }, {});
    const result = Object.values(myUsers);
    // console.log(result)
    console.log("The previous result is:")
    const res=users.map(user=>{
        const details=result.find(res=>res.name===user.name)
        if(details)
        {
        return{
            name:user.name,
            movie:details.movies.join(", ")
        }
    }
        else{
            return{
                name:user.name,
                movie:'no movie has been commented'
            }
        }
    })
 console.log(res)





























//exploring moments
var date=new Date(movies[0].releaseDate)

console.log(moment(date,"DD/MM/YYYY").format("YYYY"))



