import React, { useState } from 'react';

const ArtistForm = ({renderArtist}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    let artist = { first_name: firstName, last_name: lastName, age: age, location: location }
    
    fetch('http://localhost:9292/artists', {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(artist)
    })
    .then(res => res.json())
    .then(data => renderArtist(data))
  }
 
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  }
  return (

    <form className="w-full max-w-xl items-center" onSubmit={handleSubmit}>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">New Artist Sign-Up</h1>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            First Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="firstName" onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-first-name" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Last Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="lastName" onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            City
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="location" onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-location" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Age
          </label>
        </div>
        <div className="md:w-2/3">
          <input name="age" onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-age" type="number" />
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

 export default ArtistForm;
   