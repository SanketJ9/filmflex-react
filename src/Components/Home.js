import React from 'react'
import Banner from '../Banner'
import Row from '../Row'
import "./Home.css"
import Nav from "../Nav"
import requests from '../Requests'


function Home() {
    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />

            <Row title="filmflex Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />

            <Row 
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />

            <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />

            <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            
            <Row 
                title="Documentries"
                fetchUrl={requests.fetchDocumentries}
            />

        </div>
    )
}

export default Home
