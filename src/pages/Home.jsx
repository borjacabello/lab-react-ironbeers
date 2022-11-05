import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomImg from "../assets/random-beer.png"
import newImg from "../assets/new-beer.png"
import ListBeers from "./ListBeers";

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", width: "70%", alignItems: "center", padding: "0 5vw", border: "1px solid darkgrey", margin: "2vh 5vw"}}>
      <Link to="/beers">
        <img src={beersImg} alt="beers" />
        <h2>All Beers</h2>
        <p>
          In hac habitasse platea dictumst. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Nam
          nisi arcu, tincidunt hendrerit ligula pharetra, varius gravida dui.
          Vivamus odio odio, pretium at erat ac, lobortis maximus enim. Maecenas
          maximus imperdiet egestas. Cras scelerisque vulputate rutrum. Ut
          volutpat rutrum ornare.
        </p>
      </Link>
      <hr />
      <Link to="/random-beer">
        <img src={randomImg} alt="random-beer" />
        <h2>Random Beer</h2>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          eget sagittis ligula, at efficitur est. Sed ultrices varius euismod.
          Sed condimentum ante a turpis faucibus, at blandit lectus tincidunt.
          Etiam dui nibh, elementum eget felis id, consectetur imperdiet arcu.
          Sed elementum et felis id semper. Integer placerat dapibus felis vel
          tincidunt. Integer ut justo auctor, lacinia orci pellentesque,
          malesuada mi.
        </p>
      </Link>
      <hr />
      <Link to="/new-beer">
        <img src={newImg} alt="new-beer" />
        <h2>New Beer</h2>
        <p>
          Aliquam nec sem pellentesque, malesuada purus consequat, tincidunt
          est. Aenean eget ante euismod, sagittis massa sed, dignissim diam.
          Praesent ultrices nunc imperdiet quam sollicitudin pretium. Donec
          fermentum massa eu ipsum bibendum congue. In commodo sem lorem, eget
          luctus nulla molestie sit amet. Integer porta tortor vitae purus
          lobortis rhoncus. Donec pretium varius vulputate.
        </p>
      </Link>

      
    </div>
  );
}

export default Home;
