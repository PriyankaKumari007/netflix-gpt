import MovieList from "./MovieList";
import {useSelector}from "react-redux";

const SecondaryContainer = ()=>{
    const movies = useSelector(store=>store.movies);
    console.log("secondary-component",movies);
        if(!movies)return;
    return(
        <div className="bg-black">
            <div className="-mt-60 pl-12 relative z-20"> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
         <MovieList title={"Popular"} movies={movies.popularMovies}/>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
           {
            /*
              MovieList - Popular
              MovieList - Now Playing
              Movie List - Trending
              Movie List - Horror
            */
           }
           </div>
        </div>
    )
};

export default SecondaryContainer;