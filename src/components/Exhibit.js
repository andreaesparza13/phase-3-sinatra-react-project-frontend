import React from "react";
import {Link} from "react-router-dom";
const Exhibit = ({exhibit, onClick}) => {
    return (
        <div className="relative w-64 h-64 bg-indigo-500 ml-2 mr-2 mt-6 mb-6 gap-12" key={exhibit.id} >
                  <ul className="m-6">
                     <li>{"Exhibit name: " + exhibit.name}</li>
                     <li>{"Location: " + exhibit.location}</li>
                     <li>{"Theme: " + exhibit.theme}</li>
                  </ul>
                  <div className="absolute left-4 bottom-2">
                     <Link to="/arts">
                        <button onClick={onClick} id={exhibit.id}>[Open exhibit arts]</button>
                     </Link>
                  </div>
               </div>
    )
}

export default Exhibit