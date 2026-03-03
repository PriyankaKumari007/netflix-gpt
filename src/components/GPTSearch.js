import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import{NETFLIX_BACKGROUND}from "../utils/constant";


const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
         
          src={NETFLIX_BACKGROUND}
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
