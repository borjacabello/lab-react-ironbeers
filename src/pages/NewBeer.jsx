import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png"

function NewBeer() {
  return (
    <div>
      <header>
        <Link to="/"><img src={homeImg} alt="home" /></Link>
      </header>
    </div>
  );
}

export default NewBeer;
