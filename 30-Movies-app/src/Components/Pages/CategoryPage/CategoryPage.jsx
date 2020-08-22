import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Card from '../../Card/Card';
import Loader from 'react-loader-spinner';

const CategoryPage = () => {

    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState(null)
    const { media, query, page } = useParams()
    const url = "";

    useEffect(() => {

        setIsLoading(true);
        setIsError(false);

        Axios

            .get(`https://api.themoviedb.org/3/${media}/${query}?api_key=00f0191d7bcf9029e316b0913d3846a9&page=${page}`)

            .then((response) => {
                console.log(response.data);
                setMovies(response.data);
                setIsLoading(false);
            })

            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            });
    }, [page]);

    let title;

    const titleCategory = () => {
        switch (query) {

            case 'popular':
                title = 'Películas populares'
                break;
            case 'top_rated':
                title = 'Películas con mejores críticas'
                break;
            case 'upcoming':
                title = 'Películas a estrenarse'
                break;
            case 'now_playing':
                title = 'Películas en cines'
                break;

            default: title = 'error'
                break;
        }
        return title
    }



    return (
        <>
            {isError && (
                <div className="alert-danger" role="alert">
                    Error 404: Not Found.
                    API error: There was an error please refresh the page and try again.
                </div>
            )}

            {isLoading && (
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            )}

            <div>
                <h2>{titleCategory()}</h2>
                {movies && !isError && !isLoading && (
                    <div>
                        {movies.results.map(movie => (<Card img={movie.poster_path} name={movie.original_title} id={movie.id} />))}
                    </div>
                )}
            </div>
        </>
    )

}

export default CategoryPage
