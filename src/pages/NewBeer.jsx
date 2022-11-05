import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png"

function NewBeer() {

  const [nameInput, setNameInput] = useState("")
  const [taglineInput, setTaglineInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [firstBrewedInput, setFirstBrewedInput] = useState("")
  const [brewerTipsInput, setBrewerTipsInput] = useState("")
  const [attenuationInput, setAttenuationInput] = useState(0)
  const [contributedInput, setContributedInput] = useState("")

  const handleNameChange = event => setNameInput(event.target.value)
  const handleTaglineChange = event => setTaglineInput(event.target.value)
  const handleDescriptionChange = event => setDescriptionInput(event.target.value)
  const handleFirstBrewedChange = event => setFirstBrewedInput(event.target.value)
  const handleBrewerTipsChange = event => setBrewerTipsInput(event.target.value)
  const handleAttenuationChange = event => setAttenuationInput(event.target.value)
  const handleContributedChange = event => setContributedInput(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBeer = {
      name: nameInput,
      tagline: taglineInput,
      description: descriptionInput,
      first_brewed: firstBrewedInput,
      brewer_tips: brewerTipsInput,
      attenuation_level: attenuationInput,
      contributed_by: contributedInput
    }

    try {

      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <header style={{ backgroundColor: "cyan", width: "100%" }}>
        <Link to="/">
          <img src={homeImg} alt="home" width={40} />
        </Link>
      </header>

      <form style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="name">Name</label>
        <input value={nameInput} type="text" name="name" onChange={handleNameChange}/>

        <label htmlFor="tagline">Tagline</label>
        <input value={taglineInput} type="text" name="tagline" onChange={handleTaglineChange}/>

        <label htmlFor="description">Description</label>
        <textarea value={descriptionInput} name="description" cols="30" rows="10" onChange={handleDescriptionChange}></textarea>

        <label htmlFor="first_brewed">First Brewed</label>
        <input value={firstBrewedInput} type="text" name="first_brewed" onChange={handleFirstBrewedChange}/>

        <label htmlFor="brewer_tips">Brewer Tips</label>
        <input value={brewerTipsInput} type="text" name="brewer_tips" onChange={handleBrewerTipsChange}/>

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input value={attenuationInput} type="number" name="attenuation_level" onChange={handleAttenuationChange}/>

        <label htmlFor="contributed_by">Contributed By</label>
        <input value={contributedInput} type="text" name="contributed_by" onChange={handleContributedChange}/>
        <br />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
