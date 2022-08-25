import React from "react";
import {Link} from "react-router-dom";

const Exhibit = ({exhibit, onClick}) => {
    return (
      <div className="m-6 p-6 basis-1/5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={exhibit.id}>
         <ul className="m-6">
            <li ><h1 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{exhibit.theme}</h1></li>
            <li ><h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">at {exhibit.name}</h5></li>
            <li><p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{exhibit.location}</p></li>
         </ul>
         <div className="ml-5 text-blue-600">
            <Link to="/arts">
               <button className="hover:underline text-align-center" onClick={onClick} id={exhibit.id}>Explore Exhibit</button>
            </Link>
         </div>
      </div>
    )
}

export default Exhibit
