import React from "react";
import {Link} from "react-router-dom";

const Header = ({ showAllArtists, showAllArtwork, showAllExhibits }) => {

  return (
    <div className="header flex gap-4 mr-4">
      <div className="mr-auto w-32 h-16 bg-stone-500 text-center pt-4 rounded-br-md">
        <span className="font-bold text-lg">Art Exhibits</span>
      </div>
      <div className="navButton" onClick={showAllExhibits}>
        <Link to="/" >
        All Exhibits
        </Link>
      </div>
      <div className="navButton" onClick={showAllArtists}>
        <Link to='/artists'>
          All Artists
        </Link>
      </div>
      <div className="navButton" onClick={showAllArtwork}>
        <Link to='/art'>
          All Art
        </Link>
      </div>
      <div className="navButton">
        Submit Artist
      </div>
      <div className="navButton">
        Submit Art
      </div>
    </div>
  );
};

export default Header;
