import React from 'react'
import {Link} from 'react-router-dom'
const Artist = ({ id, first_name, last_name, age, location, onClick }) => {
   return (
      <div className="p-2 m-auto w-64 h-xl bg-blue-500 border-2 border-black mb-6">
         <ul>
            <Link to="/artists/arts" onClick={onClick}>
               <span id={id}>[Click to view Art]</span>
            </Link>
            <li>{first_name} {last_name}</li>
            <br/>
            <li>{age}</li>
            <br/>
            <li>{location}</li>
            <br/>
         </ul>
      </div>
   )
}

export default Artist