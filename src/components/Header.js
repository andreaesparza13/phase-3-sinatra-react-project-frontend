import React from "react";

const Header = () => {
  return (
    <div className="header flex gap-4 mr-4">
      <div className="mr-auto w-32 h-16 bg-stone-500 text-center pt-4 rounded-br-md">
        <span className="font-bold text-lg">Art Exhibits</span>
      </div>
      <div class="navButton">
        All Exhibits
      </div>
      <div class="navButton">
        All Artists
      </div>
    </div>
  );
};

export default Header;
