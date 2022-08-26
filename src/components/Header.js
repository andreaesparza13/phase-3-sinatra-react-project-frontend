import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  let title = "";
  switch (location.pathname) {
    case "/":
      title = "Exhibits";
      break;
    case "/art":
      title = "Arts";
      break;
    case "/arts":
      title = "Exhibit art";
      break;
    case "/artists":
      title = "Artists";
      break;
    case "/artists/arts":
      title = "Artist art";
      break;
    case "/add-artist":
      title = "Add Artist";
      break;
    case "/add-art":
      title = "Add Art";
      break;
    case "/artists/:id":
      title = "Artist";
      break;
    case "/artists/:id/arts":
      title = "Artist works";
      break;
    default:
      title = "Home";
      break;
  }
  return (
    <div className="header flex gap-4 w-screen">
      <div className="mr-auto ml-2 mt-2 w-32 h-16 bg-gradient-to-r from-gray-700 to-gray-800 text-center pt-4 rounded rounded-br-md">
        <span className="font-bold text-lg text-white">{title}</span>
      </div>
      <Link to="/">
        <div className="navButton">All Exhibits</div>
      </Link>
      <Link to="/artists">
        <div className="navButton">All Artists</div>
      </Link>
      <Link to="/art">
        <div className="navButton">All Art</div>
      </Link>
      <Link to="/add-artist">
        <div className="navButton">Submit Artist</div>
      </Link>
      <Link to="/add-art">
        <div className="navButton mr-2">Submit Art</div>
      </Link>
    </div>
  );
};

export default Header;
