import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="header flex gap-4 mr-4 w-screen">
      <div className="mr-auto w-32 h-16 bg-stone-500 text-center pt-4 rounded-br-md">
        <span className="font-bold text-lg">Art Exhibits</span>
      </div>
      <Link to="/" >
        <div className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-text-middle">
          All Exhibits  
        </div>
      </Link>
      <Link to="/artists" >
        <div className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-text-middle">
          All Artists  
        </div>
      </Link>
      <Link to="/art" >
        <div className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-text-middle">
          All Art  
        </div>
      </Link>
      <Link to="/add-artist">
      <div className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Artist
      </div>
      </Link>
      <Link to="/add-art">
      <div className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Art
      </div>
      </Link>
    </div>
  );
};

export default Header;
