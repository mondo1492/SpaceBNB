import React from 'react';
import { Link } from 'react-router-dom';
const LeftLowerNav = () => {
  return(
    <nav className="left-lower-nav">
      <button autoFocus>HOMES</button>
      <button>EXPERIENCES</button>
      <button>PLACES</button>
      <button>
        <Link to='/create'>Create Room</Link>
      </button>
    </nav>
  );
};

export default LeftLowerNav;
