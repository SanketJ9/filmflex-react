import React, { useState, useEffect } from 'react'
import "./Row.css";
import axios from "./axios";
import requests from './Requests';

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movie, setMovie] = useState([]); 

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            ); 
            return request;
        }
        
        fetchData();
    }, []);

    const [movies, setMovies] = useState([]);

    const base_url = "http://image.tmdb.org/t/p/original/";
    
    useEffect(() => {
       async function fetchData() {
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       } 

       fetchData();
    }, [fetchUrl]);

    
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string; 
    }

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && (
                        <div className="row-poster">
                            <img className={`row_poster_img ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie.name} />
                            <div className="pstr-movie-details">
                                <p className='pstr-movie-name'>
                                    {truncate((movie?.title || movie?.name || movie?.original_name),30)}
                                </p>
                                <div className="pstr-btns">
                                    <button className='pstr-btn'>Play</button>
                                    <div className='pstr-ratings'>
                                        <i class="fas fa-star"></i>
                                        <p>{movie?.vote_average}</p>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    )
                ))}
                
            </div>

            <button  className='scroll-r-btn'><i class="fas fa-chevron-right"></i></button>
        
            <div className="row-gradient"/>
        </div>
    )
}

export default Row
