import React, { useState } from 'react';

const ArtForm = ({renderArt}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [image_url, setImageUrl] = useState('')
  const [medium, setMedium] = useState('')
  const [exhibit, setExhibit] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let art = { title: title, medium: medium, description: description, image_url: image_url, first_name: first_name, last_name: last_name, exhibit: exhibit }
    fetch('http://localhost:9292/art', {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(art)}
      )
      .then(res => res.json())
      .then(data => renderArt(data))
  }
  const onChange = (e) => {
    const {name, value} =  e.target

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'exhibit':
        setExhibit(value);
        break;
      case 'image_url':
        setImageUrl(value);
        break;
      case 'medium':
        setMedium(value);
        break;
      default:
        break;
  }
}

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl items-center">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">New Art</h1>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Title
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="title" onChange={onChange} value={title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-first-name" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="description" onChange={onChange} value={description} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Image URL
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="image_url" onChange={onChange} value={image_url} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-location" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Artist First Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="first_name" onChange={onChange} value={first_name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-age" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Artist Last Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="last_name" onChange={onChange} value={last_name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-age" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Medium
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="medium" onChange={onChange} value={medium} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-age" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Exhibit
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="exhibit" onChange={onChange} value={exhibit} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-age" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <input type="submit" value="Submit" className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
        </div>
      </div>
  </form>
  )
}

export default ArtForm;