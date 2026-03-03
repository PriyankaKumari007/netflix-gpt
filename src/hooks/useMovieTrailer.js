import { API_OPTIONS } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer =(movieId)=>{
      const dispatch = useDispatch();
 
  const [trailerId, setTrailerId] = useState(null);
  const getMovieId = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log("video-background", json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieId();
  }, []);
}

export default useMovieTrailer;