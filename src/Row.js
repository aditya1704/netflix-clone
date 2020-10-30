import React, { useEffect, useState } from 'react'
import axios from 'axios';

//base url to make request to the movie database
axios.defaults.baseURL='https://api.themoviedb.org/3';

//base url for movie_posters
const base_url= "https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl}) {

    //set state movies to empty array
    const [movies,setMovies]=useState([]);
    
    // A snnippet of code which runs based on specific condition
    
    useEffect(()=>{
        //if[],run once when Row commponent loads
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            //axios.get will get the baseUrl from axios.js and will be appended by url passed from App.js
            console.log(request)
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    }, [fetchUrl]);//if any variable we are using inside useEffect is taken from outside then we have to declare it at the end eg:fetchUrl 
   
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie=>(
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
