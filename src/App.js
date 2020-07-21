import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Rows  */}
      <Content />
    </div>
  );
}

export default App;
