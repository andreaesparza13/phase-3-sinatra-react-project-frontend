import React from 'react'
import {Link} from 'react-router-dom'
const Artist = ({ id, first_name, last_name, age, location, onClick }) => {
   return (
      <div className="m-6 p-6 basis-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
         <ul className="m-6">
            
            <li className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{first_name} {last_name}</li>
            <br/>
            <li className="mb-3 font-normal text-gray-500 dark:text-gray-400">{age} years old</li>
            <br/>
            <li className="mb-3 font-normal text-gray-500 dark:text-gray-400">{location}</li>
            <br/>
            <Link to="/artists/arts" onClick={onClick}>
               <a role="button"class="ml-5 text-blue-600"id={id}>Click to view Art</a>
            </Link>
         </ul>
      </div>
   )
}

export default Artist