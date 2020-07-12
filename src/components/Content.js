import React from "react";
import Row from "./Row";
import requests from "../API/requests";

function Content() {
  return (
    <div>
      <Row
        title="NETFLIX TRENDING"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargRow={true}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetcComedynMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentarias "
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default Content;
