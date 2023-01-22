import React, { useState } from 'react';
import cross from '../icons/exit.png'

function Sidebar({ children, isOpen, handleClick}) {

  return (
    <div>
      <button onClick={handleClick} style={{position:'absolute',zIndex:'10000'
          }}>Open Sidebar</button>
      
        <div className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}
    >
        {isOpen && (<div className='main-content'>
          {/* <button className="close-button" onClick={handleClick}>
            Close
          </button> */}
          <img src={cross} className="close-button" onClick={handleClick} />
          {children}
          </div>)}
        </div>
      
    </div>
  );
}

export default Sidebar;
