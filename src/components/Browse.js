import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    
    <div>
      <Header />
      {console.log(showGptSearch)}
      {showGptSearch ? 
        <GPTSearch />
       : (
        <>
         
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* <MainContainer />
      <SecondaryContainer /> */}
      {/*
                 MainContainer
                   -videoBackground
                 Secondary Container   
                   -Movie List * n
                   -Cards * n

            */}
    </div>
  );
};

export default Browse;
