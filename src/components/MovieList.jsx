import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
import MovieCard from "./MovieCard";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesAll,setMoviesAll] = useState(moviesDataJSON)
 
  const addNewMovie = (newMovie)=>{
    const updatedMovie = [...movies,newMovie] //copying the movie state to the new variable
    const updatedMovieAll = [...moviesAll,newMovie] //adding the new movie to my master list of all the movies
    setMovies(updatedMovie)
    setMoviesAll(updatedMovieAll)
}
const filterMovieList = (str) =>{
    let filteredMovies
    if(str ==='All'){
        filteredMovies=moviesAll
    }
    else{
        filteredMovies = moviesAll.filter((movie)=>{
            return movie.title[0].toLowerCase() === str.toLowerCase()
        })

    }
    setMovies(filteredMovies)

}
  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovieList={filterMovieList}></FilterMovies>
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;