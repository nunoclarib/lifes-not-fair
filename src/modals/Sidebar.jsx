import React, { useState } from "react";
import cross from "../icons/exit.png";
import { useDispatch } from "react-redux";
import { select, unselect } from "../redux/actions/index";

function Sidebar({ children, selected }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    //console.log("hey");
    //console.log(selected);
    if (selected === true) {
      dispatch(unselect(true));
    } else {
      dispatch(select(false));
    }
  };

  return (
    <div>
      <div className={selected ? "sidebar show-sidebar" : "sidebar"}>
        {selected && (
          <div className="main-content">
            {/* <button className="close-button" onClick={handleClick}>
            Close
          </button> */}
            <img src={cross} className="close-button block" onClick={handleClick} />
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
