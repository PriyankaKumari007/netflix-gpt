import{useSelector}from"react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion =()=>{
     const{movieNames,movieResults} = useSelector(store=>store.gpt);
   if(!movieNames) return null;

    return(
        <div className="p-4 m-4 bg-black">
        <div>
          <MovieList title={movieNames[0]} movies={movieResults[0]}/>
        </div>
        </div>
    )
}

export default GPTMovieSuggestion;