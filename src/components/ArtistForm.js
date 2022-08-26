import React, { useState } from "react";

const ArtistForm = ({ renderArtist }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    let artist = {
      first_name: firstName,
      last_name: lastName,
      age: age,
      location: location,
    };
    fetch("http://localhost:9292/artists", {
      method: "POST",
      headers: { contentType: "application/json" },
      body: JSON.stringify(artist),
    })
      .then((res) => res.json())
      .then((data) => renderArtist(data));
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };
  return (
    <form
      className="w-full max-w-xl ml-auto mr-auto bg-black/50 p-6 rounded shadow focus:shadow-outline"
      onSubmit={handleSubmit}
    >
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600 ml-4 text-center">
        New Artist
      </h1>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="input-label">First Name</label>
        </div>
        <div className="md:w-2/3">
          <input
            name="firstName"
            onChange={onChange}
            className="input-form"
            id="inline-first-name"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="input-label">Last Name</label>
        </div>
        <div className="md:w-2/3">
          <input
            name="lastName"
            onChange={onChange}
            className="input-form"
            id="inline-last-name"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="input-label">City</label>
        </div>
        <div className="md:w-2/3">
          <input
            name="location"
            onChange={onChange}
            className="input-form"
            id="inline-location"
            type="text"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="input-label">Age</label>
        </div>
        <div className="md:w-2/3">
          <input
            name="age"
            onChange={onChange}
            className="input-form"
            id="inline-age"
            type="number"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <input
            type="submit"
            value="Submit"
            className="shadow bg-gray-700 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          />
        </div>
      </div>
    </form>
  );
};

export default ArtistForm;
