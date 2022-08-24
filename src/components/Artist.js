import React from 'react'

const Artist = ({ first_name, last_name, age, location }) => {
   return (
      <div className="p-2 m-auto w-64 h-xl bg-blue-500 border-2 border-black mb-6">
         <ul>
            <span>[Click to view Art]</span>
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