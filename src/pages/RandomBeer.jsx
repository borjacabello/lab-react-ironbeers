import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";

function RandomBeer() {
  const [random, setRandom] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const beer = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(beer);
      setRandom(beer.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching) {
    return <h3>Looking for beer details...</h3>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header style={{ backgroundColor: "cyan", width: "100%" }}>
        <Link to="/">
          <img src={homeImg} alt="home" width={40} />
        </Link>
      </header>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <img src={random.image_url} alt={random.name} width={100} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
          }}
        >
          <h2>{random.name}</h2>
          <h2 style={{ color: "gray" }}>{random.attenuation_level}</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
          }}
        >
          <h2 style={{ color: "gray" }}>{random.tagline}</h2>
          <h2>{random.first_brewed}</h2>
        </div>
        <h3 style={{ width: "50%" }}>{random.description}</h3>
        <h4 style={{ color: "gray" }}>{random.contributed_by}</h4>
      </div>
    </div>
  );
}

export default RandomBeer;
