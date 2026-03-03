import lang from "../utils/languageConstant";
import { useSelector ,useDispatch} from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constant";
import {addGptMovieResult} from"../utils/gptSlice";

const GPTSearchBar = () => {
    const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json);
  }

  async function onClickGptSearch() {
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value+ " only give me  names of 5 movies, comma separated like the example result ahed. Example Result : Movie1 , Movie2 ,Movie3 "
    //Make an API call to gptAPI and get Movie results
    const gptResults = await openai.chat.completions.create({
      model: "gpt-5.2",
      messages: [
        { role: "developer", content: gptQuery }],
        model: "gpt-3.5-turbo",
        
    });
    if(!gptResults.choices[0]) 
    {
        console.log("Movies Results are empty")
    }
    console.log(gptResults.choices[0]?.message.content);
    const gptMovies = gptResults.choices[0]?.message.content.split(",");
    //For each movie I will search in TMDB
    const promiseArray =  gptMovies.map (movie=>searchTMDB(movie));
    //[Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));

  }
  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 col-span-4 m-4 text-white rounded-lg hover:bg-opacity-50"
          onClick={onClickGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
