import React, { useState } from "react";

// icons
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";


const FavCardButton = ({ movieID }) => {
    const [isSelected , setIsSelected] = useState();
    
    const _handleClick = (event) => {
      event.preventDefault();
      let movieID = event.target.name;
      setIsSelected( ! isSelected )
      
      if ( parseInt(movieID) ){}
      else if ( parseInt(event.target.parentNode.name) ) movieID = event.target.parentNode.name;
      else if ( isNaN(parseInt(event.target.parentNode.classList[0])) ) movieID = event.target.parentNode.parentNode.name;
      else movieID = event.target.parentNode.classList[0]

      console.log("movieID",movieID)

  };

  return (
    <>
      <button
        type="button"
        onClick={_handleClick}
        className="btn badge fs-5 text-warning position-absolute top-0 end-0"
        name={movieID}
      >
        <IconContext.Provider value={{ className: `star-${movieID}` }}>
          {isSelected ? <BsFillStarFill /> : <BsStar />}
        </IconContext.Provider>
      </button>
    </>
  );
};

export default FavCardButton;
