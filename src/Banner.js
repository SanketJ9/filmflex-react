import React, {useState,useEffect} from 'react'
import "./Banner.css"
import axios from "./axios";
import requests from './Requests';

function Banner() {
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

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string; 
    }

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center top",
        }}
        >
            <div className="banner-content">
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-btn-div">
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>Watchlist</button>
                </div>
                <h1 className="banner-desc">
                    {truncate(
                        movie?.overview
                        ,140)}
                </h1>
            </div>
            <div className="banner-fade"/>
        </header>
    )
}

export default Banner
