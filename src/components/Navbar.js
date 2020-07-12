import React, { useEffect, useState } from "react";
import "./Navbar.css";

const netflixLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

function Navbar() {
  const [show, handleShow] = useState(false);

  // add event listner for scroll navbar
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflixLogoUrl} alt="Netflix Logo" />
    </div>
  );
}

export default Navbar;
