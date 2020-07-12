import React, { useState, useEffect } from "react";
import instance from "../API/axios";
import requests from "../API/requests";
import "./Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(requests.fetchNetflixOriginals);
      console.log("banner", req.data.results); // [m1.m2.m3,.....]

      //select randomly one movies from Array
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }

    fetchData();
  }, []);

  // this funct take (string, nimber) return a slice from string
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log("banner", movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            ${baseUrl}${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
