import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";

function ListBeers() {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const beersAPI = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(beersAPI.data);
      setList(beersAPI.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching) {
    return <h3>Looking for beers...</h3>;
  }

  return (
    <div>
      <header style={{ backgroundColor: "cyan" }}>
        <Link to="/">
          <img src={homeImg} alt="home" width={40} />
        </Link>
      </header>

      {list.map((eachBeer) => {
        return (
          <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", margin: "0 auto", padding: "10px", border: "1px solid gray"}}>
            <div style={{ display: "flex", flexDirection: "row", width: "50%"}}>
              <img src={eachBeer.image_url} alt={eachBeer.name} width={40} />
              <div>
                <h3>{eachBeer.name}</h3>
                <h4 style={{ color: "gray" }}>{eachBeer.tagline}</h4>
                <p>
                  <span>Created by: </span>
                  {eachBeer.contributed_by.replace(eachBeer.contributed_by.slice(eachBeer.contributed_by.indexOf(" <")),"")}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ListBeers;
