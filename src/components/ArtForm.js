import React, { useState } from "react";

const ArtForm = ({ renderArt }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [medium, setMedium] = useState("");
  const [exhibit, setExhibit] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const handleSubmit = (e) => {
    let art = {
      title: title,
      medium: medium,
      description: description,
      image_url: image_url,
      first_name: first_name,
      last_name: last_name,
      exhibit: exhibit,
    };
    fetch("https://phase-3-art-gallery.herokuapp.com/art", {
      method: "POST",
      headers: { contentType: "application/json" },
      body: JSON.stringify(art),
    })
      .then((res) => res.json())
      .then((data) => renderArt(data));
  };
  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "first_name":
        setFirstName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "exhibit":
        setExhibit(value);
        break;
      case "image_url":
        setImageUrl(value);
        setDisplayImage(value);
        break;
      case "medium":
        setMedium(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl ml-auto bg-black/50 p-6 rounded shadow focus:shadow-outline"
      >
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600 text-center">
          New Art
        </h1>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Title</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="title"
              onChange={onChange}
              value={title}
              className="input-form"
              id="inline-first-name"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Description</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="description"
              onChange={onChange}
              value={description}
              className="input-form"
              id="inline-last-name"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Image URL</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="image_url"
              onChange={onChange}
              value={image_url}
              className="input-form"
              id="inline-location"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Artist First Name</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="first_name"
              onChange={onChange}
              value={first_name}
              className="input-form"
              id="inline-age"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Artist Last Name</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="last_name"
              onChange={onChange}
              value={last_name}
              className="input-form"
              id="inline-age"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Medium</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="medium"
              onChange={onChange}
              value={medium}
              className="input-form"
              id="inline-age"
              type="text"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="input-label">Exhibit</label>
          </div>
          <div className="md:w-2/3">
            <input
              name="exhibit"
              onChange={onChange}
              value={exhibit}
              className="input-form"
              id="inline-age"
              type="text"
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
      <div className="mr-auto w-fit max-w-xl in-w-64 min-h-64 h-fit max-h-screen-sm bg-stone-gray-500 ml-16 mt-16 border-stone-500 border-4 bg-white">
        <img
          className="object-cover"
          src={
            displayImage
              ? displayImage
              : "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
          }
          alt="upload preview"
        />
      </div>
    </div>
  );
};

export default ArtForm;
