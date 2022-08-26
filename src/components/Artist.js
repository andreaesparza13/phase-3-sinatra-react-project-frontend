import React from 'react'
import {Link} from 'react-router-dom'
const Artist = ({ id, first_name, last_name, age, image_url, location, onClick }) => {
   return (
      <div className="m-6 p-6 basis-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={id}>
         <ul className="m-6">
<<<<<<< HEAD
            
            <li className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{first_name} {last_name}</li>
            <br/>
            <img className="rounded-t-lg" src={image_url} alt={last_name}/>
            <br/>
            <li className="mb-3 font-normal text-gray-500 dark:text-gray-400">{age} years old</li>
            <br/>
            <li className="mb-3 font-normal text-gray-500 dark:text-gray-400">{location}</li>
=======
            <li ><h1 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{first_name} {last_name}</h1></li>
            <li ><h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{location}</h5></li>
            <li><p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Age: {age}</p></li>
>>>>>>> refs/remotes/origin/main
            <br/>
            <Link to="/artists/arts" onClick={onClick}>
               <span role="button"className="ml-0 text-blue-600 hover:underline text-align-center" id={id}>Explore More</span>
            </Link>
         </ul>
      </div>
      )
}

export default Artist

