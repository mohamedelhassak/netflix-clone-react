import React, { useState, useEffect } from "react";
import instance from "../API/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // get data based on URL
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);

      //update the state
      setMovies(request.data.results);
      return request;
    }

    // call this function
    fetchData();
  }, [fetchUrl]);

  const onPicClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log("movies", movies.length);

  const rowsContent =
    movies.length === 0 ? null : (
      <div>
        {/* title */}
        <h2>{title}</h2>

        {/* container */}
        <div className="row__posters">
          {/* serval row__poster(s) */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => onPicClick(movie)}
              className={`row__poster ${isLargRow && "row__posterLarge"}`}
              src={`${baseUrl}${
                isLargRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>

        {/* Add youtube plugin */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    );

  return <div className="row">{rowsContent}</div>;
}

export default Row;
